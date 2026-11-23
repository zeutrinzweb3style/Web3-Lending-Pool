const proposedTerms = [
  {
    label: "Lender deposit minimum",
    value: "200 USDT",
    note: "Draft proposal",
  },
  {
    label: "Borrower request range",
    value: "100–10,000 USDT",
    note: "Draft proposal",
  },
  { label: "Repayment term", value: "12 months", note: "Draft proposal" },
];

const lenderSteps = [
  "Deposit USDT into the pool",
  "Review a borrower request",
  "Approve or decline the request",
  "Track monthly repayments",
];

const borrowerSteps = [
  "Submit a loan request",
  "Review the proposed terms",
  "Accept the agreement",
  "Make monthly payments",
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 36 36" role="presentation">
        <path d="M18 3.5 31 11v14L18 32.5 5 25V11L18 3.5Z" />
        <path d="M12 21.5V14h4.2c2.5 0 4 1.1 4 3.1 0 1.9-1.5 3.1-4 3.1H12Zm8 0 4 0" />
        <path d="M13 25.5h10" />
      </svg>
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" />
    </svg>
  );
}

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a
          className="brand"
          href="#overview"
          aria-label="Web3 Lending Pool overview"
        >
          <BrandMark />
          <span className="brand-copy">
            <strong>Web3 Lending</strong>
            <small>WEB3 LENDING</small>
          </span>
        </a>

        <div className="nav-label">WORKSPACE</div>
        <nav className="side-nav" aria-label="Prototype sections">
          <a className="nav-link is-active" href="#overview">
            <span className="nav-symbol" aria-hidden="true">
              01
            </span>
            <span>Overview</span>
          </a>
          <a className="nav-link" href="#lender-concept">
            <span className="nav-symbol" aria-hidden="true">
              02
            </span>
            <span>Lender journey</span>
          </a>
          <a className="nav-link" href="#borrower-concept">
            <span className="nav-symbol" aria-hidden="true">
              03
            </span>
            <span>Borrower journey</span>
          </a>
        </nav>

        <div className="sidebar-note">
          <span className="note-dot" />
          <div>
            <strong>Planning mode</strong>
            <p>This is a non-functional prototype. No wallet is connected.</p>
          </div>
        </div>
        <div className="sidebar-foot">PHASE 1 · FOUNDATION</div>
      </aside>

      <main className="main-content" id="overview">
        <header className="topbar">
          <div className="breadcrumb">
            Workspace <span>/</span> Overview
          </div>
          <div className="prototype-pill">
            <span /> Planning prototype
          </div>
        </header>

        <div className="page-wrap">
          <section className="hero" aria-labelledby="page-title">
            <div className="hero-copy">
              <p className="eyebrow">PRODUCT EXPLORATION · PHASE 1</p>
              <h1 id="page-title">
                A lending pool,
                <br />
                <em>still taking shape.</em>
              </h1>
              <p className="hero-description">
                A planning prototype for a proposed USDT lending pool with
                borrower-reviewed loans and monthly repayments. Nothing here is
                live, connected to a wallet, or accepting funds.
              </p>
              <a className="text-link" href="#draft-terms">
                Review draft parameters <ArrowIcon />
              </a>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="art-ring ring-one" />
              <div className="art-ring ring-two" />
              <div className="art-ring ring-three" />
              <div className="art-core">
                <BrandMark />
              </div>
              <span className="orbit-label label-top">DRAFT</span>
              <span className="orbit-label label-bottom">NO LIVE FUNDS</span>
            </div>
          </section>

          <section
            className="terms-section"
            id="draft-terms"
            aria-labelledby="terms-title"
          >
            <div className="section-heading">
              <div>
                <p className="eyebrow">CURRENT DISCUSSION</p>
                <h2 id="terms-title">Draft parameters</h2>
              </div>
              <span className="draft-tag">PROPOSED · NOT FINAL</span>
            </div>
            <div className="term-grid">
              {proposedTerms.map((term, index) => (
                <article className="term-card" key={term.label}>
                  <div className="term-card-top">
                    <span className="term-index">0{index + 1}</span>
                    <span className="term-status">Draft</span>
                  </div>
                  <p>{term.label}</p>
                  <strong>{term.value}</strong>
                  <small>{term.note}</small>
                </article>
              ))}
            </div>
            <p className="terms-disclaimer">
              Illustrative planning values only. Economics, legal disclosures,
              eligibility, and network details remain under review.
            </p>
          </section>

          <section className="journey-section" aria-labelledby="journey-title">
            <div className="section-heading journey-heading">
              <div>
                <p className="eyebrow">FUTURE EXPERIENCE · CONCEPT ONLY</p>
                <h2 id="journey-title">Two journeys to design</h2>
              </div>
              <span className="journey-caption">No actions are enabled</span>
            </div>
            <div className="journey-grid">
              <article className="journey-card lender-card" id="lender-concept">
                <div className="journey-card-head">
                  <span className="journey-icon lender-icon" aria-hidden="true">
                    L
                  </span>
                  <div>
                    <span className="eyebrow">FOR LENDERS</span>
                    <h3>Capital providers</h3>
                  </div>
                  <span className="future-label">FUTURE</span>
                </div>
                <p className="journey-intro">
                  A considered path from pool deposit to reviewing a proposed
                  borrower request.
                </p>
                <ol className="step-list">
                  {lenderSteps.map((step, index) => (
                    <li key={step}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {step}
                    </li>
                  ))}
                </ol>
                <div className="journey-card-foot">
                  <span>Concept journey</span>
                  <span className="foot-line" />
                </div>
              </article>

              <article
                className="journey-card borrower-card"
                id="borrower-concept"
              >
                <div className="journey-card-head">
                  <span
                    className="journey-icon borrower-icon"
                    aria-hidden="true"
                  >
                    B
                  </span>
                  <div>
                    <span className="eyebrow">FOR BORROWERS</span>
                    <h3>Loan applicants</h3>
                  </div>
                  <span className="future-label">FUTURE</span>
                </div>
                <p className="journey-intro">
                  A clear review of terms before acceptance, followed by
                  ordinary monthly repayments.
                </p>
                <ol className="step-list">
                  {borrowerSteps.map((step, index) => (
                    <li key={step}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {step}
                    </li>
                  ))}
                </ol>
                <div className="journey-card-foot">
                  <span>Concept journey</span>
                  <span className="foot-line" />
                </div>
              </article>
            </div>
          </section>

          <footer className="page-footer">
            <div className="footer-mark">
              <BrandMark />
              <span>
                Web3 Lending <small>PLANNING PROTOTYPE</small>
              </span>
            </div>
            <p>
              Demo content only. No real account, lender, borrower, contract,
              API, or payment data is present.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
