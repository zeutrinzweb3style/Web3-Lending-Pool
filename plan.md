# Phase 1 Implementation Plan: Safe Application Foundation

**Status: Approved by the product owner on 2026-11-23 for the scaffold-only scope below.** This plan addresses Phase 1 only; it does not approve or implement lending behavior, economic terms, identity processing, or a production product.

## Outcome

Create a clean, runnable web-app foundation in this repository so later developers can work phase by phase. Phase 1 must not include deposits, loan requests, repayment processing, wallet transactions, smart contracts, KYC, user accounts, private borrower data, or a public API.

## Approved technical approach

- Frontend: React 19 + TypeScript + Vite 6.
- Package manager: pnpm 10.18.0, pinned in the root `package.json`, with a committed lockfile.
- App location: `apps/web/`.
- Automated checks: Prettier formatting check, ESLint, TypeScript checking, Vitest tests, and production build.
- No backend, database, API routes, external API calls or keys, wallet SDKs, identity provider, or blockchain dependencies in Phase 1.
- Use only synthetic placeholder content. No runtime secrets or `.env` configuration are needed.

This approval is limited to the technical foundation and non-functional shell. It does not approve proposed interest, lending, eligibility, identity, chain, or legal requirements; those remain in `docs/DECISIONS.md` and `docs/PRODUCT_SPEC.md` for later review.

## Approved minimal app shell

Create a responsive, non-functional shell with the project name and a clearly labeled “planning prototype” state. Navigation and lender/borrower journeys are placeholders only and must not imply that transactions are available. The current draft parameter cards show a 200 USDT lender-deposit minimum, a 100–10,000 USDT borrower-request range, and a 12-month term; every value is marked as proposed, not final. No real-user forms, balances, yield promises, or financial claims are allowed.

### Design direction

Three candidate styles were considered; the selected style applies only to the Phase 1 shell:

- Quiet institutional fintech — 0.07 probability.
- Warm community finance — 0.05 probability.
- Dense on-chain terminal — 0.03 probability.

**Selected: Quiet institutional fintech.** Keep the shell legible, calm, and restrained. Use a clear typographic hierarchy, accessible contrast, generous spacing, and simple status labels. Avoid yield-promising language, fabricated account balances, marketing claims, and decorative financial charts. Detailed product UX belongs to Phase 2.

## Delivered repository structure

```text
apps/web/
  index.html
  package.json
  public/
    manus-routes.json
  src/
    App.tsx
    App.test.tsx
    main.tsx
    styles.css
    test-setup.ts
  tsconfig.json
  vite.config.ts
  vitest.config.ts
.gitignore
eslint.config.js
package.json
pnpm-lock.yaml
pnpm-workspace.yaml
```

The app owns the frontend shell, styles, test, and route manifest. Root scripts and the lockfile provide reproducible setup. The phase documents remain authoritative for product scope; unresolved business rules must not be copied into functional code.

## Phase 1 completion criteria

1. Product-owner approval of the Phase 1 stack and shell scope is recorded above.
2. Dependencies install reproducibly from the committed lockfile.
3. The shell starts locally, serves the root route and route manifest, and creates a production build.
4. Formatting, lint, type checks, and automated tests pass.
5. The shell contains no financial actions, wallet signing, external API calls, KYC forms, backend/database, real personal data, or secrets.
6. `docs/PHASE_STATUS.md` and `docs/handoffs/PHASE_01_HANDOFF.md` record the delivered files and checks actually run.
7. The product owner reviews the handoff and explicitly approves Phase 1 closure before the phase is marked complete or Phase 2 begins.

Passing technical checks alone does not complete Phase 1. Any expansion into lending behavior, connected wallets, identity processing, contract integration, API/backend functionality, or production data requires a later phase and explicit approval.
