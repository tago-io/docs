---
title: "Integrations"
description: "Connect email and SMS providers so your project can send outbound notifications."
keywords: [tagodeploy, iot, integrations, email, sms, sendgrid, twilio]
tags: ["tagodeploy"]
slug: /tagodeploy/project/configuration/integrations
---

# Integrations

Use Integrations to connect your project to email and SMS providers for outbound
notifications. These settings control how the platform sends 2FA codes, password
resets, invitations, and other system messages.

The Integrations page lives in the TagoIO & API sidebar under **Integrations**.
The page header reads "Integrations" and the card is titled "Integrations
Management", with the subtitle "Connect email and SMS providers for outbound
notifications." A **Save** action stores your changes.

## What you can configure

- Email delivery
- SMS delivery

Each channel is optional and can be enabled independently. When a channel is
disabled, the platform does not send messages through it.

## Email settings

Email is used for 2FA, password recovery, user invitations, and any workflow in
your apps that sends email through the platform.

Fields:

- **Enable emails**: master toggle for the email channel. Its description reads
  "Allow the system to send transactional and notification emails."
- **From address**: the address shown in the From field of outgoing messages.
  Use a verified sender for your provider.
- **Provider**: the email vendor. The default is SendGrid. Contact TagoIO support
  to enable additional providers for your instance.
- **API key**: the secret credential for the selected provider, stored encrypted.

### Provider notes: SendGrid

- Create an API key with Mail Send permissions in your SendGrid account.
- Verify the From address, or set up a domain authenticated sender, to improve
  deliverability.
- Rate limits and message classification are enforced by your SendGrid plan.

### Common errors and fixes

- **401 or 403 from provider**: the API key is invalid or lacks permissions.
  Create a new key and update the setting.
- **Emails not delivered**: the From address is not verified or domain
  authentication is missing. Verify the sender or domain in the provider.
- **High spam rate**: use a dedicated IP or an authenticated domain, and keep
  content transactional.

## SMS settings

SMS is used for 2FA and platform notifications that require text messages.

Fields:

- **Enable SMS**: master toggle for the SMS channel. Its description reads "Allow
  the system to send SMS notifications and alerts."
- **From**: the sender identifier used for SMS.
  - In the US and Canada, use a 10DLC long code or a toll-free number that is
    registered and verified with your provider.
  - In other countries, an alphanumeric sender ID may be supported, depending on
    the provider.
- **Provider**: the SMS vendor. The default is Twilio. Others may be enabled per
  instance.
- **Account SID**: your provider account identifier (Twilio: Account SID).
- **Authorization token**: the secret token for API access (Twilio: Auth Token),
  stored encrypted.

### Provider notes: Twilio

- Make sure the From number is purchased in Twilio and enabled for SMS.
- For the US and Canada, complete 10DLC or toll-free verification to avoid
  filtering.
- Check country permissions in Twilio's Messaging Geographic Permissions.

### Common errors and fixes

- **400 from provider**: the From number is not SMS-enabled or is not allowed for
  the destination country. Enable SMS or buy a supported number or sender ID.
- **Message filtering or no delivery**: carrier registration is incomplete
  (10DLC or toll-free). Complete the registration.
- **Rate limiting**: add a messaging service with queueing, or request higher
  throughput from the provider.

## Security and operations

- **Secrets management**: API keys and tokens are encrypted at rest. Rotating
  keys requires admin access.
- **Key rotation**: update the key on the Integrations page.
- **Audit**: TagoDeploy does not record email or SMS activity. Use your provider's
  audit logs to track delivery.

## Recommendations

- Use dedicated sender identities per environment to avoid cross-environment
  confusion.
- Avoid personal mailboxes as From addresses. Use a domain your organization
  controls.
- For production SMS in the US and Canada, complete 10DLC or toll-free
  verification before go-live to prevent blocking.

For help enabling additional providers or configuring private connectivity to
providers, contact the TagoIO team at contact@tago.io.
