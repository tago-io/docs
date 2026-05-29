# TagoDeploy Docs Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Audit and fix the 23 existing SPA-linked tagodeploy docs against the running React SPA, create the 7 missing docs from the SPA local-fallback drafts, audit and wire up the 8 orphan docs, then land a docs PR and a separate SPA cleanup PR.

**Architecture:** Three phases. Phase 1 captures ground-truth of every relevant SPA screen into `specs/spa-survey.md` via a single playwright browser. Phase 2 fans out one subagent per doc cluster to fix/create docs against that survey (no browser contention). Phase 3 verifies with `pnpm build`, wires orphan DocsButtons into the SPA, and removes the promoted local fallbacks.

**Tech Stack:** Docusaurus (docs site), React SPA (`tago-io/deploy`, `packages/web`), playwright MCP, docker compose local stack.

**Key paths:**
- Docs repo (this worktree): `/Users/ricardostoklosa/.superset/worktrees/docs/tago-deploy-v2`
- Deploy repo: `/Users/ricardostoklosa/.superset/worktrees/deploy/feat/docs-panel-forms`
- SPA: `http://localhost:5510`, login `fully-loaded@seed.local` / `Tagodev14!`
- Registry: `<deploy>/packages/web/src/docs/registry.ts`
- Local drafts: `<deploy>/packages/web/src/docs/local/tagodeploy/**`

**Conventions:** Apply `tagoio:writing-style` (no em dashes, no emojis, no banned words) and `tagoio:tagobrand` to all prose. Frontmatter must match existing docs: `title`, `description`, `keywords`, `tags`, `slug`. The `slug:` value MUST equal the registry slug exactly.

---

## Phase 1 — SPA Survey

### Task 1: Confirm stack health and log in

**Files:**
- Create: `specs/spa-survey.md`

- [ ] **Step 1: Verify web + api reachable**

Run: `curl -s -o /dev/null -w "%{http_code}\n" http://localhost:5510/`
Expected: `200`. If api unhealthy, run `docker compose restart api` from the deploy repo and wait for healthy.

- [ ] **Step 2: Log into the SPA**

Use playwright: navigate `http://localhost:5510`, sign in with `fully-loaded@seed.local` / `Tagodev14!`. Confirm a project list renders.

- [ ] **Step 3: Create the survey skeleton**

Create `specs/spa-survey.md` with one `## <slug>` heading per slug in the inventory below (30 linked + orphans). Leave each section empty for now.

- [ ] **Step 4: Commit**

```bash
git add specs/spa-survey.md
git commit -m "docs: scaffold spa survey artifact"
```

### Task 2: Survey project core + services screens

**Files:**
- Modify: `specs/spa-survey.md`

- [ ] **Step 1: Walk each screen with playwright**

For the `fully-loaded` project, open and record each of: project overview, accounts, limits, domains, backups, billing, collaborators, tokens, analysis-runtime, api, main-database, in-memory-database.

- [ ] **Step 2: Capture per screen**

Under each `## <slug>` write: route path, page headings, every form field (label, input type, default, validation/help text), buttons and primary actions, list/empty states, exact product terminology.

- [ ] **Step 3: Commit**

```bash
git add specs/spa-survey.md
git commit -m "docs: survey project core and services screens"
```

### Task 3: Survey deployments, system, MQTT, container, webservice screens

**Files:**
- Modify: `specs/spa-survey.md`

- [ ] **Step 1: Walk each screen**

Record: deployments history, deployments logs, system/version, features editing, integrations, open-connectors; mqtt overview, certificates, clients, groups, group-rules, pipelines, connections, instances, acl-permissions, credentials, topic-mappings; container overview, instances, docker-image, environment-variables, logs, network, runtime; webservice overview, settings, instances; services overview, middlewares, managing-middleware; project index, new-project flow.

- [ ] **Step 2: Capture same fields as Task 2.** For any orphan screen that does not exist in the SPA, write `STATUS: NOT FOUND IN SPA` under its heading.

- [ ] **Step 3: Commit**

```bash
git add specs/spa-survey.md
git commit -m "docs: survey mqtt, container, webservice, and orphan screens"
```

---

## Phase 2 — Doc Work (one subagent per cluster)

Each cluster task is dispatched to a fresh subagent. The subagent reads `specs/spa-survey.md`, the listed doc files, the matching local drafts (for new docs), and applies the writing-style + tagobrand skills. It does NOT use the browser.

