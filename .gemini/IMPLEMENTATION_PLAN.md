# 📝 Implementation Plan: Persistent Audio Feature (WIP)

This document outlines the proposed strategy for implementing persistent audio playback across page navigations on DJAY.ca.

## 🥅 Objective
Allow users to listen to a built-in or embedded version of the **Radio-Stream-Player-PHP** without interruption when navigating the DJAY.ca hub (e.g., visiting "About", "FAQ", or "Booking"). The goal is to bridge the experience between the main site and the radio player.

## 🛠️ Proposed Tech Stack
- **Option A (The Overlay/Embed)**: Implement a persistent floating player or sidebar that communicates with the PHP backend (`Radio-Stream-Player-PHP`) via an API or iframe, allowing the audio stream to persist while the main page content changes.
- **Option B (SPA-lite Content Swapping)**: Use Barba.js or Turbo to hijack link clicks on `djay.ca`, keeping the parent container (which holds the audio engine) alive.
- **Option C (Unified Web Player)**: Develop a specialized "Lite" version of the PHP player specifically for integration as a native `djay.ca` component.

## 📋 Phase 1: Research (Assigned to: Agent)
1. [ ] Analyze `style.css` to see if a global fixed footer player impacts the "Glassmorphism" layout.
2. [ ] Prototype a Barba.js implementation on a local branch.
3. [ ] Verify if the `MutationObserver` for navigation links still works with AJAX page loads.

## 📋 Phase 2: UI Design (Assigned to: Agent + ui-consistency)
1. [ ] Design a "Mini-Player" component that docks to the bottom of the screen.
2. [ ] Ensure the player uses `.glass-panel` and inherits the site's gradients.

## 📋 Phase 3: Integration
1. [ ] Wrap the `index.html` content in the appropriate Barba/Turbo containers.
2. [ ] Update `script.js` to handle "After Navigation" event hooks (to re-initialize blog feeds, etc.).

## ✅ Definition of Done
- Audio continues playing smoothly during navigation.
- Browser "Back" and "Forward" buttons work as expected.
- No memory leaks from repeated navigation.
