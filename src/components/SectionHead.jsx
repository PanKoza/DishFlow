import { FadeUp, SplitHeading } from './AnimationHelpers'

// Nagłówek sekcji: tytuł po lewej, krótki opis po prawej
export default function SectionHead({ label, title, children, dark = false }) {
  return (
    <div className="mb-14 grid items-end gap-6 lg:mb-20 lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-span-7">
        <FadeUp as="p" className={`mb-4 text-sm font-semibold ${dark ? 'text-yolk' : 'text-brand'}`}>
          {label}
        </FadeUp>
        <SplitHeading text={title} className="display text-5xl sm:text-6xl lg:text-7xl" />
      </div>
      {children && (
        <FadeUp
          delay={0.15}
          className={`text-lg leading-relaxed lg:col-span-4 lg:col-start-9 ${dark ? 'text-white/65' : 'text-ink/65'}`}
        >
          {children}
        </FadeUp>
      )}
    </div>
  )
}
