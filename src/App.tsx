
import HeroSection from './components/HeroSection'
import QuoteForm from './components/QuoteForm'
import Header from './components/Header'
import ServicesSection from './components/ServicesSection'
import HowItWorksSection from './components/HowItWorksSection'
import StatsSection from './components/StatsSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      {/* Header Navigation */}
      <Header />
      
      {/* Hero Section - Full Height */}
      <section id="home">
        <HeroSection />
      </section>
      
      {/* Floating Quote Form */}
      <QuoteForm />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
