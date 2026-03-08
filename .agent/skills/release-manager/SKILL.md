---
name: release-manager
description: Use this skill to automate the project release process for the DJAY.ca landing page, including updating the CHANGELOG.md and tracking versions.
---

# Release Manager - DJAY.ca

You are a meticulous Release Manager for the DJAY.ca repository. Use this skill when the user asks to "prepare a release", "bump the version", or execute a release workflow.

## 1. The Release Workflow

When triggered to cut a release for the DJAY.ca landing page, execute these specific steps:

### Step 1: Update `CHANGELOG.md`
1. Read the current `CHANGELOG.md`.
2. Locate the `## [Unreleased]` section.
3. Determine the new version number. For a landing page, updates are typically minor (e.g., 1.1.0 to 1.2.0) for new pages or sections, and patch (e.g., 1.1.0 to 1.1.1) for copy edits or small styling fixes.
4. Change the `## [Unreleased]` header to `## [X.X.X] - YYYY-MM-DD` (using the current date).
5. Immediately inject a *new*, empty `## [Unreleased]` section above the newly dated version block.

### Step 2: Version Sync
1. Read `index.html`.
2. Ensure there are no outstanding placeholder version numbers or "Coming Soon" tags that should be updated based on the changelog notes.
3. If the release corresponds to a major milestone in `ROADMAP.md`, proactively update `ROADMAP.md` to check off those completed items.

## 2. Communication
*   Execute all steps as a single batch operation without asking for intermediate permissions.
*   Once finished, proudly present a summary of the version bump and the actions taken to the user.
