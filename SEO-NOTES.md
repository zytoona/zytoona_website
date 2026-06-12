# Zytoona Website - SEO & Migration Notes

## Google Search Console
- Verification code: `fR2EPzsPJ9nxbU-nr9KcH3HFmRQKnae9NxATAg1QdMg`
- CRITICAL: Must keep this tag to maintain Search Console access after domain switch

## Old Wix SEO Settings

### Title Tags (from Wix settings)
- Old: `العاب زيتونة, العاب اندرويد وايفون مجانية Zytoona Games`
- New (Wix): `Zytoona Games العاب زيتونة أفضل الألعاب العربية . العاب اندرويد ايفون`

### Meta Description (from Wix settings)
- Old: `Zytoona Games العاب زيتونة, العاب عربية ايفون و اندرويد, تسلية وفائدة للعائلة العربية العاب مجانية بجودة عالية`
- New (Wix): `العاب شركة زيتونة أفضل العاب العربية. تسلية تفكير تشويق تحميل العاب ايفون اندويد مجانية Zytoona Games`

### OG Share Tags (from Wix settings)
- og:title: `العاب زيتونة, العاب اندرويد وايفون مجانية Zytoona Games`
- og:description: `Zytoona Games العاب زيتونة, العاب عربية ايفون و اندرويد, تسلية وفائدة للعائلة العربية العاب مجانية بجودة عالية`
- og:image: `/images/og_social.png` (450x450 Zytoona logo, from old Wix site)
- Note: A larger 2500x1330px banner would be ideal for Facebook/Twitter sharing

### Wix Site Settings
- Search engine indexing: ON
- Facebook page: zytoonaGames
- Had RSS feed at /blog-feed.xml

## Social Media Links
- Facebook: https://www.facebook.com/zytoonaGames/
- Instagram: https://www.instagram.com/zytoona.games/
- X/Twitter: https://x.com/zytoonagames

## Google Analytics 4
- Measurement ID: `G-6QT3NP9PSZ`
- Added to all 8 HTML pages (same ID as old Wix site)
- Dashboard: https://analytics.google.com (sign in with your Google account)
- Shows: visitors, page views, traffic sources, geography, device types
- **Search terms**: See Google Search Console (below), not GA4

## Google Search Console
- Verification: meta tag in index.html + DNS TXT records
- Dashboard: https://search.google.com/search-console (select zytoona.com property)
- Shows: which search terms bring visitors, click-through rates, impressions, average position
- **After DNS switch**: may need to re-verify ownership and resubmit sitemap
- Sitemap URL: `https://zytoona.com/sitemap.xml`

## Google Ad Publisher ID
- Publisher ID: `pub-2296352381124224`
- AdSense (website): Auto Ads enabled via script tag on all 8 HTML pages
- AdMob (mobile apps): Configured via app-ads.txt (502 entries)
- ads.txt (website): 541 entries for AdSense + mediation partners
- Script: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2296352381124224" crossorigin="anonymous"></script>`
- Type: Auto Ads (Google decides placement — same as old Wix setup)

## DNS Records (from GoDaddy/Wix - MUST PRESERVE)

### A Records (servers)
| Host | IP | Notes |
|------|-----|-------|
| zytoona.com | 185.230.63.171 | Wix - will change to Cloudflare |
| zytoona.com | 185.230.63.186 | Wix - will change to Cloudflare |
| zytoona.com | 185.230.63.107 | Wix - will change to Cloudflare |
| lb.bb.zytoona.com | 46.101.122.13 | Game server (Brain Battle) - KEEP |
| lb.bb-ar.zytoona.com | 142.93.98.131 | Game server (BB Arabic) - KEEP |
| lb.bb-test.zytoona.com | 165.22.23.138 | Game server (BB test) - KEEP |
| lab.zytoona.com | 159.223.30.105 | Lab server - KEEP |
| parse.uc.zytoona.com | 46.101.102.230 | Parse server (Uncrossed) - KEEP |
| uncrossed.zytoona.com | 199.36.158.100 | Uncrossed game - KEEP |
| parse.wc.zytoona.com | 161.35.28.104 | Parse server (Words Crush) - KEEP |
| parse2.wc.zytoona.com | 159.65.125.174 | Parse server 2 (WC) - KEEP |
| wordscrush.zytoona.com | 151.101.65.195 | Words Crush site - KEEP |
| wordscrush.zytoona.com | 151.101.1.195 | Words Crush site - KEEP |

