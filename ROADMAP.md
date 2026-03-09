# DJAY.ca Roadmap

This document outlines the strategic vision and future additions for the DJAY.ca landing page and overall ecosystem.

---

## 🎯 Short-Term Goals

- [x] **Promote Radio Stream Player:** Keep the Radio Stream Player positioned as the crown jewel of the landing page. It's our most mature and recently updated project (currently v1.4.0).
- [ ] **DJ MixKit Development:** Prepare for upcoming development sessions focused on launching and improving the DJ MixKit web application.
- **AdSense Approval Preparation (Content & Quality Audit):**
  - [x] **Blog Integration:** Embed the latest posts from `blog.djay.ca` onto the landing page to provide fresh, text-rich content.
  - [ ] **Blogger Template Sync:** Review and completely overhaul the theme on `blog.djay.ca` so the UI is nearly identical to the main `djay.ca` site, ensuring a seamless user experience.
  - [x] **Dedicated Product Pages:** Create standalone pages for the Radio Stream Player and DJ MixKit (`/radio-player.html`, `/mixkit.html`) with 500-800 words detailing their history, technical stack (Cloudflare routing, Web Audio API), tutorials, and use-cases to eliminate "thin content" risks.
  - [x] **FAQ Expansion:** Expand the `faq.html` page to include robust, multi-paragraph answers to increase organic word count and keyword density.
  - [x] **Mobile Layout Audit:** Conduct a strict mobile-first audit ensuring zero overlapping elements, no horizontal scrolling, and perfect legibility to meet AdSense mobile review standards.

---

## 🚀 Mid-Term Goals (Add-ons & Integrations)

- **Embedded Radio Player Integration:** 
  - Build a lightweight add-on version specifically for the `Radio-Stream-Player-PHP` project that can be embedded directly into the DJAY.ca navigation bar, sidebar, or footer as an overlay.
  - This widget will let visitors instantly tune in to curated streams while browsing the site, pulling station data from the PHP backend.
- **Persistent Audio Experience (Bridge to PHP Player):**
  - Implement a mechanism (e.g., SPA framework like Turbo/Pjax, or a persistent master iframe) to prevent audio from stopping when a user navigates between the DJAY.ca hub and the embedded radio experience.
  - Ensure the "current station" state survives page transitions.
- **Monetization Pipeline:**
  - Introduce visually cohesive placeholder ads on the page, paving the way for full Google AdSense integration.

---

## 🔭 Long-Term Goals (Late 2026)

- **DJ & Event Planner Pro:** 
  - Launch an online planning tool specifically tailored for DJs to manage clients, calendars, bookings, and contracts effortlessly.
- **Social Jukebox App:** 
  - Develop a collaborative "Touch Tunes" style jukebox app allowing guests at a venue to request and vote for music directly from their mobile phones.
