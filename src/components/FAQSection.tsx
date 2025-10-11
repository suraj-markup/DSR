import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

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
        className="w-full py-6 flex items-center justify-between text-left group hover:opacity-70 transition-opacity duration-200"
      >
        <span className="text-lg md:text-xl font-normal text-gray-900 pr-8">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-shrink-0"
        >
          <Plus className="w-6 h-6 text-gray-900" strokeWidth={1.5} />
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
            <div className="pb-6 pr-12">
              <p className="text-base text-gray-600 leading-relaxed">
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
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 font-medium mb-6">
              FAQs
            </div>

            {/* Main Heading */}
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Frequently Asked Questions.
            </h2>
          </motion.div>

          {/* Right Column - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-0"
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
      <div className="absolute top-40 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default FAQSection;

