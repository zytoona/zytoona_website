# Zytoona Website Ads and Cross-Promotion Experiment Plan

**Status:** Revised design proposal for director review. No implementation, AdSense change,
analytics change, deployment, or publication is authorized by this document.

**Prepared:** 2026-08-18

**Measurement window:** 30 complete days per approved experiment, followed by the applicable
AdSense and store-reporting settlement delay before the final readout.

## 1. Objective

Determine whether Zytoona can remove the advertising formats that make its official website feel
cheap, add premium first-party promotion of related Zytoona games, retain an acceptable amount of
third-party revenue, and restore the exact previous state if the result is unacceptable.

This is not one large before/after change. It is a staged program in which each stage answers one
question:

1. **Ad-format experiment:** What revenue and UX change follows from removing intrusive Auto Ads
   formats while retaining in-page Auto Ads?
2. **Cross-promotion experiment:** Do restrained Zytoona game cards generate useful store interest
   without reducing the source game's primary store-button conversion?
3. **Priced brand decision:** After the experiment evidence exists, which company, product,
   legal, and support pages should become completely third-party-ad-free?
4. **Optional placement experiment:** Only if third-party revenue is still desired, can one manual
   campaign-page unit provide enough value to justify its presence?

Revenue, website clicks, store visits, and store-attributed installs remain separate outcomes.
They must not be collapsed into one monetary score without an approved per-game value or LTV
method.

## 2. Current baseline

The following authenticated AdSense observations were read on 2026-08-18. They are planning
evidence, not the final experiment baseline.

| Metric | Observed value |
|---|---:|
| Last 30 days estimated earnings | ILS 540.44 |
| Last full calendar month estimated earnings | ILS 587.20 |
| Last 30 days page views | 394,250 |
| Last 30 days page RPM | ILS 1.37 |
| Last 30 days impressions | 137,589 |
| Last 30 days clicks | 7,967 |

Last-30-day page distribution:

| Page or group | Estimated earnings | Share of total |
|---|---:|---:|
| `/privacy-policy/` on `www` | ILS 267.06 | 49.4% |
| `/campaign/` on `www` | ILS 193.59 | 35.8% |
| `/privacy-policy-uc/` on `www` | ILS 41.19 | 7.6% |
| Homepage on `www` and apex combined | ILS 31.47 | 5.8% |
| All remaining reportable and filtered traffic | ILS 7.13 | 1.3% |

The Words Crush page did not appear as a reportable row, including after filtering. AdSense warns
that low-traffic rows are filtered, so its direct earnings are small and not separately
reportable; this does not prove exact zero.

Current AdSense configuration observed on 2026-08-18:

- Auto Ads: on.
- Auto optimise: on.
- Intent-driven formats: 1 of 1 enabled.
- Overlay formats: 3 of 3 enabled.
- In-page formats: 1 of 2 enabled.
- Page exclusions: zero.

The aggregate click-to-impression ratio is approximately 5.8%. Before any change, capture the
AdSense Policy Centre state so the trial begins from a known account condition. Do not infer a
policy problem from the ratio alone.

### 2.1 Required frozen baseline before launch

Export at least 90 complete days of daily AdSense data, including:

- estimated earnings and, when available, finalized earnings;
- page URL, host form (`www` or apex), country, platform/device, and traffic source;
- page views, impressions, clicks, page RPM, and impression RPM; and
- policy warnings and material site-availability incidents.

Also capture the available per-game install/DAU series for the same dates. Privacy-page traffic may
come from game users opening policy links, so app activity is a possible revenue confounder rather
than independent website demand.

Use the 90-day series to calculate normal daily and weekday variance and the minimum effect that a
30-day test can reasonably distinguish. Freeze the exact preceding 30 complete days as the
headline comparison period, but use the longer series to interpret noise, seasonality, traffic-mix
changes, and later finalized-earnings adjustments.

## 3. Recommended staged program

### Stage A — randomized AdSense format-reduction experiment

**Question:** Can Zytoona remove the formats most associated with a cheap or interruptive
experience without an unacceptable revenue loss?

**Target variation:**

- disable intent-driven formats;
- disable anchor, vignette, and side-rail overlay formats;
- retain in-page Auto Ads for this stage;
- retain the current page eligibility and zero exclusions; and
- disable automatic winner selection.

Run this through AdSense's own Auto Ads experiment split if the live account confirms that the
selected format changes are supported. Google states that Auto Ads experiments can compare format
and ad-load settings, but cannot test page exclusions. If the exact variation cannot be created in
the console, stop and redesign the stage; do not approximate it silently.

