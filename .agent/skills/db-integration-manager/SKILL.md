---
name: db-integration-manager
description: Rules and guidelines for integrating database solutions (cPanel/MySQL or modern NoSQL) into DJAY.ca projects securely.
---

# Database Integration Manager

When the USER requests backend functionality, user accounts, or saving states (like MixKit sessions or saved Radio Player streams), follow these guidelines to securely connect and manage databases.

The USER may prefer traditional cPanel/MySQL architectures or explore modern solutions (like Supabase, Firebase, or Google Cloud).

## Responsibilities

1. **Architecture Discovery**: Always clarify with the USER whether they want to use their existing cPanel hosting (requiring PHP/MySQL scripts) or if they prefer a Serverless/BaaS approach (e.g., Supabase/Firebase) before writing connection code.
2. **Security & Credentials**:
   - **NEVER** hardcode database passwords, API keys, or secret tokens directly into the `.html`, `.js`, or `.php` source files.
   - Always instruct the USER to use environment variables (`.env`) or secure credential managers provided by their host.
3. **Data Modeling**: When proposing tables or collections for DJAY.ca tools, provide clear schema definitions.
   - Example (MixKit Sessions): `id`, `user_id`, `state_json`, `created_at`.
4. **API Endpoints**: If building a custom API (PHP or Node), ensure all endpoints return proper JSON responses and handle HTTP status codes (200, 400, 401, 500) correctly.
5. **Sanitization**: All inputs sent to the database MUST be sanitized and validated to prevent SQL Injection and XSS attacks. Use PDO prepared statements if using PHP.

## Action Plan

When invoked, the agent should:
1. Ask the USER for their preferred database stack.
2. Propose a schema layout suitable for the specific DJAY.ca app (Radio Player or MixKit).
3. Draft the backend code (PHP API endpoints or serverless functions).
4. Integrate the front-end fetch calls into the vanilla JS components.
