import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FadeUp, SplitHeading, StaggerContainer, StaggerItem } from './AnimationHelpers'
import { EASE } from './ease'

const faqs = [
  { q: 'Jaki jest najtańszy system POS dla restauracji w Polsce?', a: 'DishFlow oferuje jeden z najtańszych pakietów POS na polskim rynku — 89 zł netto miesięcznie za pełen zestaw: kasa kelnerska (POS), ekran kuchenny (KDS) i tablica menu TV. Większość zagranicznych systemów POS kosztuje 300–800 zł miesięcznie za porównywalną funkcjonalność.' },
  { q: 'Czy DishFlow to najlepszy tani system POS dla małej restauracji?', a: 'Tak. DishFlow jest stworzony z myślą o małych i średnich restauracjach, bistro i barach. Niska cena (89 zł/mies.), polskie wsparcie techniczne i działanie na własnym sprzęcie sprawiają, że to idealne rozwiązanie dla każdego, kto szuka niedrogiego systemu POS.' },
  { q: 'Czy DishFlow oferuje strony internetowe dla restauracji?', a: 'Tak. DishFlow tworzy dedykowane strony internetowe dla restauracji z wbudowanym systemem rezerwacji stolików online. Strona jest zintegrowana z systemem POS — menu aktualizuje się automatycznie, a rezerwacje trafiają bezpośrednio do panelu zarządzania. Skontaktuj się pod numer 660 957 202, aby uzyskać wycenę.' },
  { q: 'Jak działa system rezerwacji stolików online?', a: 'System rezerwacji DishFlow pozwala gościom zarezerwować stolik przez stronę internetową restauracji o dowolnej porze. Manager widzi wszystkie rezerwacje w jednym panelu, może zarządzać dostępnością stolików i potwierdzać rezerwacje. System jest w pełni zintegrowany z systemem POS DishFlow.' },
  { q: 'Ile kosztuje system POS dla restauracji?', a: 'Ceny systemów POS dla restauracji w Polsce wahają się od 89 zł (DishFlow) do ponad 800 zł miesięcznie. DishFlow to najtańsza opcja zawierająca POS, KDS i TV menu w jednym pakiecie.' },
  { q: 'Czy potrzebuję specjalnego sprzętu do systemu POS?', a: 'Nie. DishFlow działa na istniejącym sprzęcie — tabletach, monitorach i komputerach, które już posiadasz w restauracji. Nie musisz kupować dedykowanych terminali POS.' },
  { q: 'Czym różni się system POS od KDS?', a: 'System POS (Point of Sale) to kasa kelnerska — służy do przyjmowania zamówień i obsługi płatności. KDS (Kitchen Display System) to ekran kuchenny — wyświetla kucharzom listę zamówień do realizacji. DishFlow zawiera oba systemy w pakiecie za 89 zł miesięcznie.' },
  { q: 'Jak szybko mogę uruchomić system POS DishFlow?', a: 'System konfigurowany jest indywidualnie. Zadzwoń na numer 660 957 202, a nasz zespół przeprowadzi Cię przez cały proces wdrożenia.' },
]

function FAQItem({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <StaggerItem
      className="border-b border-ink/15"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        onClick={() => setOpen(!open)}
        className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span
          itemProp="name"
          className={`text-lg font-semibold transition-colors duration-200 sm:text-xl ${
            open ? 'text-brand' : 'group-hover:text-brand'
          }`}
        >
          {item.q}
        </span>
        <span className="relative h-4 w-4 shrink-0 text-brand" aria-hidden="true">
          <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-current" />
          <motion.span
            className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-current"
            animate={{ scaleY: open ? 0 : 1 }}
            transition={{ duration: 0.3, ease: EASE }}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="max-w-2xl pb-7 leading-relaxed text-ink/65" itemProp="text">
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </StaggerItem>
  )
}

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-label="Najczęściej zadawane pytania o tani system POS"
      className="bg-white py-24 lg:py-32"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <FadeUp as="p" className="mb-4 text-sm font-semibold text-brand">
              FAQ
            </FadeUp>
            <SplitHeading text="Często zadawane pytania" className="display text-5xl sm:text-6xl" />
            <FadeUp as="p" delay={0.1} className="mt-6 text-lg leading-relaxed text-ink/65">
              Odpowiedzi na najważniejsze pytania o DishFlow i systemy POS dla restauracji.
            </FadeUp>
          </div>
        </div>

        <StaggerContainer staggerDelay={0.05} className="border-t border-ink/15 lg:col-span-7 lg:col-start-6">
          {faqs.map((item) => (
            <FAQItem key={item.q} item={item} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
