function IntegrationSection() {
  return (
    <section
      className="section-shell integration"
      id="integration"
      aria-labelledby="integration-title"
    >
      <div className="integration-copy">
        <p className="eyebrow">Institutional workflow</p>
        <h2 id="integration-title">Designed to sit beside VeriGuide.</h2>
        <p>
          AEGIS works alongside VeriGuide&apos;s plagiarism detection workflow to
          support essay evaluation from originality checking to feedback and grading.
        </p>
      </div>

      <div className="integration-panel glass" aria-label="Workflow from VeriGuide to AEGIS">
        <div className="workflow-step">
          <span>1</span>
          <div>
            <h3>Check originality</h3>
            <p>Keep established academic-integrity review in place.</p>
          </div>
        </div>
        <div className="workflow-line" aria-hidden="true" />
        <div className="workflow-step">
          <span>2</span>
          <div>
            <h3>Evaluate writing</h3>
            <p>Move into AEGIS for rubric scoring and teacher-reviewed feedback.</p>
          </div>
        </div>
        <div className="workflow-line" aria-hidden="true" />
        <div className="workflow-step">
          <span>3</span>
          <div>
            <h3>Share results</h3>
            <p>Export structured outcomes for the next teaching conversation.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntegrationSection
