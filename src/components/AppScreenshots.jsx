import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem } from './AnimationHelpers'

const screens = [
  { label: 'Wybór trybu urządzenia', desc: 'Po zalogowaniu wybierasz tryb: kasa kelnerska (POS), ekran kuchenny (KDS) lub tablica menu TV.', bg: 'bg-indigo-50', accent: 'from-indigo-400 to-indigo-600' },
  { label: 'Panel zamówień (POS)', desc: 'Przejrzysty podział na kategorie, zdjęcia dań, ceny i szybkie dodawanie do zamówienia.', bg: 'bg-purple-50', accent: 'from-purple-400 to-purple-600' },
  { label: 'Szczegóły dania i dodatki', desc: 'Kelner wybiera dodatki, wpisuje uwagi klienta i zatwierdza zamówienie jednym kliknięciem.', bg: 'bg-blue-50', accent: 'from-blue-400 to-blue-600' },
  { label: 'Ekran kuchenny (KDS)', desc: 'Kuchnia widzi aktywne zamówienia z timerem oczekiwania i oznacza gotowość jednym kliknięciem.', bg: 'bg-violet-50', accent: 'from-violet-400 to-violet-600' },
]

export default function AppScreenshots() {
  return (
    <section id="aplikacja" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <span className="inline-block text-[#6300FF] font-semibold text-sm uppercase tracking-widest mb-3">Interfejs</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Wygląd aplikacji</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">Przejrzysty, intuicyjny interfejs — zero zbędnych komplikacji.</p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {screens.map((s) => (
            <StaggerItem key={s.label}>
              <motion.div
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`${s.bg} rounded-2xl p-8 h-full`}
              >
                <div className="w-full h-48 rounded-xl bg-white/60 border border-white/80 mb-5 flex items-center justify-center overflow-hidden relative">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-0`}
                    whileHover={{ opacity: 0.06 }}
                  />
                  <div className="text-center">
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${s.accent} mx-auto mb-2 flex items-center justify-center`}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </motion.div>
                    <span className="text-xs text-gray-400">Podgląd ekranu</span>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{s.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.3}>
          <p className="text-center text-gray-400 text-sm mt-8">
            Wygląd aplikacji może się zmieniać — jesteśmy w ciągłym rozwoju.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
