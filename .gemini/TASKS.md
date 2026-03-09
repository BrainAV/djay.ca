# ✅ Active Tasks & Maintenance

This file tracks technical maintenance and small-scale improvements that are too granular for the public `ROADMAP.md`.

## 🛠️ Current Work-in-Progress

- [ ] **CSS Variable Audit**: Consolidate redundant color variables in `style.css`.
- [ ] **Persistent Audio Decision**: Evaluate "Built-in Component" vs "Embedded PHP Overlay" for `Radio-Stream-Player-PHP` integration.
- [ ] **Header MutationObserver Fix**: Ensure the `.active` class is applied even if the header is cached.
- [ ] **Mobile Menu Overflow**: Double-check if the mobile menu causes horizontal scrolling on iPhone SE sized screens.

## 🧹 Technical Debt / Cleanup

- [ ] **JSONP Cleanup**: investigate if we can move the Blogger feed to a more modern fetch with an Edge proxy to avoid JSONP.
- [ ] **Image Optimization**: Audit `extras/` and `blog/` directories for large uncompressed assets.
- [ ] **Link Verification**: Run a check for broken internal/external links across all `.html` files.

## 🤖 Agent Onboarding Tasks

- [x] Populate `.gemini` folder with `CONTEXT.md`, `GEMINI.md`, and `DEVELOPER_GUIDE.md`.
- [x] Initialize new agent skills: `project-manager`, `content-strategist`.
- [x] Review all existing skills for consistency.