### CNAME Records
| Host | Points To | Notes |
|------|-----------|-------|
| _dmarc.zytoona.com | _dmarc.wixemails.com | Wix email DMARC - review if still needed |
| s1._domainkey.zytoona.com | s1._domainkey.zytoona.com.s012.ascendbywix.com | Wix DKIM - review |
| s2._domainkey.zytoona.com | s2._domainkey.zytoona.com.s012.ascendbywix.com | Wix DKIM - review |
| sel1._domainkey.zytoona.com | sel1._domainkey.zytoona.com.s012.ascendbywix.com | Wix DKIM - review |
| 2qctjzadulrs..._domainkey.accounts.zytoona.com | ...dkim.amazonses.com | AWS SES DKIM - KEEP |
| mc7hvpeesqbb..._domainkey.accounts.zytoona.com | ...dkim.amazonses.com | AWS SES DKIM - KEEP |
| rtxzpddjultb..._domainkey.accounts.zytoona.com | ...dkim.amazonses.com | AWS SES DKIM - KEEP |
| email.zytoona.com | email.secureserver.net | GoDaddy email - KEEP if using |
| links.zytoona.com | cname.dynalinks.app | Dynamic links - KEEP |
| m.zytoona.com | www7.wixdns.net | Wix mobile - DROP (replacing Wix) |
| sg.zytoona.com | sg.zytoona.com.s012.ascendbywix.com | Wix SendGrid - review |
| uncrossed2.zytoona.com | cname.dynalinks.app | Dynamic links - KEEP |
| www.zytoona.com | cdn1.wixdns.net | Wix CDN - will change to Cloudflare |

### TXT Records
| Host | Value | Notes |
|------|-------|-------|
| zytoona.com | google-site-verification=fR2EPzsPJ9nxbU-nr9KcH3HFmRQKnae9NxATAg1QdMg | Google verification - KEEP |
| zytoona.com | google-site-verification=s8BkqSnjle7jYoM-vIxfwXEL6tsX3H1Bq3Ybb4p77j0 | 2nd Google verification - KEEP |
| _dmarc.accounts.zytoona.com | v=DMARC1; p=none; | Email DMARC - KEEP |
| mail.accounts.zytoona.com | v=spf1 include:amazonses.com ~all | AWS SES SPF - KEEP |
| uncrossed.zytoona.com | 199.36.158.100 | Uncrossed TXT - KEEP |
| _acme-challenge.parse.wc.zytoona.com | b-SHh_66gPdL-86GfVrVf0VML80K21OYykUb5bB0buk | SSL cert challenge - KEEP |

### SRV Records
| Service | Protocol | Host | Weight | Port | Target | Priority |
|---------|----------|------|--------|------|--------|----------|
| http | tcp | zytoona.com | 10 | 27017 | _mongodb._tcp.parse.wc.zytoona.com | 10 |

### MX Records (Google Workspace email)
| Host | Points To | Priority |
|------|-----------|----------|
| zytoona.com | aspmx.l.google.com | 1 |
| zytoona.com | alt1.aspmx.l.google.com | 5 |
| zytoona.com | alt2.aspmx.l.google.com | 5 |
| zytoona.com | alt3.aspmx.l.google.com | 10 |
| zytoona.com | alt4.aspmx.l.google.com | 10 |

### NS Records (switched 2026-04-02)
| Host | Value |
|------|-------|
| zytoona.com | haley.ns.cloudflare.com |
| zytoona.com | harley.ns.cloudflare.com |

### Cloudflare Assigned Nameservers (use when ready to switch)
- haley.ns.cloudflare.com
- harley.ns.cloudflare.com
- Cloudflare Zone ID: f031cd556fdeb439c4c3686bb3d5fa45
- Account ID: 3da2cf2e8bcec2af7c01afc160894d5a

