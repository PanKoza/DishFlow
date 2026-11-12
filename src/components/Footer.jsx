import { PhoneIcon } from './Icons'

const navLinks = [
  { label: 'O nas', href: '#o-nas' },
  { label: 'Funkcje', href: '#funkcje' },
  { label: 'Cennik', href: '#cennik' },
  { label: 'Aplikacja', href: '#aplikacja' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Footer() {
  return (
    <footer className="bg-ink py-16 text-white/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="display text-4xl text-white">
              Dish<span className="text-yolk">Flow</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Nowoczesny, tani system POS i KDS dla polskich restauracji.
            </p>
            <a
              href="tel:+48660957202"
              className="mt-5 flex w-fit items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-yolk"
            >
              <PhoneIcon className="h-4 w-4" />
              660 957 202
            </a>
            <a
              href="tel:+48883821301"
              className="mt-2 flex w-fit items-center gap-2 text-sm transition-colors hover:text-yolk"
            >
              <PhoneIcon className="h-4 w-4" />
              883 821 301 <span className="text-xs text-white/45">(strony www)</span>
            </a>
          </div>

          <nav className="md:col-span-3" aria-label="Stopka">
            <p className="mb-4 text-sm font-semibold text-white">Nawigacja</p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Słowa kluczowe SEO w czytelnej formie */}
          <div className="md:col-span-4">
            <p className="mb-4 text-sm font-semibold text-white">System POS dla restauracji</p>
            <ul className="space-y-1.5 text-xs">
              <li>Tani system POS Polska</li>
              <li>System KDS dla kuchni</li>
              <li>Menu TV dla restauracji</li>
              <li>Strona internetowa dla restauracji</li>
              <li>System rezerwacji stolików online</li>
              <li>System zamówień gastronomia</li>
              <li>Oprogramowanie POS SaaS</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>&copy; {new Date().getFullYear()} DishFlow. Wszelkie prawa zastrzeżone.</p>
          <p>
            Witryna stworzona przez{' '}
            <a
              href="https://webgoat.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-yolk"
            >
              webgoat.pl
            </a>
          </p>
          <p>Polska lokalna inicjatywa</p>
        </div>
      </div>
    </footer>
  )
}
