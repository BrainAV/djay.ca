---
name: gsc-manager
description: Use this skill to manage Google Search Console tasks for the DJAY.ca ecosystem — including sitemap updates, canonical tag audits, indexing requests, and interpreting GSC coverage reports.
---

# Google Search Console (GSC) Manager — DJAY.ca

## Overview of the Ecosystem

DJAY.ca operates across several subdomains, each needing separate attention in GSC:

| Property | Type | Hosting |
|---|---|---|
| `https://djay.ca` | GitHub Pages | Static HTML |
| `https://mixkit.djay.ca` | GitHub Pages | Static HTML |
| `https://blog.djay.ca` | Blogger | Google-managed |
| `https://radio.djay.ca` | cPanel/Apache | PHP (Radio-Stream-Player-PHP) |

Each subdomain is a **separate GSC property** and must be verified and managed independently.

---

## Sitemap Management

### Location
- **djay.ca:** `c:\Users\jason\Documents\GitHub\BRAINAV\djay.ca\sitemap.xml` → lives at `https://djay.ca/sitemap.xml`
- **mixkit.djay.ca:** No sitemap exists yet — consider creating one at `mixkit.djay.ca/sitemap.xml`

### Rules for Keeping the Sitemap Accurate
1. **Add every new `.html` page** to `sitemap.xml` when it is created.
2. **Remove pages** that are deleted, redirected, or retired (e.g., `waitlist.html`).
3. **Use real canonical URLs** — the `<loc>` must exactly match the `href` in that page's `<link rel="canonical">` tag.
4. **Update `<lastmod>`** to today's date whenever a page's content changes significantly.
5. **Never list `index.html`** as a URL — the canonical for the homepage is `https://djay.ca/` (no filename). Google will treat `djay.ca/` and `djay.ca/index.html` as duplicates if both appear.

### Priority Guidelines
```
1.00  Homepage (index.html)
0.90  Primary product pages (radio-player.html, mixkit.html)
0.80  High-value landing pages (booking.html)
0.70  Standard content pages (about, contact, faq, event-planner)
0.50  Legal/boilerplate pages (privacy.html, terms.html)
```

### After Updating the Sitemap
1. Commit and push to GitHub (GitHub Pages deploys automatically).
2. Go to **GSC → Sitemaps** and resubmit: `https://djay.ca/sitemap.xml`
3. Use **URL Inspection → Request Indexing** on any newly added or significantly changed pages.

---

## Canonical Tag Strategy

All static HTML pages on djay.ca and mixkit.djay.ca must have a `<link rel="canonical">` in the `<head>`. This prevents duplicate content issues caused by:
- `/index.html` vs `/` (GitHub Pages serves both)
- `http://` vs `https://` (GitHub Pages enforces HTTPS but old crawls may have cached http links)
- Blogger mobile URLs (`?m=1`) — handled separately in the Blogger theme

### Canonical Rules
- **Homepage:** `<link rel="canonical" href="https://djay.ca/">`
- **All other pages:** Self-referencing canonical using the exact public URL, e.g. `<link rel="canonical" href="https://djay.ca/radio-player.html">`
- **mixkit.djay.ca:** `<link rel="canonical" href="https://mixkit.djay.ca/">` on `index.html`

### Auditing Canonicals
When the user reports a GSC "Duplicate without user-selected canonical" warning, run a search to verify all pages have the tag:
- On `djay.ca`: `grep -r 'canonical' *.html`
- On `mixkit.djay.ca`: `grep -r 'canonical' *.html`

---

## Common GSC Issues & Fixes

### "Duplicate without user-selected canonical"
**Cause:** Multiple URLs serve the same content without a canonical tag.
**Fix:** Add `<link rel="canonical">` to every affected page. See canonical rules above.

### "Page with redirect"
**Cause:** A URL in the sitemap or linked from another page is redirecting.
**Fix:** Update sitemap and internal links to point directly to the final destination URL. Remove retired pages from the sitemap.

### "Crawled - currently not indexed"
**Cause:** Google crawled the page but decided not to index it (thin content, no inbound links, or duplicate).
**Fix:** Improve content quality using the `seo-adsense-auditor` skill. Add internal links from high-priority pages.

### "Discovered - currently not indexed"
**Cause:** Google knows the page exists but hasn't crawled it yet.
**Fix:** Use **URL Inspection → Request Indexing** in GSC and ensure the page is in the sitemap.

### Blogger `?m=1` Mobile Duplicate
**Cause:** Blogger automatically appends `?m=1` for mobile views, creating duplicate URLs.
**Fix (manual, in Blogger Dashboard):**
1. Go to **Blogger → Settings → Basic → Mobile Settings**
2. Set mobile template to **"No. Show desktop version to mobile devices"** — this prevents `?m=1` from being generated.
OR: In the Blogger theme `<head>`, add:
```html
<b:if cond='data:blog.isMobileRequest'>
  <link rel='canonical' expr:href='data:blog.canonicalUrl'/>
</b:if>
```

---

## GSC Workflow Checklist

### When Adding a New Page
- [ ] Add `<link rel="canonical" href="https://djay.ca/[page].html">` to the page `<head>`
- [ ] Add the page to `sitemap.xml` with today's `<lastmod>` and appropriate `<priority>`
- [ ] Commit and push to GitHub
- [ ] In GSC: use **URL Inspection → Request Indexing** on the new URL
- [ ] In GSC: **Sitemaps → Resubmit** `https://djay.ca/sitemap.xml`

### When Removing or Retiring a Page
- [ ] Remove the page's entry from `sitemap.xml`
- [ ] Update any internal links that pointed to the old page
- [ ] Commit and push to GitHub
- [ ] In GSC: **URL Inspection** the old URL and verify it shows "Not indexed"

### When Investigating a GSC Coverage Warning
- [ ] Read the exact error type and affected URLs
- [ ] Cross-reference with `sitemap.xml` to see if the URL should be there
- [ ] Check if the page has a `<link rel="canonical">` tag
- [ ] Check if the page has unique, substantive content (use `seo-adsense-auditor` skill)
- [ ] Make fixes, then use **URL Inspection → Request Indexing** on each affected URL

---

## What GSC Cannot Do (Requires Manual Action)

- GSC cannot **force** indexing — it can only request it. Google's crawler decides.
- You cannot batch-request indexing. Each URL must be submitted individually.
- Changes to the sitemap typically take **days to weeks** to fully reflect in GSC reports.
- Removing duplicate errors requires a **re-crawl** — fix + request indexing + wait.
