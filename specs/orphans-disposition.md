# Orphan Docs Disposition

Outcome of auditing the 8+ docs the SPA registry never links, against the live SPA survey.

## Wire-up candidate (real SPA control, add to registry + DocsButton)

- **`project/system/open-connectors`** (`configuration/system/open-connectors.md`).
  The SPA HAS this: an "Open Connectors" section on the System page (`/tago-io/system`,
  below the Version Timeline) with a "Sync connectors" action and a "No connectors synced yet"
  empty state. Content was corrected. Recommend registering a slug and adding a DocsButton on the
  System page in the deploy repo.

## No standalone page (sub-section of a parent screen) — keep as corrected cross-reference stubs, do NOT wire

- **`mqtt/acl-permissions`**: ACLs are rows inside Groups (Allow/Deny, Subscribe/Publish, Topic).
  Full model now lives in `mqtt/groups.md`. Stub kept, points to Groups.
- **`mqtt/credentials`**: one of two client Authentication types inside Clients. Covered in
  `mqtt/clients.md`. Stub kept, points to Clients.
- **`mqtt/topic-mappings`**: a section on the Pipelines page, no own route. Covered in
  `mqtt/pipelines.md`. Stub kept, points to Pipelines.
- **`container/docker-image`, `container/environment-variables`, `container/network`,
  `container/runtime`**: all collapsible sections of one "Docker Settings" page
  (`/docker/{id}/settings`), not separate pages. Content corrected per section.

## Obsolete (page does not exist in the SPA)

- **`container/logs`**: the container resource has no Logs sub-page (sub-nav is Overview,
  Instances, Settings). Runtime logs live at Management > Logs (project-level). Flagged as a
  deletion candidate. Not deleted; left for reviewer decision.

## Consolidation recommendation (for a follow-up, not this PR)

The four container settings docs map to one SPA page. A future pass could merge
`docker-image` + `environment-variables` + `network` + `runtime` into a single "Docker Settings"
doc with H2 sections, matching the UI one-to-one. None of these four slugs is in the registry, so
there is no link cost to consolidating. Kept separate in this PR to avoid a destructive change
without sign-off.

## Product flags surfaced during the refresh (confirm before publish)

- **Bills "Queue" category**: the Bills page lists a "Queue" service cost category, while
  `packages/web/CLAUDE.md` says `data-queue` must not be surfaced in the UI. Documented per the
  live UI; confirm this is intended.
- **Backups restore flow**: the page only lists snapshots; no restore UI was observed. Existing
  restore guidance kept (unverified against the SPA).
- **Tokens dialog detail**: 10-token limit, last-four identification, Copy/Delete actions come
  from the SPA local-fallback draft; the survey confirmed only the New Token dialog (no fields)
  and the empty state.
- **In-Memory Database recommendation**: field default machine is 2 vCPU / 1GB RAM; the prior doc
  recommended 2 vCPU / 4GB RAM. Documented the field default; recommendation left as a suggestion.
