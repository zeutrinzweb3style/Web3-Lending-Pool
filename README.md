# Web3 Lending Pool

A separate planning repository for a proposed USDT-only Web3 lending pool. The project is organized into sequential, gated phases. Phase 1 now contains an approved, non-functional React frontend foundation only; it is not a lending product and is not ready for real users or funds.

## Start here

- [Phase 1 implementation plan](plan.md)
- [Phase 1 TODO and review gate](TODO.md)
- [Product proposal and requirements](docs/PRODUCT_SPEC.md)
- [Implementation phases and exit criteria](docs/PHASE_PLAN.md)
- [Decision log and open questions](docs/DECISIONS.md)
- [Security and privacy requirements](docs/SECURITY_AND_PRIVACY.md)
- [Current phase status](docs/PHASE_STATUS.md)
- [Phase 1 handoff report](docs/handoffs/PHASE_01_HANDOFF.md)
- [Developer and AI-agent working rules](AGENTS.md)

Every phase must end with a handoff report in `docs/handoffs/`. The next phase must not begin until the current phase's exit criteria and handoff have been reviewed and approved by the product owner.

## Run the scaffold locally

Use Node.js with pnpm 10.18.0 (pinned in the root `package.json`):

```sh
pnpm install --frozen-lockfile
pnpm dev
```

The Vite app is in `apps/web/`. The root route manifest is served at `/manus-routes.json`. Available checks are:

```sh
pnpm typecheck
pnpm lint
pnpm test
pnpm format:check
pnpm build
```

## Current status and safety boundary

The product owner approved the Phase 1 stack and scaffold scope on 2026-11-23. The scaffold and validation evidence are being handed off for product-owner review; **Phase 1 is not yet marked complete, and Phase 2 has not started**. See [Phase Status](docs/PHASE_STATUS.md) and the [Phase 1 handoff](docs/handoffs/PHASE_01_HANDOFF.md).

The app contains synthetic planning content only. No deposits, loan requests, approvals, disbursements, repayments, refunds, wallet actions, smart contracts, KYC, backend, database, external/public API, real funds, personal data, or secrets are implemented. All economic, legal, network, eligibility, privacy, repayment, and emergency-control decisions that remain marked proposed or TBD are still unresolved and must not be silently treated as approved requirements.
