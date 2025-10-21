import HeroSection from '../components/HeroSection'
import WelcomeSection from '../components/WelcomeSection'
import TransportationModesSection from '../components/TransportationModesSection'
import QuoteForm from '../components/QuoteForm'
import ServicesSection from '../components/ServicesSection'
import HowItWorksSection from '../components/HowItWorksSection'
import TestimonialsSection from '../components/TestimonialsSection'
import GalleryPreview from '../components/GalleryPreview'
import FAQSection from '../components/FAQSection'
import ContactSection from '../components/ContactSection'

const HomePage = () => {
  return (
    <>
      {/* Hero Section - Full Height */}
      <section id="home">
        <HeroSection />
      </section>
      
      {/* Floating Quote Form */}
      <QuoteForm />

      {/* Welcome Section with Videos */}
      <WelcomeSection />
      
      {/* Transportation Modes Section */}
      <TransportationModesSection />

      {/* Services Section */}
      <ServicesSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Gallery Preview */}
      <GalleryPreview />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Contact Section */}
      <ContactSection />
    </>
  );
};

export default HomePage;

