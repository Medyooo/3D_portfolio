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

const HOVER_WHITE = 'rgba(255,255,245,0.95)'
const MUTED_WHITE = 'rgba(255,255,255,0.35)'
const GLOW = '0 0 25px rgba(255,255,245,0.25), 0 0 50px rgba(255,255,245,0.15), inset 0 0 15px rgba(255,255,245,0.1)'

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
  border: `1px solid ${HOVER_WHITE}`
}

const TechIcon = ({ tech, index }) => {
  const IconComponent = tech.Icon
  const imgSize = tech.large ? 'w-16 h-16' : 'w-12 h-12'

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.06, 0.5)}
      className='group flex flex-col items-center gap-2'
    >
      <div className='relative w-20 h-20 rounded-2xl flex items-center justify-center
                      bg-white/[0.06] border border-white/10
                      transition-all duration-300 ease-out
                      group-hover:border-transparent group-hover:scale-110'>
        <div
          className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                     transition-opacity duration-300 pointer-events-none'
          style={hoverGlowStyle}
        />
        {IconComponent
          ? (
            <IconComponent
              className='w-11 h-11 transition-all duration-300 ease-out
                         group-hover:drop-shadow-[0_0_8px_rgba(255,255,245,0.4)]'
              style={{ color: MUTED_WHITE }}
              onMouseEnter={(e) => { e.currentTarget.style.color = HOVER_WHITE }}
              onMouseLeave={(e) => { e.currentTarget.style.color = MUTED_WHITE }}
            />
            )
          : (
            <img
              src={tech.icon}
              alt={tech.name}
              className={`${imgSize} object-contain opacity-50 grayscale transition-all duration-300 ease-out
                          group-hover:opacity-100 group-hover:grayscale-0
                          group-hover:drop-shadow-[0_0_8px_rgba(255,255,245,0.4)]`}
            />
            )}
      </div>
      <span className='text-xs text-white/40 group-hover:text-white/90
                        transition-colors duration-300 text-center leading-tight max-w-[80px]'>
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
