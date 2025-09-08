import "source-map-support/register";
import * as fs from "node:fs";
import * as path from "node:path";
import * as cdk from "aws-cdk-lib";
import * as certificatemanager from "aws-cdk-lib/aws-certificatemanager";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as iam from "aws-cdk-lib/aws-iam";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import type { Construct } from "constructs";

const DOCS_CERT_ARN = process.env.DOCS_CERT_ARN ?? "";

if (!DOCS_CERT_ARN) {
  throw new Error(
    "Missing certificate ARN. Provide DOCS_CERT_ARN environment variable (ACM in us-east-1).",
  );
}

class DocsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const siteBucket = new s3.Bucket(this, "TagoDocsSiteBucket", {
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "404.html",
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    const originAccessIdentity = new cloudfront.OriginAccessIdentity(
      this,
      "TagoDocsOAI",
      {
        comment: "OAI for Tago Docs",
      },
    );

    const docsCertificate = certificatemanager.Certificate.fromCertificateArn(
      this,
      "DocsCertificate",
      DOCS_CERT_ARN,
    );

    // CloudFront Function for Docusaurus routing
    const routingFunction = new cloudfront.Function(
      this,
      "DocusaurusRoutingFunction",
      {
        functionName: "docusaurus-routing",
        code: cloudfront.FunctionCode.fromFile({
          filePath: path.join(__dirname, "docusaurus-routing-function.js"),
        }),
        comment: "Rewrites URLs for Docusaurus SPA routing",
      },
    );

    siteBucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: ["s3:GetObject"],
        resources: [siteBucket.arnForObjects("*")],
        principals: [
          new iam.CanonicalUserPrincipal(
            originAccessIdentity.cloudFrontOriginAccessIdentityS3CanonicalUserId,
          ),
        ],
      }),
    );

    const distribution = new cloudfront.Distribution(
      this,
      "TagoDocsDistribution",
      {
        certificate: docsCertificate,
        domainNames: ["docs.tago.io"],
        httpVersion: cloudfront.HttpVersion.HTTP2_AND_3,
        defaultBehavior: {
          origin: origins.S3BucketOrigin.withOriginAccessIdentity(siteBucket, {
            originAccessIdentity: originAccessIdentity,
          }),
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          functionAssociations: [
            {
              function: routingFunction,
              eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
            },
          ],
        },
        defaultRootObject: "index.html",
        errorResponses: [
          {
            httpStatus: 404,
            responseHttpStatus: 404,
            responsePagePath: "/404.html",
          },
          {
            httpStatus: 403,
            responseHttpStatus: 404,
            responsePagePath: "/404.html",
          },
        ],
      },
    );

    // Validate build directory exists
    const buildPath = path.join(__dirname, "../build");
    if (!fs.existsSync(buildPath)) {
      throw new Error(
        `Build directory not found at ${buildPath}. Run 'npm run build' first.`,
      );
    }

    new s3deploy.BucketDeployment(this, "TagoDocsDeployment", {
      sources: [s3deploy.Source.asset(buildPath)],
      destinationBucket: siteBucket,
      distribution: distribution,
      distributionPaths: ["/*"],
      memoryLimit: 3008,
      ephemeralStorageSize: cdk.Size.mebibytes(2048),
      retainOnDelete: false,
      prune: true,
    });

    new cdk.CfnOutput(this, "DocsCloudFrontURL", {
      value: `https://${distribution.distributionDomainName}`,
      description: "CloudFront Distribution URL for docs.tago.io",
    });
  }
}

const app = new cdk.App();
new DocsStack(app, "TagoIO-Docs-Stack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: "us-east-1",
  },
});
