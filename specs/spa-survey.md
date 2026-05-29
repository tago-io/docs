# SPA Survey — TagoDeploy

Ground-truth capture of the running React SPA, used by the docs-refresh Phase 2 agents.

- App: `http://web.docs-panel-forms.orb.local/`
- Logged in via internal admin `http://api.docs-panel-forms.orb.local:8092/accounts` -> "Sign in as".
- Survey project: **Fully Loaded Project**, id `bb0000000000000000000004`, region us-east-1.
- Resource ids: docker `dd000000000000000000001c`, mqtt broker `dd000000000000000000001b`,
  webservices `dd0000000000000000000010`-`dd000000000000000000001a` (AWS IoT, Chirpstack,
  Everynet, Generic HTTPS, Loriot, MachineQ, Myriota, Senet, Sigfox, Tektelic, TTN).

## Navigation structure (observed)

Top nav: **Project** | **Apps** | command palette (Cmd+K) | project switcher | account menu.

Project breadcrumb tabs: **Management** | **TagoIO & API** | one entry per webservice/docker/mqtt resource.

Management sidebar: Overview, Collaborators, Deployments, Domains, Logs, Tokens, Bills.

Each page header carries a "Read the docs ->" button (the in-app docs panel).

Resource routes:
- `/projects/{id}/management/{overview|collaborators|deployments|domains|logs|tokens|bills}`
- `/projects/{id}/tago-io/features`
- `/projects/{id}/webservice/{wsId}/overview`
- `/projects/{id}/docker/{dockerId}/overview`
- `/projects/{id}/mqtt/{mqttId}/overview`

---

## /tagodeploy/project/overview

Route: `/projects/{id}/management/overview`. Header: "Project Overview". Subtitle: "Project status,
resource usage, and recent activity at a glance." Has Read-the-docs button.

Content:
- Project card: avatar (FL), name, status badge ("Deploying"), Version (date e.g. 2026-02-25),
  Created (date), Region (us-east-1).
- Domains panel: list of `https://{service}.{id}.tagoio.net` rows (TagoIO API, TagoIO Admin,
  TagoIO SSE, ...), each with Copy URL; "View all 16 domains ->" link to domains page.
- Month-to-Date Spend card: dollar amount, "% vs. last month's pace", daily spend chart, month toggle.
- History section.
- "CPU Utilization - TagoIO" chart: series API / Main Database / In-Memory Database; time ranges
  1h/6h/12h/1d/3d/7d/30d; "No data available" empty state.
- "CPU & Memory Utilization - MQTT" chart: CPU / Memory series; same time ranges.
- Logs section: empty state "No logs yet / Logs from your project will appear here."
- Floating "pending deployment / Review & Deploy" button (deploy queue).

<!-- SECTIONS BELOW FILLED BY SURVEY AGENTS -->

## /tagodeploy/project/accounts

Found in the SPA under TagoIO & API. Route: `/projects/{id}/tago-io/accounts` (sidebar "Accounts & Profiles").
Page header (h1): "Accounts". Card h2: "Account Management". Subtitle: "Browse the accounts in this project
and the profiles each one owns." Has "Read the docs →" button. Primary action: "New Account".
Controls: search box (placeholder "Search accounts..."), "Expand All", "Collapse All".
Empty state: "No accounts" / "No accounts found for this project."
New Account dialog (title "New Account", "Create a new account for your project."): fields "Name"
(placeholder "Full name"), "Email" (placeholder "email@example.com"), "Password" (password), "Company"
(placeholder "Company name"), "Country" (combobox "Select a country"). Buttons: "Cancel", "Confirm".
## /tagodeploy/project/limits

Found in the SPA under TagoIO & API. Route: `/projects/{id}/tago-io/limits` (sidebar "Limits").
Page header (h1): "Limits". Card h2: "Limits". Subtitle: "Configure resource quotas and rate limits for
this profile." Has "Read the docs →" button. Action: "Save".
Selectors: "ACCOUNT" (combobox "Select account"), "PROFILE" (combobox "Select profile"). After a profile
is chosen, a "Search limits..." box and limit groups appear (observed "10 Groups" of limits).
## /tagodeploy/project/domains

