# 🤖 Gemini Playground & Prompt Guide

This file is your **Command Center**. It contains the "Magic Spells" (Prompts) to guide Gemini through the development process defined in `ROADMAP.md`.

## 🏁 How to Use This Guide
1.  **Copy** the "Context Setter" below.
2.  **Paste** it at the start of every new chat session.
3.  **Select** the specific prompt for the goal you are working on.

---

## ⚡ Quick Sync & Workflow

### 1. Start of Session (The "Quick Sync")
*Use this to instantly load the project context. You just used this!*
> "Please read all the project context files (`ROADMAP.md`, `README.md`, `CHANGELOG.md`, `DEVELOPER_GUIDE.md`, and the contents of the `.gemini` folder) to get in sync with the current state of the project."

### 2. Feature Development
> "Let's implement the '[Feature Name]' feature from the `ROADMAP.md`."
> "I have an idea for a new feature: '[Description]'. Please add it as a 'To Do' item to the `ROADMAP.md` under the appropriate goal (Mid-Term, Long-Term, etc.)."

### 3. Bug Fixes
> "I've found a bug: [Describe bug]. Let's work on a fix."

### 4. Documentation
> "Please update the `CHANGELOG.md` to reflect the recent changes we've made."
> "Let's review all the documentation files to ensure they are consistent and up-to-date."
> "Summarize the changes we made in this session for a Git commit message. Follow the Conventional Commits format."

### 5. Release Workflow
> "Let's prepare release vX.X.X.
> 1. Update `CHANGELOG.md` by moving [Unreleased] items to [vX.X.X].
> 2. Create a new file `docs/RELEASE_vX.X.X.md` with a user-friendly summary of the changes.
> 3. Verify `README.md` is up to date."

---

## 🧠 Manual Context Setter (Fallback)
*If the Quick Sync doesn't work, paste this:*
> "You are Gemini Code Assist, a world-class software engineering assistant. We are building the **DJAY.ca Landing Page Hub**, a central directory and marketing site for BrainAV's audio software ecosystem.
> **Architecture:** Vanilla JavaScript, HTML5, CSS3. Static site hosted on GitHub Pages.
> **Key Features:** Glassmorphism UI, dynamic blog feed integration, standalone product pages (Radio Player, MixKit), and professional DJ service booking.
> **Current Goal:** Preparing for Google AdSense approval by expanding content density and ensuring mobile-first UI perfection.
> **Style:** Premium, modern, 'Glassmorphic' aesthetic with heavy emphasis on animations and high-quality typography."
---

## 🔭 High-Priority Objectives

### 1. AdSense Compliance (Content Expansion)
> "Let's audit the standalone product pages (`radio-player.html` and `mixkit.html`) to ensure they meet the 500-800 word count goal. We need to expand on technical details, use cases, and history without adding 'fluff'."

### 2. Persistent Audio Integration
> "I want to explore the best way to keep audio playing across pages on DJAY.ca. Should we use an SPA approach, a pop-out widget, or something like Barba.js/Turbo? Let's analyze the pros and cons for our vanilla static site."

---

## 📝 Playground Notes
*Use this space below to paste code snippets, error logs, or ideas you want to save for later.*