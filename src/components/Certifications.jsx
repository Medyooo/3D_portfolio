/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { certifications } from '../constants'
import { textVariant } from '../utils/motion'
import ProjectCard from './ProjectCard'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../constants/translations'

const Certifications = () => {
  const { language } = useLanguage()
  const tr = translations[language].certifications
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>{tr.subtitle}</p>
        <h2 className={`${styles.sectionHeadText}`}>{tr.title}</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7 items-stretch'>
        {certifications.map((certification, index) => {
          const item = tr.list[index]
          return (
            <article key={`certification-${index}`} className='sm:w-[360px] w-full'>
              <ProjectCard
                index={index}
                name={item?.name ?? certification.name}
                description={item?.description ?? certification.description}
                image={certification.image}
                source_code_link={certification.source_code_link}
                tags={certification.tags || []}
              />
            </article>
          )
        })}
      </div>
    </>
  )
}

export default SectionWrapper(Certifications, 'certification')

