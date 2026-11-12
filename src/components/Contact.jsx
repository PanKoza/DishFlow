import { motion } from 'framer-motion'
import { FadeUp, SplitHeading } from './AnimationHelpers'
import { PhoneIcon } from './Icons'

export default function Contact() {
  return (
    <section
      id="kontakt"
      aria-label="Kontakt z DishFlow – system POS dla restauracji"
      className="relative overflow-hidden bg-brand py-24 text-white lg:py-36"
    >
      {/* Kręgi rozchodzące się jak sygnał dzwoniącego telefonu */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-1/2 h-[640px] w-[640px] -translate-y-1/2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute inset-0 rounded-full border border-white/40"
            initial={{ scale: 0.35, opacity: 0 }}
            animate={{ scale: [0.35, 1.25], opacity: [0.7, 0] }}
            transition={{ duration: 4.5, delay: i * 1.5, repeat: Infinity, ease: 'easeOut' }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SplitHeading text="Zainteresowany?" className="display text-5xl sm:text-6xl lg:text-7xl" />
        <FadeUp as="p" delay={0.1} className="mt-6 max-w-xl text-xl leading-relaxed text-white/80">
          Zadzwoń do nas — odpowiemy na wszystkie pytania i dobierzemy idealne rozwiązanie dla Twojej restauracji.
        </FadeUp>

        <a
          href="tel:+48660957202"
          className="group mt-12 inline-flex items-center gap-5 transition-colors duration-300 hover:text-yolk sm:gap-8"
        >
          <PhoneIcon className="h-9 w-9 shrink-0 transition-transform duration-300 group-hover:-rotate-12 sm:h-16 sm:w-16" />
          <SplitHeading
            as="span"
            delay={0.2}
            text="660 957 202"
            className="display block whitespace-nowrap text-[clamp(3rem,12.5vw,10.5rem)]"
          />
        </a>

        <FadeUp as="p" delay={0.3} className="mt-10 text-sm text-white/65">
          Jesteśmy dostępni w godzinach roboczych.
        </FadeUp>
      </div>
    </section>
  )
}
