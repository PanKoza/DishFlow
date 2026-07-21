import { motion } from 'framer-motion'
import { FadeUp, FadeIn, StaggerContainer, StaggerItem } from './AnimationHelpers'

const items = [
  { icon: '🏆', title: 'Nagrodzony zespół', desc: 'Stworzyliśmy notespace — nagrodę najlepszego projektu technologicznego w Polsce 2024 + wyróżnienie Ministra Cyfryzacji.' },
  { icon: '📦', title: 'Magazyn w trakcie budowy', desc: 'Aktualnie pracujemy nad zaawansowanym systemem zarządzania stanami magazynowymi.' },
  { icon: '🎁', title: 'System lojalnościowy', desc: 'Planujemy zintegrowany program lojalnościowy — nagradzaj stałych klientów zniżkami i bonusami.' },
  { icon: '💡', title: 'Twoje pomysły', desc: 'Jesteśmy otwarci na propozycje. Jeśli potrzebujesz czegoś, czego nie mamy — powiedz nam, a to zrealizujemy.' },
]

export default function Future() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn from="left">
            <span className="inline-block text-[#6300FF] font-semibold text-sm uppercase tracking-widest mb-3">
              Nasza historia i przyszłość
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Rozwijamy się razem z Tobą
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              DishFlow to młody, ambitny projekt — intensywnie dodajemy nowe funkcje i słuchamy potrzeb restauracji. Nasz zespół posiada udokumentowane doświadczenie w tworzeniu nagradzanych aplikacji.
            </p>
            <motion.a
              href="tel:+48660957202"
              whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(99,0,255,0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6300FF] to-[#0900FF] text-white font-bold px-7 py-3.5 rounded-full"
            >
              Porozmawiajmy
            </motion.a>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {items.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 16px 32px rgba(0,0,0,0.1)' }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <motion.div
                    className="text-3xl mb-3"
                    whileHover={{ scale: 1.3, rotate: -5, transition: { duration: 0.2 } }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
