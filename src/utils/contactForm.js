

const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 254
const MAX_MESSAGE_LENGTH = 5000

/** Supprime les balises HTML (sans trim : le trim est réservé à la validation / l’envoi pour ne pas bloquer les espaces pendant la saisie) */
function stripHtml (str) {
  if (typeof str !== 'string') return ''
  return str
    .replace(/<[^>]*>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&#x[\da-fA-F]+;/g, '')
    .replace(/&#\d+;/g, '')
}

/** Sanitize le nom : supprime le HTML et caractères dangereux (pas de trim ici pour autoriser les espaces pendant la saisie) */
export function sanitizeName (value) {
  const cleaned = stripHtml(value)
  const safe = cleaned.replace(/[<>\"\\\x00-\x1F]/g, '')
  return safe.slice(0, MAX_NAME_LENGTH)
}

/** Longueur max ; pas de trim à chaque frappe (trim à la validation / envoi) */
export function sanitizeEmail (value) {
  if (typeof value !== 'string') return ''
  return value.slice(0, MAX_EMAIL_LENGTH)
}

/** Sanitize le message (pas de HTML, longueur max ; espaces et retours ligne conservés pendant la saisie) */
export function sanitizeMessage (value) {
  const cleaned = stripHtml(value)
  return cleaned.slice(0, MAX_MESSAGE_LENGTH)
}

/** Validation avant envoi (après trim des champs) */
export function validateContactForm ({ name, email, message }) {
  const n = (name && typeof name === 'string' ? name.trim() : '') || ''
  const e = (email && typeof email === 'string' ? email.trim() : '') || ''
  const m = (message && typeof message === 'string' ? message.trim() : '') || ''
  const errors = []
  if (n.length < 2) errors.push('name')
  if (!e || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) errors.push('email')
  if (m.length < 2) errors.push('message')
  return errors
}

export const LIMITS = {
  MAX_NAME_LENGTH,
  MAX_EMAIL_LENGTH,
  MAX_MESSAGE_LENGTH
}

/** Délai minimum entre deux envois (ms) - anti-spam */
export const SEND_COOLDOWN_MS = 60_000
