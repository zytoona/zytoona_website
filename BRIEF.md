# Zytoona Website — Brief

> Template v1.0 — frozen 2026-07-27 after The Safe and Uncrossed pilots. Durable
> product/business truth; current implementation and publishing state belong in
> `PROJECT_STATUS.md`.

## Identity

| Field | Value |
|---|---|
| Project type | Web / Platform |
| Human owner | Unknown |
| Intended audience | Zytoona players and prospective players; support/privacy requesters; app-store, advertising, and association validators |
| Business/portfolio role | Public Zytoona web presence, game discovery surface, and host for compliance/integration files |
| HQ project ID | `platform-zytoona-website` |

## What

A static public website for Zytoona Games. It presents the company and game catalog, links players
to store listings, publishes privacy and account-deletion information, receives contact/deletion
requests, and exposes advertising and app-association files at stable web paths.

## Product purpose

- Give Arabic-speaking players a clear official entry point to Zytoona and its games.
- Provide stable public support, privacy, deletion, advertising, and app-link endpoints required by
  players and external platforms.
- Preserve one maintainable source repository for public website content and routing declarations.

## Product scope

- Company/home, campaign, contact, and game-landing pages.
- Store and social links for the games intentionally represented by the website.
- Privacy-policy and account/data-deletion request surfaces.
- Root `ads.txt` and `app-ads.txt` seller declarations.
- Apple associated-domain declaration under `.well-known/`.
- Static routing, response-header, search-indexing, and deployment configuration.

## Explicitly out of scope

- Game binaries, gameplay, player data stores, and game/backend implementation.
- Store-console, advertising-console, DNS-provider, or Cloudflare-account administration.
- Legal approval of policy wording or proof that external platforms have accepted a declaration.
- Product lifecycle, release priority, and per-game compliance status.

## Product records

| Record | Location | Confidence |
|---|---|---|
| Public primary domain | `https://zytoona.com` | High for current public availability; ownership/custody is status evidence |
| Canonical source | `https://github.com/zytoona/zytoona_website` | High |
| Store/package map | Linked in source pages; project-level authority remains each game/status record | Medium |
| ClickUp project | Unknown | Low |

## Authoritative product/design sources

- This brief for durable website purpose and scope.
- The current tracked public pages for website wording and presentation.
- Each game's canonical product/status authority for whether and how that game should be promoted.
- Legal/compliance owner approval for policy, deletion, and advertising declarations: Unknown.

## Product-level dependencies

- GitHub source custody and workflow execution.
- Cloudflare delivery, DNS, custom-domain, and deployment-account custody.
- Apple App Store, Google Play, advertising-platform, and associated-domain records.
- A third-party form relay and the support mailbox used by contact/deletion forms.
- Accurate per-game product identity and compliance ownership.

## Durable constraints and decisions

- Public compliance paths such as `/app-ads.txt`, `/ads.txt`, privacy pages, deletion pages, and
  `/.well-known/apple-app-site-association` are external contracts and must not be moved or changed
  casually.
- Seller/account identifiers, store destinations, app associations, and policy wording are
  product-specific records; source presence alone does not prove external-platform coverage.
- Website changes do not authorize DNS, store, advertising, game, or backend changes.
- Never expose credential, token, provider-account, or secret values in source, logs, audits, or
  review output.

## Links

- Detailed status: repository `PROJECT_STATUS.md`
- Source boundaries and operating rules: repository `AGENTS.md`
- Current lifecycle and immediate actor: HQ `projects/PORTFOLIO.md` row
  `platform-zytoona-website`
- Audit evidence: HQ
  `ops/project-audits/zytoona-website/2026-07-29-status-baseline.md`
