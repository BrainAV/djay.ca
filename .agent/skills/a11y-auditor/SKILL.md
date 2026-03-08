---
name: a11y-auditor
description: Use this skill to guarantee accessibility standards on DJAY.ca, including keyboard focus paths, ARIA labeling, and semantic HTML structure.
---

# Accessibility (A11y) Auditor - DJAY.ca

DJAY.ca must be accessible to all users. When modifying HTML or CSS for the DJAY landing page, apply the following accessibility standards.

## Core Directives

1.  **Semantic HTML**:
    - Use proper semantic elements (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`).
    - Avoid using `<div>` when a more specific semantic tag applies.

2.  **Keyboard Navigation**:
    - All interactable elements (links, buttons, form fields) must be focusable usually via `<button>` or `<a href>`.
    - Provide a clear `:focus-visible` state in CSS (e.g., an outline) for all interactable elements so keyboard users know where they are.

3.  **ARIA Attributes**:
    - Use `aria-label` or `aria-labelledby` on elements that lack descriptive text (e.g., icon-only buttons, SVG buttons).
    - Use `aria-hidden="true"` on decorative SVGs or icons so screen readers ignore them.
    - If building a custom interactive widget (like an accordion or modal), use the appropriate ARIA roles (`role="dialog"`, `aria-expanded`, etc.).

4.  **Color Contrast & Legibility**:
    - Ensure text has sufficient contrast against background elements, particularly when using glassmorphism effects overlaid on animated backgrounds.

## Execution

Whenever you output an edit to an HTML file, mentally run through this checklist before finalizing the tool call. If you notice missing `aria-label`s on buttons or a lack of semantic structure, correct it proactively in your changes.
