import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../constants/translations'

const Notification = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={`fixed top-20 right-4 z-50 flex items-center gap-3 px-6 py-4 rounded-lg shadow-lg ${
        type === 'success'
          ? 'bg-green-500'
          : type === 'error'
            ? 'bg-red-500'
            : 'bg-yellow-500'
      } text-white font-medium max-w-md`}
    >
      <div className='flex-1'>
        <p className='text-sm'>{message}</p>
      </div>
      <button
        onClick={onClose}
        className='text-white hover:text-gray-200 transition-colors'
      >
        <svg
          className='w-5 h-5'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>
    </motion.div>
  )
}

const Contact = () => {
  const { language } = useLanguage()
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)
  const [notification, setNotification] = useState(null)

  const showNotification = (message, type) => {
    setNotification({ message, type })
  }

  const hideNotification = () => {
    setNotification(null)
  }

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validation basique
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      showNotification(t(language, 'notifications.fillAll'), 'error')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email)) {
      showNotification(t(language, 'notifications.invalidEmail'), 'error')
      return
    }

    setLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Mohamed Larbi EL BAIDI',
          from_email: form.email,
          to_email: 'arbielbaidi6@gmail.com',
          message: form.message,
          reply_to: form.email
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false)
          showNotification(t(language, 'notifications.success'), 'success')

          setForm({
            name: '',
            email: '',
            message: ''
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)

          showNotification(t(language, 'notifications.error'), 'error')
        }
      )
  }

  return (
    <>
      <AnimatePresence>
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={hideNotification}
          />
        )}
      </AnimatePresence>

      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-5 overflow-hidden`}
      >
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75] bg-[#9F2808] p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>{t(language, 'contact.subtitle')}</p>
          <h3 className={styles.sectionHeadText}>{t(language, 'contact.title')}</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-5 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>{t(language, 'contact.yourName')}</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder={t(language, 'contact.placeholderName')}
                className='bg-primary py-4 px-6 placeholder:text-[#9F2808] text-[#9F2808] rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-secondary transition-all'
                required
                disabled={loading}
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>{t(language, 'contact.yourEmail')}</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder={t(language, 'contact.placeholderEmail')}
                className='bg-primary py-4 px-6 placeholder:text-[#9F2808] text-[#9F2808] rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-secondary transition-all'
                required
                disabled={loading}
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>{t(language, 'contact.yourMessage')}</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder={t(language, 'contact.placeholderMessage')}
                className='bg-primary py-4 px-6 placeholder:text-[#9F2808] text-[#9F2808] rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-secondary transition-all resize-none'
                required
                disabled={loading}
              />
            </label>

            <motion.button
              type='submit'
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.05 }}
              whileTap={{ scale: loading ? 1 : 0.95 }}
              className='bg-[#531402] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#6a1a05] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2'
            >
              {loading && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className='w-5 h-5 border-2 border-white border-t-transparent rounded-full'
                />
              )}
              {loading ? t(language, 'contact.sending') : t(language, 'contact.send')}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(Contact, 'contact')