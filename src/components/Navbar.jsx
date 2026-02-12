import { useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../constants/translations'

const Navbar = () => {
  const [active, SetActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const { language, setLanguage } = useLanguage()

  const navTitle = (link) => t(language, 'nav.' + link.id)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 brown-gradient`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            SetActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt='Logo' className='w-40 h-11 object-contain' />
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === navTitle(link) ? 'text-secondary' : 'text-primary'
              } hover:text-orange text-[18px] font-medium cursor-pointer`}
              onClick={() => SetActive(navTitle(link))}
            >
              <a href={`#${link.id}`}>{navTitle(link)}</a>
            </li>
          ))}
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

        <div className='sm:hidden flex flex-1 justify-end items-center gap-3'>
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
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} flex-col p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
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
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
