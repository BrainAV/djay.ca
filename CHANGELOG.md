# Changelog

All notable changes to the DJAY.ca landing page and ecosystem will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.3.0] - 2026-03-13
### Changed
- Updated Radio Stream Player version references across `index.html` and `radio-player.html` to **v2.2.2**.
- Overhauled the **"What's New"** section on `radio-player.html` to showcase v2.2.2 features: Advanced Bitrate Sniffing, Stream Resiliency, and Music-First Priority.
- Added a **"Recent Evolution (v2.1 - v2.2)"** timeline to `radio-player.html` to capture the project's growth journey from the "PHP Awakening" to its current pro-grade state.
- Updated `ROADMAP.md` to reflect the latest RSP version.

### Added
- **`blog/v2_2_2_release_sync.html`**: New professional blog post summarizing the evolution from v2.0.0 to v2.2.2, now available for the DJAY.ca Blogger site.

## [1.2.0] - 2026-03-12
### Added
- **`event-planner.html`**: New dedicated product page for **DJ & Event Planner Pro**, replacing the old waitlist page. Includes feature overview, development status/timeline, and cross-links to live products. No waitlist form — focuses on honest "coming in late 2026" messaging.
- **Canonical Tags**: Added `<link rel="canonical">` to all 10 `djay.ca` HTML pages to resolve "Duplicate without user-selected canonical" warnings in Google Search Console.
- **`gsc-manager` Agent Skill**: New skill documenting the GSC workflow for the DJAY.ca ecosystem — sitemap management, canonical strategy, common error fixes, and indexing checklists.

### Changed
- **`sitemap.xml`**: Major update — added `radio-player.html` and `mixkit.html` (previously missing), added `event-planner.html`, removed retired `waitlist.html`, refreshed all `<lastmod>` dates to `2026-03-12`, and corrected priority values to reflect page importance.
- **`includes/header.html`**: Removed "Join Waitlist" navigation link.
- **`index.html`**: Updated the "DJ & Event Planner Pro" teaser card CTA from "Join Waitlist" → "Learn More" linking to new `event-planner.html`.

## [1.1.0] - 2026-03-12
### Added
- Updated Radio Stream Player version references across `index.html` and `radio-player.html` to **v2.2.0**.
- Added responsive AdSense display ad spots to `index.html` (between hero and products) and `radio-player.html` (between hero and deep-dive content).
- Added a **"What's New in v2.2.0"** feature section to `radio-player.html` detailing the monetization engine, premium user tier, pop-out player overhaul, and Admin Site Config tab.
- Added a **💎 Premium Accounts** feature card to the RSP feature grid on `index.html`.
- Added `.ad-banner-wrapper` CSS utility class to `style.css` for consistent, mobile-safe ad slot styling.
- Updated `ROADMAP.md` to reflect AdSense launch as complete and document the long-term premium subscription goal.

### Added (previously Unreleased)
- Expanded the `radio-player.html` product page with 600+ words of substantive content detailing the v2.0.0 architecture, history, and technical stack (PHP/MySQL/Cloudflare).
- Overhauled `mixkit.html` with 600+ words of "Gold Standard" content, including technical deep-dives into the **Web Audio Engine** and **WebGL Visuals**, and a "Born from 30 Years Experience" history section.
- Redesigned the `#products` section on `index.html` with a premium CTA button layout, including direct "Source Code" links with GitHub icons and polished project descriptions.
- Updated the `content-strategist` Agent Skill with "Gold Standard Patterns" to ensure future updates maintain high technical depth and semantic HTML integrity.
- Added a legal disclaimer link to **Algoriddim GmbH** in `includes/footer.html` for clarity and compliance.
- Injected high-impact "Source" buttons in the hero sections of `mixkit.html` and `index.html` featuring branded SVG icons and glass-morphism backgrounds.

