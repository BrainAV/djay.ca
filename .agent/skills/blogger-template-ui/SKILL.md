---
description: Guidelines for maintaining UI consistency between the main DJAY.ca site and the external Blogger (blog.djay.ca) template.
---

# skill: blogger-template-ui

This skill outlines how to ensure the external Blogger site (`blog.djay.ca`) feels like a seamless, integrated extension of the main DJAY.ca platform.

## Objective
To preserve the "Glassmorphism" design aesthetic, color palettes, and animation sequences established on `djay.ca` across the Blogger ecosystem, preventing a jarring visual jump for users navigating between the main site and the blog.

**Reference File:**
When beginning the work to rebuild or update the template, use `extras/theme-djay blogger.xml` as the foundational reference file. It contains the initial theme structure built for Blogger.

## Guidelines

### 1. Structural Parity
- The Blogger theme (XML template) must inject the same structural HTML wrapper for the header and footer as the main site.
- Because Blogger templates use unique native tags (like `<b:section>`, `<b:widget>`), you must carefully wrap the primary `<main>` outputs to map directly to our CSS UI Kit.
- The top-level navigation bar must be visually identical (gradients, active states, transparent scroll backgrounds).

### 2. Styling (CSS) Mirroring
- **Color Variables:** Ensure that all root CSS variables (e.g., `--primary: #4ecdc4`, `--bg-dark: #0f111a`, `--glass-bg`) are manually imported into the `<b:skin>` section or an external stylesheet attached to the Blogger Theme.
- **Glassmorphism:** Apply our `backdrop-filter: blur(10px)` and semi-transparent RGBA background wrappers to Blogger's article containers and sidebar widgets.
- **Typography:** Ensure `Outfit` and `Inter` Google Fonts are imported in the Blogger `<head>` and globally mapped properly, matching the font-weight scaling of the primary site.

### 3. Maintaining the Single Source of Truth
- Rather than duplicating CSS everywhere, when feasible, link the Blogger template directly to the production `style.css` file hosted on the main `djay.ca` domain (or a reliable CDN/proxy).
- Overrides specific strictly to Blogger elements (`.post-body`, `#CommentsBlock`) should be sequestered in their own `<style>` tag in the Blogger template to avoid polluting the main site's `style.css`.

### 4. Implementation Checks
Whenever touching the Blogger Template or modifying the global UI on DJAY.ca:
1. **Responsive Testing:** Verify Blogger's mobile layout mirrors the AdSense `<480px` breakpoints established in `style.css` (e.g., hidden sidebars on mobile, no horizontal scrolling).
2. **Branding verification:** Ensure the "A Project of Brain AV" attribution exists safely in the Blogger footer.
