import { motion } from 'framer-motion'

const PATHS = {
  tag: ['M3 12V4h8l10 10-8 8L3 12z', 'M7.5 8.5h.01'],
  trend: ['M3 17l6-6 4 4 8-8', 'M15 7h6v6'],
  monitor: ['M3 5h18v11H3z', 'M12 16v4', 'M8 20h8'],
  pin: ['M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z', 'M12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z'],
  phone: [
    'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  ],
  layers: ['M12 3l9 5-9 5-9-5 9-5z', 'M3 12.5l9 5 9-5', 'M3 17l9 5 9-5'],
  globe: [
    'M12 21a9 9 0 100-18 9 9 0 000 18z',
    'M3 12h18',
    'M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z',
  ],
  calendar: ['M4 6h16v14H4z', 'M4 10h16', 'M8 3v4', 'M16 3v4'],
  smartphone: ['M7 3h10v18H7z', 'M11 18h2'],
  link: [
    'M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1',
    'M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1',
  ],
  search: ['M11 18a7 7 0 100-14 7 7 0 000 14z', 'M20 20l-4-4'],
  bolt: ['M13 3L5 13.5h6l-1 7.5 8-10.5h-6l1-7.5z'],
}

// Ikona liniowa, która rysuje się kreska po kresce po wejściu w okno
export function DrawIcon({ name, className = '' }) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {PATHS[name].map((d, i) => (
        <motion.path
          key={d}
          d={d}
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: { duration: 0.9, delay: 0.25 + i * 0.18, ease: 'easeInOut' },
            },
          }}
        />
      ))}
    </motion.svg>
  )
}

export function PhoneIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS.phone[0]} />
    </svg>
  )
}

export function ArrowIcon({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  )
}
