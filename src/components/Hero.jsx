function Hero({ demoHref }) {
  return (
    <section className="hero section-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">Assessment</p>
        <h1 id="hero-title">AEGIS</h1>
        <p className="hero-subtitle">Automated Grading</p>
        <p className="hero-tagline">Automated evaluation assistance at every level.</p>
        <p className="hero-description">
          AEGIS helps teachers move from essay upload to feedback, rubric-based grading,
          and exportable results in a clear KEEP-supported workflow.
        </p>
        <div className="hero-actions" aria-label="Hero actions">
          <a className="button button-primary" href={demoHref}>
            Book a demo
          </a>
          <a className="button button-glass" href="#demo">
            Watch a quick tour
          </a>
        </div>
      </div>

      <div className="hero-visual glass" aria-label="CritiX Playground interface preview">
        <div className="critix-shell">
          <div className="critix-topbar">
            <div className="critix-wordmark" aria-label="CritiX">
              <span>C</span>riti<span>X</span>
            </div>
            <nav className="critix-nav" aria-label="CritiX preview navigation">
              <span className="critix-nav-tab is-active">Playground</span>
              <span className="critix-nav-tab">Database</span>
              <span className="critix-nav-tab">Assignments</span>
              <span className="critix-nav-tab">History</span>
            </nav>
            <span className="critix-sign-in">Sign In</span>
          </div>

          <div className="critix-workspace">
            <section className="critix-editor" aria-label="Essay input preview">
              <div className="critix-field critix-question">Question (Optional)</div>
              <div className="critix-field critix-essay">
                <p>
                  The essay argues that automated feedback should help teachers
                  review drafts faster while preserving final judgement.
                </p>
                <p>
                  A stronger second body paragraph could connect the evidence
                  back to the claim more explicitly.
                </p>
              </div>
              <div className="critix-editor-actions">
                <span className="critix-outline-button">Grading Criteria</span>
                <span className="critix-outline-button">Upload Document</span>
                <span className="critix-character-count">1,284 / 50000 characters</span>
                <span className="critix-submit">Submit</span>
              </div>
            </section>

            <section className="critix-results" aria-label="Evaluation results preview">
              <div className="critix-tabs" aria-label="CritiX result tabs">
                <span>Statistics</span>
                <span>AI Writing</span>
                <span>Plagiarism</span>
                <span className="is-active">Assessment</span>
                <span>Grammar</span>
                <span>Summary</span>
              </div>
              <div className="critix-score-header">
                <p>Overall Score</p>
                <strong>86.0/100</strong>
              </div>
              <div className="critix-assessment-card">
                <p>
                  Clear position and relevant examples. Strengthen the link
                  between paragraph evidence and the final claim.
                </p>
              </div>
              <div className="critix-feedback-list" aria-label="Assessment dimensions">
                <span>Task response</span>
                <span>Coherence</span>
                <span>Grammar check</span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
