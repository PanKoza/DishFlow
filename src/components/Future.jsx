import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { StaggerContainer, StaggerItem } from './AnimationHelpers'
import { ArrowIcon } from './Icons'
import SectionHead from './SectionHead'

const items = [
  { status: '2024', done: true, title: 'Nagrodzony zespół', desc: 'Stworzyliśmy notespace — nagrodę najlepszego projektu technologicznego w Polsce 2024 + wyróżnienie Ministra Cyfryzacji.' },
  { status: 'W budowie', title: 'Magazyn w trakcie budowy', desc: 'Aktualnie pracujemy nad zaawansowanym systemem zarządzania stanami magazynowymi.' },
  { status: 'W planach', title: 'System lojalnościowy', desc: 'Planujemy zintegrowany program lojalnościowy — nagradzaj stałych klientów zniżkami i bonusami.' },
  { status: 'Otwarte', title: 'Twoje pomysły', desc: 'Jesteśmy otwarci na propozycje. Jeśli potrzebujesz czegoś, czego nie mamy — powiedz nam, a to zrealizujemy.' },
]

export default function Future() {
  const ref = useRef(null)
  // Linia osi czasu rysuje się razem z przewijaniem
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'start 30%'] })

  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead label="Nasza historia i przyszłość" title="Rozwijamy się razem z Tobą">
          <p>
            DishFlow to młody, ambitny projekt — intensywnie dodajemy nowe funkcje i słuchamy potrzeb restauracji.
            Nasz zespół posiada udokumentowane doświadczenie w tworzeniu nagradzanych aplikacji.
          </p>
          <a href="tel:+48660957202" className="btn btn-brand mt-7">
            Porozmawiajmy
            <ArrowIcon className="arrow h-4 w-4" />
          </a>
        </SectionHead>

        <div ref={ref} className="relative">
          {/* oś: pionowa na telefonie, pozioma na desktopie */}
          <div aria-hidden="true" className="absolute left-[6px] top-0 h-full w-px bg-ink/15 lg:left-0 lg:top-[6px] lg:h-px lg:w-full" />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[6px] top-0 h-full w-px origin-top bg-brand lg:hidden"
          />
          <motion.div
            aria-hidden="true"
            style={{ scaleX: scrollYProgress }}
            className="absolute left-0 top-[6px] hidden h-px w-full origin-left bg-brand lg:block"
          />

          <StaggerContainer as="ol" staggerDelay={0.14} className="relative grid gap-12 lg:grid-cols-4 lg:gap-10">
            {items.map((item) => (
              <StaggerItem as="li" key={item.title} className="relative pl-10 lg:pl-0 lg:pt-12">
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1 h-[13px] w-[13px] rounded-full border-2 border-brand lg:top-0 ${
                    item.done ? 'bg-brand' : 'bg-paper'
                  }`}
                />
                <p className="mb-3 font-mono text-xs font-bold uppercase text-brand">{item.status}</p>
                <h3 className="display mb-3 text-3xl">{item.title}</h3>
                <p className="leading-relaxed text-ink/65">{item.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
