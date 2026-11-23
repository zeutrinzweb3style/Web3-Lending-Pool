# Security and Privacy Requirements

**Status: Draft; requires specialist review before implementation or collection of real data.** This file sets minimum planning constraints, not a substitute for an audit or jurisdiction-specific legal/privacy advice.

## Funds and smart contracts

- Lender principal must not be withdrawable by an admin or owner key. Owner revenue is limited to the approved share of interest actually received and must be separately accounted for.
- Separate accounting is required for available lender funds, reserved offers, active-loan principal, collected principal, collected interest, lender interest share, and owner share.
- A loan must not become active or be recorded as disbursed until the on-chain transfer succeeds. Failed transactions must not create borrower debt in the contract state.
- Refunds must be limited to the lender's eligible, unallocated balance; no active-loan capital can be refunded as if still idle.
- Use a narrowly scoped multisig for any approved privileged operations. The no-admin-withdrawal constraint is mandatory. Emergency pause design remains an open decision; assess the risk of having no circuit breaker.
- No mainnet deployment or real deposits before independent review, test coverage, and Phase 6 approval.
- Select one network and verify the exact token contract, decimals, and behavior before any implementation; reject unsupported or fake token addresses.

## Identity and borrower data

- Do not put names, addresses, identity documents, selfies, biometric data, or KYC results containing personal data on-chain or in this public repository.
- Collect only fields needed for an approved purpose. Prefer a qualified verification provider that returns a minimal verification status/reference instead of having the application retain raw ID images.
- If raw documents must be retained, use private storage, encryption at rest and in transit, least-privilege access, short documented retention, secure deletion, access/audit logs, breach response, and jurisdiction-specific review.
- Do not expose raw IDs or selfies to lenders, other borrowers, the public, or a normal admin UI because a loan is late or in default. The prior concept of a post-default “visible ID” request is rejected for implementation unless legal/privacy review establishes a lawful, proportionate process and the product owner approves it. Prefer normal account status, payment history, and legally compliant dispute/collection procedures.
- Face matching and liveness checks can fail or produce false matches. Provide secure manual review/appeal; do not make a face score the sole credit decision.
- Perform preliminary eligibility checks before collecting sensitive documents. Any proposed country exclusions (including India and Bangladesh) must be reviewed for lawful basis and applied consistently before ID upload.
- Keep identity-provider credentials in authorized secret storage, never in Git.

## Application and operations

- Enforce wallet-signature verification and clear transaction confirmation; display chain, token, amount, recipient, total repayment, due dates, and fee split before signature.
- Use role-based access control, secure authentication, input validation, rate limits, monitoring, backups, and incident-response procedures.
- Supabase or any equivalent service must use server-side authorization/RLS and private buckets for sensitive records. Never rely on front-end hiding as access control. Log sensitive-data access without copying document contents into logs.
- Keep environments separate: local/dev, testnet/staging, and production. Test with mock/test tokens and synthetic personal data only.
- Document key custody, multisig signers, rotation/recovery, and the blast radius of every privileged operation before launch.
