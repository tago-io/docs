import "source-map-support/register";
import * as path from "node:path";
import * as cdk from "aws-cdk-lib";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import type { Construct } from "constructs";

// ACM certificate ARNs are provided via environment variables.
// Set these in your CI (GitHub Actions) as secrets and export to env:
// - DOCS_CERT_ARN: ACM cert ARN for docs.tago.io (CN docs.tago.io)
// - REDIRECTS_CERT_ARN: ACM cert ARN for help.tago.io (CN) with SAN changelog.tago.io
// Note: CloudFront requires certificates in us-east-1.
const DOCS_CERT_ARN = process.env.DOCS_CERT_ARN ?? "";
const REDIRECTS_CERT_ARN = process.env.REDIRECTS_CERT_ARN ?? "";
if (!DOCS_CERT_ARN || !REDIRECTS_CERT_ARN) {
  throw new Error(
    "Missing certificate ARNs. Provide DOCS_CERT_ARN and REDIRECTS_CERT_ARN environment variables (ACM in us-east-1).",
  );
}

class TagoDocsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // S3 bucket for static website hosting
    const siteBucket = new s3.Bucket(this, "TagoDocsSiteBucket", {
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "404.html",
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // CloudFront Origin Access Identity
    const originAccessIdentity = new cloudfront.OriginAccessIdentity(
      this,
      "TagoDocsOAI",
      {
        comment: "OAI for Tago Docs",
      },
    );

    // Use manually-provisioned ACM certificates (in us-east-1)
    const docsCertificate = certificatemanager.Certificate.fromCertificateArn(
      this,
      "DocsCertificate",
      DOCS_CERT_ARN,
    );

    // Grant CloudFront access to the bucket
    siteBucket.addToResourcePolicy(
      new cdk.aws_iam.PolicyStatement({
        actions: ["s3:GetObject"],
        resources: [siteBucket.arnForObjects("*")],
        principals: [
          new cdk.aws_iam.CanonicalUserPrincipal(
            originAccessIdentity.cloudFrontOriginAccessIdentityS3CanonicalUserId,
          ),
        ],
      }),
    );

    // No redirect function on docs distribution. Redirect logic lives in a
    // separate distribution dedicated to help/changelog domains.

    // CloudFront distribution (docs.tago.io only)
    const distribution = new cloudfront.Distribution(
      this,
      "TagoDocsDistribution",
      {
        certificate: docsCertificate,
        domainNames: ["docs.tago.io"],
        defaultBehavior: {
          origin: new origins.S3Origin(siteBucket, {
            originAccessIdentity: originAccessIdentity,
          }),
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
        defaultRootObject: "index.html",
        errorResponses: [
          {
            httpStatus: 404,
            responseHttpStatus: 404,
            responsePagePath: "/404.html",
          },
        ],
      },
    );

    // Deploy the built Docusaurus site to S3
    new s3deploy.BucketDeployment(this, "TagoDocsDeployment", {
      sources: [s3deploy.Source.asset(path.join(__dirname, "../build"))],
      destinationBucket: siteBucket,
      distribution: distribution,
      distributionPaths: ["/*"],
    });

    // Output the CloudFront URL
    new cdk.CfnOutput(this, "DocsCloudFrontURL", {
      value: `https://${distribution.distributionDomainName}`,
      description: "CloudFront Distribution URL for docs.tago.io",
    });

    // ==============================
    // help.tago.io Redirect Frontend
    // ==============================

    // Minimal S3 bucket to satisfy origin requirement (no public access)
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
      new cdk.aws_iam.PolicyStatement({
        actions: ["s3:GetObject"],
        resources: [helpBucket.arnForObjects("*")],
        principals: [
          new cdk.aws_iam.CanonicalUserPrincipal(
            helpOai.cloudFrontOriginAccessIdentityS3CanonicalUserId,
          ),
        ],
      }),
    );

    // Certificate for redirects distribution (help.tago.io + changelog.tago.io)
    const redirectsCertificate =
      certificatemanager.Certificate.fromCertificateArn(
        this,
        "RedirectsCertificate",
        REDIRECTS_CERT_ARN,
      );

    // CloudFront function dedicated to help.tago.io redirects
    const helpRedirectFunction = new cloudfront.Function(
      this,
      "HelpRedirectFunction",
      {
        code: cloudfront.FunctionCode.fromFile({
          filePath: path.join(__dirname, "redirect-function.js"),
        }),
        runtime: cloudfront.FunctionRuntime.JS_2_0,
      },
    );

    // CloudFront distribution (help.tago.io + changelog.tago.io). Used solely for redirects.
    const helpDistribution = new cloudfront.Distribution(
      this,
      "RedirectsDistribution",
      {
        certificate: redirectsCertificate,
        domainNames: ["help.tago.io", "changelog.tago.io"],
        defaultBehavior: {
          origin: new origins.S3Origin(helpBucket, {
            originAccessIdentity: helpOai,
          }),
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          functionAssociations: [
            {
              function: helpRedirectFunction,
              eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
            },
          ],
        },
        defaultRootObject: "index.html",
      },
    );

    new cdk.CfnOutput(this, "RedirectsCloudFrontURL", {
      value: `https://${helpDistribution.distributionDomainName}`,
      description:
        "CloudFront Distribution URL for help.tago.io + changelog.tago.io",
    });
  }
}

const app = new cdk.App();
new TagoDocsStack(app, "TagoDocsStack", {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */
  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to: */
  // env: { account: '123456789012', region: 'us-east-1' },
  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});

import * as certificatemanager from "aws-cdk-lib/aws-certificatemanager";
