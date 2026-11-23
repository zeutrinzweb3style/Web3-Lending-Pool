# Implementation Phases

**Status: Proposed revision.** Phases are sequential. Coding may begin in Phase 1, but only for a non-financial application foundation. Each phase requires its exit criteria and product-owner handoff approval before the next phase starts. Current status is in `PHASE_STATUS.md`; the proposed Phase 1 implementation details are in the root `plan.md`.

## Phase 1 — Repository and application foundation (code)

**Scope:** Establish the frontend project/toolchain, directory structure, formatting/type-check/build commands, basic automated checks, environment-variable example conventions, and a minimal app shell. No production backend, public API, database, wallet transactions, KYC, loan/deposit/repayment logic, or real personal/financial data. Proposed stack and layout are subject to approval in `plan.md` before implementation.

**Exit criteria:** Product owner approves `plan.md`; scaffold installs and builds; lint/type checks pass; only a non-functional shell exists; docs and handoff accurately record files and checks; unresolved financial/legal/privacy decisions remain marked TBD. Do not claim Phase 1 complete merely because the scaffold builds.

## Phase 2 — Product decisions, user flows, and system design

**Scope:** Resolve the decisions needed for the product (asset/network, exact economics and required disclosures, lender allocation/refunds, borrower eligibility, repayments/defaults, roles/key controls, data boundaries), then design lender/borrower journeys, state transitions, architecture, and threat model. Create wireframes and a dummy-data UI prototype after the required decisions are approved.

**Exit criteria:** Product owner approves the relevant decisions and system design; the prototype clearly displays total repayment, schedule, fee split, and error/empty/overdue states; it uses synthetic data only; no real transactions, identity collection, or funds.

## Phase 3 — Identity-verification design and sandbox integration

**Scope:** Only after privacy/legal design approval, integrate a verification provider's sandbox or a simulator using synthetic test identities. Define minimum data, access controls, retention/deletion, appeals, and country eligibility. Do not expose raw identity documents to lenders.

**Exit criteria:** Sandbox flow works with synthetic data; provider result handling, failure/manual review, access logs, and deletion behavior are documented; no production KYC or live ID is collected.

## Phase 4 — Smart-contract implementation and testnet tests

**Scope:** Implement approved contract logic and automated tests on a local chain/testnet using mock or test tokens. Cover deposits, available/reserved funds, lender approval, borrower acceptance, disbursement, repayments, principal/interest accounting, refunds, expiry, failure paths, and default accounting.

**Exit criteria:** Invariants and adversarial cases are documented and tested; no real USDT or mainnet deployment; a handoff lists evidence and limitations.

## Phase 5 — Application integration with testnet contracts

**Scope:** Connect approved UI flows to testnet contracts and wallet signatures. Show chain, token, amounts, repayment schedule, transaction states, and errors before user confirmation. Continue using synthetic identity data or the provider sandbox.

**Exit criteria:** End-to-end testnet flows work; no production funds or identity records are used; failures and user-support paths are recorded.

## Phase 6 — Independent security, privacy, and legal review

**Scope:** Independent smart-contract review/audit; application, database, key, and access-control review; privacy assessment; and jurisdiction-specific legal review of lending, rate disclosures, identity processing, geography, and collections.

**Exit criteria:** Critical/high risks are fixed or explicitly accepted by authorized decision-makers; required reviews are complete; incident response, monitoring, and support are ready. Do not accept real deposits before this gate.

## Phase 7 — Limited pilot, only if approved

**Scope:** If expressly approved after Phase 6, run a capped pilot with documented limits, user disclosures, monitoring, support, and incident/rollback procedures.

**Exit criteria:** Review repayment performance, defaults, refunds, complaints, operations, and security events. Product owner records a go/change/stop decision before expansion.

## Handoff rule

At each phase end, complete `docs/handoffs/PHASE_##_HANDOFF.md` and update `docs/PHASE_STATUS.md`. Record scope, files changed, checks actually run, unresolved decisions, risks/bugs, and proposed next tasks. The next phase may start only after its predecessor's exit criteria are met and the product owner approves the handoff. Do not silently implement `TBD` decisions.
