import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { EASE } from './ease'

const links = [
  { label: 'O nas', href: '#o-nas' },
  { label: 'Funkcje', href: '#funkcje' },
  { label: 'Cennik', href: '#cennik' },
  { label: 'Strony www', href: '#strony-internetowe' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  // Chowa się przy przewijaniu w dół, wraca przy ruchu w górę
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setScrolled(y > 20)
    setHidden(y > prev && y > 500)
  })

  const solid = scrolled || open

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 border-b text-white transition-colors duration-300 ${
        solid ? 'border-white/10 bg-ink/90 backdrop-blur-md' : 'border-transparent'
      }`}
      initial={{ y: '-100%' }}
      animate={{ y: hidden && !open ? '-100%' : 0 }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="display text-2xl" aria-label="DishFlow – początek strony">
          Dish<span className="text-yolk">Flow</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="group relative py-1 text-white/70 transition-colors hover:text-white">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-yolk transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <a href="tel:+48660957202" className="btn btn-yolk hidden px-4 py-2.5 text-sm md:inline-flex">
          Zadzwoń teraz
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="relative -mr-2 h-10 w-10 md:hidden"
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={open}
        >
          <motion.span
            className="absolute left-2.5 top-1/2 h-0.5 w-5 bg-white"
            animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="absolute left-2.5 top-1/2 h-0.5 w-5 bg-white"
            animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
            transition={{ duration: 0.25 }}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden md:hidden"
          >
            <div className="px-5 pb-6 pt-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.4, ease: EASE }}
                  className="display block border-b border-white/10 py-3.5 text-3xl"
                >
                  {l.label}
                </motion.a>
              ))}
              <a href="tel:+48660957202" className="btn btn-yolk mt-6 w-full">
                Zadzwoń teraz
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
