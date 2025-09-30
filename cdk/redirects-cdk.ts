import "source-map-support/register";
import * as path from "node:path";
import * as cdk from "aws-cdk-lib";
import * as certificatemanager from "aws-cdk-lib/aws-certificatemanager";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as s3 from "aws-cdk-lib/aws-s3";
import type { Construct } from "constructs";

const REDIRECTS_CERT_ARN = process.env.REDIRECTS_CERT_ARN ?? "";

if (!REDIRECTS_CERT_ARN) {
  throw new Error(
    "Missing certificate ARN. Provide REDIRECTS_CERT_ARN environment variable (ACM in us-east-1).",
  );
}

class RedirectsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helpBucket = new s3.Bucket(this, "HelpPlaceholderBucket", {
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    const helpOai = new cloudfront.OriginAccessIdentity(this, "HelpOAI", {
      comment: "OAI for help.tago.io redirect distribution",
    });

    helpBucket.addToResourcePolicy(
      new iam.PolicyStatement({
        actions: ["s3:GetObject"],
        resources: [helpBucket.arnForObjects("*")],
        principals: [
          new iam.CanonicalUserPrincipal(
            helpOai.cloudFrontOriginAccessIdentityS3CanonicalUserId,
          ),
        ],
      }),
    );

    const redirectsCertificate =
      certificatemanager.Certificate.fromCertificateArn(
        this,
        "RedirectsCertificate",
        REDIRECTS_CERT_ARN,
      );

    const helpRedirectLambda = new lambda.Function(
      this,
      "HelpRedirectLambdaEdge",
      {
        runtime: lambda.Runtime.NODEJS_22_X,
        handler: "index.handler",
        code: lambda.Code.fromAsset(path.join(__dirname, "lambda")),
        memorySize: 128,
        timeout: cdk.Duration.seconds(5),
        description: "Lambda@Edge function for help.tago.io redirects",
      },
    );

    const helpRedirectLambdaVersion = new lambda.Version(
      this,
      "HelpRedirectLambdaEdgeVersion",
      {
        lambda: helpRedirectLambda,
        removalPolicy: cdk.RemovalPolicy.RETAIN,
      },
    );

    const helpDistribution = new cloudfront.Distribution(
      this,
      "RedirectsDistribution",
      {
        certificate: redirectsCertificate,
        domainNames: [
          "help.tago.io",
          "changelog.tago.io",
          "api.docs.tago.io",
        ],
        httpVersion: cloudfront.HttpVersion.HTTP2_AND_3,
        defaultBehavior: {
          origin: origins.S3BucketOrigin.withOriginAccessIdentity(helpBucket, {
            originAccessIdentity: helpOai,
          }),
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          edgeLambdas: [
            {
              functionVersion: helpRedirectLambdaVersion,
              eventType: cloudfront.LambdaEdgeEventType.VIEWER_REQUEST,
            },
          ],
        },
        defaultRootObject: "index.html",
      },
    );

    new cdk.CfnOutput(this, "RedirectsCloudFrontURL", {
      value: `https://${helpDistribution.distributionDomainName}`,
      description:
        "CloudFront Distribution URL for help.tago.io + changelog.tago.io + api.docs.tago.io",
    });
  }
}

const app = new cdk.App();
new RedirectsStack(app, "TagoIO-Redirects-Stack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: "us-east-1",
  },
});
