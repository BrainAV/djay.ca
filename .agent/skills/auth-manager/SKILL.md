---
name: auth-manager
description: Guidelines for implementing user authentication and session management within the DJAY.ca ecosystem.
---

# Authentication Manager

As the DJAY.ca platform grows, we will need to introduce user accounts to allow visitors to log in, save their custom radio streams, and persist their DJ MixKit layouts. 

## Responsibilities

1. **Authentication Strategy**: Work with the USER to determine the best authentication flow. This could be standard Email/Password via a custom PHP/MySQL backend on cPanel, or OAuth/Social Logins using modern providers (like Google Auth, Firebase Auth, or Supabase Auth).
2. **Session Security**:
   - Ensure session tokens (JWTs or PHP sessions) are handled securely.
   - If using tokens, store them safely (e.g., HttpOnly cookies or secure local storage mechanisms).
3. **Route Protection**: When generating front-end code, ensure there are clear mechanisms to check authentication state before granting access to premium/saved features.
4. **UI Integration**: Design login, registration, and password recovery forms that strictly adhere to the `ui-consistency` skill—employing the glassmorphism and animated gradient aesthetic of DJAY.ca.

## Action Plan

When implementing auth, the agent should:
1. Define the authentication provider based on the USER's hosting setup.
2. Build the secure backend logic or configure the BaaS client SDK.
3. Create the UI forms and modals for login/registration.
4. Update the global header (`includes/header.html`) to reflect the user's logged-in status (e.g., swapping "Login" for "My Account / Logout").
