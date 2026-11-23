# Decision Log

Use this file to distinguish user-directed project scope from draft proposals and unresolved decisions. A discussion in chat is not automatically a final legal, economic, or implementation approval. Update this log when decisions are approved; include date, approver, and rationale.

## Current direction from planning discussion

| Topic | Direction discussed | Status |
|---|---|---|
| Repository | Keep this project separate from `Kwento-Fi` | Accepted direction |
| Repayments | Ordinary USDT payments; do not use Superfluid streaming | Accepted direction |
| Initial lender asset | USDT only for the initial plan | Accepted direction; network/token TBD |
| API | Do not add a public API in the current plan | Accepted direction |
| Phase order | Developers work sequentially; every phase requires a handoff and product-owner approval | Accepted direction |
| Phase 1 coding | Safe app/repository foundation only; no loan/fund/KYC behavior | Approved by product owner on 2026-11-23 |
| Phase 1 stack and shell | React + TypeScript + Vite, pnpm, `apps/web/`, non-functional placeholder journeys | Approved for Phase 1 scaffold only on 2026-11-23; no later product behavior approved |
| Lender minimum deposit | 200 USDT | Proposed requirement; product-owner confirmation needed |
| Borrower loan range | 100–10,000 USDT | Proposed requirement; product-owner confirmation needed |
| Loan term | One year with monthly repayments | Proposed requirement; product-owner confirmation needed |
| Idle-fund refund | Lender can request refund after seven days if amount has not been lent/reserved | Proposed; exact liquidity and expiry rules TBD |
| Admin custody | Admin must not withdraw lender principal | Required design constraint, subject to implementation review |
| Admin emergency control | Initial preference is no admin pause/resume | Open security decision; risk must be explicitly reviewed |

## Economic proposal—not yet approved

- Total interest: 25% of original principal over 12 months (flat/add-on calculation).
- Interest split: 80% of collected interest to lender(s), 20% to owner treasury.
- Example: 100 USDT principal; 25 USDT interest; 20 USDT lender share; 5 USDT owner share; 125 USDT total repayment.
- Equal monthly repayment example: approximately 10.416666… USDT, rounded by an approved final-payment rule (e.g., 11 payments of 10.42 and a final 10.38).
- This is not a 25% reducing-balance APR. Required APR/cost disclosure and jurisdiction-specific review are unresolved. Do not implement the rate until approved.

## Open decisions — do not guess or implement

1. Which chain and exact canonical USDT token contract will be used? How will chain switching and wrong-token deposits be prevented?
2. Are all proposed amounts denominated in USDT, and what precision/rounding rules apply?
3. Does the 7-day refund window begin at deposit confirmation? What happens to approved but unaccepted offers, and is refund immediate or queued?
4. Can a loan be funded by only one lender, or can multiple lenders share one loan? How are repayments allocated across lenders?
5. What is the exact due-date schedule, payment allocation order, partial-payment behavior, grace period, early payoff formula, late/default policy, and collections/dispute process?
6. Is 25% flat/add-on interest legally permitted in intended markets? What disclosures and caps apply? Is the 80/20 split approved, and what costs, taxes, or protocol expenses exist?
7. Which countries and borrower types are eligible? India and Bangladesh were proposed as excluded jurisdictions in discussion, but the policy is not approved. Define the relevant basis and obtain legal review before collecting identity data.
8. What minimum age and evidence of Web3 employment/income are required? How are unaffiliated, self-employed, or privacy-preserving applicants handled?
9. Which identity-verification provider and fields are needed? What retention/deletion periods, appeals, and manual-review rules apply?
10. Emergency controls: is a narrow multisig pause for new approvals/disbursements acceptable while preserving repayments and permitted withdrawals, or is there to be no pause at all?
11. Which wallet/admin/owner treasury key model is required (e.g., multisig), and who can change contract parameters, if anyone?
12. Who approves each phase transition and what evidence is required for approval?

## Change record

- **2026-11-23 — Product owner:** Approved the sequential phase workflow and the Phase 1 technical stack and non-functional shell scope described in `plan.md`. Rationale: establish a safe, reviewable frontend foundation while keeping lending, identity, funds, contracts, and production activity gated. No economic, legal, eligibility, network, identity-processing, or emergency-control decision was approved by this change.
