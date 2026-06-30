function DemoVideo({ videoSrc }) {
  return (
    <section className="section-shell section-stack" id="demo" aria-labelledby="demo-title">
      <div className="section-heading">
        <p className="eyebrow">Quick tour</p>
        <h2 id="demo-title">Host the AEGIS demo video directly on the site.</h2>
        <p>
          Add the final walkthrough video at <code>public/demo-video.mp4</code>.
          GitHub Pages will serve it as a static asset with the rest of the site.
        </p>
      </div>

      <div className="video-shell glass">
        <video className="demo-video" controls preload="metadata" poster="">
          <source data-testid="demo-video-source" src={videoSrc} type="video/mp4" />
          Your browser does not support embedded videos. Place the AEGIS demo video
          at public/demo-video.mp4 or download it from the project materials.
        </video>
        <div className="video-caption">
          <p className="feature-label">Local asset</p>
          <p>
            The page is backend-free. The video, guide, styles, and scripts are all
            bundled or served as static files.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DemoVideo