This stage requires no website deployment. Before starting, record a written settings inventory
and screenshots of every original and variation setting. AdSense settings are not versioned in
Git.

**30-day output:** randomized original-versus-variation revenue, RPM, impressions, clicks, and any
available AdSense experiment confidence/result, plus a visual review of the variation on named
mobile and desktop routes. Do not let AdSense apply a winner automatically.

### Stage B — 50/50 Words Crush cross-promotion experiment

**Question:** Do premium cross-promotion cards generate store interest without materially reducing
clicks on the Words Crush primary download actions?

This stage may run during the same calendar period as Stage A only after the website deployment
and rollback path is separately resolved and authorized. The two stages have separate variants,
metrics, and conclusions.

Eligible visitors to `/wordscrush/` receive a stable 50/50 assignment:

- **Control:** current Words Crush page without cross-promotion cards.
- **Variant `wc_crosspromo_v1`:** one three-card `More games from Zytoona` section after the
  game-mode/product-proof content and before the final Words Crush call to action.

Persist assignment in first-party browser storage for the experiment window without creating a
personal identifier. A user who blocks storage receives a documented fallback assignment. Log the
variant on every experiment event. The implementation design must define how cache, duplicate
tabs, and storage clearing affect assignment before launch.

Candidate related games are Lost Word 2, Uncrossed, and Rashfa. Their lifecycle, artwork, product
name, platform availability, package/bundle identity, store destination, language target, and
privacy/deletion coverage must be reconciled with each game's canonical authority before the
director approves the final candidates.

Card rules:

- three cards maximum;
- real approved icon/artwork, one short sentence, and one primary store action;
- no modal, forced carousel, autoplay, countdown, flashing animation, fake notification, or
  WhatsApp-share prompt;
- no unverifiable rating, download, popularity, or availability claim;
- match the source-page language unless a different audience is explicitly approved; and
- either rotate card order with a documented balanced method and log `card_position`, or keep a
  fixed order and explicitly refuse to interpret per-game CTR as independent of position.

### Stage C — priced ad-free-page decision

Removing ads from trust and product surfaces is principally a brand decision, not a useful test of
whether zero ads earn zero revenue. The main and Uncrossed privacy pages currently produce about
57% of observed revenue, while the campaign page's current 35.8% includes the full Auto Ads stack
and is not a forecast for one bottom unit.

After Stage A, the director sets the maximum monthly ILS amount Zytoona is willing to forgo for a
cleaner official presence. Then approve or reject explicit exclusions for:

| Route family | Recommended brand treatment |
|---|---|
| Homepage, including apex and `www` | Third-party-ad-free |
| `/wordscrush/` | Third-party-ad-free |
| Privacy-policy routes | Third-party-ad-free |
| Contact route | Third-party-ad-free |
| Data-deletion routes | Third-party-ad-free |
| `/campaign/` | Separate human decision based on its product role |
| Future/unlisted routes | Excluded by default until explicitly reviewed |

The final implementation specification must define whether each exclusion matches an exact URL or
URL prefix, and how apex/`www`, query strings, trailing slashes, redirects, and localized variants
are handled. It must also determine whether the AdSense loader remains on excluded pages and review
the resulting consent/CMP obligations for relevant regions.

Measure the realized cost against the Stage A chosen-format baseline, but describe it as the price
of the brand decision rather than a randomized experiment.

### Stage D — optional manual campaign placement

Only if the director retains third-party advertising on `/campaign/`, test at most one official
AdSense responsive ad unit in a stable reserved container near the bottom of the content.

The unit must be labelled `إعلان` / `Advertisement`, remain separated from game/store actions,
never imitate a Zytoona card, and never be sticky, floating, full-screen, vignette, side-rail, or
intent-driven. "Native" means calm integration into page spacing, not disguise.

Stage D starts only after Stage A establishes a campaign-page baseline under the chosen Auto Ads
formats. Do not change page exclusions and placement type at the same time.

## 4. Cross-promotion analytics

Keep the existing GA4 page measurement. Confirm Enhanced Measurement outbound clicks are enabled,
then add explicit events because generic outbound-click data cannot reliably identify creative,
position, or experiment variant.

### 4.1 Events

`experiment_exposure` fires once per page view after a visible page receives its stable control or
variant assignment.

`cross_promo_impression` fires once per card per page view when at least 50% of the card is visible
for at least one continuous second and the document is visible.

`cross_promo_click` fires immediately before an outbound cross-promotion store navigation.

`primary_store_click` measures Words Crush's own App Store and Google Play buttons in both control
and variant.

Required non-personal parameters:

