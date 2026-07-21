import { motion } from 'framer-motion'
import { FadeUp, FadeIn, ScaleIn } from './AnimationHelpers'

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

export default function Pricing() {
  return (
    <section id="cennik" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <span className="inline-block text-[#6300FF] font-semibold text-sm uppercase tracking-widest mb-3">Cennik</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Rozwiązania i pakiety</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Przystępny cennik dopasowany do potrzeb każdej restauracji.</p>
        </FadeUp>

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          {/* Basic plan */}
          <ScaleIn delay={0.1} className="max-w-md w-full">
            <motion.div
              whileHover={{ y: -6, boxShadow: '0 30px 60px rgba(99,0,255,0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative bg-white rounded-3xl shadow-xl border-2 border-[#6300FF] p-8"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-[#6300FF] to-[#0900FF] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  PAKIET PODSTAWOWY
                </span>
              </div>

              <div className="flex items-end gap-2 mt-4 mb-2">
                <motion.span
                  className="text-6xl font-black text-gray-900"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  89
                </motion.span>
                <div className="pb-2">
                  <span className="text-2xl font-bold text-gray-500">zł</span>
                  <div className="text-gray-400 text-sm">/miesiąc</div>
                </div>
              </div>
              <p className="text-gray-500 text-sm mb-6">
                Ceny nie zawierają kosztów sprzętu (chyba że restauracja posiada już własne zaplecze techniczne).
              </p>

              <ul className="space-y-3 mb-8">
                {included.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.06 }}
                  >
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="tel:+48660957202"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="block text-center bg-gradient-to-r from-[#6300FF] to-[#0900FF] text-white font-bold py-3.5 rounded-xl"
              >
                Zacznij już dziś
              </motion.a>
            </motion.div>
          </ScaleIn>

          {/* Add-ons */}
          <ScaleIn delay={0.2} className="max-w-md w-full">
            <motion.div
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dodatki na żądanie</h3>
              <p className="text-gray-500 text-sm mb-6">
                Dokup pojedyncze funkcje spoza pakietu. W celu konfiguracji i kosztów skontaktuj się z&nbsp;nami.
              </p>

              <ul className="space-y-3 mb-8">
                {addons.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                  >
                    <svg className="w-5 h-5 text-[#6300FF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="tel:+48660957202"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="block text-center border-2 border-[#6300FF] text-[#6300FF] font-bold py-3.5 rounded-xl hover:bg-[#6300FF]/5 transition-colors"
              >
                Zapytaj o wycenę
              </motion.a>
            </motion.div>
          </ScaleIn>
        </div>

        <FadeUp delay={0.3}>
          <p className="text-center text-gray-400 text-sm mt-8">
            * Wymagania sprzętowe dostępne po kontakcie z naszym przedstawicielem.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
