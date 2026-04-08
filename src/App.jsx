import { BrowserRouter } from 'react-router-dom'
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Studies,
  Certifications,
  Tech
} from './components'

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
          <Tech />
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