| Parameter | Example purpose |
|---|---|
| `experiment_id` | `wc_crosspromo_2026_v1` |
| `variant` | `control` or `wc_crosspromo_v1` |
| `source_page` | `/wordscrush/` |
| `source_game` | `words_crush` |
| `placement_id` | `wc_more_games_v1` |
| `creative_version` | `v1` |
| `target_game` | Approved stable game slug |
| `card_position` | `1`, `2`, or `3` |
| `store` | `google_play` or `app_store` |
| `destination_type` | `cross_promo` or `primary` |

Do not send email addresses, player IDs, IP-derived values, free-form user text, or other personal
data in event names or parameters. Register only the custom dimensions required by the experiment.

### 4.2 Counting and QA rules

- Count total click events separately from GA4 users and sessions containing a click. Do not label
  event count as unique clicks.
- Fire no impression while the document is hidden, during prefetch, or before the visibility-time
  condition is satisfied.
- Deduplicate qualifying impressions with an in-memory per-page-view card set; do not suppress a
  genuine later click merely because the same link was previously clicked.
- Define reload, back/forward cache, and single-page re-entry behavior before implementation.
- Verify exactly one event for one test action, correct parameters, no nested-element duplicates,
  and successful store navigation when analytics is blocked or slow.
- Analytics must not noticeably delay the user's store navigation.

### 4.3 Store-attributed installs

Website events prove impressions and clicks, not installations.

For Apple platforms, create an App Store Connect campaign link for each approved source-placement
and target-game combination. Apple campaign reporting can attribute product-page activity and
first-time downloads, subject to access, reporting delay, and privacy thresholds. Provider and
campaign tokens must come from the responsible store owner.

For Google Play, use approved UTM-tagged Play links for available Play Console traffic-source
reporting. Reliable app-side attribution may additionally require the target Android app to read
Google Play Install Referrer once after first launch and report only approved campaign fields.
That is separate per-game implementation and release work unless separately authorized.

Before launch, record each store's expected reporting lag and minimum reporting threshold. The
final read occurs only after those windows settle. If attributed installs remain suppressed or
unavailable, report `Unknown`; do not infer zero and do not substitute store clicks.

Official references:

