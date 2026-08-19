# Zytoona Website — Project Status

> Compact current technical/release truth. Canonical vocabulary: Zytoona HQ
> `ops/VOCABULARY.md`. Durable purpose belongs in `BRIEF.md`; reproduction detail belongs in the
> dated HQ audit.

## Metadata

| Field | Value |
|---|---|
| Project type | Web / Platform |
| Portfolio lifecycle / immediate actor | HQ `projects/PORTFOLIO.md` row `platform-zytoona-website` |
| Last assessed | 2026-07-29 |
| Audit snapshot | HQ `ops/project-audits/zytoona-website/2026-07-29-status-baseline.md` |
| Source boundaries / canonical remote | Repository `AGENTS.md` |
| Canonical repository confidence | High |
| Status confidence | Medium |
| Current milestone | Platform-coverage status package; next website change/release milestone Unknown |
| Product brief | Repository `BRIEF.md` |
| ClickUp project | Unknown |

## Executive status

- **Verified condition:** the public, clean `main` checkout at
  `6972858cfd6d17406a228b432af33e56ca3489ba` contains a complete static brochure/catalog surface,
  live privacy/deletion pages for Words Crush and Uncrossed, root advertising declarations, and an
  Uncrossed Apple association record. Selected critical files match the public `zytoona.com`
  responses byte-for-byte.
- **Main uncertainty:** the named publishing owner, authoritative Cloudflare project/deploy path,
  account/recovery custody, complete per-app compliance coverage, policy owner, and request-handling
  operations are Unknown.
- **Deployment correction (2026-08-19):** Cloudflare's connected `Workers Builds: zytoona` check
  was verified successful on multiple current commits. A redundant GitHub Actions Pages workflow
  failed on every push because `CLOUDFLARE_API_TOKEN` was absent; that duplicate workflow was
  removed so the connected Workers Build is the single automatic publishing path.
- **Immediate actor:** see the portfolio registry. This status package does not authorize a
  website, DNS, console, or compliance change.

## Status by relevant area

