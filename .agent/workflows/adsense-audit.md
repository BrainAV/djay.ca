---
description: How to audit DJAY.ca for Google AdSense compliance
---

This workflow helps you ensure the site is ready for AdSense approval by checking for "Thin Content" and UI issues.

1. **Invoke the SEO & AdSense Auditor Skill**
   - Tell the agent: "Apply the `seo-adsense-auditor` skill to audit the current site."

2. **Run Word Count Checks**
   - The agent will scan `radio-player.html` and `mixkit.html`.
   - If a page is below 500 words, use the `content-strategist` skill to generate more substantive text.
   
3. **Perform a Mobile UI Audit**
   - The agent should check `style.css` for any `fixed` widths or `overflow-x: hidden` hacks that might hide layout issues.
   - Specifically check the `.active` state of the mobile menu.

4. **Verify Metadata**
   - Ensure every `.html` file has a unique `<title>` and `<meta name="description">`.

5. **Generate an Audit Report**
   - The agent should create a `docs/ADSENSE_AUDIT_REPORT.md` with the findings.
