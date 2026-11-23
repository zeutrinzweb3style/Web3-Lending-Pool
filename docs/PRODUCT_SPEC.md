# Product Proposal and Requirements

**Status: Draft for product-owner review.** This document captures the current concept; it is not a legal agreement, an approved credit policy, or authorization to collect funds or personal data. Unresolved decisions are listed in `DECISIONS.md`.

## 1. Purpose and scope

Plan a separate Web3 lending-pool product. Lenders deposit USDT; eligible borrowers request loans; a lender reviews and approves or rejects a request; the borrower accepts the final terms; the contract disburses the loan; and the borrower repays through ordinary on-chain token payments. Superfluid streaming is out of scope.

The first proposed release is USDT-only. The blockchain network and exact token contract are **TBD**. The product must not assume that similarly named tokens on different networks are interchangeable.

## 2. Proposed economic terms

- Minimum lender deposit: **200 USDT**.
- Minimum borrower loan request: **100 USDT**.
- Maximum borrower loan request: **10,000 USDT**, subject to available and approved funds.
- Proposed loan term: **12 months**, with monthly repayments.
- Proposed total interest: **25% of the original principal over the full 12-month term** (flat/add-on interest, not 25% reducing-balance APR).
- Proposed interest allocation: **80% of interest actually collected to the lender(s)** and **20% to the platform owner treasury**. For a fully repaid 100 USDT loan, this is 25 USDT total interest: 20 USDT lender share and 5 USDT owner share.
- No interest or owner share is guaranteed if it has not actually been collected. Principal must not be treated as interest or owner revenue.

### Illustrative 100 USDT repayment

If the total contractual repayment is 125 USDT over 12 equal monthly installments, the indicative installment is 125 / 12 = **10.416666… USDT**. A UI could show 10.42 USDT for the first 11 installments and 10.38 USDT for the last, subject to token precision and the final approved rounding rule. The proposed interest split over a fully paid loan is 20 USDT to the lender and 5 USDT to the owner; the contract must specify when and how those shares are accounted for.

This is a flat/add-on interest proposal. Since principal is returned throughout the year, the effective borrowing cost is higher than the headline 25% of original principal. Before launch, show the full schedule and legally required cost/APR disclosures, and obtain jurisdiction-specific review. This proposal is not an approved rate.

## 3. Lender flow

1. Lender connects a wallet on the selected network and deposits USDT into the pool; the deposit transaction and amount are recorded on-chain.
2. Proposed minimum deposit is 200 USDT.
3. After seven days from deposit, the lender may request a refund of the unallocated/available portion, provided it is not reserved for an approved loan or already lent out.
4. A pending borrower application alone should not lock funds. On lender approval, only the approved amount should be reserved, subject to an acceptance expiry.
5. Funds disbursed to an active loan are not immediately refundable; principal becomes available again as repayments are received, subject to final pool accounting rules.
6. The contract must have no admin function that withdraws lender principal to an admin-controlled address.

Whether an idle refund is immediate or subject to a liquidity queue is **TBD**. Refund requests must never withdraw capital already committed to an active loan.

## 4. Borrower and loan flow

1. Show eligibility requirements and perform any country/age pre-check before collecting government-ID images or biometrics.
2. Borrower submits a loan request between 100 and 10,000 USDT and provides the information required by the approved verification process.
3. Lender reviews the request and approves or rejects it. Approval reserves no more than the specific approved amount.
4. Borrower reviews the final amount, 12-month schedule, total repayment, interest allocation disclosure, and default/late-payment terms, then accepts/signs.
5. The loan is recorded as active only once the on-chain disbursement to the borrower's wallet succeeds. If transfer or acceptance fails, it must not be recorded as a completed disbursement.
6. Borrower makes monthly USDT repayments through ordinary transactions. The UI shows due dates, payments received, outstanding principal, interest accounting, and loan status.

Exact signature format, acceptance-expiry period, partial-payment treatment, early payoff, grace period, late charges, and default policy are **TBD**.

## 5. Borrower verification concept

The proposed application may request legal name, address, age/date-of-birth evidence, country, work/income evidence, wallet address, government ID, and selfie/liveness verification. The verification vendor, supported documents, data fields, country eligibility, retention, and manual-review process require product, privacy, and legal approval.

A verification result should be represented in the app with a minimal status or provider reference where feasible. A face match must not be treated as an infallible or sole credit decision. Provide a review/appeal path for failed or uncertain checks.

The concept of revealing a borrower's raw ID to a lender or admin after delinquency is **not approved and must not be implemented**. Refer to `SECURITY_AND_PRIVACY.md` for the safer default.

## 6. Admin and contract boundaries

- Admin/owner must not be able to withdraw lender principal.
- Owner revenue is limited to the agreed percentage of interest actually collected and must be accounted for separately from principal.
- User-requested direction is no admin pause/resume control. This creates a security-response tradeoff; any emergency circuit breaker is an open decision requiring explicit approval before implementation or deployment.
- Do not put identity documents or personal data on-chain.

## 7. Out of scope until separately approved

- Superfluid streaming or automatic payroll redirection.
- cUSD, CELO, or any asset other than USDT in the first proposed release.
- Mainnet deployment, public deposits, production KYC, or real-money pilot.
- Public display or lender access to government-ID documents.
