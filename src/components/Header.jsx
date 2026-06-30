import { useCallback, useEffect, useRef, useState } from 'react'
import { assetUrl } from '../lib/assets.js'

const navItems = [
  { href: '#overview', label: 'Overview' },
  { href: '#integration', label: 'VeriGuide' },
  { href: '#demo', label: 'Demo' },
  { href: '#guide', label: 'User guide' },
]

const MENU_MOTION_MS = 760
const LINK_TRANSITION_MS = 520

function Header({ demoHref }) {
  const [menuPhase, setMenuPhase] = useState('closed')
  const [menuExpanded, setMenuExpanded] = useState(false)
  const [activeMobileHref, setActiveMobileHref] = useState(null)
  const menuTimers = useRef([])
  const mobileNavRef = useRef(null)
  const toggleButtonRef = useRef(null)

  const isMenuExpanded = menuPhase === 'open' || menuPhase === 'linking'
  const isMenuClosing = menuPhase === 'closing'
  const isMenuClosed = menuPhase === 'closed'

  const clearMenuTimers = useCallback(() => {
    menuTimers.current.forEach((timerId) => window.clearTimeout(timerId))
    menuTimers.current = []
  }, [])

  const queueMenuTimer = useCallback((callback, delay) => {
    const timerId = window.setTimeout(() => {
      menuTimers.current = menuTimers.current.filter((id) => id !== timerId)
      callback()
    }, delay)

    menuTimers.current.push(timerId)
  }, [])

  const finishClose = useCallback(() => {
    clearMenuTimers()
    setMenuPhase('closed')
  }, [clearMenuTimers])

  const beginClose = useCallback(() => {
    clearMenuTimers()
    setActiveMobileHref(null)
    setMenuExpanded(false)
    setMenuPhase('closing')
    queueMenuTimer(finishClose, MENU_MOTION_MS + 40)
  }, [clearMenuTimers, finishClose, queueMenuTimer])

  const closeMenu = useCallback(() => {
    if (menuPhase === 'closed' || menuPhase === 'closing') {
      return
    }

    beginClose()
  }, [beginClose, menuPhase])

  const openMenu = useCallback(() => {
    clearMenuTimers()
    setActiveMobileHref(null)
    setMenuExpanded(false)
    setMenuPhase('open')
  }, [clearMenuTimers])

  const handleToggleMenu = () => {
    if (isMenuExpanded) {
      closeMenu()
      return
    }

    openMenu()
  }

  const handleMobileLinkClick = (href) => {
    if (menuPhase !== 'open') {
      return
    }

    clearMenuTimers()
    setActiveMobileHref(href)
    setMenuPhase('linking')
    queueMenuTimer(beginClose, LINK_TRANSITION_MS)
  }

  const handleMobileNavTransitionEnd = (event) => {
    if (
      event.target !== mobileNavRef.current ||
      event.propertyName !== 'max-height' ||
      menuPhase !== 'closing' ||
      menuExpanded
    ) {
      return
    }

    finishClose()
  }

  useEffect(() => {
    if (isMenuClosed) {
      return undefined
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [closeMenu, isMenuClosed])

  useEffect(() => clearMenuTimers, [clearMenuTimers])

  useEffect(() => {
    if (menuPhase !== 'open') {
      return undefined
    }

    const frameId = window.requestAnimationFrame(() => {
      setMenuExpanded(true)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [menuPhase])

  useEffect(() => {
    if (
      !isMenuClosing ||
      !mobileNavRef.current?.contains(document.activeElement)
    ) {
      return
    }

    toggleButtonRef.current?.focus({ preventScroll: true })
  }, [isMenuClosing])

  return (
    <header className={`site-header glass${isMenuExpanded ? ' is-menu-open' : ''}`}>
      <a className="brand" href="#top" aria-label="AEGIS home">
        <img
          className="brand-logo"
          src={assetUrl('keep-logo.png')}
          alt="KEEP"
          width="500"
          height="144"
        />
        <span className="brand-divider" aria-hidden="true" />
        <span className="brand-name">AEGIS</span>
      </a>

      <nav className="site-nav desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="button button-primary header-cta" href={demoHref}>
        Book a demo
      </a>

      <button
        ref={toggleButtonRef}
        className="nav-toggle"
        type="button"
        aria-label={isMenuExpanded ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuExpanded}
        aria-controls="mobile-primary-navigation"
        onClick={handleToggleMenu}
      >
        <span className="nav-toggle-line" aria-hidden="true" />
        <span className="nav-toggle-line" aria-hidden="true" />
        <span className="nav-toggle-line" aria-hidden="true" />
      </button>

      <nav
        ref={mobileNavRef}
        id="mobile-primary-navigation"
        className={`mobile-nav mobile-nav--${menuPhase}${menuExpanded ? ' is-expanded' : ''}`}
        aria-label="Mobile primary navigation"
        aria-hidden={isMenuClosed || isMenuClosing || undefined}
        inert={isMenuClosed || isMenuClosing || undefined}
        onTransitionEnd={handleMobileNavTransitionEnd}
      >
        <div className="mobile-nav-panel">
          {navItems.map((item) => (
            <a
              key={item.href}
              className={`mobile-nav-link ${activeMobileHref === item.href ? 'is-active' : ''}`}
              href={item.href}
              tabIndex={isMenuExpanded ? undefined : -1}
              onClick={() => handleMobileLinkClick(item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            className={`mobile-nav-link mobile-nav-link--cta ${
              activeMobileHref === demoHref ? 'is-active' : ''
            }`}
            href={demoHref}
            tabIndex={isMenuExpanded ? undefined : -1}
            onClick={() => handleMobileLinkClick(demoHref)}
          >
            Book a demo
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
