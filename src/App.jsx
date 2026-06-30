import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import FeatureGrid from './components/FeatureGrid.jsx'
import IntegrationSection from './components/IntegrationSection.jsx'
import DemoVideo from './components/DemoVideo.jsx'
import GuideSection from './components/GuideSection.jsx'
import Footer from './components/Footer.jsx'

const demoMailto = 'mailto:keep@cuhk.edu.hk?subject=AEGIS%20demo%20request'

const features = [
  {
    title: 'Essay Grader',
    label: 'Assessment',
    description:
      'Support essay scoring with custom rubrics, AI-assisted comments, and structured teacher review.',
  },
  {
    title: 'Grammar Checker',
    label: 'Feedback',
    description:
      'Surface grammar and language suggestions so teachers can focus on judgement, coaching, and consistency.',
  },
  {
    title: 'Summarizer',
    label: 'Review',
    description:
      'Condense long submissions into useful summaries that help teachers triage classes and spot recurring issues.',
  },
  {
    title: 'Basic Statistics',
    label: 'Insight',
    description:
      'Report word counts, readability signals, and writing statistics that help frame each evaluation.',
  },
]

const guideSteps = [
  {
    title: 'Start',
    kicker: 'Understand the system',
    description:
      'AEGIS is the complete essay-grading workflow. Teachers work in CritiX, while RubriX powers grading, rubric storage, and grammar support behind the scenes.',
  },
  {
    title: 'Upload',
    kicker: 'Add student work',
    description:
      'Teachers upload essays on behalf of students, label each file clearly, and prepare a batch for review.',
  },
  {
    title: 'Review',
    kicker: 'Inspect AI feedback',
    description:
      'AEGIS presents grammar suggestions, text statistics, and AI-assisted feedback in one workflow for teacher review.',
  },
  {
    title: 'Grade',
    kicker: 'Apply rubrics',
    description:
      'Teachers review rubric criteria, adjust scores when needed, and keep the final judgement in human hands.',
  },
  {
    title: 'Export',
    kicker: 'Share results',
    description:
      'Results can be saved or exported for manual sharing with students, supporting today\'s teacher-led workflow.',
  },
]

function App() {
  const videoSrc = `${import.meta.env.BASE_URL}demo-video.mp4`

  return (
    <>
      <Header demoHref={demoMailto} />
      <main>
        <Hero demoHref={demoMailto} />
        <FeatureGrid features={features} />
        <IntegrationSection />
        <DemoVideo videoSrc={videoSrc} />
        <GuideSection steps={guideSteps} />
      </main>
      <Footer />
    </>
  )
}

export default App
