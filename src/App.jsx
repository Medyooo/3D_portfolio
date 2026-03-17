import { lazy, Suspense, useRef } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useInView } from 'framer-motion'
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Studies,
  Certifications
} from './components'
import { SectionWrapper } from './hoc'

const LazyTechContent = lazy(() =>
  import('./components/Tech').then((m) => ({ default: m.TechContent }))
)

function TechWithViewport () {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.05 })
  return (
    <>
      <span ref={ref} className='absolute top-0 left-0 w-px h-px overflow-hidden' aria-hidden='true' />
      {inView
        ? (
          <Suspense
            fallback={
              <div className='min-h-[420px] flex items-center justify-center' aria-hidden='true'>
                <span className='text-white/50 text-sm'>Chargement…</span>
              </div>
            }
          >
            <LazyTechContent />
          </Suspense>
          )
        : (
          <div className='min-h-[420px]' aria-hidden='true' />
          )}
    </>
  )
}

const TechSection = SectionWrapper(TechWithViewport, 'tech')

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-bgColor'>
        <header className='relative bg-hero-pattern bg-cover bg-no-repeat bg-center overflow-hidden'>
          <Navbar />
          <Hero />
          <div
            className='absolute bottom-0 left-0 right-0 z-0 h-[40vh] min-h-[200px] pointer-events-none'
            style={{
              background: 'linear-gradient(to bottom, transparent 0%, rgba(231, 117, 17, 0.4) 50%, rgb(231, 117, 17) 100%)'
            }}
            aria-hidden='true'
          />
        </header>
        <main id='main-content'>
          <About />
          <Experience />
          <TechSection />
          <Studies />
          <Certifications />
          <div className='relative z-0'>
            <Contact />
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