### Cloudflare DNS Setup Status (2026-04-02)
- [x] Domain added to Cloudflare (Free plan)
- [x] 37 DNS records configured (13 A, 13 CNAME, 5 MX, 6 TXT)
- [x] All game server A records added (lb.bb, lb.bb-ar, lb.bb-test, lab, parse.uc, parse.wc, parse2.wc, uncrossed, wordscrush)
- [x] AWS SES DKIM records added (accounts.zytoona.com)
- [x] Google Workspace MX records imported
- [x] Google verification TXT records imported
- [x] SPF, DMARC records added for accounts.zytoona.com
- [x] DKIM/email/links records set to DNS-only (not proxied)
- [x] SRV record for MongoDB added via API (_http._tcp, port 27017, target parse.wc.zytoona.com)
- [x] app-ads.txt updated from 1 line to 502 lines (full ad network entries from old Wix site)
- [x] apple-app-site-association added at .well-known/ (for Uncrossed iOS universal links)
- [x] ads.txt updated from 1 line to 541 lines (full AdSense + mediation partners from live Wix site)
- [x] Google Analytics 4 (G-6QT3NP9PSZ) added to all 8 pages
- [x] Google AdSense Auto Ads (ca-pub-2296352381124224) added to all 8 pages
- [x] Favicon set up: favicon.ico (16+32px), favicon.png (64px original from Wix)
- [x] Social sharing image (og:image) set to og_social.png (450x450 Zytoona logo)
- [x] Nameservers switched to Cloudflare (haley.ns + harley.ns) on 2026-04-02
- [x] Custom domains connected: zytoona.com + www.zytoona.com → Cloudflare Workers
- [x] Old Wix A records + www CNAME removed
- [x] Zone active and verified via dig
- [x] WebP images with PNG fallback on wordscrush landing page
- [x] Cache headers configured in _headers file
- [x] Dev artifacts removed (logo_lab.html)
- [x] iOS App Store links corrected across all pages
- [x] Social meta tags (og:image, Twitter cards) added to contact/privacy pages
- [x] Footer links cleaned up (no self-links, no UC/WC labels)
- [x] GTmetrix: D (44%) on Wix → A (96%) on Cloudflare, LCP 6.1s → 504ms
- [ ] Redeploy worker after any static file changes (`npx wrangler deploy` from zytoona-site/)

### Migration Summary
When moving DNS to Cloudflare:
- CHANGE: Root A records (zytoona.com) + www CNAME → Cloudflare Workers
- KEEP: All game server A records (lb.bb, lb.bb-ar, lb.bb-test, lab, parse.*, wordscrush)
- KEEP: All MX records (Google Workspace email)
- KEEP: AWS SES DKIM records (accounts.zytoona.com)
- KEEP: Dynamic links CNAMEs (links, uncrossed2)
- KEEP: TXT records (Google verification, SPF, DMARC)
- KEEP: SRV record (MongoDB)
- DROP: Wix-specific records (m.zytoona.com, wixdns CNAMEs, Wix DKIM)
- REVIEW: email.zytoona.com (GoDaddy email), sg.zytoona.com (Wix SendGrid)

## Static Files That Need Redeployment After Changes

### ads.txt (website AdSense)
- **What**: Ad network authorization file for Google AdSense on the website (541 entries)
- **Location**: `zytoona-site/ads.txt`
- **Live URL**: `https://zytoona.com/ads.txt` (or workers dev URL before DNS switch)
- **When to update**: When adding/removing web ad partners, or when AdSense flags issues
- **How to update**:
  1. Edit `zytoona-site/ads.txt` directly
  2. Redeploy: `cd zytoona-site && npx wrangler deploy`
  3. Verify at the live URL
- **Format**: Each line is `domain, publisher_id, relationship, cert_authority_id`
- **First line must always be**: `google.com, pub-2296352381124224, DIRECT, f08c47fec0942fa0`
- **Note**: This is for **website** ads. `app-ads.txt` is for **mobile app** ads (AdMob).

### app-ads.txt
- **What**: Ad network authorization file for AdMob mediation (502 entries)
- **Location**: `zytoona-site/app-ads.txt`
- **Live URL**: `https://zytoona.com/app-ads.txt` (or workers dev URL before DNS switch)
- **When to update**: When adding/removing ad mediation partners, or when Google AdMob requests changes
- **How to update**:
  1. Edit `zytoona-site/app-ads.txt` directly
  2. Redeploy: `cd zytoona-site && npx wrangler deploy`
  3. Verify at the live URL
- **Format**: Each line is `domain, publisher_id, relationship, cert_authority_id`
- **First line must always be**: `google.com, pub-2296352381124224, DIRECT, f08c47fec0942fa0`

### apple-app-site-association
- **What**: iOS universal links config for Uncrossed app (Team ID: 6U24SZ8A74)
- **Location**: `zytoona-site/.well-known/apple-app-site-association`
- **Live URL**: `https://zytoona.com/.well-known/apple-app-site-association`
- **When to update**: When adding new iOS apps or changing universal link paths
- **How to update**: Same as above — edit file, then `npx wrangler deploy`
- **Important**: File must be served as `application/json` with no .json extension in URL

## Domain Migration (COMPLETED 2026-04-02)
- [x] Changed nameservers at GoDaddy from Wix → Cloudflare (haley.ns + harley.ns)
- [x] Pointed root + www to Cloudflare Workers (custom domains)
- [x] Removed old Wix A records (185.230.63.x) and www CNAME (cdn1.wixdns.net)
- [x] Set up 301 redirects in _redirects file (app-landing-page, data_deletion paths, uncrossed)
- [x] og:url set to https://www.zytoona.com on all pages
- [x] Verified Google Search Console still accessible
- [x] Wix Premium plan cancelled (2026-04-03)
- [ ] Create a proper og:image social sharing banner (2500x1330px recommended)
- [ ] Submit sitemap to Google Search Console (https://zytoona.com/sitemap.xml)
- [ ] Monitor 404s in Search Console after migration
- [ ] Re-enable Brain Battle Android button when app returns to Play Store

## Post-Deploy Verification Checklist
- [ ] Verify ads.txt returns 541 lines at /ads.txt (AdSense domain ownership)
- [ ] Verify app-ads.txt returns 502 lines at /app-ads.txt (AdMob domain ownership)
- [ ] Verify apple-app-site-association returns JSON at /.well-known/apple-app-site-association
- [ ] Verify apple-app-site-association Content-Type is application/json (may need _headers rule)
- [ ] Verify Google Search Console verification meta tag is in index.html
- [ ] Verify Google site verification DNS TXT records resolve correctly
- [ ] Check AdSense dashboard for ads.txt warnings after DNS switch
- [ ] Check AdMob dashboard for app-ads.txt warnings after DNS switch

## Pages on the site
- / (main landing)
- /wordscrush/ (Words Crush landing page)
- /campaign/ (download all games page)
- /contact/ (Arabic)
- /privacy-policy/ (Words Crush)
- /privacy-policy-uc/ (Uncrossed, linked from app only)
- /data-deletion-wc/ (Words Crush, linked from app only)
- /data-deletion-uc/ (Uncrossed, linked from app only)

## iOS App Store IDs
| Game | App Store ID | URL |
|------|-------------|-----|
| Words Crush | id1530922357 | https://apps.apple.com/us/app/words-crush-word-puzzle-game/id1530922357 |
| Uncrossed | id6477771169 | https://apps.apple.com/app/id6477771169 |
| Lost Word 2 | id1063063902 | https://apps.apple.com/app/id1063063902 |
| One Hit | id1108811184 | https://apps.apple.com/app/id1108811184 |
| Rashfa | id1050833737 | https://apps.apple.com/app/id1050833737 |
| Robonza | id1150867693 | https://apps.apple.com/app/id1150867693 |
| Brain Battle | id1197870807 | https://apps.apple.com/us/app/brain-battle/id1197870807 |

## Brain Battle Android
- Removed from Google Play Store (as of 2026-04)
- Google Play button greyed out on /campaign/ page (opacity:0.4, pointer-events:none)
- data-android="" on index.html for Brain Battle
- When restored: remove inline style from campaign, restore data-android URL in index.html

## Deployment
To deploy changes: `cd zytoona-site && npx wrangler deploy`
Cloudflare project: zytoona-site (Workers & Pages)
Wrangler config: wrangler.toml
