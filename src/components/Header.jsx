const navItems = [
  { href: '#overview', label: 'Overview' },
  { href: '#integration', label: 'VeriGuide' },
  { href: '#demo', label: 'Demo' },
  { href: '#guide', label: 'User guide' },
]

function Header({ demoHref }) {
  return (
    <header className="site-header glass">
      <a className="brand" href="#top" aria-label="AEGIS home">
        <span className="brand-mark">KEEP</span>
        <span className="brand-divider" aria-hidden="true" />
        <span className="brand-name">AEGIS</span>
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="button button-primary header-cta" href={demoHref}>
        Book a demo
      </a>
    </header>
  )
}

export default Header
