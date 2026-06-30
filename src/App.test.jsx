import { act, fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import App from './App.jsx'

describe('AEGIS marketing website', () => {
  it('renders the KEEP-branded hero and primary calls to action', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1, name: 'AEGIS' })).toBeInTheDocument()
    expect(screen.getByText('Automated evaluation assistance at every level.')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /book a demo/i })).toHaveLength(2)
    screen.getAllByRole('link', { name: /book a demo/i }).forEach((link) => {
      expect(link).toHaveAttribute('href', 'mailto:keep@cuhk.edu.hk?subject=AEGIS%20demo%20request')
    })
    expect(screen.getByRole('link', { name: /watch a quick tour/i })).toHaveAttribute('href', '#demo')
    expect(screen.getByText('Playground')).toBeInTheDocument()
    expect(screen.getByText('Grading Criteria')).toBeInTheDocument()
    expect(screen.getByText('Overall Score')).toBeInTheDocument()
    expect(screen.getAllByAltText('KEEP')).toHaveLength(2)
    expect(screen.getByAltText('The Chinese University of Hong Kong')).toBeInTheDocument()
  })

  it('hosts the required feature pillars and VeriGuide integration story', () => {
    render(<App />)

    const overview = screen.getByRole('region', { name: /overview/i })
    expect(within(overview).getByText('Essay Grader')).toBeInTheDocument()
    expect(within(overview).getByText('Grammar Checker')).toBeInTheDocument()
    expect(within(overview).getByText('Summarizer')).toBeInTheDocument()
    expect(within(overview).getByText('Basic Statistics')).toBeInTheDocument()
    expect(screen.getByText(/AEGIS works alongside VeriGuide/i)).toBeInTheDocument()
  })

  it('includes the English guide workflow and local demo video source', () => {
    render(<App />)

    const guide = screen.getByRole('region', { name: /user guide/i })
    expect(within(guide).getByRole('heading', { level: 3, name: 'Upload' })).toBeInTheDocument()
    expect(within(guide).getByRole('heading', { level: 3, name: 'Review' })).toBeInTheDocument()
    expect(within(guide).getByRole('heading', { level: 3, name: 'Grade' })).toBeInTheDocument()
    expect(within(guide).getByRole('heading', { level: 3, name: 'Export' })).toBeInTheDocument()
    expect(screen.getByTestId('demo-video-source')).toHaveAttribute('src', '/demo-video.mp4')
  })

  it('opens and closes the mobile Liquid Glass menu from the toggle', () => {
    vi.useFakeTimers()

    try {
      render(<App />)

      const menuButton = screen.getByRole('button', { name: /open menu/i })
      expect(screen.queryByRole('navigation', { name: /mobile primary navigation/i })).not.toBeInTheDocument()

      fireEvent.click(menuButton)

      const mobileNav = screen.getByRole('navigation', { name: /mobile primary navigation/i })
      expect(menuButton).toHaveAttribute('aria-expanded', 'true')
      expect(within(mobileNav).getByRole('link', { name: 'Overview' })).toHaveAttribute('href', '#overview')
      expect(within(mobileNav).getByRole('link', { name: /book a demo/i })).toHaveAttribute(
        'href',
        'mailto:keep@cuhk.edu.hk?subject=AEGIS%20demo%20request',
      )

      fireEvent.click(menuButton)

      expect(menuButton).toHaveAttribute('aria-expanded', 'false')
      expect(mobileNav).toHaveClass('mobile-nav--closing')

      act(() => {
        vi.advanceTimersByTime(800)
      })

      expect(screen.queryByRole('navigation', { name: /mobile primary navigation/i })).not.toBeInTheDocument()
    } finally {
      vi.useRealTimers()
    }
  })

  it('plays a nav-link transition before closing the mobile menu', () => {
    vi.useFakeTimers()

    try {
      render(<App />)

      fireEvent.click(screen.getByRole('button', { name: /open menu/i }))

      const mobileNav = screen.getByRole('navigation', { name: /mobile primary navigation/i })
      const overviewLink = within(mobileNav).getByRole('link', { name: 'Overview' })

      fireEvent.click(overviewLink)

      expect(mobileNav).toHaveClass('mobile-nav--linking')
      expect(overviewLink).toHaveClass('is-active')

      act(() => {
        vi.advanceTimersByTime(520)
      })

      expect(mobileNav).toHaveClass('mobile-nav--closing')

      act(() => {
        vi.advanceTimersByTime(800)
      })

      expect(screen.queryByRole('navigation', { name: /mobile primary navigation/i })).not.toBeInTheDocument()
    } finally {
      vi.useRealTimers()
    }
  })
})
