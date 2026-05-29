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
## /tagodeploy/project/limits
## /tagodeploy/project/domains
## /tagodeploy/project/backups
## /tagodeploy/project/bills/billing
## /tagodeploy/project/configuration/integrations
## /tagodeploy/project/analysis-runtime
## /tagodeploy/project/api
## /tagodeploy/project/main-database
## /tagodeploy/project/in-memory-database
## /tagodeploy/project/management/collaborators
## /tagodeploy/project/management/tokens
## /tagodeploy/project/deployments/history
## /tagodeploy/project/deployments/logs
## /tagodeploy/project/system/version
## /tagodeploy/project/features/editing-features
## /tagodeploy/project/system/open-connectors
## /tagodeploy/project/mqtt (overview)
## /tagodeploy/project/mqtt/certificates
## /tagodeploy/project/mqtt/clients
## /tagodeploy/project/mqtt/groups
## /tagodeploy/project/mqtt/group-rules
## /tagodeploy/project/mqtt/pipelines
## /tagodeploy/project/mqtt/connections
## /tagodeploy/project/mqtt/instances
## /tagodeploy/project/mqtt/acl-permissions
## /tagodeploy/project/mqtt/credentials
## /tagodeploy/project/mqtt/topic-mappings
## /tagodeploy/project/container/overview
## /tagodeploy/project/container/instances
## /tagodeploy/project/container/docker-image
## /tagodeploy/project/container/environment-variables
## /tagodeploy/project/container/logs
## /tagodeploy/project/container/network
## /tagodeploy/project/container/runtime
## /tagodeploy/project/webservice/overview
## /tagodeploy/project/webservice/settings
## /tagodeploy/project/webservice/instances
## services overview / middlewares / managing-middleware
## project index / new-project