Shared rules for every Phase 2 task:
- Existing doc: rewrite outdated terminology, field names, flows to match the survey. Keep the `slug:` line unchanged.
- New doc (promote): copy the draft body, add full frontmatter (`title`, `description`, `keywords`, `tags`, `slug` = registry slug), reconcile every statement against the survey, fix mismatches.
- Orphan: if survey says NOT FOUND, do not edit content; instead append the slug to a running list in `specs/orphans-to-flag.md` with a one-line reason. If found, fix it and append the slug to `specs/orphans-to-wire.md`.

### Task 4: Project core cluster

**Files:**
- Modify: `docs/tagodeploy/project/index.md` (overview), `docs/tagodeploy/project/configuration/accounts.md`, `docs/tagodeploy/project/configuration/limits.md`, `docs/tagodeploy/project/management/domains.md`, `docs/tagodeploy/project/management/backups.md`, `docs/tagodeploy/project/management/billing.md`, `docs/tagodeploy/project/management/collaborators.md`
- Create: `docs/tagodeploy/project/management/tokens.md` (slug `/tagodeploy/project/management/tokens`, draft `<deploy>/.../local/tagodeploy/project/management/tokens.md`)

- [ ] **Step 1:** Dispatch subagent with shared rules + this file list. Verify each `slug:` matches the registry.
- [ ] **Step 2:** Confirm new `tokens.md` has full frontmatter and lives under `project/management/`.
- [ ] **Step 3: Commit**

```bash
git add docs/tagodeploy/project
git commit -m "docs(tagodeploy): refresh project core docs and add tokens"
```

### Task 5: Services cluster

**Files:**
- Modify: `docs/tagodeploy/project/project-services/analysis-runtime.md`, `.../api.md`, `.../main-database.md`, `.../in-memory-database.md`

- [ ] **Step 1:** Dispatch subagent with shared rules + file list.
- [ ] **Step 2:** Verify slugs unchanged.
- [ ] **Step 3: Commit**

```bash
git add docs/tagodeploy/project/project-services
git commit -m "docs(tagodeploy): refresh project services docs"
```

### Task 6: Deployments + system cluster

**Files:**
- Modify: `docs/tagodeploy/project/management/deployments/history.md`, `.../deployments/logs.md`, `docs/tagodeploy/project/configuration/system/version.md`, `docs/tagodeploy/project/management/features.md`, `docs/tagodeploy/project/configuration/integrations.md`, `docs/tagodeploy/project/configuration/system/open-connectors.md` (orphan)

- [ ] **Step 1:** Dispatch subagent. `open-connectors` follows orphan rule.
- [ ] **Step 2: Commit**

```bash
git add docs/tagodeploy/project
git commit -m "docs(tagodeploy): refresh deployments, system, and integrations docs"
```

### Task 7: MQTT cluster

**Files:**
- Modify: `docs/tagodeploy/services/mqtt/index.md` (overview), `.../certificates.md`, `.../clients.md`, `.../groups.md`, `.../group-rules.md`, `.../pipelines.md`, `.../acl-permissions.md` (orphan), `.../credentials.md` (orphan), `.../topic-mappings.md` (orphan)
- Create: `docs/tagodeploy/services/mqtt/connections.md` (slug `/tagodeploy/project/mqtt/connections`), `docs/tagodeploy/services/mqtt/instances.md` (slug `/tagodeploy/project/mqtt/instances`); drafts under `<deploy>/.../local/tagodeploy/project/mqtt/`

- [ ] **Step 1:** Dispatch subagent with shared rules + file list. New docs get full frontmatter and matching slugs.
- [ ] **Step 2:** Verify `connections.md` and `instances.md` exist with correct slugs.
- [ ] **Step 3: Commit**

```bash
git add docs/tagodeploy/services/mqtt
git commit -m "docs(tagodeploy): refresh mqtt docs and add connections and instances"
```

### Task 8: Container cluster

**Files:**
- Modify: `docs/tagodeploy/services/container/overview.md`, `.../docker-image.md` (orphan), `.../environment-variables.md` (orphan), `.../logs.md` (orphan), `.../network.md` (orphan), `.../runtime.md` (orphan)
- Create: `docs/tagodeploy/services/container/instances.md` (slug `/tagodeploy/project/container/instances`); draft `<deploy>/.../local/tagodeploy/project/container/instances.md`

- [ ] **Step 1:** Dispatch subagent with shared rules + file list.
- [ ] **Step 2:** Verify `instances.md` slug.
- [ ] **Step 3: Commit**

```bash
git add docs/tagodeploy/services/container
git commit -m "docs(tagodeploy): refresh container docs and add instances"
```

### Task 9: Webservice cluster (all new)

**Files:**
- Create: `docs/tagodeploy/services/webservice/_category_.json`, `docs/tagodeploy/services/webservice/overview.md` (slug `/tagodeploy/project/webservice/overview`), `.../settings.md` (slug `/tagodeploy/project/webservice/settings`), `.../instances.md` (slug `/tagodeploy/project/webservice/instances`); drafts under `<deploy>/.../local/tagodeploy/project/webservice/`

