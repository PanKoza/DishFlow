import { motion } from 'framer-motion'
import { FadeUp, FadeIn } from './AnimationHelpers'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const competitors = [
  { feature: 'Cena miesięczna', dishflow: '89 zł', others: '300–800 zł' },
  { feature: 'POS + KDS w pakiecie', dishflow: true, others: false },
  { feature: 'TV menu w pakiecie', dishflow: true, others: false },
  { feature: 'Kopia zapasowa', dishflow: true, others: 'Zależy od planu' },
  { feature: 'Polska firma i wsparcie', dishflow: true, others: false },
  { feature: 'Działa na własnym sprzęcie', dishflow: true, others: false },
  { feature: 'System numerków', dishflow: true, others: false },
]

function Cell({ val }) {
  if (val === true) return <span className="text-green-500 font-bold text-lg">✓</span>
  if (val === false) return <span className="text-red-400 font-bold text-lg">✗</span>
  return <span className="font-semibold text-gray-700">{val}</span>
}

function TableRow({ row, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.tr
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'}
    >
      <td className="px-6 py-4 text-gray-700 font-medium">{row.feature}</td>
      <td className="px-6 py-4 text-center"><Cell val={row.dishflow} /></td>
      <td className="px-6 py-4 text-center text-gray-400"><Cell val={row.others} /></td>
    </motion.tr>
  )
}

export default function Comparison() {
  return (
    <section id="porownanie" aria-label="Porównanie DishFlow z konkurencją – tani system POS" className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-14">
          <span className="inline-block text-[#6300FF] font-semibold text-sm uppercase tracking-widest mb-3">DishFlow vs rynek</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">Najlepszy tani system POS?</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Sprawdź dlaczego restauratorzy wybierają DishFlow zamiast droższych zagranicznych rozwiązań.
          </p>
        </FadeUp>

        <FadeIn from="left" delay={0.1}>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-lg">
            <table className="w-full text-sm">
              <caption className="sr-only">Porównanie DishFlow z konkurencyjnymi systemami POS dla restauracji w Polsce</caption>
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-gray-500 font-semibold w-1/2">Cecha</th>
                  <th className="px-6 py-4 text-center">
                    <span className="inline-block bg-gradient-to-r from-[#6300FF] to-[#0900FF] text-white font-black px-4 py-1.5 rounded-full text-sm">
                      DishFlow
                    </span>
                  </th>
                  <th className="px-6 py-4 text-center text-gray-400 font-semibold">Konkurencja</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((row, i) => (
                  <TableRow key={row.feature} row={row} index={i} />
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        <FadeUp delay={0.3}>
          <p className="text-center text-gray-400 text-xs mt-4">
            * Dane porównawcze oparte na publicznie dostępnych cennikach systemów POS dla restauracji w Polsce (2026).
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
