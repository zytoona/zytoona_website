# Zytoona Website — Agent Instructions

> Stable cross-agent operating guidance. Volatile source/deployment/app-coverage facts belong in
> `PROJECT_STATUS.md` and dated audit evidence.

## Mission and scope

Maintain the static Zytoona public website and its game-discovery, support, privacy, deletion,
advertising-declaration, app-association, routing, and delivery configuration when a task
explicitly authorizes that work. Status work may inspect source and public behavior; it must not
silently become publishing, DNS, compliance, store, advertising, or game implementation.

## Authority map

| Authority | Owns | Does not own |
|---|---|---|
| Repository `BRIEF.md` | Durable website purpose, audience, scope, business role, and constraints | Current deploy state or task queue |
| This `AGENTS.md` | Stable operating rules, repository conventions, commands, protected areas, and handoff expectations | Product priority or current completion |
| Repository `PROJECT_STATUS.md` | Current implementation/release state, evidence confidence, remaining work, Unknowns, and open decisions | Detailed design history or legal approval |
| Tracked public pages/configuration | Intended website content, routes, and checked-in deployment behavior | Proof of live deployment, external acceptance, or product intent outside this site |
| Per-game canonical status/product records | Whether and how each game should be represented | Website deployment mechanics |
| HQ portfolio registry | Lifecycle intent and immediate actor | Detailed website truth |
| Provider/store/ad/DNS records | Current external configuration when independently inspected | Source authority or permission to change it |

Report disagreement between these authorities as drift. Do not resolve it by changing a public
page, store record, DNS record, or provider project without explicit authorization.

## Source-boundary matrix

| Role | Canonical remote | Default branch | Repository-relative boundary |
|---|---|---|---|
| Website source and checked-in delivery configuration | `https://github.com/zytoona/zytoona_website.git` | `main` | Repository root |
| Per-game source/status | Each game's canonical repository/HQ status package | Varies | External to this repository |
| Portfolio lifecycle | `https://github.com/zytoona/zytoona-hq.git` | `master` | `projects/PORTFOLIO.md` |

Exact audited commits, local paths, workflow-run counts, live hashes, and provider state belong in
dated evidence or `PROJECT_STATUS.md`, not this stable file.

## Repository map

- `index.html` and `campaign/` — company/game catalog and store destinations.
- `wordscrush/` — Words Crush landing page.
- `contact/` — public contact form.
- `privacy-policy*/` — current tracked privacy pages.
- `data-deletion-*/` — current tracked deletion-request pages.
- `ads.txt` / `app-ads.txt` — public seller declarations; existence is not per-app acceptance.
- `.well-known/apple-app-site-association` — Apple associated-domain declaration.
- `_redirects`, `_headers`, `robots.txt`, `sitemap.xml` — public routing/header/indexing contracts.
- `wrangler.toml` — checked-in Cloudflare Workers deployment configuration. Pushes to `main` are
  built and published by Cloudflare's connected Workers Build integration.
- `SEO-NOTES.md` — detailed operating/history note; verify against current source and external
  state before relying on it.
- `css/`, `js/`, `images/` — static presentation assets.

## Existing commands and verification

| Purpose | Command/path | Documentation/verification caveat |
|---|---|---|
| Automatic deploy | Push to `main` invokes Cloudflare's connected Workers Build | This is a state-changing release path. Verify the commit's `Workers Builds: zytoona` check and public route after every authorized push |
| Manual deploy | `npx wrangler deploy` | Documented in `SEO-NOTES.md`, not accepted or rerun; treat it only as an unproven fallback until ownership and rollback are established |
| Build | None documented | Static files are deployed directly; no package/lock file exists |
| Test suite | None documented | Do not invent a green test claim |
| JavaScript syntax | `node --check js/main.js` and the equivalent command for the other tracked JavaScript files | Read-only syntax evidence only; not browser/runtime proof |
| AASA JSON | `jq -e . .well-known/apple-app-site-association >/dev/null` | Read-only shape check; not device association proof |
| Sitemap XML | `xmllint --noout sitemap.xml` | Read-only syntax evidence only |

Do not use `npx`, install dependencies, publish, or submit forms during a read-only audit.

## Engineering and product constraints

- The repository is a static site: directory `index.html` files define public route roots.
- `_headers` and `_redirects` are hosting contracts; a generic local file server does not prove
  their live behavior.
- `ads.txt` and `app-ads.txt` must stay at the public root. Validate format, external ownership,
  and intended seller set without copying identifiers into review output.
- The AASA file must stay at `/.well-known/apple-app-site-association`; validate both response
  behavior and the intended app-entitlement mapping.
- Store URLs, bundle/package identity, privacy/deletion coverage, and lifecycle intent must be
  reconciled against each game's authority; labels or icons are not enough.
- Public live/source hash parity proves only the checked files, not an exact complete deployed
  commit.
- Treat user-entered contact/deletion data as sensitive operational data.

## Protected and sensitive areas

- Never print or commit provider credentials, workflow secret values, DNS ownership tokens,
  mailbox credentials, console data, or private recovery material.
- `SEO-NOTES.md` contains detailed operational/DNS ownership material. Read only the fields needed
  for the task and do not reproduce sensitive-looking values.
- Advertising and analytics identifiers are public integration data but should be referenced by
  category/path rather than copied into audits or chat.
- Do not submit the contact or deletion forms as a test without explicit authorization, a safe
  test identity, and an agreed cleanup/retention plan.
- Do not change root seller declarations, policies, deletion promises, redirects, app
  associations, or store destinations without the responsible product/compliance owner.

## Do-not rules

- Do not deploy, publish, change DNS, rotate credentials, or edit provider/store/ad-console state
  unless the task explicitly authorizes it.
- Do not interpret a workflow trigger as a successful deployment; inspect the run conclusion.
- Do not treat live selected-file parity as proof that every deployed asset comes from one commit.
- Do not treat `app-ads.txt` presence as proof of coverage for a specific app.
- Do not turn a policy/store-link discrepancy into a content correction without owner approval.
- Do not expose operational identifiers or secret-like values while gathering evidence.
- Do not turn `PROJECT_STATUS.md` next actions into implementation automatically.

## Status-documentation rules

- `BRIEF.md` owns durable product purpose, scope, role, and constraints.
- HQ `projects/PORTFOLIO.md` owns lifecycle intent and immediate actor.
- `PROJECT_STATUS.md` owns current technical/publishing truth, confidence, decisions, and Unknowns.
- `AGENTS.md` owns stable operating guidance.
- Dated HQ audits own command output, live probes, hashes, and point-in-time provider evidence.
- Use **Unknown** where evidence is insufficient. Separate source, public HTTP, public workflow,
  console, and human-reported evidence.

## Fresh-agent startup

1. Confirm repository root, remote, default/current branch, commit, upstream, and dirty state.
2. Read `BRIEF.md`, `PROJECT_STATUS.md`, this file, and the linked HQ task/audit.
3. Restate whether the task is status-only, content implementation, or authorized publishing.
4. Identify the product/compliance owner for every app link, policy, deletion, seller, or AASA
   change.
5. For a release task, name the exact Cloudflare project/path, preflight, post-deploy probes,
   rollback, and recovery custodian before executing anything.
6. Keep secret-like values and form submissions out of ordinary evidence collection.

## Handoff

Report:

1. Exact source/config/content files changed.
2. Exact commit/environment and safe validation results.
3. Whether a deployment was authorized and, if so, its run/result and rollback evidence.
4. Current public route/hash checks and their bounded meaning.
5. App/store/policy/advertising coverage that remains Reported or Unknown.
6. Human decisions and external authorities still required.
