import { useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { FadeUp } from './AnimationHelpers'
import SectionHead from './SectionHead'
import screenWyborTrybu from '../assets/Zrzut ekranu 2026-08-17 143837.png'
import screenPOS from '../assets/Zrzut ekranu 2026-08-17 143857.png'
import screenDodatki from '../assets/Zrzut ekranu 2026-08-17 143910.png'
import screenKDS from '../assets/Zrzut ekranu 2026-08-17 143932.png'

const screens = [
  { label: 'Wybór trybu urządzenia', desc: 'Po zalogowaniu wybierasz tryb: kasa kelnerska (POS), ekran kuchenny (KDS) lub tablica menu TV.', img: screenWyborTrybu },
  { label: 'Panel zamówień (POS)', desc: 'Przejrzysty podział na kategorie, zdjęcia dań, ceny i szybkie dodawanie do zamówienia.', img: screenPOS },
  { label: 'Szczegóły dania i dodatki', desc: 'Kelner wybiera dodatki, wpisuje uwagi klienta i zatwierdza zamówienie jednym kliknięciem.', img: screenDodatki },
  { label: 'Ekran kuchenny (KDS)', desc: 'Kuchnia widzi aktywne zamówienia z timerem oczekiwania i oznacza gotowość jednym kliknięciem.', img: screenKDS },
]

export default function AppScreenshots() {
  const [active, setActive] = useState(0)
  // Ekrany przełączają się same, dopóki ktoś nie wybierze zakładki ręcznie
  const [auto, setAuto] = useState(true)
  const viewerRef = useRef(null)
  const inView = useInView(viewerRef, { amount: 0.4 })

  return (
    <section id="aplikacja" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead label="Interfejs" title="Wygląd aplikacji">
          <p>Przejrzysty, intuicyjny interfejs — zero zbędnych komplikacji.</p>
        </SectionHead>

        <FadeUp>
          <div ref={viewerRef} className="viewer grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div role="tablist" aria-label="Ekrany aplikacji" className="order-2 border-t border-ink/15 lg:order-1 lg:col-span-4">
              {screens.map((s, i) => {
                const selected = i === active
                return (
                  <button
                    key={s.label}
                    id={`screen-tab-${i}`}
                    role="tab"
                    aria-selected={selected}
                    aria-controls="screen-panel"
                    onClick={() => {
                      setActive(i)
                      setAuto(false)
                    }}
                    className="group relative block w-full cursor-pointer border-b border-ink/15 py-5 text-left"
                  >
                    <span
                      className={`display block text-2xl transition-colors duration-300 sm:text-3xl ${
                        selected ? 'text-ink' : 'text-ink/35 group-hover:text-ink/70'
                      }`}
                    >
                      {s.label}
                    </span>
                    <span
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ${
                        selected ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <span className="overflow-hidden">
                        <span className="block pt-2.5 leading-relaxed text-ink/65">{s.desc}</span>
                      </span>
                    </span>
                    {selected && (
                      <span
                        key={auto && inView ? 'running' : 'idle'}
                        className={`absolute -bottom-px left-0 h-0.5 w-full bg-brand ${auto && inView ? 'tab-progress' : ''}`}
                        onAnimationEnd={() => setActive((i + 1) % screens.length)}
                      />
                    )}
                  </button>
                )
              })}
            </div>

            <div
              id="screen-panel"
              role="tabpanel"
              aria-labelledby={`screen-tab-${active}`}
              className="order-1 lg:order-2 lg:col-span-8"
            >
              <div className="rounded-2xl bg-ink p-2.5 sm:p-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-black">
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={active}
                      src={screens[active].img}
                      alt={screens[active].label}
                      className="absolute inset-0 h-full w-full object-contain"
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </AnimatePresence>
                </div>
              </div>
              <p className="mt-4 text-sm text-ink/50">
                Wygląd aplikacji może się zmieniać — jesteśmy w ciągłym rozwoju.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
