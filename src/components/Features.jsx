import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem } from './AnimationHelpers'

const features = [
  { icon: '💸', title: 'Konkurencyjne ceny', desc: 'Pakiet podstawowy od 89 zł/miesiąc — wielokrotnie taniej niż zachodnie systemy POS.' },
  { icon: '📈', title: 'Intensywny rozwój', desc: 'Regularnie dodajemy nowe funkcje i jesteśmy otwarci na Twoje sugestie.' },
  { icon: '💻', title: 'Działa na Twoim sprzęcie', desc: 'System dostosowujemy do istniejącego zaplecza technologicznego restauracji.' },
  { icon: '👥', title: 'Lokalna inicjatywa', desc: 'Polskie oprogramowanie, polskie wsparcie — rozumiemy specyfikę krajowego rynku.' },
  { icon: '📞', title: 'Szybki kontakt', desc: 'Jeden numer telefonu dzieli Cię od rozwiązania każdego problemu.' },
  { icon: '🚀', title: 'Skalowalność', desc: 'Od małego bistro po sieć restauracji — system rośnie razem z Twoim biznesem.' },
]

export default function Features() {
  return (
    <section id="funkcje" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <span className="inline-block text-[#6300FF] font-semibold text-sm uppercase tracking-widest mb-3">
            Dlaczego DishFlow?
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Co nas wyróżnia</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Nowoczesny system POS stworzony przez Polaków, dla polskich restauracji.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <article>
              <motion.div
                whileHover={{
                  scale: 1.03,
                  background: 'linear-gradient(135deg, #6300FF, #0900FF)',
                  color: '#fff',
                }}
                className="group bg-gray-50 rounded-2xl p-7 h-full cursor-default transition-colors duration-300"
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                >
                  {f.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/80 text-sm leading-relaxed transition-colors duration-300">
                  {f.desc}
                </p>
              </motion.div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
