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
