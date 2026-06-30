import { assetUrl } from '../lib/assets.js'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <div className="footer-logos" aria-label="Institutional logos">
            <img
              className="footer-logo footer-logo-keep"
              src={assetUrl('keep-logo.png')}
              alt="KEEP"
              width="500"
              height="144"
            />
            <img
              className="footer-logo footer-logo-cuhk"
              src={assetUrl('cuhk-logo.png')}
              alt="The Chinese University of Hong Kong"
              width="960"
              height="360"
            />
          </div>
          <p className="footer-kicker">KEEP, The Chinese University of Hong Kong</p>
          <h2>AEGIS</h2>
          <p>
            A KEEP-supported platform for automated essay feedback, grading, and
            teacher-facing evaluation workflows.
          </p>
        </div>

        <div className="footer-links" aria-label="Footer links">
          <a href="#overview">Overview</a>
          <a href="#integration">VeriGuide integration</a>
          <a href="#demo">Demo video</a>
          <a href="#guide">User guide</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