| Area | Implementation state | Evidence confidence | Current state | What remains | Unknowns | Evidence/details |
|---|---|---|---|---|---|---|
| Source custody and authority | Implemented | Verified | Public canonical remote, default `main`, clean current checkout, upstream parity, 36 commits, and one historical brochure tag | Name maintainers and publishing/review ownership | Branch protection, account recovery, required reviewers | Git/source and public repository metadata |
| Static site and local routes | Implemented | Verified | Eight tracked HTML entry pages, three JavaScript files, one stylesheet, 74 images, and Cloudflare route/header files; 142 checked local references resolve | Add a documented preview/validation gate appropriate to future changes | Browser/device/accessibility behavior | Source inventory; syntax/reference checks |
| Public web delivery | Implemented | Verified | Root, `www`, policy, deletion, contact, campaign, Words Crush, advertising, association, and redirect checks responded publicly; eight selected critical file hashes matched source | Pin an accepted release/deployment identity and complete post-deploy probe | Whether every deployed asset equals one exact commit | Public HTTP checks, 2026-07-29 |
| Automated deployment | Implemented | Verified | Pushes to `main` invoke Cloudflare's connected `Workers Builds: zytoona` integration; sampled current commits succeeded | Verify the exact check and public route after every authorized push; document rollback | Cloudflare account/recovery ownership and rollback custodian | GitHub commit checks and public Actions metadata, 2026-08-19 |
| Manual deployment/runbook | Partial | Verified | `SEO-NOTES.md` describes direct Wrangler deployment, but that command has not been accepted or tested as the rollback path | Reconcile the runbook with the connected Workers Build and prove rollback | Recovery ownership and safe rollback command | `SEO-NOTES.md`, `wrangler.toml`, 2026-08-19 correction |
| Domain and DNS | Partial | Verified / Reported | `zytoona.com` and `www.zytoona.com` are publicly served by Cloudflare; source records report a completed April 2026 migration and additional game/backend subdomains | Verify account owner, DNS export/recovery, redirect/canonical policy, and rollback | Registrar/zone custody and current non-web subdomain ownership | Public HTTP Verified; tracked operating notes Reported |
| Privacy policies | Partial | Verified | Separate Words Crush/general and Uncrossed pages are live and match source; both say last updated April 2025 | Obtain legal/compliance review and define coverage for every promoted/current app | Policy owner, current accuracy, consent/disclosure sufficiency | Policy source/live hashes |
| Data deletion and contact | Partial | Verified | Words Crush and Uncrossed deletion pages plus contact form post to a third-party relay and promise a 48-hour handling path | Prove delivery, mailbox ownership, identity verification, audit/retention, SLA, and failure handling; decide coverage for other apps | Current operational processing and legal adequacy | Source only; no form was submitted |
| `ads.txt` / `app-ads.txt` files | Implemented | Verified | Live files match current source; all 541 `ads.txt` rows and 502 `app-ads.txt` rows have three/four-field shape. Exact duplicate rows exist in both files | Assign update owner; validate intentional seller set and duplicates through ad-platform review | Current partner authority and change provenance | Source format/hash and public HTTP |
| Per-app `app-ads.txt` coverage | Partial | Reported | A 2026-07-27 HQ console sweep reports coverage verified for five of six live Arabic app pairs and missing/inactive for Ishbakha on both platforms | Reconcile each current/legacy app's store website domain and console status at a dated release gate | Complete current portfolio coverage and affected legacy apps | HQ sweep; not rerun in this website audit |
| App/store catalog mapping | Partial | Verified | Home/campaign source promotes seven games. Six names overlap the live Arabic set and Brain Battle is also present. The Words Crush iOS destination is the English app record rather than the current Arabic iOS record used by the live-game matrix | Confirm intended product/store destinations and whether Parked/legacy products remain promoted | Product owner intent and live link correctness | Source links compared with HQ project records |
| Apple associated domains | Partial | Verified | Valid JSON at the required path names one Uncrossed bundle for all paths and the live bytes match source | Verify native entitlement/domain behavior and serve an explicit intended content type | Current device association and account ownership | JSON check and public HTTP; live response exposed no content type |
| Maintenance documentation | Partial | Verified | One dense SEO/DNS/deploy note exists; no README, CODEOWNERS, package/lock file, test suite, or accepted deploy/rollback runbook exists | Add concise maintenance/ownership and release verification authority after decisions | Supported tooling/version, review cadence, incident owner | Repository inventory |

Implementation states and evidence confidence follow HQ `ops/VOCABULARY.md`. Mixed
`Verified / Reported` rows distinguish current public/source checks from older operating claims.

## Source and delivery tracks

| Track | Product role | Implementation state | Evidence confidence | Current release-path verdict | Evidence |
|---|---|---|---|---|---|
| Repository `main` | Canonical website source | Implemented | Verified | Current source authority; not by itself proof of publishing | Git identity and public repository metadata |
| `zytoona.com` / `www.zytoona.com` | Public delivery | Implemented | Verified | Live for selected surfaces; exact full deployed revision remains Unknown | 2026-07-29 HTTP/hash probes |
| Cloudflare connected Workers Build | Automatic publishing | Implemented | Verified | Current automatic release path; sampled current commit checks succeeded | GitHub commit checks, 2026-08-19 |
| Direct Wrangler / Workers path | Documented manual fallback | Partial | Reported | Ineligible as rollback authority until ownership, command, and recovery are reconciled | `SEO-NOTES.md`; not executed in this correction |

## Key evidence

| Claim | Evidence confidence | Evidence | Date/commit/environment |
|---|---|---|---|
| Canonical source identity | Verified | `origin`, public default branch, `HEAD`, upstream parity, clean worktree | 2026-07-29; `6972858c`; macOS |
| Critical live/source parity | Verified | Root, both policies, both deletion pages, `ads.txt`, `app-ads.txt`, and AASA hashes matched | 2026-07-29; public HTTP |
| Public route availability | Verified | Root/`www` and seven named pages/files returned 200; `/uncrossed` returned the declared 302 | 2026-07-29 |
| Static verification | Verified | Three JavaScript syntax checks, valid AASA JSON, valid sitemap XML, 142 local references with 0 missing | Node `v25.8.2`; local source |
| Deploy automation | Verified | Public Actions metadata: 34 total workflow runs, all failed; current-HEAD deploy step failed | 2026-07-29; no console access |
| Current per-app advertising coverage | Reported / Unknown | HQ 2026-07-27 console sweep; source files contain seller declarations, not app mappings | Not rerun |

