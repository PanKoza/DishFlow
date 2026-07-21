import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem } from './AnimationHelpers'

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

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)

  return (
    <StaggerItem>
      <motion.div
        className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
        whileHover={{ boxShadow: '0 8px 24px rgba(99,0,255,0.08)' }}
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-6 py-5 font-semibold text-gray-900 text-left gap-4"
        >
          <span>{item.q}</span>
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            className="shrink-0 w-8 h-8 rounded-full bg-[#6300FF]/10 flex items-center justify-center"
          >
            <svg className="w-4 h-4 text-[#6300FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
            </svg>
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{item.a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </StaggerItem>
  )
}

export default function FAQ() {
  return (
    <section id="faq" aria-label="Najczęściej zadawane pytania o tani system POS" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-14">
          <span className="inline-block text-[#6300FF] font-semibold text-sm uppercase tracking-widest mb-3">FAQ</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Często zadawane pytania</h2>
          <p className="text-gray-500 text-lg">Odpowiedzi na najważniejsze pytania o DishFlow i systemy POS dla restauracji.</p>
        </FadeUp>

        <StaggerContainer className="space-y-4">
          {faqs.map((item, i) => (
            <FAQItem key={item.q} item={item} index={i} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
