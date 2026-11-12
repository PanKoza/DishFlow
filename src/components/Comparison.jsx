import { motion } from 'framer-motion'
import { FadeUp } from './AnimationHelpers'
import { EASE } from './ease'
import SectionHead from './SectionHead'

const competitors = [
  { feature: 'Cena miesięczna', dishflow: '89 zł', others: '300–800 zł', price: true },
  { feature: 'POS + KDS w pakiecie', dishflow: true, others: false },
  { feature: 'TV menu w pakiecie', dishflow: true, others: false },
  { feature: 'Kopia zapasowa', dishflow: true, others: 'Zależy od planu' },
  { feature: 'Polska firma i wsparcie', dishflow: true, others: false },
  { feature: 'Działa na własnym sprzęcie', dishflow: true, others: false },
  { feature: 'System numerków', dishflow: true, others: false },
]

function Cell({ val }) {
  if (val === true) {
    return (
      <svg
        className="mx-auto h-6 w-6 text-go-deep"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        role="img"
        aria-label="Tak"
      >
        <motion.path
          d="M5 12.5l4.5 4.5L19 7.5"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1, transition: { duration: 0.45, delay: 0.2 } },
          }}
        />
      </svg>
    )
  }
  if (val === false) {
    return (
      <svg
        className="mx-auto h-5 w-5 text-ink/30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        role="img"
        aria-label="Nie"
      >
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    )
  }
  return val
}

export default function Comparison() {
  const last = competitors.length - 1

  return (
    <section
      id="porownanie"
      aria-label="Porównanie DishFlow z konkurencją – tani system POS"
      className="bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead label="DishFlow vs rynek" title="Najlepszy tani system POS?">
          <p>Sprawdź dlaczego restauratorzy wybierają DishFlow zamiast droższych zagranicznych rozwiązań.</p>
        </SectionHead>

        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-0 text-left">
            <caption className="sr-only">
              Porównanie DishFlow z konkurencyjnymi systemami POS dla restauracji w Polsce
            </caption>
            <thead>
              <tr>
                <th className="w-[44%] pb-4 pr-4 align-bottom text-sm font-medium text-ink/55">Cecha</th>
                <th className="display w-[28%] rounded-t-xl bg-brand px-2 py-5 sm:px-4 text-center text-2xl text-white sm:text-3xl">
                  DishFlow
                </th>
                <th className="w-[28%] px-2 pb-4 text-center sm:px-4 align-bottom text-sm font-medium text-ink/55">
                  Konkurencja
                </th>
              </tr>
            </thead>
            <motion.tbody
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
            >
              {competitors.map((row, i) => (
                <motion.tr
                  key={row.feature}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                  }}
                >
                  <th scope="row" className="border-t border-ink/10 py-5 pr-4 font-medium sm:text-lg">
                    {row.feature}
                  </th>
                  <td
                    className={`border-t border-brand/15 bg-brand-soft px-2 py-5 text-center sm:px-4 ${
                      i === last ? 'rounded-b-xl' : ''
                    } ${row.price ? 'display text-3xl text-brand sm:text-5xl' : ''}`}
                  >
                    <Cell val={row.dishflow} />
                  </td>
                  <td
                    className={`border-t border-ink/10 px-2 py-5 text-center text-ink/60 sm:px-4 ${
                      row.price ? 'font-semibold sm:text-lg' : 'text-sm'
                    }`}
                  >
                    <Cell val={row.others} />
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>

        <FadeUp as="p" delay={0.2} className="mt-6 text-xs text-ink/50">
          * Dane porównawcze oparte na publicznie dostępnych cennikach systemów POS dla restauracji w Polsce (2026).
        </FadeUp>
      </div>
    </section>
  )
}
