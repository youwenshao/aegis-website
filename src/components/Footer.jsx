import { assetUrl } from '../lib/assets.js'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <div className="footer-logos" aria-label="Institutional logos">
            <img
              className="footer-logo footer-logo-cuhk-icon"
              src={assetUrl('cuhk-icon.png')}
              alt="The Chinese University of Hong Kong"
              width="1024"
              height="810"
            />
            <img
              className="footer-logo footer-logo-keep-icon"
              src={assetUrl('keep-icon.png')}
              alt="KEEP"
              width="512"
              height="512"
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