- [ ] **Step 1: Create the category file**

```json
{
  "label": "Web Service",
  "position": 3,
  "collapsed": true
}
```

- [ ] **Step 2:** Dispatch subagent to promote the 3 drafts with full frontmatter + matching slugs, verified against the survey.
- [ ] **Step 3: Commit**

```bash
git add docs/tagodeploy/services/webservice
git commit -m "docs(tagodeploy): add webservice overview, settings, and instances"
```

### Task 10: Top-level cluster

**Files:**
- Modify: `docs/tagodeploy/getting-started/index.md`, `docs/tagodeploy/getting-started/new-project.md`, `docs/tagodeploy/services/index.md` (overview, orphan), `docs/tagodeploy/services/middlewares/index.md` (orphan), `docs/tagodeploy/services/middlewares/managing-middleware.md` (orphan)

- [ ] **Step 1:** Dispatch subagent with shared rules + file list.
- [ ] **Step 2: Commit**

```bash
git add docs/tagodeploy/getting-started docs/tagodeploy/services/index.md docs/tagodeploy/services/middlewares
git commit -m "docs(tagodeploy): refresh getting-started and services overview docs"
```

---

## Phase 3 — Verify, Wire-Up, Cleanup

### Task 11: Build the docs site

**Files:** none

- [ ] **Step 1: Run the build**

Run: `cd /Users/ricardostoklosa/.superset/worktrees/docs/tago-deploy-v2 && pnpm build`
Expected: build succeeds, no broken-link or frontmatter errors. Fix any reported issue in the offending doc and re-run.

- [ ] **Step 2: Commit any fixes**

```bash
git add -A
git commit -m "docs(tagodeploy): fix build errors from refresh"
```

### Task 12: Playwright spot-check of new/changed docs

**Files:** none

- [ ] **Step 1:** With `pnpm start` (or the build preview) running, open 3-4 representative slugs (one new webservice doc, one fixed mqtt doc, tokens, container instances) and confirm they render with correct content and headings.
- [ ] **Step 2:** Record the checked pages in the PR notes draft.

### Task 13: Open the docs PR

**Files:** none

- [ ] **Step 1:** Push branch `docs/tagodeploy-spa-refresh`. Open PR using `tagoio:github` + `tagoio:pr-and-issue-descriptions` conventions. Body lists: pages surveyed, docs changed, 7 docs created, orphans wired vs flagged (from `specs/orphans-to-wire.md` / `specs/orphans-to-flag.md`), and the Risk (CIA) line.

### Task 14: SPA wire-up + fallback cleanup (deploy repo, separate PR)

**Files (deploy repo):**
- Modify: `packages/web/src/docs/registry.ts`
- Modify: components rendering the orphan screens (add `DocsButton slug={...}`) per `specs/orphans-to-wire.md`
- Delete: the 7 promoted files under `packages/web/src/docs/local/tagodeploy/**`

- [ ] **Step 1: Create a branch in the deploy repo**

```bash
cd /Users/ricardostoklosa/.superset/worktrees/deploy/feat/docs-panel-forms
git checkout -b docs/tagodeploy-registry-cleanup
```

- [ ] **Step 2: Remove the 7 `TODO(docs):` lines** in `registry.ts` for tokens, mqtt connections, mqtt instances, container instances, webservice overview/settings/instances (the slug entries stay).

- [ ] **Step 3: Delete the 7 promoted local fallback files** under `packages/web/src/docs/local/tagodeploy/`.

- [ ] **Step 4: Add registry entries + `DocsButton`s** for each wired orphan in `specs/orphans-to-wire.md`.

- [ ] **Step 5: Verify the SPA builds**

Run: `pnpm --filter web build` (or repo equivalent). Expected: pass.

- [ ] **Step 6: Commit + open PR**

```bash
git add -A
git commit -m "feat(web): wire orphan docs and drop promoted local fallbacks"
```

Open PR referencing the docs PR (cleanup depends on upstream docs existing on docs.tago.io).

---

## Self-Review Notes

- Spec coverage: goals 1-4 map to Tasks 4-10 (audit/create), 12 (verify), 13-14 (PRs and wire-up). Survey (1-3) feeds all content tasks.
- Slug consistency: every new doc lists its registry slug inline; matches `registry.ts` exactly.
- Orphan handling: routed through `specs/orphans-to-wire.md` / `specs/orphans-to-flag.md`, consumed by Tasks 13-14.
- Doc prose is intentionally not pre-written: it depends on the Phase 1 survey of live UI.
