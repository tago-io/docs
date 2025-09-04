---
title: "Integrations"
description: "Configure and understand project integrations with third-party services."
tags: ["tagodeploy"]
slug: /tagodeploy/project/configuration/integrations
---

Use Integrations to connect your TagoDeploy instance to third‑party messaging
providers for email and SMS. These settings control how the platform sends 2FA
codes, password resets, invitations, and other system notifications from your
single‑tenant environment.

The Integrations page is available to TagoDeploy administrators only and applies
to the entire instance (all projects and TagoRUN portals that use instance
defaults).

## What you can configure

- Email delivery
- SMS delivery

Each channel is optional and can be enabled independently. When disabled, the
platform does not send messages through that channel.

---

## Email settings

Email is used for 2FA, password recovery, user invitations, and any workflow in
your apps that sends email via the platform.

Fields

- **Enable emails:** Master toggle for the email channel.
- **From address:** The email address shown in the From field of outgoing
  messages. Use a verified sender for your provider.
- **Provider:** Select the email vendor. Current options include SendGrid.
  Contact TagoIO Support to enable additional providers for your instance.
- **API key:** Secret credential for the selected provider. Stored encrypted.
  Leave blank to keep the current key when updating other fields.

#### Provider notes: SendGrid

- Create an API key with Mail Send permissions in your SendGrid account.
- Verify the From address or set up a domain authenticated sender to improve
  deliverability.
- Rate limits and classification (marketing vs. transactional) are enforced by
  your SendGrid plan.

Common errors and fixes

- **401/403 from provider:** API key lacks permissions or is invalid. Create a
  new key and update the setting.
- **Emails not delivered:** From address not verified or domain authentication
  missing. Verify sender/domain in the provider.
- **High spam rate:** Use a dedicated IP or authenticated domain; ensure content
  is transactional.

---

## SMS settings

SMS is used for 2FA and platform notifications that require text messages.

Fields

- **Enable SMS:** Master toggle for the SMS channel.
- **From:** The sender identifier used for SMS:
  - In the US/CA, use a 10DLC long code or a toll‑free number that is
    registered/verified with your provider.
  - In other countries, an alphanumeric sender ID may be supported
    (provider‑specific).
- **Provider:** Select your SMS vendor. Current UI supports Twilio. Others may
  be enabled per instance.
- **Account SID:** Your provider account identifier (Twilio: Account SID).
- **Authorization token:** The secret token for API access (Twilio: Auth Token).
  Stored encrypted.

#### Provider notes: Twilio

- Make sure the From number is purchased in Twilio and enabled for SMS.
- For US/CA, complete 10DLC or toll‑free verification to avoid filtering.
- Check country permissions in Twilio’s Messaging Geographic Permissions.

Common errors and fixes

- **400 from provider:** From number not SMS‑enabled or not allowed for the
  destination country. Enable SMS or buy a supported number/Sender ID.
- **Message filtering or no delivery:** Registration/verification incomplete
  (10DLC/Toll‑free). Complete carrier registration.
- **Rate limiting:** Add messaging services with queueing or request higher
  throughput from provider.

---

## Security and operations

- **Secrets management:** API keys and tokens are encrypted at rest. Rotating
  keys requires admin access.
- **Key rotation:** Update the key in the Integrations page. Leaving the API
  key/token field empty keeps the existing secret.
- **Audit:** TagoDeploy doesn't record SMS/Email activities. Use your email/SMS
  provider's audit logs to track activities.

---

## Troubleshooting checklist

- **Provider account limits:** Check per‑minute/per‑day caps. Increase limits if
  you see 429/limit errors.
- **Regional restrictions:** Some countries require pre‑registration for SMS
  sender IDs or templates.

---

## Requirements and recommendations

- Use dedicated sender identities per environment (e.g., noreply-dev@, dev
  numbers) to avoid cross‑environment confusion.
- Avoid personal mailboxes as From addresses. Use a domain the organization
  controls.
- For production SMS in the US/CA, complete 10DLC or toll‑free verification
  before go‑live to prevent blocking.

---

For help enabling additional providers or configuring private connectivity to
providers, contact the TagoIO team at contact@tago.io.
