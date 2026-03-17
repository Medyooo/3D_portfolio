

const MAX_NAME_LENGTH = 100
const MAX_EMAIL_LENGTH = 254
const MAX_MESSAGE_LENGTH = 5000

/** Supprime les balises HTML et limite la longueur */
function stripHtml (str) {
  if (typeof str !== 'string') return ''
  return str
    .replace(/<[^>]*>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&#x[\da-fA-F]+;/g, '')
    .replace(/&#\d+;/g, '')
    .trim()
}

/** Sanitize le nom : supprime le HTML, garde lettres (dont accents), espaces, tirets, apostrophes */
export function sanitizeName (value) {
  const cleaned = stripHtml(value)
  const safe = cleaned.replace(/[<>\"\\\x00-\x1F]/g, '').trim()
  return safe.slice(0, MAX_NAME_LENGTH)
}

/** Garde un email valide, longueur max */
export function sanitizeEmail (value) {
  if (typeof value !== 'string') return ''
  const cleaned = value.trim().slice(0, MAX_EMAIL_LENGTH)
  return cleaned
}

/** Sanitize le message (pas de HTML, longueur max) */
export function sanitizeMessage (value) {
  const cleaned = stripHtml(value).replace(/\s+/g, ' ').trim()
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
