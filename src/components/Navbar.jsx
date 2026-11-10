import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { LuLink } from 'react-icons/lu'

import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../constants/translations'

const githubProfileUrl = 'https://github.com/Medyooo'

const Navbar = () => {
  const [active, SetActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const { language, setLanguage } = useLanguage()

  const navTitle = (link) => t(language, 'nav.' + link.id)
  const githubLabel = language === 'fr' ? 'Mon GitHub' : 'My GitHub'

  return (
    <nav className={`px-6 xl:px-16 w-full flex items-center py-5 fixed top-0 z-20 brown-gradient`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2 shrink-0'
          onClick={() => {
            SetActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt='Logo' className='w-40 h-11 object-contain shrink-0' />
        </Link>

        <ul className='list-none hidden lg:flex flex-row gap-5 xl:gap-10 items-center whitespace-nowrap'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === navTitle(link) ? 'text-secondary' : 'text-primary'
              } hover:text-orange text-[14px] xl:text-[18px] font-medium cursor-pointer`}
              onClick={() => SetActive(navTitle(link))}
            >
              <a href={`#${link.id}`}>{navTitle(link)}</a>
            </li>
          ))}
          <li>
            <a
              href={githubProfileUrl}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={githubLabel}
              className='inline-flex items-center gap-2 text-[14px] xl:text-[18px] font-medium text-primary transition-colors hover:text-orange'
            >
              <FaGithub className='h-[18px] w-[18px]' aria-hidden='true' />
              <span>GitHub</span>
              <LuLink className='h-4 w-4' aria-hidden='true' />
            </a>
          </li>
          <li className='flex items-center gap-1 ml-2'>
            <button
              type='button'
              onClick={() => setLanguage('fr')}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                language === 'fr'
                  ? 'bg-[#9F2808] text-white'
                  : 'text-primary hover:bg-white/10'
              }`}
            >
              FR
            </button>
            <button
              type='button'
              onClick={() => setLanguage('en')}
              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                language === 'en'
                  ? 'bg-[#9F2808] text-white'
                  : 'text-primary hover:bg-white/10'
              }`}
            >
              EN
            </button>
          </li>
        </ul>

        <div className='lg:hidden flex flex-1 justify-end items-center gap-3'>
          <div className='flex items-center gap-1'>
            <button
              type='button'
              onClick={() => setLanguage('fr')}
              className={`px-2 py-1 rounded text-sm font-semibold ${language === 'fr' ? 'bg-[#9F2808] text-white' : 'text-primary'}`}
            >
              FR
            </button>
            <button
              type='button'
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded text-sm font-semibold ${language === 'en' ? 'bg-[#9F2808] text-white' : 'text-primary'}`}
            >
              EN
            </button>
          </div>
          <button
            type='button'
            onClick={() => setToggle(!toggle)}
            aria-expanded={toggle}
            aria-controls='mobile-menu'
            aria-label={toggle ? (language === 'fr' ? 'Fermer le menu' : 'Close menu') : (language === 'fr' ? 'Ouvrir le menu' : 'Open menu')}
            className='p-1'
          >
            <img
              src={toggle ? close : menu}
              alt=''
              className='w-[28px] h-[28px] object-contain'
              aria-hidden='true'
            />
          </button>

          <div
            id='mobile-menu'
            role='navigation'
            aria-label={language === 'fr' ? 'Menu principal' : 'Main menu'}
            className={`${!toggle ? 'hidden' : 'flex'} flex-col p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className='list-none'
              >
                <a
                  href={`#${link.id}`}
                  className={`${
                    active === navTitle(link) ? 'text-secondary' : 'text-primary'
                  } font-poppins font-medium text-[16px] block py-2`}
                  onClick={() => {
                    setToggle(!toggle)
                    SetActive(navTitle(link))
                  }}
                >
                  {navTitle(link)}
                </a>
              </li>
            ))}
              <li className='list-none'>
                <a
                  href={githubProfileUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={githubLabel}
                  className='font-poppins font-medium text-[16px] text-primary flex items-center gap-2 py-2'
                  onClick={() => setToggle(false)}
                >
                  <FaGithub className='h-4 w-4' aria-hidden='true' />
                  <span>GitHub</span>
                  <LuLink className='h-4 w-4' aria-hidden='true' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
