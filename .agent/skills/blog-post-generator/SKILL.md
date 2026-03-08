---
description: Instructions and templates for generating professional blog posts from project updates (CHANGELOG.md, ROADMAP.md, etc.) for the DJAY.ca Blogger site.
---

# skill: blog-post-generator

This skill provides a structured way to generate engaging, professional blog posts for `blog.djay.ca` whenever a major project update occurs.

## Objective
To automate the creation of high-quality blog content that maintains a consistent tone, highlights technical achievements, and keeps users informed about the evolution of the DJAY.ca ecosystem.

## Resources
- **Template:** [blog_post_template.html](./templates/blog_post_template.html)
- **Reference Style:** [first_post_radio_player.html](../../blog/first_post_radio_player.html)

## Workflow

### 1. Gather Information
- Read the latest entries in `CHANGELOG.md` and/or `ROADMAP.md` for the relevant project.
- Identify the core theme of the update (e.g., Performance, New Features, UI Redesign).
- Note any specific technical challenges overcome.

### 2. Draft the Content
- Use the [blog_post_template.html](./templates/blog_post_template.html) as a structural guide.
- **Tone:** Professional yet enthusiastic, aimed at both users and fellow developers.
- **Structure:**
    - **Catchy Title:** Highlight the main value proposition of the update.
    - **Opening:** Set the context and excitement level.
    - **Highlights:** Bullets for the most visible changes.
    - **Technical Deep Dive:** Bullets for under-the-hood optimizations or architectural wins.
    - **Call to Action:** Link to the live application.
    - **Closing:** Personal sign-off ("— Jason Brain").

### 3. Generate SEO Metadata
- **Search Description:** Create a concise summary (max 150 characters) for search engines.
- **Labels:** Generate a comma-separated list of relevant tags (e.g., MixKit, WebGL, DJ Software).

### 4. Review and Refine
- Ensure the content aligns with the `blogger-template-ui` skill for visual consistency.
- Verify all links are correct and relative paths are handled (if applicable).
- Check for "Mixed Content" or other security/performance mentions if they were part of the update.

### 5. Output
- Provide the final content as a standalone HTML file ready for copy-pasting into the Blogger editor.
- Include the Search Description and Labels as comments at the top of the file.
- Save a copy in the `djay.ca/blog/` directory for historical reference.

## Example Use Case
"I just released v0.2.0 of MixKit with WebGL waveforms and better performance. Use the blog-post-generator skill to create a new post for me."
