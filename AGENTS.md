# Repository Working Rules

## Before starting work

1. Read `README.md`, `AGENTS.md`, `plan.md`, `docs/PRODUCT_SPEC.md`, `docs/PHASE_PLAN.md`, `docs/DECISIONS.md`, `docs/SECURITY_AND_PRIVACY.md`, and `docs/PHASE_STATUS.md`.
2. Check the current phase and its approved scope. Do not start a later phase until the prior phase's exit criteria and handoff have been reviewed and approved by the product owner.
3. Treat every item labeled `TBD`, `proposed`, `requires review`, or `not approved` as unresolved. Do not make a product or legal decision by guessing.

## Scope and safety

- Follow `docs/PHASE_PLAN.md` in order. Phase 1 permits only the approved repository/app foundation and non-functional shell; it does not authorize lending features.
- Do not deploy contracts, move funds, request real USDT, or use real borrower/lender data without explicit project authorization and completion of the relevant security, privacy, and legal gates.
- Do not add a public API unless the product owner changes this direction in `docs/DECISIONS.md`.
- Never commit secrets, seed phrases, private keys, credentials, or real identity information.
- Never put government-ID images, selfies, biometric data, or personal addresses on a public blockchain or in public repository files/issues.
- Do not implement an admin withdrawal path for lender principal. Any proposed emergency control must be narrowly scoped, documented, reviewed, and explicitly approved.
- Do not expose raw borrower identity documents to lenders or make them public after delinquency. Refer to `docs/SECURITY_AND_PRIVACY.md`.
- Do not silently alter the interest formula, lender/owner split, refund rules, geography, identity checks, or default policy. Update `docs/DECISIONS.md` and obtain product-owner approval first.

## Phase completion and handoff

When work on a phase is complete, the responsible developer must:

1. Complete a report at `docs/handoffs/PHASE_##_HANDOFF.md` describing scope, files changed, checks actually run, unresolved decisions, risks/bugs, and recommended next tasks.
2. Update `docs/PHASE_STATUS.md` with the phase status, date, responsible developer, handoff link, completed criteria, remaining work, and next phase.
3. Mark the phase complete and move the current phase forward only after all exit criteria are met and the product owner has reviewed and approved the handoff.
4. Leave blockers and `TBD` items visible; do not report incomplete work as done.

## Documentation accuracy

Report only checks that were actually performed. Keep proposed terms distinct from approved requirements. Record material changes in `docs/DECISIONS.md` and the relevant specification, in the same change set where practical.
