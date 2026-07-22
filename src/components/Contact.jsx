import { motion } from 'framer-motion'
import { FadeUp } from './AnimationHelpers'

export default function Contact() {
  return (
    <section
      id="kontakt"
      aria-label="Kontakt z DishFlow – system POS dla restauracji"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #6300FF 0%, #0900FF 100%)' }}
    >
      <motion.div
        className="absolute -top-10 -right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <FadeUp>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">Zainteresowany?</h2>
          <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto">
            Zadzwoń do nas — odpowiemy na wszystkie pytania i dobierzemy idealne rozwiązanie dla Twojej restauracji.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <motion.a
            href="tel:+48660957202"
            whileHover={{ scale: 1.06, boxShadow: '0 30px 60px rgba(0,0,0,0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 bg-white text-[#6300FF] font-black text-2xl px-10 py-5 rounded-2xl shadow-2xl"
          >
            <motion.svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </motion.svg>
            660&nbsp;957&nbsp;202
          </motion.a>
        </FadeUp>

        <FadeUp delay={0.35}>
          <p className="mt-8 text-white/60 text-sm">Jesteśmy dostępni w godzinach roboczych.</p>
        </FadeUp>
      </div>
    </section>
  )
}
