import { StaggerContainer, StaggerItem } from './AnimationHelpers'
import { DrawIcon } from './Icons'
import SectionHead from './SectionHead'

const features = [
  { icon: 'tag', title: 'Konkurencyjne ceny', desc: 'Pakiet podstawowy od 89 zł/miesiąc — wielokrotnie taniej niż zachodnie systemy POS.' },
  { icon: 'trend', title: 'Intensywny rozwój', desc: 'Regularnie dodajemy nowe funkcje i jesteśmy otwarci na Twoje sugestie.' },
  { icon: 'monitor', title: 'Działa na Twoim sprzęcie', desc: 'System dostosowujemy do istniejącego zaplecza technologicznego restauracji.' },
  { icon: 'pin', title: 'Lokalna inicjatywa', desc: 'Polskie oprogramowanie, polskie wsparcie — rozumiemy specyfikę krajowego rynku.' },
  { icon: 'phone', title: 'Szybki kontakt', desc: 'Jeden numer telefonu dzieli Cię od rozwiązania każdego problemu.' },
  { icon: 'layers', title: 'Skalowalność', desc: 'Od małego bistro po sieć restauracji — system rośnie razem z Twoim biznesem.' },
]

function trackPointer(e) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
}

export default function Features() {
  return (
    <section id="funkcje" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead label="Dlaczego DishFlow?" title="Co nas wyróżnia">
          <p>Nowoczesny system POS stworzony przez Polaków, dla polskich restauracji.</p>
        </SectionHead>

        <StaggerContainer className="grid border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <StaggerItem
              as="article"
              key={f.title}
              onMouseMove={trackPointer}
              className="spot border-b border-r border-ink/15 p-7 lg:p-9"
            >
              <DrawIcon name={f.icon} className="relative mb-12 h-9 w-9 text-brand" />
              <h3 className="display relative mb-3 text-3xl">{f.title}</h3>
              <p className="relative leading-relaxed text-ink/65">{f.desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