Route: `/projects/{id}/management/domains`. Page header (h1): "Domains". Card title (h2): "View & Manage
Domains". Subtitle: "Custom and default domains for your project's services." Has "Read the docs →" button.
Primary action: "New Domain".

Two sections:
- "Custom Domains" (h3): "External domains to use your own branding for project services." Empty state:
  "No custom domains yet" / "Add a custom domain to use your own branding."
- "Default Domains" (h3): "Standard domains automatically assigned to your project for immediate access."
  Table columns (sortable): **URL**, **Application**, **Endpoint**. Rows include TagoIO API/Admin/SSE
  plus one per webservice/docker (Endpoint "API"), and the MQTT broker (`mqtts://...`, Endpoint "API").

New Domain dialog (title "New Domain"): 3-step wizard "Add domain progress" -> **1 Form**, **2 Review**,
**3 Records**. Step 1 fields: "Subdomain" (text, placeholder `e.g. api, portal, iot`), "Domain" (text,
placeholder `e.g. mycompany.com`), "Target" (combobox, default "Select a target service"). Buttons:
"Cancel", "Next".
## /tagodeploy/project/backups

Route: `/projects/{id}/tago-io/backups` (sidebar "Backups" under TagoIO & API). Page header (h1) / card h2:
"Backups". Subtitle: "Snapshots of this project's database, created on a schedule." Has "Read the docs →"
button. Empty state: "No backups yet" / "Backup snapshots will appear here once they are created."
No create/add-backup action observed - backups are created on a schedule (configured via Main Database
"Daily backup schedule" / "Backup retention period"); this page only lists existing snapshots.
## /tagodeploy/project/bills/billing

Route: `/projects/{id}/management/bills`. Page header (h1): "Bills" (also card h2 "Bills"). Subtitle:
"Monthly cost breakdown, charges, and payment status." Has "Read the docs →" button.

Filters: "Filter by app" combobox (default "All apps"); "Period" combobox (default "May 2026", value `2026-05`).

KPI cards: "Month-to-date" ($1,379.03, "-7.3% vs last month"); "Avg / Day" ($47.55, "Based on 29 days");
"Last Month" ($1,487.00, "April 2026").

"Bill Summary" (h3): total amount; rows "Status" (Current cycle), "Payment" (—), "Due" (Jun 5, 2026,
labeled "Estimated").

"Cost History" (h3, "Breakdown by service"): toggle switches per service, all checked: Network, Files,
Platform License, Infrastructure, Main DB, Queue, Analysis, In-Memory DB, API, Apps. Stacked chart.

"Daily Spend" (h3, "May 2026"): range toggle 7d / 14d / MTD. "By Service" (h3, "Top 5 services by cost")
bar chart.

"Charges by Service" (h3): list of service rows with amounts (Apps, Platform License, API, Network, Main DB,
Infrastructure, In-Memory DB, Analysis, Files, Queue) and a "Total" row ($2,083.64).
Terminology note: service/cost categories are Network, Files, Platform License, Infrastructure, Main DB,
Queue, Analysis, In-Memory DB, API, Apps.
## /tagodeploy/project/configuration/integrations

