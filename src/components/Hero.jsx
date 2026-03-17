/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../constants/translations'

const Hero = () => {
  const { language } = useLanguage()
  return (
    <section className='relative z-10 w-full min-h-screen flex flex-col'>
      <div className={`${styles.paddingX} flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-5 pt-28 sm:pt-36 md:pt-40 pb-8 max-w-7xl mx-auto w-full`}>
        <div className='hidden sm:flex flex-col justify-center items-center flex-shrink-0'>
          <div className='w-8 h-8 rounded-full bg-[#9F2808]'>
            <div className='w-2 h-32 sm:h-40 brown-gradient mt-7 mx-3'></div>
          </div>
        </div>
        <div className='flex flex-col items-center sm:items-start text-center sm:text-left px-2'>
          <h1 className={`${styles.heroHeadText} leading-tight`}>
            <span className='block sm:inline'>{t(language, 'hero.greeting')}</span>{' '}
            <span className='text-white block sm:inline'>{t(language, 'hero.name')}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>{t(language, 'hero.role')}</p>
          <motion.a
            href='/cv.pdf'
            download='med-larbi_el-baidi-cv.pdf'
            className='mt-6 px-6 py-3 rounded-xl bg-white text-[#9F2808] font-bold shadow-lg hover:bg-primary hover:text-white transition-colors'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={t(language, 'hero.downloadCv')}
          >
            {t(language, 'hero.downloadCv')}
          </motion.a>
        </div>
      </div>

      <div className='absolute bottom-6 sm:bottom-8 left-0 right-0 z-10 flex justify-center items-center'>
        <a href='#about' className='flex justify-center' aria-label={language === 'fr' ? 'Aller à la section À propos' : 'Go to About section'}>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2' aria-hidden='true'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
