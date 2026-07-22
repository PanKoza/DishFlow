import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import HeroCanvas from './HeroCanvas'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      id="o-nas"
      aria-label="DishFlow – Tani System POS dla Restauracji"
      className="relative flex items-center justify-center overflow-hidden pt-16 pb-28"
      style={{ minHeight: '100svh', background: '#07001A' }}
    >
      {/* Aurora canvas — the one WOW animation */}
      <HeroCanvas />

      {/* Vignette — darkens top so text is readable */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: 'linear-gradient(180deg, rgba(7,0,26,0.75) 0%, transparent 35%, transparent 65%, rgba(7,0,26,0.6) 100%)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-16"
        style={{ y, opacity }}
      >
        <motion.div variants={containerVariants} initial="hidden" animate="visible">

          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-8 text-white">
              <motion.span
                className="w-2 h-2 bg-[#33FF77] rounded-full"
                animate={{ scale: [1, 1.6, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              Polska lokalna inicjatywa · Aktywny rozwój
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.9)' }}
          >
            <span className="text-white">Tani System&nbsp;</span>
            <span className="text-white">
              POS
            </span>
            <br />
            <span className="text-white/90">dla Twojej Restauracji</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white max-w-3xl mx-auto mb-10 leading-relaxed font-[Inter,sans-serif]"
            style={{ textShadow: '0 1px 12px rgba(0,0,0,0.9)', opacity: 0.85 }}
          >
            DishFlow to nowoczesny system zarządzania zamówieniami POS&nbsp;+&nbsp;KDS,
            który pomaga opanować ruch w&nbsp;restauracji — nawet podczas największego szczytu.
          </motion.p>

          {/* Price pill */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(99,0,255,0.6)' }}
                className="inline-block border border-white/30 bg-black/50 backdrop-blur text-white font-black text-3xl px-8 py-3 rounded-2xl shadow-2xl mb-10 cursor-default"
            style={{ boxShadow: '0 0 30px rgba(99,0,255,0.4), inset 0 1px 0 rgba(255,255,255,0.15)' }}
          >
            od 89&nbsp;zł / miesiąc
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#cennik"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99,0,255,0.7)' }}
              whileTap={{ scale: 0.97 }}
              className="font-bold px-8 py-4 rounded-full text-lg text-white"
              style={{ background: 'linear-gradient(135deg, #6300FF, #0900FF)' }}
            >
              Zobacz pakiety
            </motion.a>
            <motion.a
              href="tel:+48660957202"
              whileHover={{ scale: 1.05, borderColor: '#6300FF', boxShadow: '0 0 20px rgba(99,0,255,0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="border-2 border-white/30 text-white/80 font-bold px-8 py-4 rounded-full text-lg backdrop-blur-sm transition-all"
            >
              📞 660 957 202
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: '89 zł', label: 'Cena miesięczna' },
              { value: 'POS + KDS', label: 'W jednym pakiecie' },
              { value: '24/7', label: 'Kopia zapasowa' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ borderColor: 'rgba(99,0,255,0.5)', backgroundColor: 'rgba(99,0,255,0.1)' }}
              >
                <div className="text-3xl font-black mb-1 text-white">{s.value}</div>
                <div className="text-white/80 text-sm font-[Inter,sans-serif]">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 inset-x-0 z-10">
        <svg viewBox="0 0 1440 80" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  )
}
