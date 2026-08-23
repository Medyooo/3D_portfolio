import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { LuArrowUpRight, LuChevronUp } from 'react-icons/lu'

import { navLinks } from '../constants'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../constants/translations'
import { styles } from '../styles'

const githubProfileUrl = 'https://github.com/Medyooo'
const linkedinProfileUrl = 'https://www.linkedin.com/in/medlarbi/'
const contactEmail = 'm.larbi.elbaidi@gmail.com'

const Footer = () => {
  const { language } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className={`${styles.paddingX} border-t border-white/10 bg-[#9F2808] py-8`}>
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-8'>
        <div className='flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between'>
          <div className='max-w-xl space-y-3'>
            <a
              href='#'
              className='inline-flex items-center gap-2 text-2xl font-black text-white transition-colors hover:text-orange'
            >
              Mohamed Larbi EL BAIDI
              <LuChevronUp className='h-5 w-5' aria-hidden='true' />
            </a>
            <p className='text-sm leading-6 text-white/75 sm:text-base'>
              {t(language, 'footer.tagline')}
            </p>
          </div>

          <div className='grid gap-8 sm:grid-cols-2'>
            <div>
              <h2 className='text-sm font-semibold uppercase tracking-[0.2em] text-white/60'>
                {t(language, 'footer.navigation')}
              </h2>
              <ul className='mt-4 space-y-2'>
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className='text-sm text-white/80 transition-colors hover:text-orange sm:text-base'
                    >
                      {t(language, 'nav.' + link.id)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className='text-sm font-semibold uppercase tracking-[0.2em] text-white/60'>
                {t(language, 'footer.contact')}
              </h2>
              <div className='mt-4 flex flex-col gap-3'>
                <a
                  href={githubProfileUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-orange sm:text-base'
                >
                  <FaGithub className='h-4 w-4 shrink-0' aria-hidden='true' />
                  <span>GitHub</span>
                  <LuArrowUpRight className='h-4 w-4 shrink-0' aria-hidden='true' />
                </a>
                <a
                  href={linkedinProfileUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-orange sm:text-base'
                >
                  <FaLinkedin className='h-4 w-4 shrink-0' aria-hidden='true' />
                  <span>LinkedIn</span>
                  <LuArrowUpRight className='h-4 w-4 shrink-0' aria-hidden='true' />
                </a>
                <a
                  href={`mailto:${contactEmail}`}
                  className='inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-orange sm:text-base'
                >
                  <FaEnvelope className='h-4 w-4 shrink-0' aria-hidden='true' />
                  <span>{contactEmail}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-3 border-t border-white/10 pt-4 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between'>
          <p>{t(language, 'footer.copyright', { year })}</p>
          <a
            href='#'
            className='inline-flex items-center gap-2 transition-colors hover:text-orange'
          >
            <LuChevronUp className='h-4 w-4' aria-hidden='true' />
            <span>{t(language, 'footer.backToTop')}</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
