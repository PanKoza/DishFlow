import { motion } from 'framer-motion'
import { FadeUp, FadeIn, StaggerContainer, StaggerItem } from './AnimationHelpers'

const websiteFeatures = [
  { icon: '🌐', title: 'Dedykowana strona restauracji', desc: 'Profesjonalna strona internetowa zaprojektowana specjalnie dla Twojej restauracji — z menu, zdjęciami i danymi kontaktowymi.' },
  { icon: '📅', title: 'System rezerwacji stolików', desc: 'Klienci rezerwują stolik online 24/7 — bez telefonów. Ty widzisz wszystkie rezerwacje w jednym panelu.' },
  { icon: '📱', title: 'Responsywny design', desc: 'Strona wygląda doskonale na każdym urządzeniu — smartfonie, tablecie i komputerze.' },
  { icon: '🔗', title: 'Integracja z systemem POS', desc: 'Menu online aktualizuje się automatycznie po zmianach w systemie DishFlow.' },
  { icon: '🔍', title: 'SEO dla restauracji', desc: 'Twoja restauracja pojawia się wyżej w Google przy zapytaniach lokalnych.' },
  { icon: '⚡', title: 'Szybkie wdrożenie', desc: 'Przygotujemy stronę szybko i sprawnie. Skontaktuj się, aby omówić szczegóły.' },
]

export default function WebsiteService() {
  return (
    <section id="strony-internetowe" aria-label="Dedykowane strony internetowe dla restauracji z systemem rezerwacji" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <span className="inline-block text-[#6300FF] font-semibold text-sm uppercase tracking-widest mb-3">Dodatkowa usługa</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Strona internetowa<br />
            <span className="bg-gradient-to-r from-[#6300FF] to-[#0900FF] bg-clip-text text-transparent">
              + System rezerwacji stolików
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Zbudujemy Ci dedykowaną stronę restauracji z wbudowanym systemem rezerwacji online — zintegrowaną z Twoim DishFlow POS.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {websiteFeatures.map((f) => (
            <StaggerItem key={f.title}>
              <motion.div
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(99,0,255,0.12)', borderColor: '#6300FF' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-gray-50 rounded-2xl p-7 border border-gray-100 h-full"
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5, transition: { duration: 0.2 } }}
                >
                  {f.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA banner */}
        <FadeIn from="left" delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="rounded-3xl p-10 text-white text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #6300FF 0%, #0900FF 100%)' }}
          >
            <motion.div
              className="absolute -top-8 -right-8 w-48 h-48 bg-white/10 rounded-full blur-2xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/5 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-black mb-3">Chcesz stronę dla swojej restauracji?</h3>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Zaprojektujemy i wdrożymy stronę z systemem rezerwacji dostosowaną do Twojej marki.
              </p>
              <motion.a
                href="tel:+48883821301"
                whileHover={{ scale: 1.07, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 bg-white text-[#6300FF] font-black text-xl px-10 py-4 rounded-2xl shadow-xl"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                883 821 301
              </motion.a>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}
