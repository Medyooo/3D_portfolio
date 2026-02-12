import { BrowserRouter } from 'react-router-dom'
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Studies,
  Tech,
  Certifications
} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-bgColor'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Studies />
        <Certifications />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>

    </BrowserRouter>
  )
}

export default App
