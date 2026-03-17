import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { BallCanvas } from './canvas'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../constants/translations'

export const TechContent = () => {
  const { language } = useLanguage()
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>{t(language, 'tech.subtitle')}</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>{t(language, 'tech.title')}</h2>
      </motion.div>

      <div className='mt-20 flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
      
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      )) }
      </div>
    </>
  )
}

export default SectionWrapper(TechContent, 'tech')
