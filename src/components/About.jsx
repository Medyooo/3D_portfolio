/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { Tilt } from 'react-tilt'
import { services } from '../constants'
import { mohamedPortrait } from '../assets'
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
      <motion.div variants={textVariant()} className='flex w-full flex-col items-start text-left'>
        <p className={`${styles.sectionSubText} !text-left`}>{t(language, 'about.subtitle')}</p>
        <h2 className={`${styles.sectionHeadText} !text-left`}>{t(language, 'about.title')}</h2>
      </motion.div>

      <div className='mt-8 flex w-full flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-8 xl:gap-10'>
        <motion.div
          variants={fadeIn('right', 'spring', 0.15, 1)}
          className='flex min-w-0 flex-1 basis-0 flex-col order-2 lg:order-1 lg:min-h-0 lg:pr-2 xl:pr-6'
        >
          <p className='w-full max-w-none text-white text-[17px] leading-[30px] text-pretty'>
            {t(language, 'about.paragraph')}
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'spring', 0.2, 1)}
          className='flex shrink-0 justify-center items-center order-1 lg:order-2 lg:min-w-[min(100%,260px)] xl:min-w-[min(100%,280px)]'
        >
          <div className='relative mx-auto aspect-square w-[min(100%,240px)] sm:w-[min(100%,260px)] lg:w-[220px] lg:max-w-none xl:w-[250px]'>
            <div
              className='absolute -inset-4 rounded-full bg-gradient-to-br from-[#f5af19]/30 via-[#9F2808]/45 to-black/50 blur-2xl opacity-90'
              aria-hidden='true'
            />
            <div className='relative h-full w-full rounded-full p-[3px] orange-red-gradient shadow-[0_20px_40px_-12px_rgba(0,0,0,0.55)]'>
              <div className='h-full w-full overflow-hidden rounded-full bg-[#9F2808]/20 ring-1 ring-white/15'>
                <img
                  src={mohamedPortrait}
                  alt={t(language, 'about.portraitAlt')}
                  className='h-full w-full object-cover object-top'
                  decoding='async'
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

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
