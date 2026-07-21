import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'

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
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
        style={{ scaleX, background: 'linear-gradient(to right, #6300FF, #0900FF)' }}
      />

      <motion.header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/90 backdrop-blur-md border-b border-gray-100'}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl font-black bg-gradient-to-r from-[#6300FF] to-[#0900FF] bg-clip-text text-transparent">
              DishFlow
            </span>
          </motion.a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            {links.map((l) => (
              <motion.li key={l.href} whileHover={{ y: -1 }}>
                <a href={l.href} className="hover:text-[#6300FF] transition-colors relative group">
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#6300FF] group-hover:w-full transition-all duration-200 rounded-full" />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <motion.a
            href="tel:+48660957202"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(99,0,255,0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-[#6300FF] to-[#0900FF] text-white text-sm font-semibold px-5 py-2.5 rounded-full"
          >
            Zadzwoń teraz
          </motion.a>

          {/* Hamburger */}
          <motion.button
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            aria-label="Menu"
          >
            <motion.svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" animate={open ? 'open' : 'closed'}>
              <motion.path
                strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                variants={{ closed: { d: 'M4 6h16M4 12h16M4 18h16' }, open: { d: 'M6 18L18 6M6 6l12 12' } }}
                transition={{ duration: 0.2 }}
              />
            </motion.svg>
          </motion.button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3"
            >
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block text-sm font-medium text-gray-700 hover:text-[#6300FF] py-1"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="tel:+48660957202"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: links.length * 0.05 }}
                className="block text-center bg-gradient-to-r from-[#6300FF] to-[#0900FF] text-white text-sm font-semibold px-5 py-2.5 rounded-full mt-2"
              >
                Zadzwoń teraz
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
