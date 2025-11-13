import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { 
  CheckCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const services = [
    {
      id: 1,
      title: 'Residential Moving',
      description: 'Complete home relocation services with professional packing, loading, and delivery.',
      image: '/general/residential.jpeg',
      features: ['Professional Packing', 'Furniture Protection', 'Insurance Coverage'],
      bgColor: 'bg-blue-500',
      iconColor: 'text-blue-500',
    },
    {
      id: 2,
      title: 'Commercial Relocation',
      description: 'Office and business moving solutions with minimal downtime.',
      image: '/general/coorporate.jpeg',
      features: ['Business Hours Moving', 'IT Equipment Handling', 'Document Security'],
      bgColor: 'bg-green-500',
      iconColor: 'text-green-500',
    },
    {
      id: 3,
      title: 'Storage Solutions',
      description: 'Secure, climate-controlled storage facilities for your belongings.',
      image: '/general/storage.jpeg',
      features: ['Climate Controlled', '24/7 Security', 'Easy Access'],
      bgColor: 'bg-purple-500',
      iconColor: 'text-purple-500',
    },
    {
      id: 4,
      title: 'International Shipping',
      description: 'Global shipping solutions for overseas moves and international deliveries.',
      image: '/general/international.jpeg',
      features: ['Customs Handling', 'International Network', 'Door-to-Door Service'],
      bgColor: 'bg-orange-500',
      iconColor: 'text-orange-500',
    },
    {
      id: 5,
      title: 'Packing Services',
      description: 'Professional packing with premium materials and expert techniques.',
      image: '/general/packing.jpeg',
      features: ['Premium Materials', 'Expert Techniques', 'Labeled Boxes'],
      bgColor: 'bg-pink-500',
      iconColor: 'text-pink-500',
    },
    {
      id: 6,
      title: 'Vehicle Transport',
      description: 'Safe and reliable car, motorcycle, and boat transportation.',
      image: '/general/car.jpeg',
      features: ['Enclosed Transport', 'Insurance Coverage', 'Door-to-Door'],
      bgColor: 'bg-indigo-500',
      iconColor: 'text-indigo-500',
    },
  ];

  const maxIndex = services.length - cardsPerView;

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(3); // Desktop: 3 cards
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Swipe handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < maxIndex) {
      handleNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      handlePrev();
    }
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const ServiceCard = ({ service }: { service: typeof services[0] }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-[500px] sm:h-[550px] md:h-[580px]"
      >
        <div className="relative h-full bg-white rounded-xl md:rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
          {/* Service Image */}
          <div className="relative h-[240px] sm:h-[260px] md:h-[300px] overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-fit group-hover:scale-105 transition-transform duration-300"
            />
            
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 flex flex-col justify-between h-[260px] sm:h-[290px]">
            {/* Title */}
            <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-3">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed flex-grow">
              {service.description}
            </p>

            {/* Features List */}
            <ul className="space-y-2 sm:space-y-3">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${service.iconColor}`} />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="max-w-8xl mx-auto"
            >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-orange-100 rounded-full text-blue-700 font-medium text-xs sm:text-sm mb-4 sm:mb-6"
            >
              <CheckCircle className="w-4 h-4" />
              What We Offer
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6"
            >
              <span className="text-blue-700">Expert Logistics</span> <span className='text-yellow-500'>Services</span>
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-700 mx-auto leading-relaxed px-4 sm:px-8 md:px-16 lg:px-24"
            >
              From residential moves to international shipping, we provide comprehensive logistics solutions 
              tailored to your specific needs with professional expertise and modern technology.
            </motion.p>
          </div>

          {/* Services Carousel */}
          <div className="relative">
            {/* Services Slider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <motion.div
                className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing"
                animate={{
                  x: `-${currentIndex * (cardsPerView === 1 ? 280 : cardsPerView === 2 ? 320 : 360) + (cardsPerView === 1 ? 16 : cardsPerView === 2 ? 24 : 24)}px`,
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Navigation Arrows */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-12"
            >
              {/* Previous Button */}
              <motion.button
                whileHover={{ scale: currentIndex === 0 ? 1 : 1.1 }}
                whileTap={{ scale: currentIndex === 0 ? 1 : 0.95 }}
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  currentIndex === 0
                    ? 'border-gray-300 text-gray-300 cursor-not-allowed bg-white'
                    : 'bg-accent text-gray-700 border-accent shadow-lg hover:shadow-xl'
                }`}
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>

              {/* Next Button */}
              <motion.button
                whileHover={{ scale: currentIndex >= maxIndex ? 1 : 1.1 }}
                whileTap={{ scale: currentIndex >= maxIndex ? 1 : 0.95 }}
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                  currentIndex >= maxIndex
                    ? 'bg-gray-300 border-gray-300 text-gray-400 cursor-not-allowed'
                    : 'bg-accent text-gray-700 border-accent shadow-lg hover:shadow-xl'
                }`}
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
