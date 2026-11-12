import { FadeUp, SplitHeading, StaggerContainer, StaggerItem } from './AnimationHelpers'
import { DrawIcon, PhoneIcon } from './Icons'

const websiteFeatures = [
  { icon: 'globe', title: 'Dedykowana strona restauracji', desc: 'Profesjonalna strona internetowa zaprojektowana specjalnie dla Twojej restauracji — z menu, zdjęciami i danymi kontaktowymi.' },
  { icon: 'calendar', title: 'System rezerwacji stolików', desc: 'Klienci rezerwują stolik online 24/7 — bez telefonów. Ty widzisz wszystkie rezerwacje w jednym panelu.' },
  { icon: 'smartphone', title: 'Responsywny design', desc: 'Strona wygląda doskonale na każdym urządzeniu — smartfonie, tablecie i komputerze.' },
  { icon: 'link', title: 'Integracja z systemem POS', desc: 'Menu online aktualizuje się automatycznie po zmianach w systemie DishFlow.' },
  { icon: 'search', title: 'SEO dla restauracji', desc: 'Twoja restauracja pojawia się wyżej w Google przy zapytaniach lokalnych.' },
  { icon: 'bolt', title: 'Szybkie wdrożenie', desc: 'Przygotujemy stronę szybko i sprawnie. Skontaktuj się, aby omówić szczegóły.' },
]

export default function WebsiteService() {
  return (
    <section
      id="strony-internetowe"
      aria-label="Dedykowane strony internetowe dla restauracji z systemem rezerwacji"
      className="bg-paper py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <FadeUp as="p" className="mb-4 text-sm font-semibold text-brand">
              Dodatkowa usługa
            </FadeUp>
            <SplitHeading
              text="Strona internetowa + system rezerwacji stolików"
              accent={['+', 'system', 'rezerwacji', 'stolików']}
              className="display text-5xl sm:text-6xl"
            />
            <FadeUp as="p" delay={0.1} className="mt-6 max-w-md text-lg leading-relaxed text-ink/65">
              Zbudujemy Ci dedykowaną stronę restauracji z wbudowanym systemem rezerwacji online — zintegrowaną
              z Twoim DishFlow POS.
            </FadeUp>

            <FadeUp delay={0.2} className="mt-10 max-w-md border-l-2 border-brand pl-6">
              <h3 className="text-lg font-bold">Chcesz stronę dla swojej restauracji?</h3>
              <p className="mt-2 leading-relaxed text-ink/65">
                Zaprojektujemy i wdrożymy stronę z systemem rezerwacji dostosowaną do Twojej marki.
              </p>
              <a href="tel:+48883821301" className="btn btn-brand mt-6">
                <PhoneIcon className="h-4 w-4" />
                883 821 301
              </a>
            </FadeUp>
          </div>
        </div>

        <StaggerContainer as="ul" className="border-t border-ink/15 lg:col-span-6 lg:col-start-7">
          {websiteFeatures.map((f) => (
            <StaggerItem
              as="li"
              key={f.title}
              className="group grid grid-cols-[auto_1fr] gap-x-6 border-b border-ink/15 py-7 transition-[padding] duration-300 hover:pl-3"
            >
              <DrawIcon
                name={f.icon}
                className="mt-1 h-8 w-8 text-ink/40 transition-colors duration-300 group-hover:text-brand"
              />
              <div>
                <h3 className="display text-2xl sm:text-3xl">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/65">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
