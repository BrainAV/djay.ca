# Changelog

All notable changes to the DJAY.ca landing page and ecosystem will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
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
