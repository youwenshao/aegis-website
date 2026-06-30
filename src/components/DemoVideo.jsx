function DemoVideo({ videoSrc }) {
  return (
    <section className="section-shell section-stack" id="demo" aria-labelledby="demo-title">
      <div className="section-heading">
        <p className="eyebrow">Quick tour</p>
        <h2 id="demo-title">See the full grading workflow in a few minutes.</h2>
        <p>
          This walkthrough shows how teachers upload student essays, review
          AI-assisted feedback and language suggestions, apply rubrics, and export
          results for the next teaching conversation.
        </p>
      </div>

      <div className="video-shell glass">
        <video className="demo-video" controls preload="metadata" poster="">
          <source data-testid="demo-video-source" src={videoSrc} type="video/mp4" />
          Your browser does not support embedded video. Book a demo with KEEP to
          see AEGIS in action.
        </video>
        <div className="video-caption">
          <p className="feature-label">What you&apos;ll see</p>
          <p>
            Upload a batch of essays, inspect feedback across assessment
            dimensions, adjust scores with rubric support, and export structured
            results in one KEEP-supported workflow.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DemoVideo
