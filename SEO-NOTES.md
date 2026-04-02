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
- og:image: Was a large 2500x1330 social sharing banner (hosted on Wix static)

### Wix Site Settings
- Search engine indexing: ON
- Facebook page: zytoonaGames
- Had RSS feed at /blog-feed.xml

## Social Media Links
- Facebook: https://www.facebook.com/zytoonaGames/
- Instagram: https://www.instagram.com/zytoona.games/
- X/Twitter: https://x.com/zytoonagames

## AdMob Publisher ID
- pub-2296352381124224

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

### NS Records (current - will change)
| Host | Value |
|------|-------|
| zytoona.com | ns15.wixdns.net |
| zytoona.com | ns14.wixdns.net |

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

## Domain Migration TODO (when switching DNS)
- [ ] Point zytoona.com DNS to Cloudflare
- [ ] Update canonical URL from zytoona.com workers URL to https://www.zytoona.com
- [ ] Set up 301 redirects from old Wix URL paths if any differ
- [ ] Update og:url to https://www.zytoona.com
- [ ] Verify Google Search Console with new hosting
- [ ] Create a proper og:image social sharing banner (2500x1330px recommended)
- [ ] Submit new sitemap to Google Search Console
- [ ] Monitor 404s in Search Console after migration

## Pages on the site
- / (main landing)
- /privacy-policy/
- /privacy-policy-uc/ (linked from app only, not in footer)
- /contact/
- /data-deletion-wc/ (linked from app only)
- /data-deletion-uc/ (linked from app only)
- /wordscrush/ (campaign page)
