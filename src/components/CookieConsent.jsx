import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EASE } from './ease'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="fixed inset-x-0 bottom-0 z-[9999] flex justify-center p-4"
        >
          <div className="flex w-full max-w-2xl flex-col items-start gap-4 rounded-xl border border-white/15 bg-ink-2 px-6 py-5 text-white shadow-2xl sm:flex-row sm:items-center">
            <p className="flex-1 text-sm leading-relaxed text-white/70">
              <span className="font-semibold text-white">Używamy plików cookie.</span>{' '}
              Stosujemy pliki cookie, aby poprawić Twoje doświadczenie na stronie, analizować ruch
              i personalizować treści. Możesz zaakceptować wszystkie lub odrzucić opcjonalne pliki cookie.
            </p>
            <div className="flex shrink-0 gap-3">
              <button onClick={decline} className="btn btn-outline-light cursor-pointer px-4 py-2.5 text-sm">
                Odrzuć
              </button>
              <button onClick={accept} className="btn btn-yolk cursor-pointer px-4 py-2.5 text-sm">
                Akceptuj
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
