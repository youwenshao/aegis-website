function GuideSection({ steps }) {
  return (
    <section className="section-shell section-stack" id="guide" aria-label="User guide">
      <div className="section-heading">
        <p className="eyebrow">User guide</p>
        <h2 id="guide-title">English guide for teacher-led grading.</h2>
        <p>
          This guide is adapted from the AEGIS quickstart documentation for
          non-technical teachers and staff. It focuses on the daily workflow rather
          than backend setup details.
        </p>
      </div>

      <div className="guide-layout">
        <aside className="guide-nav glass" aria-label="Guide steps">
          {steps.map((step) => (
            <a key={step.title} href={`#guide-${step.title.toLowerCase()}`}>
              {step.title}
            </a>
          ))}
        </aside>

        <div className="guide-steps">
          {steps.map((step, index) => (
            <article
              className="guide-step"
              id={`guide-${step.title.toLowerCase()}`}
              key={step.title}
            >
              <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <p className="feature-label">{step.kicker}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="guide-note">
        <h3>Students today</h3>
        <p>
          Students do not log in to CritiX today. Teachers upload student essays,
          review feedback, grade the submissions, and export results to share
          manually. A direct student portal is planned for the future.
        </p>
      </div>
    </section>
  )
}

export default GuideSection
