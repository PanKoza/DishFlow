import { Fragment, useEffect, useRef } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'

import { EASE } from './ease'

const VIEWPORT = { once: true, margin: '-80px' }

// Wjazd od dołu po pojawieniu się w oknie
export function FadeUp({ children, delay = 0, className = '', as = 'div', ...rest }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// Kontener, którego dzieci (StaggerItem) wchodzą kolejno
export function StaggerContainer({ children, className = '', staggerDelay = 0.08, as = 'div', ...rest }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: staggerDelay } } }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function StaggerItem({ children, className = '', as = 'div', ...rest }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// Nagłówek, którego słowa wysuwają się zza maski jedno po drugim
export function SplitHeading({
  as = 'h2',
  text,
  className = '',
  accent = [],
  accentClass = 'text-brand',
  delay = 0,
  immediate = false,
}) {
  const Tag = motion[as]
  // jednoliterowe spójniki (i, z, w, o, a) przyklejamy do następnego słowa, żeby nie wisiały na końcu wiersza
  const words = text.split(' ').reduce((acc, word) => {
    const prev = acc[acc.length - 1]
    if (prev && /^\p{L}$/u.test(prev)) acc[acc.length - 1] = `${prev} ${word}`
    else acc.push(word)
    return acc
  }, [])
  const trigger = immediate ? { animate: 'visible' } : { whileInView: 'visible', viewport: VIEWPORT }

  return (
    <Tag
      className={className}
      initial="hidden"
      {...trigger}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: delay } } }}
    >
      {words.map((word, i) => (
        <Fragment key={i}>
          {/* padding + ujemny margines: maska nie obcina ogonków ani kresek nad Ś, Ż, Ó */}
          <span className="-my-[0.14em] inline-block overflow-hidden py-[0.14em] align-bottom">
            <motion.span
              className={`inline-block ${accent.includes(word) ? accentClass : ''}`}
              variants={{
                hidden: { y: '120%' },
                visible: { y: 0, transition: { duration: 0.85, ease: EASE } },
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </Fragment>
      ))}
    </Tag>
  )
}

// Licznik dobijający do wartości, gdy pojawi się w oknie
export function CountUp({ to, duration = 1.4, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, to, {
      duration,
      delay,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v)
      },
    })
    return () => controls.stop()
  }, [inView, reduce, to, duration, delay])

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {to}
    </span>
  )
}
