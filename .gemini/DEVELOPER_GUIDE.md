# 🛠️ DJAY.ca Developer Guide

Welcome to the technical heart of DJAY.ca. This document outlines the architecture, coding standards, and organizational patterns used to maintain the site.

## 📁 Repository Structure

- **`index.html`**: The main landing page Hub.
- **`radio-player.html`**: Standalone product page for the Radio Stream Player.
- **`mixkit.html`**: Standalone product page for the DJ MixKit.
- **`style.css`**: The central design system. Uses CSS variables and modular sections.
- **`script.js`**: Main logic for the landing page (navigation, blog integration, dynamic loading).
- **`includes/`**: Reusable HTML fragments (header, footer) fetched dynamically.
- **`.agent/skills/`**: AI agent personas and rules for specific domains (SEO, UI, Auth).
- **`.gemini/`**: Project context and prompt guides for LLM assistants.

## 🎨 Design System: Glassmorphism

DJAY.ca uses a "Glassmorphic" aesthetic. Core utility classes include:

- `.glass-panel`: Standard frosted glass container.
- `.gradient-text`: Headings with vibrant linear gradients.
- `.cta-button`: Premium action buttons with hover transitions.
- `.faq-item`: Specialized containers for Q&A with sliding border effects.

### Coding Aesthetic Rules
1. **No jQuery**: Stick to modern Vanilla JS (ES6+).
2. **Mobile-First**: Always develop for 375px wide screens first.
3. **Semantic HTML**: Use `<main>`, `<section>`, `<article>`, and `<nav>` correctly.
4. **BEM-ish Naming**: Use descriptive, hyphenated class names (e.g., `.dj-card__avatar`).

## 🔄 Dynamic Content Integration

### Blog Feed
The blog section on the homepage pulls from `blog.djay.ca`. It uses a JSONP-like approach to fetch RSS data and format it into the `.blog-grid`.

### Global Header/Footer
We use `fetch()` to inject `includes/header.html` and `includes/footer.html`. 
**CRITICAL**: When modifying the header, ensure the `MutationObserver` in `script.js` correctly assigns the `.active` class to the current page link.

## 🚀 Deployment

The site is hosted on **GitHub Pages**. Any push to the `main` branch is automatically deployed to `djay.ca`.

## 🤖 Agent Workflow

When working with AI agents:
1. Ensure the agent has read `CONTEXT.md` and `ROADMAP.md`.
2. Use specific skills from `.agent/skills/` for domain-specific tasks.
3. Update `CHANGELOG.md` after every successful feature or fix.
