const navLinks = [
  { label: 'O nas', href: '#o-nas' },
  { label: 'Funkcje', href: '#funkcje' },
  { label: 'Cennik', href: '#cennik' },
  { label: 'Aplikacja', href: '#aplikacja' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          {/* Brand */}
          <div>
            <span className="text-2xl font-black bg-gradient-to-r from-[#9B5CFF] to-[#6300FF] bg-clip-text text-transparent">
              DishFlow
            </span>
            <p className="mt-2 text-sm max-w-xs leading-relaxed">
              Nowoczesny, tani system POS i KDS dla polskich restauracji.
            </p>
            <a href="tel:+48660957202" className="inline-flex items-center gap-2 mt-3 text-white font-semibold hover:text-[#9B5CFF] transition-colors text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              660 957 202
            </a>
            <a href="tel:+48883821301" className="inline-flex items-center gap-2 mt-2 text-gray-400 hover:text-[#9B5CFF] transition-colors text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              883 821 301 <span className="text-gray-500 text-xs">(strony www)</span>
            </a>
          </div>

          {/* Nav */}
          <nav>
            <p className="text-white font-semibold text-sm mb-3">Nawigacja</p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Keywords for SEO in human-readable form */}
          <div>
            <p className="text-white font-semibold text-sm mb-3">System POS dla restauracji</p>
            <ul className="space-y-1 text-xs">
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

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
          <p>&copy; {new Date().getFullYear()} DishFlow. Wszelkie prawa zastrzeżone.</p>
          <p className="text-gray-500">
            Witryna stworzona przez{' '}
            <a href="https://webgoat.pl" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#9B5CFF] transition-colors underline underline-offset-2">
              webgoat.pl
            </a>
          </p>
          <p>Polska lokalna inicjatywa 🇵🇱</p>
        </div>
      </div>
    </footer>
  )
}
