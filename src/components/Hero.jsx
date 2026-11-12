import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import KdsDemo from './KdsDemo'
import { SplitHeading } from './AnimationHelpers'
import { EASE } from './ease'
import { ArrowIcon, PhoneIcon } from './Icons'

const facts = [
  { value: '89 zł', label: 'Cena miesięczna' },
  { value: 'POS + KDS', label: 'W jednym pakiecie' },
  { value: '24/7', label: 'Kopia zapasowa' },
]

const tape = [
  'System POS',
  'Ekran kuchenny KDS',
  'TV menu',
  'System numerków',
  'Analizy',
  'Pracownicy i role',
  'Zarządzanie menu',
  'Kopia zapasowa',
]

function rise(delay) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: EASE },
  }
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const demoY = useTransform(scrollYProgress, [0, 1], [0, -70])
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 140])

  return (
    <section
      ref={ref}
      id="o-nas"
      aria-label="DishFlow – Tani System POS dla Restauracji"
      className="relative overflow-hidden bg-ink text-white"
    >
      <motion.div
        aria-hidden="true"
        style={{ y: glowY }}
        className="pointer-events-none absolute -right-48 top-0 h-[760px] w-[760px] rounded-full bg-[radial-gradient(closest-side,rgba(99,0,255,0.55),transparent)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-20 pt-32 sm:px-8 lg:min-h-[calc(100svh-3.5rem)] lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-28">
        <div className="lg:col-span-6">
          <motion.p {...rise(0)} className="mb-6 flex items-center gap-2.5 text-sm font-medium text-white/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-go opacity-70" />
              <span className="relative h-2 w-2 rounded-full bg-go" />
            </span>
            Polska lokalna inicjatywa · Aktywny rozwój
          </motion.p>

          <SplitHeading
            as="h1"
            immediate
            delay={0.15}
            text="Tani system POS dla Twojej restauracji"
            accent={['POS']}
            accentClass="text-yolk"
            className="display text-[clamp(2.9rem,12vw,5rem)] lg:text-[clamp(3.5rem,6.2vw,5.75rem)]"
          />

          <motion.p {...rise(0.55)} className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">
            DishFlow to nowoczesny system zarządzania zamówieniami POS&nbsp;+&nbsp;KDS, który pomaga opanować ruch
            w&nbsp;restauracji — nawet podczas największego szczytu.
          </motion.p>

          <motion.div {...rise(0.7)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#cennik" className="btn btn-yolk">
              Zobacz pakiety od 89&nbsp;zł
              <ArrowIcon className="arrow h-4 w-4" />
            </a>
            <a href="tel:+48660957202" className="btn btn-outline-light">
              <PhoneIcon className="h-4 w-4" />
              660 957 202
            </a>
          </motion.div>

          <motion.dl {...rise(0.85)} className="mt-14 grid max-w-xl grid-cols-3 border-t border-white/15">
            {facts.map((f) => (
              <div
                key={f.label}
                className="flex flex-col-reverse border-white/15 pt-5 [&:not(:first-child)]:border-l [&:not(:first-child)]:pl-3 sm:[&:not(:first-child)]:pl-4"
              >
                <dt className="mt-1.5 text-xs text-white/60 sm:text-sm">{f.label}</dt>
                <dd className="display whitespace-nowrap text-[1.3rem] sm:text-4xl">{f.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div style={{ y: demoY }} className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: EASE }}
          >
            <KdsDemo />
            <p className="mx-auto mt-6 max-w-xl text-sm text-white/50">
              Kelner nabija zamówienie, kuchnia widzi je od razu, a klient dostaje numerek.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Taśma z zawartością pakietu */}
      <div className="relative overflow-hidden border-t border-white/10 py-[1.125rem]" aria-hidden="true">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center">
              {[...tape, ...tape].map((item, i) => (
                <li key={i} className="flex items-center gap-7 pr-7 font-mono text-sm uppercase text-white/60">
                  {item}
                  <span className="h-1.5 w-1.5 bg-yolk" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
