import { motion } from 'framer-motion';
import { CheckCircle, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  rating: number;
  quote: string;
  image: string;
  imageStyle: 'color' | 'bw';
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Brandon Wheels',
    title: 'CFO',
    company: 'Aero Tip',
    rating: 4.8,
    quote: 'We scaled from 5 to 50 monthly trips without hiring a single ops person.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    imageStyle: 'color',
  },
  {
    id: 2,
    name: 'Dr. Drake',
    title: 'CEO',
    company: 'PharmaTech',
    rating: 4.8,
    quote: 'Our European tour was perfectly organized by Prime Travels, from flights to accommodations to local guides. It was truly the trip of a lifetime!',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    imageStyle: 'color',
  },
  {
    id: 3,
    name: 'Lucy Sei',
    title: 'CFO',
    company: 'ElenzaTech',
    rating: 4.8,
    quote: 'Finance now gets automated reports every Friday — no chasing anyone',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    imageStyle: 'bw',
  },
  {
    id: 4,
    name: 'Ivan Zhao',
    title: 'CEO',
    company: 'Notion',
    rating: 4.8,
    quote: 'It was truly the trip of a lifetime without any of the usual stress.',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    imageStyle: 'bw',
  },
  {
    id: 5,
    name: 'Sarah Mitchell',
    title: 'Operations Director',
    company: 'GlobalTech',
    rating: 4.9,
    quote: 'DSR Logistics handled our international office relocation flawlessly. Every detail was taken care of professionally.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    imageStyle: 'color',
  },
  {
    id: 6,
    name: 'Michael Chen',
    title: 'Founder',
    company: 'StartupHub',
    rating: 4.7,
    quote: 'Best moving experience ever! The team was punctual, careful with our equipment, and incredibly efficient.',
    image: 'https://randomuser.me/api/portraits/men/78.jpg',
    imageStyle: 'bw',
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="flex-shrink-0 w-[320px] md:w-[360px] h-[480px] md:h-[500px]"
    >
      <div className="relative h-full bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
        {/* Customer Photo */}
        <div className="relative h-[280px] md:h-[300px] overflow-hidden">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className={`w-full h-full object-cover ${
              testimonial.imageStyle === 'bw' ? 'grayscale' : ''
            } group-hover:scale-105 transition-transform duration-300`}
          />
          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between h-[200px]">
          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-700">
              {testimonial.rating}
            </span>
          </div>

          {/* Quote */}
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
            {testimonial.quote}
          </p>

          {/* Customer Info */}
          <div className="mt-auto">
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-600">
              {testimonial.title}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const cardsPerView = 3; // Number of cards visible at once
  const maxIndex = testimonials.length - cardsPerView;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent/10 to-orange-100 rounded-full text-accent font-medium text-sm mb-6"
            >
              <CheckCircle className="w-4 h-4" />
              Our Wall of Love
            </motion.div>

          {/* Main Heading */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gray-900">How Teams Like Yours </span>
            <span className="text-orange-300">Move Smarter</span>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Testimonials Slider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden"
          >
            <motion.div
              className="flex gap-6 transition-transform duration-500 ease-out"
              animate={{
                x: `-${currentIndex * (360 + 24)}px`, // card width + gap
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: currentIndex === 0 ? 1 : 1.1 }}
              whileTap={{ scale: currentIndex === 0 ? 1 : 0.95 }}
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                currentIndex === 0
                  ? 'border-gray-300 text-gray-300 cursor-not-allowed bg-white'
                  : 'bg-accent text-gray-700 border-accen shadow-lg hover:shadow-xl'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: currentIndex >= maxIndex ? 1 : 1.1 }}
              whileTap={{ scale: currentIndex >= maxIndex ? 1 : 0.95 }}
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                currentIndex >= maxIndex
                  ? 'bg-gray-300 border-gray-300 text-gray-400 cursor-not-allowed'
                  : 'bg-accent text-gray-700 border-accen shadow-lg hover:shadow-xl'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  );
};

export default TestimonialsSection;

