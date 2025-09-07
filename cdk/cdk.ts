import "source-map-support/register";
import * as path from "node:path";
import * as cdk from "aws-cdk-lib";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import type { Construct } from "constructs";

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

    // Certificate for custom domains (docs.tago.io and changelog.tago.io)
    const certificate = new certificatemanager.Certificate(
      this,
      "DocsCertificate",
      {
        domainName: "docs.tago.io",
        subjectAlternativeNames: ["changelog.tago.io"],
        validation: certificatemanager.CertificateValidation.fromDns(),
      },
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

    // CloudFront function for URL redirects
    const redirectFunction = new cloudfront.Function(
      this,
      "TagoDocsRedirectFunction",
      {
        code: cloudfront.FunctionCode.fromFile({
          filePath: path.join(__dirname, "redirect-function.js"),
        }),
        runtime: cloudfront.FunctionRuntime.JS_2_0,
      },
    );

    // CloudFront distribution
    const distribution = new cloudfront.Distribution(
      this,
      "TagoDocsDistribution",
      {
        certificate: certificate,
        domainNames: ["docs.tago.io", "changelog.tago.io"],
        defaultBehavior: {
          origin: new origins.S3Origin(siteBucket, {
            originAccessIdentity: originAccessIdentity,
          }),
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          functionAssociations: [
            {
              function: redirectFunction,
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
    new cdk.CfnOutput(this, "CloudFrontURL", {
      value: `https://${distribution.distributionDomainName}`,
      description: "CloudFront Distribution URL",
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
