import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 flex justify-center"
        >
          <div className="bg-gray-900 text-white rounded-2xl shadow-2xl max-w-2xl w-full px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1 text-sm text-gray-300 leading-relaxed">
              <span className="text-white font-semibold">Używamy plików cookie 🍪</span>{' '}
              Stosujemy pliki cookie, aby poprawić Twoje doświadczenie na stronie, analizować ruch
              i personalizować treści. Możesz zaakceptować wszystkie lub odrzucić opcjonalne pliki cookie.
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={decline}
                className="px-4 py-2 rounded-xl border border-gray-600 text-gray-300 text-sm font-medium hover:border-gray-400 hover:text-white transition-colors"
              >
                Odrzuć
              </button>
              <button
                onClick={accept}
                className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold transition-colors"
              >
                Akceptuj
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
