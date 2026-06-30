import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
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
})
