# Phase 1 Implementation Plan: Safe Application Foundation

**Status: Proposed; do not implement until the product owner approves this plan.** This plan addresses Phase 1 only. It does not implement a lending product.

## Outcome

Create a clean, runnable web-app foundation in this repository so later developers can work phase by phase. Phase 1 must not include deposits, loan requests, repayment processing, wallet transactions, smart contracts, KYC, user accounts, private borrower data, or a public API.

## Proposed technical approach

- Frontend: React + TypeScript + Vite.
- Package manager: pnpm with a committed lockfile.
- App location: `apps/web/`.
- Shared project documentation remains in the repository root and `docs/`.
- Automated checks: formatting/lint, TypeScript checking, and production build; add a lightweight CI workflow only if approved repository permissions support it.
- No backend, database, API routes, external API keys, wallet SDKs, identity provider, or blockchain dependencies in Phase 1.
- Use only local synthetic placeholder content. Keep environment configuration empty or example-only; no secrets are required.

The stack is a proposal, not an approved product requirement. If the product owner prefers another framework or workspace structure, record that in `DECISIONS.md` before implementation.

## Proposed minimal app shell

Create a responsive but non-functional shell with a project name/header and clearly labeled “planning prototype” state. It may include navigation placeholders for lender and borrower journeys, but no clickable action may imply that deposits, loan applications, verification, or repayments are available. Use mock values only if clearly marked as sample data. Do not create real-user forms in this phase.

### Design direction

Three candidate styles were considered; the chosen option is only for the Phase 1 shell:

- Quiet institutional fintech — 0.07 probability.
- Warm community finance — 0.05 probability.
- Dense on-chain terminal — 0.03 probability.

**Selected: Quiet institutional fintech.** Keep the shell legible, calm, and restrained. Use a clear typographic hierarchy, accessible contrast, generous spacing, and simple status labels. Avoid yield-promising language, fabricated account balances, marketing claims, or decorative financial charts. The design is intentionally limited to the scaffold; detailed product UX belongs to Phase 2.

## Proposed repository structure

```text
apps/web/
  index.html
  src/
    app/
    components/
    styles/
    main.tsx
  public/
    manus-routes.json
  package.json
  tsconfig.json
package.json
pnpm-lock.yaml
```

The app owns the frontend shell and its styles. Root scripts and lockfile provide reproducible setup. The phase documents remain authoritative for product scope; do not copy unresolved business rules into code.

## Phase 1 completion criteria

1. Product owner approves the framework, package manager, app location, and visual direction in this plan.
2. Dependencies install reproducibly from the committed lockfile.
3. The shell starts locally and creates a production build.
4. Lint/format and type checks are available and pass.
5. The shell contains no financial actions, wallet signing, external API calls, KYC forms, backend/database, real personal data, or secrets.
6. `docs/PHASE_STATUS.md` and `docs/handoffs/PHASE_01_HANDOFF.md` record the delivered files and checks actually run.

## Required approval before work

Approve or revise the proposed stack and shell scope. If approved, implementation remains limited to this Phase 1 plan. Any expansion into loan behavior, connected wallets, identity processing, contract integration, API/backend functionality, or production data requires a later phase and explicit approval.
