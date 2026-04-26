import { motion } from 'framer-motion'
import {
  SiNextdotjs, SiNuxt,
  SiGitlab, SiGithubactions, SiNginx
} from 'react-icons/si'
import { SectionWrapper } from '../hoc'
import {
  reactjs, vuejs, javascript, typescript, tailwind, bootstrap, html, css,
  nodejs, expressjs, adonis, java, springboot, php, symfony, python,
  mongodb, mysql, postgresql,
  docker, git
} from '../assets'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../constants/translations'
import { styles } from '../styles'
import { textVariant, fadeIn } from '../utils/motion'

const GLOW = '0 0 25px rgba(255,255,245,0.25), 0 0 50px rgba(255,255,245,0.15), inset 0 0 15px rgba(255,255,245,0.1)'

/** Couleurs de marque pour les icônes Simple Icons (currentColor) — fond sombre */
const BRAND_COLOR_BY_NAME = {
  'Next.js': '#f4f4f5',
  'Nuxt.js': '#00dc82',
  'GitLab CI/CD': '#fc6d26',
  'GitHub Actions': '#2088ff',
  Nginx: '#29a03d'
}

const techCategories = [
  {
    key: 'frontend',
    items: [
      { name: 'React', icon: reactjs },
      { name: 'Vue.js', icon: vuejs },
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'Nuxt.js', Icon: SiNuxt },
      { name: 'JavaScript', icon: javascript },
      { name: 'TypeScript', icon: typescript },
      { name: 'HTML', icon: html },
      { name: 'CSS', icon: css },
      { name: 'Tailwind', icon: tailwind },
      { name: 'Bootstrap', icon: bootstrap }
    ]
  },
  {
    key: 'backend',
    items: [
      { name: 'Node.js', icon: nodejs },
      { name: 'Express.js', icon: expressjs },
      { name: 'Adonis.js', icon: adonis },
      { name: 'Java', icon: java, large: true },
      { name: 'Spring Boot', icon: springboot },
      { name: 'PHP', icon: php },
      { name: 'Symfony', icon: symfony },
      { name: 'Python', icon: python },
      { name: 'MongoDB', icon: mongodb },
      { name: 'MySQL', icon: mysql },
      { name: 'PostgreSQL', icon: postgresql }
    ]
  },
  {
    key: 'cicd',
    items: [
      { name: 'Docker', icon: docker },
      { name: 'Git', icon: git },
      { name: 'GitLab CI/CD', Icon: SiGitlab },
      { name: 'GitHub Actions', Icon: SiGithubactions },
      { name: 'Nginx', Icon: SiNginx }
    ]
  }
]

const hoverGlowStyle = {
  boxShadow: GLOW,
  border: '1px solid rgba(255,255,245,0.7)'
}

const TechIcon = ({ tech, index }) => {
  const IconComponent = tech.Icon
  const imgSize = tech.large ? 'w-16 h-16' : 'w-12 h-12'
  const brand = BRAND_COLOR_BY_NAME[tech.name]

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.06, 0.5)}
      className='group flex flex-col items-center gap-2'
    >
      <div className='relative w-20 h-20 rounded-2xl flex items-center justify-center
                      bg-white/[0.06] border border-white/10
                      transition-transform duration-300 ease-out
                      group-hover:scale-110 group-hover:border-white/20'>
        <div
          className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                     transition-opacity duration-300 pointer-events-none'
          style={hoverGlowStyle}
        />
        {IconComponent
          ? (
            <IconComponent
              className='w-11 h-11 drop-shadow-sm transition-transform duration-300 group-hover:scale-105'
              style={{ color: brand ?? 'rgba(248,250,252,0.92)' }}
              aria-hidden
            />
            )
          : (
            <img
              src={tech.icon}
              alt={tech.name}
              className={`${imgSize} object-contain
                          transition-transform duration-300 group-hover:scale-105
                          [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.25))]`}
            />
            )}
      </div>
      <span className='text-xs text-white/85 text-center leading-tight max-w-[80px]'>
        {tech.name}
      </span>
    </motion.div>
  )
}

const CategoryCard = ({ category, index, language }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
    className='flex-1 min-w-[280px]'
  >
    <div className='relative rounded-3xl p-6 h-full bg-white/[0.04]
                    backdrop-blur-sm border border-white/10 overflow-hidden'>
      <div
        className='absolute top-0 left-6 right-6 h-px'
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,245,0.5), transparent)' }}
      />
      <h3 className='text-lg font-semibold mb-6 text-center text-white'>
        {t(language, `tech.${category.key}`)}
      </h3>
      <div className='flex flex-wrap justify-center gap-5'>
        {category.items.map((tech, i) => (
          <TechIcon key={tech.name} tech={tech} index={i} />
        ))}
      </div>
    </div>
  </motion.div>
)

const TechContent = () => {
  const { language } = useLanguage()
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t(language, 'tech.subtitle')}</p>
        <h2 className={styles.sectionHeadText}>{t(language, 'tech.title')}</h2>
      </motion.div>

      <div className='mt-16 flex flex-wrap justify-center gap-8'>
        {techCategories.map((category, index) => (
          <CategoryCard
            key={category.key}
            category={category}
            index={index}
            language={language}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(TechContent, 'tech')
