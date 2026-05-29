# TagoDeploy Docs Refresh — Design

Date: 2026-05-29

## Problem

The TagoDeploy product migrated from an HTMX/Alpine.js frontend to a React SPA and went
through a rebrand. The `tagodeploy` documentation in this Docusaurus site was written against
the old UI, so its terminology, screenshots, field names, and flows are outdated.

Separately, the SPA (`tago-io/deploy`) added an in-app docs panel that fetches markdown from
`docs.tago.io` by slug. Its `packages/web/src/docs/registry.ts` references 30 slugs. 23 exist
upstream, 7 do not and currently rely on bundled local-fallback drafts. 8 further docs exist
upstream but the SPA never links them (orphans).

## Goals

1. Audit and fix the 23 existing SPA-linked docs against the running SPA.
2. Create the 7 missing docs by promoting the SPA local-fallback drafts upstream, then verifying.
3. Audit the 8 orphan docs and wire them into the SPA where matching UI exists.
4. Land docs changes as a PR in the docs repo; land SPA cleanup as a separate PR.

## Non-Goals

- Redesigning the docs information architecture beyond what the audit requires.
- Mass screenshot replacement (only 9 image refs exist; touch only if clearly wrong).
- Touching non-tagodeploy docs (tagocore, tagoio, api, tagotip).

## Source of Truth

- Running SPA: `http://localhost:5510` (docker compose, web container healthy).
- Seed account: `fully-loaded@seed.local` / `Tagodev14!` (all 11 webservice middlewares + mqtt
  + docker, all optional services). Fallback: `loaded@seed.local`.
- API container is currently unhealthy; if a page fails to load, restart/inspect before assuming
  a doc gap.

## Slug Inventory

### Existing, SPA-linked (23) — audit + fix

`project/overview`, `project/accounts`, `project/limits`, `project/domains`, `project/backups`,
`project/bills/billing`, `project/configuration/integrations`, `project/analysis-runtime`,
`project/api`, `project/main-database`, `project/in-memory-database`, `project/system/version`,
`project/features/editing-features`, `project/deployments/history`, `project/deployments/logs`,
`project/management/collaborators`, `project/mqtt`, `project/mqtt/certificates`,
`project/mqtt/clients`, `project/mqtt/groups`, `project/mqtt/group-rules`,
`project/mqtt/pipelines`, `project/container/overview`.

### Missing (7) — promote-then-verify from SPA local drafts

| Slug | Draft source in deploy repo |
|---|---|
| `project/management/tokens` | `packages/web/src/docs/local/tagodeploy/project/management/tokens.md` |
| `project/mqtt/connections` | `.../local/tagodeploy/project/mqtt/connections.md` |
| `project/mqtt/instances` | `.../local/tagodeploy/project/mqtt/instances.md` |
| `project/container/instances` | `.../local/tagodeploy/project/container/instances.md` |
| `project/webservice/overview` | `.../local/tagodeploy/project/webservice/overview.md` |
| `project/webservice/settings` | `.../local/tagodeploy/project/webservice/settings.md` |
| `project/webservice/instances` | `.../local/tagodeploy/project/webservice/instances.md` |

### Orphans (8+) — audit + wire-up

`project/mqtt/acl-permissions`, `project/mqtt/credentials`, `project/mqtt/topic-mappings`,
`project/container/docker-image`, `project/container/environment-variables`,
`project/container/logs`, `project/container/network`, `project/container/runtime`,
`project/system/open-connectors`, `services/overview`, `services/middlewares`,
`services/middlewares/managing-middleware`, `tagodeploy` (index), `tagodeploy/new-project`.

For each orphan: if the matching UI exists in the SPA, fix the doc and add a `DocsButton`
(register the slug in `registry.ts`). If the feature is gone (htmx-only), flag for deletion in
the PR description rather than silently removing.

## Architecture (3 phases)

### Phase 1 — SPA Survey (single browser, me)

Walk every project route that maps to a doc with playwright, logged in as the seed account.
For each page capture: route, page headings, every form field (label, type, default, validation
text), buttons and primary actions, list/empty states, and product terminology.

Output: `specs/spa-survey.md` in the docs worktree. This is the ground-truth artifact every
Phase 2 agent reads. No doc edits happen in this phase.

### Phase 2 — Doc work (parallel subagents, no browser)

One subagent per cluster. Each receives: its doc file list, `specs/spa-survey.md`, and the
`tagoio:writing-style` + `tagoio:tagobrand` conventions. Each agent audits/fixes existing docs,
promotes+verifies new docs (preserving the `slug:` frontmatter the registry expects), and audits
its orphans against the survey.

| Cluster | Docs |
|---|---|
| Project core | overview, accounts, limits, domains, backups, billing, collaborators, tokens (new) |
| Services | analysis-runtime, api, main-database, in-memory-database |
| Deployments + system | deployments/history, deployments/logs, system/version, features/editing-features, configuration/integrations, system/open-connectors* |
| MQTT | mqtt, certificates, clients, groups, group-rules, pipelines, connections (new), instances (new), acl-permissions*, credentials*, topic-mappings* |
| Container | overview, instances (new), docker-image*, environment-variables*, logs*, network*, runtime* |
| Webservice | overview (new), settings (new), instances (new) |
| Top-level | index, new-project, services/overview*, services/middlewares*, managing-middleware* |

`*` orphan, new = promote-from-draft. Clusters are independent: each owns disjoint files,
communicates only through the survey artifact, no shared mutable state.

### Phase 3 — Verify + wire-up + cleanup

- Spot-check a sample of fixed docs against the live SPA with playwright.
- Build docs (`pnpm build`) to catch broken links / frontmatter / sidebar errors.
- Wire orphan `DocsButton`s into the SPA where Phase 2 confirmed the UI exists; add slugs to
  `registry.ts`.
- Remove the 7 promoted local fallbacks and their `TODO(docs):` lines from `registry.ts`.

## Outputs

- **Docs PR** — docs repo branch `docs/tagodeploy-spa-refresh`: all content edits, 7 new docs,
  orphan fixes, `_category_.json` updates if nav changes, the spec + survey artifacts.
- **Deploy PR** — deploy repo branch: wire orphan DocsButtons, remove 7 local fallbacks +
  `TODO(docs)` lines in `registry.ts`. Sequenced after the docs PR (depends on upstream existing).

## Error Handling / Risks

- Page fails to load -> check API container health before recording a gap.
- Draft contradicts live SPA -> SPA wins; rewrite the draft section.
- Orphan UI ambiguous (can't find the screen) -> flag in PR, do not wire, do not delete.
- Build failure -> fix frontmatter/links before opening the PR.

## Testing

- `pnpm build` passes (Docusaurus link + sidebar validation).
- Manual playwright spot-check: open each new doc's slug via the SPA docs panel against a local
  docs build or confirm slug matches registry.
- PR description lists pages surveyed, docs changed/created, orphans wired vs flagged.
