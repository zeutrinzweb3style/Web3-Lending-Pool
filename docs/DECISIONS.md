# Decision Log

Use this file to distinguish user-directed project scope from draft proposals and unresolved decisions. A discussion in chat is not automatically a final legal, economic, or implementation approval. Update this log when decisions are approved; include date, approver, and any rationale.

## Current direction from planning discussion

| Topic | Direction discussed | Status |
|---|---|---|
| Repository | Keep this project separate from `Kwento-Fi` | Accepted direction |
| Repayments | Ordinary USDT payments; do not use Superfluid streaming | Accepted direction |
| Initial lender asset | USDT only for the initial plan | Accepted direction; network/token TBD |
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
3. Does the 7-day refund window begin at deposit confirmation? What happens to already approved but unaccepted offers, and is refund immediate or queued?
4. Can a loan be funded by only one lender, or can multiple lenders share one loan? How are repayments allocated across lenders?
5. What is the exact due-date schedule, payment allocation order, partial-payment behavior, grace period, early payoff formula, late/default policy, and collections/dispute process?
6. Is 25% flat/add-on interest legally permitted in intended markets? What disclosures and caps apply? Is the 80/20 split approved, and what costs, taxes, or protocol expenses exist?
7. Which countries and borrower types are eligible? India and Bangladesh were proposed as excluded jurisdictions in discussion, but the policy is not approved. Define the relevant basis (residence, location, or other lawful criterion) and obtain legal review before collecting identity data.
8. What minimum age and evidence of Web3 employment/income are required? How are unaffiliated, self-employed, or privacy-preserving applicants handled?
9. Which identity-verification provider and fields are needed? What retention/deletion periods, appeals, and manual-review rules apply?
10. Emergency controls: is a narrow multisig pause for new approvals/disbursements acceptable while preserving repayments and permitted withdrawals, or is there to be no pause at all?
11. Which wallet/admin/owner treasury key model is required (e.g., multisig), and who can change contract parameters, if anyone?
12. What are the final Phase 1 acceptance criteria and who approves phase transitions?

## Change record

No product-owner approvals recorded yet. Add dated entries here when decisions are made.
