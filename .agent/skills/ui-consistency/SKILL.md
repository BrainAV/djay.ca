---
name: ui-consistency
description: Use this skill to ensure all new CSS, HTML, and UI elements on DJAY.ca match the established aesthetic, including glassmorphism, gradients, and animated backgrounds.
---

# UI Consistency & Aesthetics - DJAY.ca

When working on the frontend of DJAY.ca, you are expected to strictly adhere to the project's established visual design principles. The goal is to maintain a cohesive, modern, and premium feel across the entire landing page and its sub-pages.

## Core Design Principles

1.  **Glassmorphism Effect**: 
    - Use the `.glass-panel` class for any card, modal, or container that needs to stand out.
    - Always rely on semi-transparent backgrounds with backdrop filters.
    - Example: `background: rgba(43, 48, 58, 0.4); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.1);`

2.  **Typography & Gradients**:
    - Use gradients for primary headings to make them pop. Use the `.gradient-text` or `.gradient-text-alt` classes.
    - Maintain consistent padding, margins, and letter spacing to ensure readability.

3.  **Animations & Micro-interactions**:
    - Add hover effects to interactable elements (e.g., scale-up effect, box-shadow variations).
    - Use the existing `.fade-in` and delay utility classes for smooth scrolling entrance animations.

4.  **Responsive Layouts**:
    - DJAY.ca must be strictly mobile-first.
    - Ensure flexbox and grid layouts appropriately stack on smaller viewports.
    - Avoid fixed widths (`px`) for responsive elements; use `%`, `rem`, or `vw`/`vh`.

## Execution

When instructed to add a new section, page, or component:
1. Review `style.css` to verify you aren't duplicating existing functional classes.
2. Ensure you apply the appropriate aesthetic classes (`.glass-panel`, `.cta-button`, etc.).
3. Test mentally how the layout falls back on a narrow mobile screen to prevent overflowing content.