- [GA4 outbound-click measurement](https://support.google.com/analytics/answer/13566436)
- [GA4 Enhanced Measurement events](https://support.google.com/analytics/answer/9216061)
- [Apple campaign links](https://developer.apple.com/help/app-store-connect-analytics/acquisition/campaign-links/)
- [Google Play Install Referrer](https://developer.android.com/google/play/installreferrer/)
- [Google Play acquisition reporting](https://support.google.com/googleplay/android-developer/answer/9859173)
- [AdSense Auto Ads experiments](https://support.google.com/adsense/answer/9726342)
- [AdSense Auto Ads formats](https://support.google.com/adsense/answer/9261805)

## 5. Pre-registered decision thresholds

The experiment is not launch-ready until every `TBD` below is replaced from the 90-day variance
analysis and explicit director judgment.

| Decision input | Pre-launch value |
|---|---|
| Maximum monthly ILS the director will forgo for brand quality | **TBD — director** |
| Stage A minimum detectable revenue/RPM effect | **TBD — analyst from 90-day series** |
| Stage A maximum acceptable revenue/RPM reduction | **TBD — director** |
| Stage B minimum sample/exposure required per variant | **TBD — analyst** |
| Stage B minimum cross-promotion CTR worth retaining | **TBD — director after sample analysis** |
| Maximum acceptable relative decrease in primary Words Crush store-click rate | **TBD — director** |
| Day-7 technical/safety abort actions | Hard triggers in Section 7 |
| Store-attribution minimum count and consequence of an `Unknown` result | **TBD — store owner/director** |

Do not choose thresholds after seeing experiment results. If Words Crush traffic cannot support the
minimum sample in 30 days, the honest result is inconclusive; do not extend or reinterpret it
silently.

## 6. Reporting

### Stage A

- original versus variation estimated earnings, RPM, impressions, and clicks;
- available AdSense confidence/result and exact traffic split;
- page-level and country/device effects where reportable; and
- named mobile/desktop visual observations.

### Stage B

- exposure count by variant;
- card impressions and GA4 users/sessions with a cross-promotion click;
- cross-promotion CTR by variant, placement, target, store, and position, subject to the declared
  position interpretation;
- primary Words Crush store-button CTR by variant;
- store-reported listing visits/clicks and attributed first-time downloads after reporting settles;
  and
- `Unknown` install outcomes caused by threshold, access, or instrumentation gaps.

### Permanent separation

Report these as four distinct blocks:

1. third-party revenue in ILS;
2. cross-promotion website clicks;
3. store-reported listing visits/clicks, separated by store definition; and
4. store-attributed first-time downloads, including suppressed/Unknown values.

Do not assign a monetary value to an install until Zytoona approves a defensible per-game method.

## 7. Rollout, change control, and rollback

### Before any stage

1. Name owners for website source/review, Cloudflare deploy/rollback, AdSense, GA4, Apple campaign
   links, Google Play reporting, and each promoted game's product/store/compliance authority.
2. For any source stage, resolve the canonical Cloudflare deployment path. Current tracked status
   says the checked-in GitHub Actions path failed historically and the alternate manual path is not
   accepted authority.
3. Capture the exact source commit and tree state, AdSense original/variation settings and
   screenshots, GA4 configuration, store links, policy/CMP state, and frozen baseline exports.
4. Create a dedicated implementation branch/worktree and immutable baseline reference only after
   task and release authorization.
5. Validate desktop/mobile layouts, accessibility basics, event behavior, destinations, and
   rollback in preview/staging.
6. Obtain explicit director approval before an AdSense experiment start/Apply, GA4 configuration
   change, production deploy, or publish step.

### Production source-stage start

Record one launch timestamp and exact deployed commit. Verify every affected route, experiment
assignment, one real store navigation per platform without installing, analytics DebugView or
realtime receipt, policy/CMP behavior, response headers, and rollback readiness.

### During a 30-day source experiment

- Day 1: technical health only; do not judge commercial performance.
- Day 7: check tracking, primary conversion, policy status, layout, and traffic composition.
- Day 15: midpoint report without tuning the variant.
- Day 30: freeze website results, then wait for declared store/reporting settlement before the
  final director scorecard.

Maintain a change register. Safety or measurement-definition changes stop the affected experiment
and normally require a new window. Pre-approved cosmetic fixes that cannot affect eligibility,
assignment, visibility, click behavior, or layout placement may be logged without resetting the
clock.

### Immediate rollback triggers

- provider policy warning plausibly caused by the experiment;
- ad or card overlapping content or a primary action;
- broken privacy, contact, deletion, store, or promotion destination;
- analytics emitting personal data or materially duplicating/misclassifying events;
- broken variant assignment or material cross-contamination;
- material accessibility or supported-viewport regression; or
- director instruction to stop.

Rollback restores the exact baseline source commit and documented provider settings through the
approved path, then verifies public routes and configuration. AdSense delivery and revenue may
need a re-optimisation/recovery period after settings are restored; configuration rollback does not
guarantee immediate revenue recovery.

## 8. Opus consultation and Codex reconciliation

One bounded, read-only Opus consultation was completed on 2026-08-18. It was advisory, not
independent verification, implementation acceptance, or production authority.

### Agreed

- The original draft overstated likely revenue retention: `/campaign/` contributes 35.8% under the
  current full Auto Ads stack, so one bottom unit would retain materially less than that ceiling.
- Removing ads from privacy pages is the expensive brand choice because those routes contribute
  about 57% of observed revenue.
- Clicks and installs must remain distinct; the draft's attribution boundary was sound.
- A 90-day variance view, app-activity covariates, policy/CMP snapshot, numeric guardrails,
  reporting-delay rules, and complete provider-settings inventory are required before launch.
- AdSense automatic winner selection must remain off.

### Still debated

- Whether ads on legal/support surfaces are unacceptable in principle or acceptable after
  intrusive formats are removed is a director value judgment.
- Whether `/campaign/` is an official brand surface or a separate acquisition surface eligible for
  a restrained third-party ad is unresolved.
- The exact monthly revenue sacrifice, cross-promotion CTR, primary-conversion guardrail, and
  minimum sample thresholds cannot be selected from the current evidence.

### Recommendation

Adopt the staged program in this revision:

1. randomized AdSense format reduction first, with no website deployment;
2. separate 50/50 Words Crush cross-promotion measurement once deploy/rollback authority is safe;
3. make legal/company/product exclusions as a priced director decision using Stage A evidence; and
4. consider one campaign-page manual unit only as a later single-variable test.

### Human decision needed

Before implementation, the director must approve:

1. the maximum monthly ILS Zytoona will forgo for brand quality;
2. whether legal/support pages and `/campaign/` may contain third-party ads at all;
3. the promoted games, creative, language, and store destinations;
4. numeric success, guardrail, sample, and `Unknown`-install rules; and
5. named owners and authority for deploy/rollback, AdSense, GA4, Apple, Google Play, and any
   app-side Install Referrer work.

