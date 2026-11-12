import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

// Zamówienia krążące w pętli przez podgląd — dania z prawdziwego menu ze zrzutów ekranu
const ORDERS = [
  { name: 'Pierogi ruskie', qty: 2 },
  { name: 'Schabowy', extras: ['Ziemniaki', 'Mizeria'], takeaway: true },
  { name: 'Żurek', extras: ['Pieczywo'] },
  { name: 'Cordon bleu', extras: ['Frytki', 'Surówka'] },
  { name: 'Sałatka z kurczakiem', takeaway: true },
  { name: 'Zupa pomidorowa', qty: 2 },
]

const CODE_CHARS = 'ABCDEFGHJKLMNPRSTUWXZ23456789'

function makeCode() {
  return Array.from({ length: 4 }, () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]).join('')
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  return `${String(m).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`
}

const INITIAL_TICKETS = [
  { id: 1, code: 'VN7M', name: 'Cordon bleu', extras: ['Frytki', 'Surówka'], born: -94 },
  { id: 2, code: 'ORAX', name: 'Sałatka z kurczakiem', takeaway: true, born: -37 },
]

const SPRING = { type: 'spring', stiffness: 260, damping: 28 }

export default function KdsDemo() {
  const reduce = useReducedMotion()
  const [tick, setTick] = useState(0)
  const [tickets, setTickets] = useState(INITIAL_TICKETS)
  const [ready, setReady] = useState(['K2PD'])
  const [servingId, setServingId] = useState(null)

  const ticketsRef = useRef(INITIAL_TICKETS)
  const tickRef = useRef(0)
  const nextOrder = useRef(0)
  const nextId = useRef(INITIAL_TICKETS.length)

  useEffect(() => {
    if (reduce) return
    const timeouts = []
    const commit = (next) => {
      ticketsRef.current = next
      setTickets(next)
    }

    const clock = setInterval(() => {
      tickRef.current += 1
      setTick(tickRef.current)
    }, 1000)

    // Jeden obieg: kuchnia wydaje najstarsze zamówienie, po chwili z kasy wpada nowe
    const cycle = setInterval(() => {
      const oldest = ticketsRef.current[0]
      if (oldest) {
        setServingId(oldest.id)
        timeouts.push(
          setTimeout(() => {
            commit(ticketsRef.current.filter((t) => t.id !== oldest.id))
            setReady((r) => [oldest.code, ...r].slice(0, 2))
            setServingId(null)
          }, 850),
        )
      }
      timeouts.push(
        setTimeout(() => {
          const order = ORDERS[nextOrder.current % ORDERS.length]
          nextOrder.current += 1
          nextId.current += 1
          commit([...ticketsRef.current, { ...order, id: nextId.current, code: makeCode(), born: tickRef.current }])
        }, 1300),
      )
    }, 4600)

    return () => {
      clearInterval(clock)
      clearInterval(cycle)
      timeouts.forEach(clearTimeout)
    }
  }, [reduce])

  return (
    <div
      role="img"
      aria-label="Podgląd na żywo: zamówienia z kasy trafiają na ekran kuchenny DishFlow, a gotowe numerki na ekran dla klientów"
      className="mx-auto w-full max-w-xl"
    >
      {/* Ekran kuchenny */}
      <div className="overflow-hidden rounded-xl border border-white/10 bg-black shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)]">
        <div className="flex items-center justify-between border-b border-white/10 bg-[#19191c] px-4 py-2">
          <span className="text-[11px] font-semibold tracking-wide text-white/80">EKRAN KUCHENNY (KDS)</span>
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-white/50">
            <span className="h-1.5 w-1.5 rounded-full bg-go" />
            na żywo
          </span>
        </div>

        <div className="grid h-[276px] grid-cols-2 content-start gap-3 p-3 sm:h-[292px]">
          <AnimatePresence mode="popLayout" initial={false}>
            {tickets.map((t) => {
              const serving = t.id === servingId
              return (
                <motion.div
                  key={t.id}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: serving ? 0.6 : 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -22, scale: 0.94, transition: { duration: 0.35 } }}
                  transition={SPRING}
                  className={`relative overflow-hidden rounded-lg border ${
                    t.takeaway ? 'border-[#7c3aed] bg-[#47148f]' : 'border-white/10 bg-[#232326]'
                  }`}
                >
                  {/* żółta ramka = świeżo nabite zamówienie */}
                  <motion.span
                    className="pointer-events-none absolute inset-0 z-10 rounded-lg ring-2 ring-inset ring-yolk"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 1.6, delay: 0.3 }}
                  />
                  <div
                    className={`flex items-baseline justify-between gap-2 px-3 py-2 ${
                      t.takeaway ? 'bg-[#5b21b6]' : 'bg-[#2e2e33]'
                    }`}
                  >
                    <span className="text-lg font-bold sm:text-2xl">#{t.code}</span>
                    <span className="font-mono text-sm font-bold tabular-nums text-yolk sm:text-lg">
                      {formatTime(tick - t.born)}
                    </span>
                  </div>
                  {t.takeaway && (
                    <div className="bg-yolk py-0.5 text-center text-sm font-bold text-ink">NA WYNOS</div>
                  )}
                  <div className="px-3 py-2.5">
                    <p className="font-bold leading-snug sm:text-lg">• {t.name}</p>
                    <p className="pl-3 text-sm text-white/60">{t.qty ?? 1} szt.</p>
                    {t.extras?.map((extra) => (
                      <p key={extra} className="pl-3 text-sm text-white/75">
                        + {extra}
                      </p>
                    ))}
                  </div>
                  <div className="px-3 pb-3">
                    <div
                      className={`rounded py-1.5 text-center text-[11px] font-bold transition-colors duration-200 ${
                        serving ? 'bg-white text-ink' : 'bg-go text-white'
                      }`}
                    >
                      {serving ? '✓ WYDANE' : 'WYDAJ / ZROBIONE'}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Ekran z numerkami dla klientów */}
      <div className="relative z-10 -mt-6 ml-auto mr-3 w-[82%] rounded-lg bg-white p-3.5 text-ink shadow-[0_24px_50px_-12px_rgba(0,0,0,0.7)] sm:mr-6 sm:w-[64%]">
        <div className="mb-2.5 flex items-center justify-between text-[11px] font-semibold tracking-wide text-ink/50">
          <span>EKRAN DLA KLIENTÓW</span>
          <span>NUMERKI</span>
        </div>
        <div className="grid grid-cols-2">
          <div className="pr-3">
            <p className="mb-1 text-xs text-ink/60">W przygotowaniu</p>
            <div className="flex h-6 gap-3 overflow-hidden font-mono font-bold">
              <AnimatePresence mode="popLayout" initial={false}>
                {tickets.map((t) => (
                  <motion.span
                    key={t.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 16 }}
                    transition={SPRING}
                  >
                    {t.code}
                  </motion.span>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="border-l border-ink/10 pl-3">
            <p className="mb-1 text-xs text-ink/60">Do odbioru</p>
            <div className="flex h-6 gap-3 overflow-hidden font-mono font-bold text-go-deep">
              <AnimatePresence mode="popLayout" initial={false}>
                {ready.map((code) => (
                  <motion.span
                    key={code}
                    layout
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={SPRING}
                  >
                    {code}
                  </motion.span>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