### Changed (previously Unreleased)
- Sanitized the entire `mixkit.html` and `index.html` pages by converting all Markdown-style formatting (`**`, `[]()`) into semantic HTML (`<strong>`, `<a>`, `<code>`).
- Updated SEO metadata (description and keywords) on `mixkit.html` to attract more professional users and improve AdSense compliance.
- Refined the primary homepage feature highlights to sync with the new narrative depth of the standalone product pages.

## [1.0.2] - 2026-03-08
### Changed
- Updated the MixKit product presence across the site to reflect the **v0.2.0** release.
- Overhauled feature highlights on `index.html` and `mixkit.html` to showcase new v0.2.0 capabilities, including GPU-accelerated WebGL visuals, precision mixing (stutter-cueing/pitch bend), and persistent user settings.

## [1.0.1] - 2026-03-08
### Fixed
- Resolved a double-binding bug on the mobile navigation menu caused by competing event listeners across inline scripts and `script.js`.
### Changed
- Streamlined mobile-first CSS architecture for strict Google AdSense compliance, introducing `max-width: 480px` media query overrides to enforce full-width single column grids and larger touch targets.

## [1.0.0] - 2026-03-08
### Added
- Created dedicated standalone product pages (`mixkit.html` and `radio-player.html`) to improve SEO content density.
- Migrated specific product FAQs from the main `faq.html` page to their respective new product pages.
- Defined two new Agent Skills (`db-integration-manager` and `auth-manager`) to establish architecture rules for future backend updates (supporting both cPanel/MySQL and modern Serverless stacks).
- Initial creation of the DJAY.ca landing page.
- "Glassmorphism" design aesthetic and responsive layout.
- Sections for Radio Stream Player and DJ MixKit.
- "Building the Future" teaser section for upcoming Late 2026 apps.
- Essential legal pages: `privacy.html`, `terms.html`, and `about.html`.
- Agent skill architecture (`ui-consistency`, `seo-adsense-auditor`, `a11y-auditor`) to govern future AI-assisted development.
- Dedicated `ROADMAP.md` tracking monetization and embedded player goals.
- Explicit "Brain AV" sub-branding across the `README.md`, `.gemini/CONTEXT.md`, and a new attribution link in the global site footer.

### Changed
- Elevated the navigation menu UI (`includes/header.html`) by introducing a soft scroll shadow to the header, sub-glassmorphism hover states for nav links, and a sliding fade-in animation for the mobile hamburger menu in `style.css`.
- Refactored `script.js` to include a global `MutationObserver` that automatically parses the URL and apples an `.active` CSS state to navigation links once the header is fetched dynamically, while patching mobile menu initializations.
- Built a premium CSS framework for the `booking.html` page, specifically adding `margin` and `padding` to `.featured-dj` and introducing a beautifully responsive `.djs-grid`.
- Injected a dynamic **Latest News** `.blog-grid` section into `index.html` using a JSONP callback in `script.js` to asynchronously parse natively formatted Blogger RSS data (bypassing CORS restrictions on `blog.djay.ca`).
- Designed a custom hovering card aesthetic for individual DJs (`.dj-card` and `.dj-avatar`) with gradient interactions and structural matching to the site's glassmorphism style.
- Built a premium `.faq-section` and `.faq-item` CSS framework in `style.css` featuring glassmorphism and animated sliding gradients on hover.
- Rebuilt the FAQ section on `mixkit.html` to utilize this new premium design pattern.
- Overhauled `faq.html` with new general questions detailing the DJAY.ca ecosystem.
- Improved the layout structure of the new standalone product pages (`mixkit.html` and `radio-player.html`) to ensure they match the full-width, high-quality glassmorphism aesthetic of the main `index.html` page.
- Updated the `.agent/skills/ui-consistency/SKILL.md` rules to explicitly dictate FAQ structuring and when to use `.content-page` wrappers versus full-width section patterns.
- Updated the main `index.html` to link 'Learn More' buttons to the new standalone product pages instead of relying entirely on external application links.
