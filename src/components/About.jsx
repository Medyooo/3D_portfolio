/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { Tilt } from 'react-tilt'
import { services } from '../constants'
import SectionWrapper from '../hoc/SectionWrapper'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../constants/translations'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className='xs:w-[250px] w-full'
    options={{ max: 25, scale: 1, speed: 120 }}
  >
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.3, 1.2)}
      className='w-full orange-red-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-[#9F2808] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img src={icon} alt={title} className='w-24 h-24 sm:w-28 sm:h-28 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
      </div>
    </motion.div>
  </Tilt>
)

const About = () => {
  const { language } = useLanguage()
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t(language, 'about.subtitle')}</p>
        <h2 className={styles.sectionHeadText}>{t(language, 'about.title')}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'
      >
        {t(language, 'about.paragraph')}
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard
            key={service.key}
            index={index}
            icon={service.icon}
            title={t(language, 'services.' + service.key)}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
