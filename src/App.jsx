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

export default function App() {
  return (
    <div className="bg-white text-gray-900 antialiased" style={{ fontFamily: "'Sora', system-ui, sans-serif" }}>
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
    </div>
  )
}
