import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ShieldQuestionIcon } from 'lucide-react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import oneImage from '../assets/one.webp';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: 'Why should I choose DSR Logistics?',
    answer:
      'DSR Logistics offers unparalleled expertise with over 10 years in the industry. We provide end-to-end logistics solutions with real-time tracking, dedicated customer support, and a 98% on-time delivery rate. Our team handles everything from residential moves to international shipping with care and professionalism.',
  },
  {
    id: 2,
    question: 'What areas do you service?',
    answer:
      'We service over 50+ cities across the country and offer international shipping to major destinations worldwide. Our extensive network ensures your items reach their destination safely and efficiently, whether it\'s across town or across the globe.',
  },
  {
    id: 3,
    question: 'How much does shipping cost?',
    answer:
      'Shipping costs vary based on distance, package size, weight, and service type. We offer transparent pricing with no hidden fees. Request a free quote through our online form, and we\'ll provide a detailed breakdown within 24 hours. We also offer bulk discounts for corporate clients.',
  },
  {
    id: 4,
    question: 'Do you handle fragile and valuable items?',
    answer:
      'Yes, we specialize in handling fragile and high-value items. Our team uses premium packaging materials and specialized equipment to ensure safe transport. We offer additional insurance coverage for valuable items and provide detailed tracking throughout the entire journey.',
  },
  {
    id: 5,
    question: 'What is your typical delivery timeframe?',
    answer:
      'Delivery times depend on the distance and service selected. Local moves typically complete within 1-2 days, domestic shipping takes 3-7 business days, and international shipping ranges from 7-14 days. We offer expedited services for urgent shipments. You\'ll receive real-time tracking updates throughout the entire process.',
  },
];

const FAQAccordionItem = ({ faq, isOpen, onToggle }: { faq: FAQItem; isOpen: boolean; onToggle: () => void }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-4 sm:py-6 flex items-center justify-between text-left group hover:opacity-70 transition-opacity duration-200"
      >
        <span className={`text-base sm:text-lg md:text-xl font-normal pr-6 sm:pr-8 transition-colors duration-200 ${
          isOpen ? 'text-orange-600' : 'text-gray-900'
        }`}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-shrink-0"
        >
          <Plus className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-200 ${
            isOpen ? 'text-orange-600' : 'text-gray-900'
          }`} strokeWidth={1.5} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-4 sm:pb-6 pl-2 sm:pl-4 pr-2">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-20 lg:py-28 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
          {/* Left Column - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-1 mb-8 lg:mb-0"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-orange-100 rounded-full text-blue-700 font-medium text-xs sm:text-sm mb-4 sm:mb-6">
              <ShieldQuestionIcon className="w-4 h-4" /> 
              FAQs
            </div>

            {/* Main Heading */}
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6">
              <span className="text-blue-700">Frequently Asked</span> <span className='text-yellow-500'>Questions</span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              Find answers to common questions about our services, pricing, and delivery process.
            </p>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <img
                src={oneImage}
                alt="FAQ Illustration"
                className="w-full max-w-sm sm:max-w-md rounded-xl sm:rounded-2xl shadow-lg"
              />
            </motion.div>
          </motion.div>

          {/* Right Column - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-0 mt-6 sm:mt-10 "
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <FAQAccordionItem
                  faq={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => toggleFAQ(faq.id)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-40 right-20 w-48 h-48 sm:w-64 sm:h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-20 w-48 h-48 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default FAQSection;

