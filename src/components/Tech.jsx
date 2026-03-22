import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { BallCanvas } from './canvas'
import TechHeading from './TechHeading'

/** Grille des bulles 3D (lourd — lazy load au viewport dans App.jsx) */
export const TechBallGrid = () => (
  <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
    {technologies.map((technology) => (
      <div className='w-28 h-28' key={technology.name}>
        <BallCanvas icon={technology.icon} />
      </div>
    ))}
  </div>
)

export const TechContent = () => (
  <>
    <TechHeading />
    <TechBallGrid />
  </>
)

export default SectionWrapper(TechContent, 'tech')
