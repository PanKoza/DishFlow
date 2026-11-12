import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Comparison from './components/Comparison'
import Pricing from './components/Pricing'
import WebsiteService from './components/WebsiteService'
import AppScreenshots from './components/AppScreenshots'
import Future from './components/Future'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-paper font-sans text-ink antialiased">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Comparison />
          <Pricing />
          <WebsiteService />
          <AppScreenshots />
          <Future />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </MotionConfig>
  )
}
