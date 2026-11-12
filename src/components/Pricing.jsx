import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CountUp, FadeUp, SplitHeading } from './AnimationHelpers'
import { ArrowIcon } from './Icons'

const included = [
  'System POS i KDS (2 ekrany)',
  'TV menu (1 ekran)',
  'System numerków',
  'Podstawowe analizy',
  'Pracownicy i role',
  'Dodawanie dań do menu',
  'Dostępność dań',
  'Kopia zapasowa',
]

const addons = [
  'Strona internetowa z rezerwacjami',
  'Obsługa drukarki fiskalnej',
  'Obsługa dodatkowych ekranów',
  'Aplikacja dla kelnera',
]

function Dashes() {
  return <div className="my-5 border-t border-dashed border-ink/30" aria-hidden="true" />
}

// Pakiet podstawowy jako paragon wysuwający się z drukarki
function Receipt() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} className="mx-auto w-full max-w-md">
      <div
        aria-hidden="true"
        className="relative z-10 h-5 rounded-full bg-ink-2 shadow-[inset_0_-7px_10px_rgba(0,0,0,0.65)] ring-1 ring-white/10"
      />
      <div className="-mt-2.5 overflow-hidden px-4">
        <motion.div
          initial={{ y: '-101%' }}
          animate={inView ? { y: 0 } : {}}
          transition={{ duration: 1.7, ease: [0.3, 0.55, 0.2, 1] }}
          className="receipt bg-[#fbfaf5] px-6 pb-12 pt-10 font-mono text-[13px] text-ink sm:px-8"
        >
          <p className="display text-center text-4xl">DishFlow</p>
          <h3 className="mt-1.5 text-center text-xs uppercase tracking-widest text-ink/60">Pakiet podstawowy</h3>

          <Dashes />

          <ul className="space-y-2.5">
            {included.map((item) => (
              <li key={item} className="flex items-baseline gap-2">
                <span>{item}</span>
                <span className="min-w-4 flex-1 border-b border-dotted border-ink/35" aria-hidden="true" />
                <svg
                  className="h-3.5 w-3.5 shrink-0 translate-y-0.5 text-go-deep"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
              </li>
            ))}
          </ul>

          <Dashes />

          <div className="flex items-end justify-between">
            <span className="pb-1 text-sm font-bold uppercase">Razem</span>
            <p className="text-right">
              <span className="display text-7xl">
                <CountUp to={89} delay={0.9} />
              </span>
              <span className="ml-1.5 text-lg font-bold">zł</span>
              <span className="block text-xs text-ink/60">/ miesiąc</span>
            </p>
          </div>

          <Dashes />

          <p className="text-[11px] leading-relaxed text-ink/60">
            Ceny nie zawierają kosztów sprzętu (chyba że restauracja posiada już własne zaplecze techniczne).
          </p>

          <a href="tel:+48660957202" className="btn btn-brand mt-6 w-full font-sans">
            Zacznij już dziś
            <ArrowIcon className="arrow h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="cennik" className="bg-ink py-24 text-white lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <FadeUp as="p" className="mb-4 text-sm font-semibold text-yolk">
            Cennik
          </FadeUp>
          <SplitHeading text="Rozwiązania i pakiety" className="display text-5xl sm:text-6xl lg:text-7xl" />
          <FadeUp as="p" delay={0.1} className="mt-6 max-w-md text-lg leading-relaxed text-white/65">
            Przystępny cennik dopasowany do potrzeb każdej restauracji.
          </FadeUp>

          <FadeUp delay={0.15} className="mt-14 border-t border-white/15 pt-9">
            <h3 className="display text-3xl">Dodatki na żądanie</h3>
            <p className="mt-3 max-w-md leading-relaxed text-white/65">
              Dokup pojedyncze funkcje spoza pakietu. W celu konfiguracji i kosztów skontaktuj się z&nbsp;nami.
            </p>
            <ul className="mt-7 max-w-md divide-y divide-white/10 border-y border-white/10">
              {addons.map((item) => (
                <li key={item} className="flex items-center gap-4 py-3.5">
                  <span className="font-mono text-lg font-bold leading-none text-yolk" aria-hidden="true">
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="tel:+48660957202" className="btn btn-outline-light mt-8">
              Zapytaj o wycenę
              <ArrowIcon className="arrow h-4 w-4" />
            </a>
            <p className="mt-8 max-w-md text-sm text-white/45">
              * Wymagania sprzętowe dostępne po kontakcie z naszym przedstawicielem.
            </p>
          </FadeUp>
        </div>

        <motion.div
          className="lg:col-span-5 lg:col-start-8"
          initial={{ rotate: 0 }}
          whileInView={{ rotate: 1.5 }}
          whileHover={{ rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14 }}
        >
          <Receipt />
        </motion.div>
      </div>
    </section>
  )
}
