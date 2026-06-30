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

      <div className="hero-visual glass" aria-label="AEGIS interface preview">
        <div className="browser-bar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="interface-card">
          <div>
            <p className="interface-label">Assignment</p>
            <h2>Argument essay batch</h2>
          </div>
          <span className="status-pill">Ready to review</span>
        </div>
        <div className="score-grid">
          <article>
            <span>Rubric score</span>
            <strong>86</strong>
          </article>
          <article>
            <span>Grammar alerts</span>
            <strong>12</strong>
          </article>
          <article>
            <span>Readability</span>
            <strong>B+</strong>
          </article>
        </div>
        <div className="feedback-panel">
          <p className="interface-label">AI-assisted feedback</p>
          <p>
            The essay presents a clear position and would benefit from stronger
            evidence in the second body paragraph.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
