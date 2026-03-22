import { lazy, Suspense, useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'

const LazyEarthCanvas = lazy(() =>
  import('./canvas').then((m) => ({ default: m.EarthCanvas }))
)
import { slideIn } from '../utils/motion'
import { useLanguage } from '../context/LanguageContext'
import { t } from '../constants/translations'
import {
  sanitizeName,
  sanitizeEmail,
  sanitizeMessage,
  validateContactForm,
  SEND_COOLDOWN_MS,
  LIMITS
} from '../utils/contactForm'

const Notification = ({ message, type, onClose, closeAriaLabel = 'Fermer' }) => {
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
        type='button'
        onClick={onClose}
        aria-label={closeAriaLabel}
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
  const canvasRef = useRef(null)
  const canvasInView = useInView(canvasRef, { once: true, amount: 0.2 })
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    website: '' // honeypot : doit rester vide (anti-spam)
  })

  const [loading, setLoading] = useState(false)
  const [notification, setNotification] = useState(null)
  const lastSendRef = useRef(0)

  const showNotification = (message, type) => {
    setNotification({ message, type })
  }

  const hideNotification = () => {
    setNotification(null)
  }

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target
    if (name === 'name') setForm((f) => ({ ...f, name: sanitizeName(value) }))
    else if (name === 'email') setForm((f) => ({ ...f, email: sanitizeEmail(value) }))
    else if (name === 'message') setForm((f) => ({ ...f, message: sanitizeMessage(value) }))
    else if (name === 'website') setForm((f) => ({ ...f, website: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Honeypot : si rempli = bot → on simule le succès sans envoyer
    if (form.website && form.website.trim() !== '') {
      setForm((f) => ({ ...f, name: '', email: '', message: '', website: '' }))
      showNotification(t(language, 'notifications.success'), 'success')
      return
    }

    const validationErrors = validateContactForm(form)
    if (validationErrors.length > 0) {
      if (validationErrors.includes('email')) {
        showNotification(t(language, 'notifications.invalidEmail'), 'error')
      } else {
        showNotification(t(language, 'notifications.fillAll'), 'error')
      }
      return
    }

    // Rate limit : pas d'envoi si dernier envoi il y a moins de 1 min
    const now = Date.now()
    if (now - lastSendRef.current < SEND_COOLDOWN_MS) {
      showNotification(t(language, 'notifications.rateLimit'), 'error')
      return
    }

    setLoading(true)

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setLoading(false)
      showNotification(t(language, 'notifications.error'), 'error')
      return
    }

    // L'adresse de destination est configurée UNIQUEMENT dans le template EmailJS (dashboard).
    // Elle ne doit jamais apparaître dans le code frontend.
    const templateParams = {
      from_name: sanitizeName(form.name).trim(),
      from_email: sanitizeEmail(form.email).trim(),
      message: sanitizeMessage(form.message).trim(),
      reply_to: sanitizeEmail(form.email).trim()
    }

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        () => {
          lastSendRef.current = Date.now()
          setLoading(false)
          showNotification(t(language, 'notifications.success'), 'success')
          setForm({
            name: '',
            email: '',
            message: '',
            website: ''
          })
        },
        () => {
          setLoading(false)
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
            closeAriaLabel={t(language, 'contact.closeLabel')}
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
          <div className='w-full text-center'>
            <p className={styles.sectionSubText}>{t(language, 'contact.subtitle')}</p>
            <h2 id='contact-heading' className={styles.sectionHeadText}>{t(language, 'contact.title')}</h2>
          </div>

          <form
            aria-labelledby='contact-heading'
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-5 flex flex-col gap-8'
          >
            {/* Honeypot : champ invisible pour les humains, les bots le remplissent */}
            <div className='absolute -left-[9999px] w-1 h-1 overflow-hidden' aria-hidden='true'>
              <label htmlFor='contact-website'>Site web</label>
              <input
                id='contact-website'
                type='text'
                name='website'
                value={form.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete='off'
              />
            </div>

            <label htmlFor='contact-name' className='flex flex-col'>
              <span className='text-white font-medium mb-4'>{t(language, 'contact.yourName')}</span>
              <input
                id='contact-name'
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder={t(language, 'contact.placeholderName')}
                className='bg-primary py-4 px-6 placeholder:text-[#9F2808] text-[#9F2808] rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-secondary transition-all'
                required
                maxLength={LIMITS.MAX_NAME_LENGTH}
                disabled={loading}
              />
            </label>
            <label htmlFor='contact-email' className='flex flex-col'>
              <span className='text-white font-medium mb-4'>{t(language, 'contact.yourEmail')}</span>
              <input
                id='contact-email'
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder={t(language, 'contact.placeholderEmail')}
                className='bg-primary py-4 px-6 placeholder:text-[#9F2808] text-[#9F2808] rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-secondary transition-all'
                required
                maxLength={LIMITS.MAX_EMAIL_LENGTH}
                disabled={loading}
              />
            </label>
            <label htmlFor='contact-message' className='flex flex-col'>
              <span className='text-white font-medium mb-4'>{t(language, 'contact.yourMessage')}</span>
              <textarea
                id='contact-message'
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder={t(language, 'contact.placeholderMessage')}
                className='bg-primary py-4 px-6 placeholder:text-[#9F2808] text-[#9F2808] rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-secondary transition-all resize-none'
                required
                maxLength={LIMITS.MAX_MESSAGE_LENGTH}
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
          ref={canvasRef}
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] min-h-[350px]'
        >
          {canvasInView
            ? (
              <Suspense fallback={<div className='w-full h-full min-h-[350px] bg-primary/20 rounded-2xl' aria-hidden='true' />}>
                <LazyEarthCanvas />
              </Suspense>
              )
            : (
              <div className='w-full h-full min-h-[350px] bg-primary/10 rounded-2xl' aria-hidden='true' />
              )}
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(Contact, 'contact')