## Remaining before a safely maintainable publishing milestone

1. Name the publishing, DNS, policy/compliance, advertising-file, and support-request owners.
2. Select and document one Cloudflare project/topology and one reviewed deploy/rollback path.
3. Obtain one successful current-commit deployment with post-deploy critical-route/hash evidence.
4. Reconcile product/store links, privacy/deletion coverage, AASA behavior, and current per-app
   advertising-domain mappings.
5. Establish form-delivery/SLA evidence and a minimal preview, validation, monitoring, and incident
   handoff.

## Blockers

- Automatic publishing is demonstrably failing and the alternate path's ownership is Unknown.
- No accepted owner/custody record joins GitHub, Cloudflare, DNS, support mail, policies, and
  advertising declarations.
- Complete app coverage cannot be inferred from the existence of root seller files or generic
  website wording.

## Decisions needed

1. **Who owns publishing and recovery across GitHub, Cloudflare, DNS, and the support mailbox?**
   - Options: one named platform owner; or named owners per surface with an explicit escalation
     path.
   - Recommendation: name one accountable release owner plus at least one recovery custodian.
   - Decision owner: Aezaldeen.
2. **How is the connected Workers Build rolled back safely?**
   - The connected Cloudflare Workers Build is the single automatic deployment model.
   - Recommendation: name the recovery custodian and prove one rollback plus post-deploy probe at
     an exact commit before treating the release path as fully recoverable.
   - Decision owner: Aezaldeen / named publishing owner.
3. **What is the intended app and compliance coverage?**
   - Questions: should Words Crush web links target the Arabic or English iOS product; should
     Brain Battle remain promoted; which apps require dedicated privacy/deletion pages; and who
     owns `app-ads.txt` store-domain remediation, including Ishbakha?
   - Recommendation: approve a single current app/store/domain matrix and make every website,
     store, advertising, and policy surface reference it.
   - Decision owner: Aezaldeen with compliance/product owner.

## Next five status actions

1. Obtain read-only owner/topology evidence for GitHub, Cloudflare, DNS, forms/mail, and ad files.
2. Document and test a bounded rollback procedure for the connected Cloudflare Workers Build path.
3. Reconcile the seven promoted game records against current portfolio/store intent.
4. Produce a privacy/deletion/app-association coverage matrix and human legal/compliance questions.
5. Under separate authorization, prove one deployment/rollback/monitoring gate at an exact commit.

## Risks

- Automatic publishing now has one verified connected build path, but rollback custody and a
  tested recovery procedure remain undocumented.
- A root `app-ads.txt` file does not prove that each store record points to the domain or that each
  ad console has accepted it.
- Policies last dated April 2025 and two deletion forms may not cover the full promoted/current app
  catalog.
- Third-party forms can fail, spam, retain data, or reach an unowned inbox without repository
  evidence.
- The public operating note contains detailed DNS/ownership metadata; its public suitability and
  maintenance owner need review without reproducing sensitive-looking values.
- Missing AASA content type and unverified native entitlements may impair universal-link behavior.
- No accepted test, preview, deployment, rollback, or monitoring runbook protects future changes.

## Detailed sources

- Audit evidence: HQ `ops/project-audits/zytoona-website/2026-07-29-status-baseline.md`
- Portfolio lifecycle/immediate actor: HQ `projects/PORTFOLIO.md`
- Product purpose: repository `BRIEF.md`
- Source boundaries and commands: repository `AGENTS.md`
- Current implementation/deploy notes: tracked source and `SEO-NOTES.md`
- External app coverage context: HQ
  `ops/project-audits/published-games/2026-07-27-ios-admob-status-sweep.md`
