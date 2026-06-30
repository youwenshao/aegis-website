import {
  BasicStatisticsIcon,
  EssayGraderIcon,
  GrammarCheckerIcon,
  SummarizerIcon,
} from './FeatureIcons.jsx'

const featureIcons = {
  'Essay Grader': EssayGraderIcon,
  'Grammar Checker': GrammarCheckerIcon,
  Summarizer: SummarizerIcon,
  'Basic Statistics': BasicStatisticsIcon,
}

function FeatureGrid({ features }) {
  return (
    <section className="section-shell section-stack" id="overview" aria-label="Overview">
      <div className="section-heading">
        <p className="eyebrow">Overview</p>
        <h2 id="overview-title">One workflow for practical essay evaluation.</h2>
        <p>
          AEGIS keeps the core teaching tasks visible: score essays, review language
          issues, understand long submissions, and export useful results.
        </p>
      </div>

      <div className="feature-grid">
        {features.map((feature) => {
          const Icon = featureIcons[feature.title]

          return (
          <article className="feature-card" key={feature.title}>
            <span className="feature-icon" aria-hidden="true">
              {Icon ? <Icon /> : null}
            </span>
            <p className="feature-label">{feature.label}</p>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
          )
        })}
      </div>
    </section>
  )
}

export default FeatureGrid
