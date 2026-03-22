import { motion } from 'framer-motion'
import { styles } from '../styles'
import { textVariant } from '../utils/motion'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../constants/translations'

/** Titre section stack (léger, sans Three.js) — importé directement depuis App */
const TechHeading = () => {
  const { language } = useLanguage()
  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>{t(language, 'tech.subtitle')}</p>
      <h2 className={styles.sectionHeadText}>{t(language, 'tech.title')}</h2>
    </motion.div>
  )
}

export default TechHeading
