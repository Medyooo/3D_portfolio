import { useState, useEffect, useRef } from 'react'

/**
 * Ne rend les enfants que lorsque l'élément entre dans le viewport.
 * Réduit les reflows en évitant de monter tous les Canvas en même temps.
 */
export function useInView(options = {}) {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.01,
        ...options
      }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}
