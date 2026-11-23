# Implementation Phases

**Status: Proposed.** A phase is not complete merely because code exists. Exit criteria and product-owner approval are required before advancing. Current progress is recorded in `PHASE_STATUS.md`.

## Phase 1 — Product requirements and project rules

**Scope:** Review and finalize the draft requirements, economic model, roles, eligibility, repayment, refunds, privacy, and unresolved decisions. Establish repository working rules and handoff format.

**Exit criteria:** Product owner approves the product scope and explicitly resolves or accepts each blocking item in `DECISIONS.md`; `PRODUCT_SPEC.md` and `SECURITY_AND_PRIVACY.md` reflect approved decisions; Phase 1 handoff is reviewed.

## Phase 2 — User flows and system design

**Scope:** Design lender and borrower journeys, application/approval/acceptance/disbursement/repayment/refund states, data-flow boundaries, contract/app/database responsibilities, and threat model. Produce wireframes and architecture diagrams if useful.

**Exit criteria:** Design review approved; on-chain/off-chain data boundaries, role permissions, error cases, and data-retention approach are documented; no sensitive user data is proposed for public-chain storage.

## Phase 3 — UI prototype with dummy data

**Scope:** Build a non-production clickable prototype using dummy accounts and synthetic data only. No wallet transactions, real identity verification, or real funds.

**Exit criteria:** Lender and borrower journeys have been reviewed; users can understand total repayment and schedule; error/empty/overdue states are represented; no live personal data or funds are collected.

## Phase 4 — Smart-contract development and testnet testing

**Scope:** Implement the approved contract logic and automated tests using a mock/test token on a test network. Cover deposits, available versus reserved balances, lender approvals, borrower acceptance, disbursement, repayments, interest split, idle refunds, expiries, failures, and default accounting.

**Exit criteria:** Automated tests cover expected and adversarial cases; key invariants are documented and pass; no real USDT or mainnet deployment; a developer handoff lists known limitations and test evidence.

## Phase 5 — Application integration and verification sandbox

**Scope:** Connect the application to the testnet contract and a verification provider's sandbox (or simulated provider). Add status display, transaction errors, access controls, audit events, and privacy controls.

**Exit criteria:** End-to-end testnet flows work; only approved minimum verification data is retained; sensitive files are private; failures, appeals, and support paths are documented.

## Phase 6 — Independent security, privacy, and legal review

**Scope:** Obtain an independent smart-contract review/audit, assess app/database and key security, review privacy/data handling, loan disclosures, eligibility and country policy, and legal/regulatory requirements for intended markets.

**Exit criteria:** Critical/high-risk findings are fixed or explicitly accepted by authorized decision-makers; required legal/privacy review is complete; incident response, monitoring, and user support are ready. Do not accept real deposits before passing this gate.

## Phase 7 — Limited pilot, only if approved

**Scope:** If expressly approved after Phase 6, run a small, capped pilot with documented user communications, monitoring, support, and rollback/incident process.

**Exit criteria:** Pilot is reviewed against repayment, defaults, refunds, complaints, operational load, and security events; product owner records a go/change/stop decision before expansion.

## Handoff rule

At the end of each phase, the developer completes `docs/handoffs/PHASE_##_HANDOFF.md` and updates `docs/PHASE_STATUS.md`. Record scope, files changed, checks actually performed, unresolved decisions, bugs/risks, and proposed next steps. The next phase may start only after exit criteria are met and the product owner approves the handoff. Do not silently implement `TBD` items.