Found in the SPA under TagoIO & API. Route: `/projects/{id}/tago-io/integrations` (sidebar "Integrations").
Page header (h1): "Integrations". Card h2: "Integrations Management". Subtitle: "Connect email and SMS
providers for outbound notifications." Has "Read the docs →" button. Action: "Save".
NOTE: this is email/SMS provider config, NOT open-connectors.
- "Email Settings": toggle "Enable emails" ("Allow the system to send transactional and notification
  emails."); fields FROM ADDRESS (text), PROVIDER (combobox, default "SendGrid", value `sendgrid`),
  API KEY (text, placeholder "Enter API key").
- "SMS Settings": toggle "Enable SMS" ("Allow the system to send SMS notifications and alerts."); fields
  FROM (text, placeholder "Phone number"), PROVIDER (combobox, default "Twilio", value `twilio`),
  ACCOUNT SID (text, placeholder "Enter Account SID"), AUTHORIZATION TOKEN (text, placeholder "Enter Auth Token").
## /tagodeploy/project/analysis-runtime

Route: `/projects/{id}/tago-io/analysis-runtime` (sidebar "Analysis Runtime"). Page header (h1):
"Analysis Runtime". Card h2: "Analysis Runtime". Subtitle: "Set memory for the Node.js and Python scripts
that run your analyses." Has "Read the docs →" button. Action: "Save".
Two config groups:
- "Node.js Runtime" ("Memory allocation for Node.js analysis scripts."): field "Memory (MB)" (number, default 512).
- "Python Runtime" ("Memory allocation for Python analysis scripts."): field "Memory (MB)" (number, default 512).
"Monitoring" section: range toggle 1h/6h/12h/1d/3d/7d/30d; charts "Invocations" (COUNT), "Duration" (MS);
empty state "No data available".

## /tagodeploy/project/api

Found in the SPA under TagoIO & API. Route: `/projects/{id}/tago-io/api` (sidebar group "SERVICES" -> "API").
Page header (h1): "API". Card h2: "API Service". Subtitle: "Set the machine size and autoscaling for
incoming API requests." Has "Read the docs →" button. Action: "Save".
"Instance settings" ("Configure machine type, scaling, and cooldown parameters."):
- "Machine" (combobox, default "1 vCPU / 2GB RAM", value `1vcpu_2gb`).
- "Minimum instances" (combobox/number, default 1).
- "Maximum instances" (combobox/number, default 1).
- "Scale on CPU utilization" (number, default 60).
- "Cooldown for scaling up" (number, default 200).
- "Cooldown for scaling down" (number, default 300).
"Monitoring": range toggle 1h/6h/12h/1d/3d/7d/30d; charts "CPU Utilization" (%), "Memory Utilization" (%);
empty "No data available".

Sidebar nav for TagoIO & API: top group Features, Limits, Accounts & Profiles, Integrations, Backups,
System; group "SERVICES": API, Main Database, In-Memory Database, Analysis Runtime.

## /tagodeploy/project/main-database

Route: `/projects/{id}/tago-io/main-db` (sidebar "Main Database"). Page header (h1): "Main Database".
Card h2: "Main Database". Subtitle: "Configure your project's primary database." Has "Read the docs →"
button. Action: "Save".
"Database settings" section ("Configure machine type, read replicas, and backup parameters."):
- "Machine" (combobox, default "2 vCPU / 4GB RAM", value `2vcpu_4gb`).
- "Additional reader instances" (combobox, default 0).
- "Backup retention period (days)" (number input, default 7).
- "Daily backup schedule" (time input, default 04:30, labeled UTC).
"Monitoring": range toggle 1h/6h/12h/1d/3d/7d/30d; charts "CPU Utilization" (%), "Freeable Memory" (BYTES),
"Database Connections" (COUNT), "Read IOPS", "Write IOPS", "Network Throughput" (B/S); empty "No data available".

## /tagodeploy/project/in-memory-database

Route: `/projects/{id}/tago-io/in-memory-db` (sidebar "In-Memory Database"). Page header (h1):
"In-Memory Database". Card h2: "In-Memory Database". Subtitle: "Set the cache machine size and read
replicas." Has "Read the docs →" button. Action: "Save".
"Cache settings" section ("Configure machine type and read replicas."):
- "Machine" (combobox, default "2 vCPU / 1GB RAM", value `2vcpu_1gb`).
- "Additional reader replicas" (combobox, default 0).
"Monitoring": range toggle 1h/6h/12h/1d/3d/7d/30d; charts "CPU Utilization" (%), "Freeable Memory" (BYTES),
"Cache Hits" (COUNT), "Network Inbound" (B/S), "Network Outbound" (B/S); empty "No data available".
## /tagodeploy/project/management/collaborators

Route: `/projects/{id}/management/collaborators` (query `?search=&page=1`). Page header (h1): "Collaborators".
Card title (h2): "Edit Project Collaborators". Subtitle: "People who can view and change this project's
resources." Has "Read the docs →" button. Primary action button: "Invite".
Empty state: "No collaborators yet" / "Invite team members to collaborate on this project."

Invite dialog (title "Invite Collaborator", subtitle "Add a team member to this project"):
- Field "Email address" (text input, placeholder `user@example.com`).
- Field "Role" (combobox, default "Select a role"); options: **Admin**, **Contractor**.
- Buttons: "Cancel", "Send Invite".
## /tagodeploy/project/management/tokens

Route: `/projects/{id}/management/tokens`. Page header (h1): "Tokens". Card title (h2): "Project API Tokens".
Subtitle: "Grant scripts and services programmatic access to this project." Has "Read the docs →" button.
Primary action button: "New Token".
Empty state: "No tokens yet" / "Create an API token to enable programmatic access to this project."

New Token dialog (title "New Token"): no input fields. Body text: "This token will have full access to the
project and can be used with the API." Buttons: "Cancel", "Create". (Token presumably revealed after Create.)
## /tagodeploy/project/deployments/history

Route: `/projects/{id}/management/deployments`. Page header (h1): "Deployments". Card title (h2):
"Manage Deployments". Subtitle: "Complete history of every deployment in this project." Has
"Read the docs →" button.
Controls: search box (placeholder "Search a deployment..."); status combobox (default "All"); "Select Date
Range" button.
List section titled "History" (with a refresh icon button). Table columns not rendered (empty).
Empty state: "No deployments yet" / "Deployment history will appear here once deployments are made."

## /tagodeploy/project/deployments/logs

Route: `/projects/{id}/management/logs`. Page header (h1): "Logs". Card title (h2): "View Logs". Subtitle:
"Runtime output from services running in this project." Has "Read the docs →" button.
Controls: search box (placeholder "Search logs..."); "Type" filter button; "Date" filter button; "Refresh"
button; "Live" toggle button.
Empty state: "No logs yet" / "Logs from your project will appear here."
## /tagodeploy/project/system/version

Found on the System page. Route: `/projects/{id}/tago-io/system` (sidebar "System"). Page header (h1):
"System". This page hosts two sections: Version Timeline and Open Connectors.
Version Timeline card h2: "Version Timeline". Subtitle: "Pick the platform version this project runs."
Has "Read the docs →" button. Action: "Refresh".
- "Newer Versions" (count badge, e.g. 2): rows by date, e.g. 2026-05-25 tagged "Latest" with action
  "Update"; 2026-04-21 action "Update".
- "Current Version": 2026-02-25 tagged "Current".
- "Older Versions" (count, e.g. 5): rows e.g. 2025-12-18, 2025-11-25, 2025-11-17, 2025-09-24, 2025-08-18,
  each with action "Rollback".
Terminology: actions are Update (newer), Current, Rollback (older); tags "Latest"/"Current".
## /tagodeploy/project/features/editing-features

Route: `/projects/{id}/tago-io/features` (the "TagoIO & API" breadcrumb tab lands here; sidebar "Features";
URL gets `?view=simplified` appended). Page header (h1): "Features".
NOTE: on the survey project the page `<main>` rendered EMPTY (no field content) across reloads, so the
feature-toggle controls could not be captured here. The `?view=simplified` query suggests a
simplified/advanced view switch exists. The sidebar confirms this is the entry point of the TagoIO & API
section. STATUS: page reachable, but feature-toggle UI did not render for this seed (likely empty feature
set or load issue).
## /tagodeploy/project/system/open-connectors

Found on the System page. Route: `/projects/{id}/tago-io/system` (sidebar "System"), second section below
Version Timeline. Section title "Open Connectors". Body: "External connectors routing data into your
TagoIO instance. Learn more about open connectors." (the "Learn more about open connectors" is a link).
Empty state: "No connectors synced yet". Action: "Sync connectors".
This is the open-connectors area (no separate `/configuration/integrations` route for it).
## /tagodeploy/project/mqtt (overview)

Route: `/projects/{id}/mqtt/{mqttId}/overview`. Page header (h1): "Overview". Card h2: "Overview".
Subtitle: "Broker name, connection URL, and service controls." Has "Read the docs →" button. Action:
"Save" (disabled until changes).
MQTT sub-nav (sidebar): Overview, Instances, Settings, Clients, Groups, Groups Rules, Connections,
Pipelines, Certificates. (No ACL-permissions, Credentials, or Topic-mappings sub-pages exist.)
Sections:
- "Service Information" ("Name, URL, and product details for this service."): fields "Display Name"
  (text, value "My MQTT Broker"), "Addon" (text, value "MQTT Broker"), "Service URL" (read-only,
  `https://{mqttId}.{projectId}.tagoio.net`, with copy button).
- "Danger Zone" (collapsible, "Irreversible actions for this service").
## /tagodeploy/project/mqtt/certificates

Route: `/projects/{id}/mqtt/{mqttId}/certificates`. Page header (h1) / card h2: "Certificates". Subtitle:
"Provide TLS certificates to encrypt broker traffic and verify clients." Has "Read the docs →" button.
Action: "Save" (disabled until changes). Form (no dialog):
- Toggle "Enable Custom Certificate" ("Enable custom certificate") - on by default in this seed.
- Toggle "Enable MTLS" ("Enable mtls (require custom certificate)").
- Textareas: "CA Certificate", "Server Certificate", "Server Key" (each with a copy/expand button).
## /tagodeploy/project/mqtt/clients

Route: `/projects/{id}/mqtt/{mqttId}/clients` (query `?search=&page=1`). Page header (h1): "Clients".
Card h2: "Clients". Subtitle: "Credentials that devices use to authenticate with the broker." Has
"Read the docs →" button. Primary action: "New Client". Search box (placeholder "Search clients...").
Table columns: **Client Name** (sortable), **Authentication**, **Actions** (per-row "Open menu").
Authentication values seen: "Certificate", "Credentials". Footer: "Showing 1-5 of 5 clients" with pager.
New Client dialog (title "New Client", subtitle "Configure the credentials for your new client."):
- "Name" (text, placeholder "Client name").
- "Authentication" (with info tooltip). Option block "Credentials" ("Enable authentication with username
  and password. Can be paired with Certificate"): fields "Username" (placeholder "Enter username"),
  "Password" (placeholder "Enter password").
Buttons: "Cancel", "Create client".
## /tagodeploy/project/mqtt/groups

Route: `/projects/{id}/mqtt/{mqttId}/groups`. Page header (h1): "Groups". Card h2: "Groups". Subtitle:
"Bundle ACL permissions that allow or deny access to topics." Has "Read the docs →" button. Primary
action: "New Group". Search box (placeholder "Search groups...").
Table columns: **Name**, **Description**, **ACL Permissions** (e.g. "3 permissions"), actions column.
New Group dialog (title "New Group", subtitle "Group Details"):
- "Name" (text, placeholder "group name").
- "Description" (text, placeholder "description of the group's purpose").
- "ACL Permissions" (h4). Empty state: "No permissions configured" / "Add permissions to control
  subscription and publishing access to topics." Button "Add permission".
- Each permission row has columns **Permission** (combobox, default "Allow", value `allow`), **Action**
  (combobox, default "Subscribe", value `subscribe`), **Topic** (text, placeholder "topic"), and a remove
  button. Button "New permission" adds more rows.
Buttons: "Cancel", "Create group".
## /tagodeploy/project/mqtt/group-rules

Route: `/projects/{id}/mqtt/{mqttId}/group-rules`. Page header (h1) / card h2: "Group Rules". Subtitle:
"Assign clients to groups automatically based on matching conditions." Has "Read the docs →" button.
Actions: "Save" (disabled until changes), "New rule".
Inline editable rows (no dialog) with columns:
- **Match By** (combobox; options seen: "Certificate Fingerprint" `certificate_fingerprint`,
  "MQTT Client ID" `mqtt_client_id`, "Client" `client_id`).
- **Value** (text input; placeholder varies: "SHA256:..." for fingerprint, "value to match" for client id;
  for "Client" match-by it becomes a combobox to pick a client).
- **Groups** (multi-select chips; pick one or more group names like device-telemetry, device-commands,
  service-full-access).
- Per-row remove button.
Footer: "3 rules configured".
## /tagodeploy/project/mqtt/pipelines

Route: `/projects/{id}/mqtt/{mqttId}/pipelines`. Page header (h1) / card h2: "Pipelines". Subtitle:
"Forward incoming MQTT messages to external services." Has "Read the docs →" button. Primary action:
"New pipeline". Search box (placeholder "Search pipelines...").
Table columns: **NAME** (sortable), **DESCRIPTION**, **STATUS** (e.g. "Active"), actions column.
Footer: "Showing 1-2 of 2 pipelines" with Previous/Next page buttons.
New Pipeline dialog (title "New Pipeline", subtitle "Configure the pipeline endpoint and authentication.
The API URL is automatically generated from your project settings."):
- "NAME" (text, placeholder "Pipeline name").
- "DESCRIPTION" (text, placeholder "Describe this pipeline").
- "API URL" (text, default "https://api.tagoio.net").
- "NETWORK TOKEN" (text).
- "AUTHORIZATION TOKEN" (text).
Buttons: "Cancel", "Create pipeline".
NOTE: the "Topic Mappings" UI lives in a second section ON this same Pipelines page (see topic-mappings).
## /tagodeploy/project/mqtt/connections

Route: `/projects/{id}/mqtt/{mqttId}/connections` (query `?search=&page=1`). Page header (h1) / card h2:
"Connections". Subtitle: "Live view of devices currently connected to the broker." Has "Read the docs →"
button. Read-only (no create action). Search box (placeholder "Search by client ID...").
Table columns: **MQTT Client ID**, **IP Address**, **Protocol** (e.g. MQTT), **Keep-Alive** (e.g. 30s),
**Connected At** (sortable, UTC timestamp), **Group** (group id). Footer: "Showing 1–3 of 3 connections".
## /tagodeploy/project/mqtt/instances

Route: `/projects/{id}/mqtt/{mqttId}/instances`. Page header (h1): "Overview". Card h2: "Instance Details".
Subtitle: "Set the machine size and autoscaling range for this service." Has "Read the docs →" button.
Action: "Save" (disabled until changes).
"Instance settings" ("Machine size, scaling range, and autoscaling thresholds."):
- "Machine" (combobox, default "1 vCPU / 2GB RAM", value `1vcpu_2gb`).
- "Minimum Instances" (combobox, default 1).
- "Maximum Instances" (combobox, default 2).
- "Scale on CPU Utilization" (number, default 60).
- "Cooldown for Scaling Up" (number, default 200).
- "Cooldown for Scaling Down" (number, default 300).
"Monitoring": range toggle 1h/6h/12h/1d/3d/7d/30d; charts "CPU Utilization (%)", "Memory Utilization (%)";
empty "No data available".
## /tagodeploy/project/mqtt/acl-permissions

STATUS: NOT FOUND. No dedicated sub-page. "ACL permissions" exist only as a concept inside Groups: each
group bundles ACL permission rows (Permission Allow/Deny, Action Subscribe/Publish, Topic). See
`/tagodeploy/project/mqtt/groups`.

## /tagodeploy/project/mqtt/credentials

STATUS: NOT FOUND. No dedicated sub-page. "Credentials" is one of the client Authentication types
(username/password) configured in the New Client dialog. See `/tagodeploy/project/mqtt/clients`.

(Note: the MQTT sub-nav also has a "Settings" sub-page at `/mqtt/{mqttId}/settings`, not in this heading
list and not surveyed.)
## /tagodeploy/project/mqtt/topic-mappings

No dedicated route. Rendered as a second section on the Pipelines page
(`/projects/{id}/mqtt/{mqttId}/pipelines`). Section h2: "Topic Mappings". Subtitle: "Route MQTT topics to
specific pipelines." Actions: "Save" (disabled until changes), "New mapping".
Inline editable table (no dialog) columns: **TOPIC** (text input, placeholder "/topic", e.g.
`devices/+/telemetry`), **PIPELINE** (combobox selecting a pipeline by name), per-row remove button.
## /tagodeploy/project/container/overview

Resource type label: "Custom Docker" (breadcrumb "My Custom Docker"). Route:
`/projects/{id}/docker/{dockerId}/overview`. Page header (h1): "Overview". Card h2: "Overview". Subtitle:
"Service name, URL, and product for this container." Has "Read the docs →" button. Action: "Save"
(disabled until changes).
Container sub-nav (sidebar): Overview, Instances, Settings only. (No separate docker-image,
environment-variables, logs, network, or runtime sub-pages; see those headings below.)
Sections:
- "Service Information" ("Name, URL, and product details for this service."): "Display Name" (text,
  "My Custom Docker"), "Addon" (text, "Custom Docker"), "Service URL" (read-only
  `https://{dockerId}.{projectId}.tagoio.net`, copy button).
- "Danger Zone" (collapsible, "Irreversible actions for this service").
## /tagodeploy/project/container/instances

Route: `/projects/{id}/docker/{dockerId}/instances`. Page header (h1): "Overview". Card h2:
"Instance Details". Subtitle: "Set the machine size and autoscaling range for this service." Has
"Read the docs →" button. Action: "Save" (disabled until changes).
"Instance settings" ("Machine size, scaling range, and autoscaling thresholds."): identical fields to the
MQTT instances page - "Machine" (combobox, default "1 vCPU / 2GB RAM", `1vcpu_2gb`), "Minimum Instances"
(default 1), "Maximum Instances" (default 2), "Scale on CPU Utilization" (default 60), "Cooldown for
Scaling Up" (default 200), "Cooldown for Scaling Down" (default 300).
"Monitoring": range toggle 1h/6h/12h/1d/3d/7d/30d; charts "CPU Utilization (%)", "Memory Utilization (%)";
empty "No data available".
## /tagodeploy/project/container/docker-image

No dedicated route. Lives as collapsible sections on the container Settings page
(`/projects/{id}/docker/{dockerId}/settings`). Page header (h1) / card h2: "Docker Settings". Subtitle:
"How this container is built, configured, and run." Has "Read the docs →" button. Action: "Save"
(disabled until changes). Settings page collapsible sections in order: Docker Image, Registry
Authentication, Environment Variables, Network, Runtime.
- "Docker Image" ("Configure the Docker image for your container deployment."): "Image Name" (text,
  placeholder "The name of the Docker image to use."), "Image Tag" (text, placeholder "The tag of the
  Docker image to use.").
- "Registry Authentication" ("Credentials for private Docker registries."): "Registry Username" (text,
  placeholder "Username for the Docker registry."), "Registry Access Password" (password, placeholder
  "Access password for the Docker registry.", with reveal toggle).

## /tagodeploy/project/container/environment-variables

No dedicated route. "Environment Variables" collapsible section on the container Settings page. Body:
"Environment variables passed to your container." Empty state: "No environment variables configured".
Button "Add variable" (adds key/value rows).
## /tagodeploy/project/container/logs

STATUS: NOT FOUND. The container resource has no Logs sub-page (sub-nav is only Overview, Instances,
Settings). Project-wide runtime logs live at the Management > Logs page (`/management/logs`).

## /tagodeploy/project/container/network

No dedicated route. "Network" collapsible section on the container Settings page. Body: "Network protocol
and port mappings for the load balancer." Fields:
- "Network protocol" (combobox, default "TCP", value `tcp`).
- "Port mappings": empty state "No port mappings configured"; button "Add port" (adds port-mapping rows).

## /tagodeploy/project/container/runtime

No dedicated route. "Runtime" collapsible section on the container Settings page. Body: "Override the
default work directory and command." Fields: "Work Directory" (text, placeholder "Working directory for
the container."), "Command" (text, placeholder "Command to run in the container.").
## /tagodeploy/project/webservice/overview

Route: `/projects/{id}/webservice/{wsId}/overview`. Surveyed on Chirpstack (dd...0011, breadcrumb
"My Chirpstack"). Page header (h1): "Overview". Card h2: "Overview". Subtitle: "Service name, endpoint URL,
and quick actions." Has "Read the docs →" button. Action: "Save" (disabled until changes).
Webservice sub-nav (sidebar): Overview, Instances, Settings.
TERMINOLOGY: a webservice's "Addon" reads "Middleware {Type}" (e.g. "Middleware Chirpstack"); webservices
are surfaced to users as middlewares.
Sections:
- "Service Information" ("Name, URL, and product details for this service."): "Display Name" (text,
  "My Chirpstack"), "Addon" (text, "Middleware Chirpstack"), "Service URL" (read-only
  `https://{wsId}.{projectId}.tagoio.net`, copy button).
- "Danger Zone" (collapsible, "Irreversible actions for this service").
## /tagodeploy/project/webservice/settings

Route: `/projects/{id}/webservice/{wsId}/settings`. Page header (h1) / card h2: "Webservice Settings".
Subtitle: "Network, API endpoint, and credential settings for the service." Has "Read the docs →" button.
Action: "Save" (disabled until changes).
"Configuration" section ("Credentials and endpoints used by this middleware."):
- "Network Token": a network combobox (placeholder "Select a network") with a "Refresh networks" button,
  plus a toggle "Use custom token (advanced)" that reveals a manual token text field.
- "TagoIO Api URL" (text, default `https://api.{projectId}.tagoio.net`).

## /tagodeploy/project/webservice/instances

Route: `/projects/{id}/webservice/{wsId}/instances`. Page header (h1): "Overview". Card h2:
"Instance Details". Subtitle: "Set the machine size and autoscaling range for this service." Has
"Read the docs →" button. Action: "Save" (disabled until changes). Same instance-settings form as MQTT and
container instances pages: "Machine" (default "1 vCPU / 2GB RAM", `1vcpu_2gb`), "Minimum Instances" (1),
"Maximum Instances" (2), "Scale on CPU Utilization" (60), "Cooldown for Scaling Up" (200), "Cooldown for
Scaling Down" (300). "Monitoring": range toggle 1h/6h/12h/1d/3d/7d/30d; charts "CPU Utilization (%)",
"Memory Utilization (%)"; empty "No data available".
## services overview / middlewares / managing-middleware

Entry point is the **App Catalog** at `/apps` (top-nav "Apps"). There is NO add-service "+" on the project
breadcrumb resource list or in the command palette (palette is navigation-only). Services are added from
the catalog.
App Catalog (h1 "App Catalog"): left rail filters — CATEGORIES: Any Type, Platform, Middleware, MQTT,
Others; NETWORKS: AWS, Chirpstack, Everynet, Loriot, MachineQ, Myriota, Senet, Sigfox. Search box
("What are you looking for?"). Sections "Featured" and "Recently Added".
Catalog items (each card has a category badge):
- "TagoIO Platform" (Platform).
- Middlewares (the webservice connector types): AWS IoT, Chirpstack, Everynet, Generic HTTPS, Loriot,
  MachineQ, Myriota, Senet, Sigfox, Tektelic, TTN.
- "Broker" (MQTT).
TERMINOLOGY: webservice connectors are surfaced as "Middleware"; in-project label is "Middleware {Type}".

Add flow (click a catalog card -> detail dialog -> "Next"):
- Detail dialog (e.g. "Chirpstack"): CATEGORY (Middleware), ABOUT (Created / Updated dates), "Overview"
  description, "Features:" bullet list. Buttons "Back", "Next".
- Install dialog (title "Middleware {Type}"): "Installation" radio group — **In a project** ("Easy
  integration within your TagoIO project", subtitle "Adding to Project") vs **New Project** ("Use with a
  TagoIO project or with a separate application", subtitle "Creating a New Project").
  - In a project: fields "Project" (combobox "Select a project"), "Region" (combobox "Select a region"),
    "Version" (combobox, default "v4.0 (Latest)"). Action button "Add to Project".
  - New Project: same minus the Project field (Region + Version). Action button "Review and Install".
  - "Settings": "Name" (text, default "My Middleware {Type}"), "Network Token" (text, placeholder
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"), "TagoIO Api URL" (text, placeholder "https://...").
  - "Specifications" (read-only): service "Middleware api", TYPE "api", INSTANCES "1 - 5".
  Buttons: "Back" + the contextual install action.
## project index / new-project

PROJECT LISTING: via the top-nav project switcher (button showing avatar + project name + region). The
dropdown has a "Projects" group; each row shows avatar, name, a "Current" badge for the active project,
and "{region} · {role}" (e.g. "us-east-1 · Owner"). A "New project" button sits at the bottom of the
dropdown. There is no standalone /projects index page; `/apps` is the App Catalog (see services section).

NEW PROJECT FLOW: "New project" (and the catalog's "TagoIO Platform" card) opens the TagoIO Platform
install dialog, which is what provisions a project.
- Detail dialog "TagoIO Platform": CATEGORY (Platform), ABOUT (Created / Updated dates), "Overview"
  description. Buttons "Back", "Next".
- Install dialog (title "TagoIO Platform", subtitle "Creating TagoIO Platform Project"):
  - "Installation" radio group: "In a project" is DISABLED ("Coming soon"); "New Project" is selected by
    default for the Platform.
  - "Region" (combobox, "Select a region").
  - "Version" (combobox, default "2026-05-25 (Latest)").
  - "Settings" -> "Name" (text, default "My TagoIO Platform").
  Buttons: "Back", "Next" (then proceeds to review/install).
