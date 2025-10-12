import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CheckCircle
} from 'lucide-react';

// Import service videos
import residentialVideo from '../assets/service/Residential Moving mp4.mp4';
import commercialVideo from '../assets/service/Commercial Relocation.mp4';
import storageVideo from '../assets/service/Logistics.mp4';
import internationalVideo from '../assets/service/International.mp4';
import packingVideo from '../assets/service/packig service.mp4';
import vehicleVideo from '../assets/service/vehicle transport.mp4';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: 1,
      title: 'Residential Moving',
      description: 'Complete home relocation services with professional packing, loading, and delivery.',
      video: residentialVideo,
      features: ['Professional Packing', 'Furniture Protection', 'Insurance Coverage'],
      bgColor: 'bg-blue-500',
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-100',
    },
    {
      id: 2,
      title: 'Commercial Relocation',
      description: 'Office and business moving solutions with minimal downtime.',
      video: commercialVideo,
      features: ['Business Hours Moving', 'IT Equipment Handling', 'Document Security'],
      bgColor: 'bg-green-500',
      iconColor: 'text-green-500',
      iconBg: 'bg-green-100',
    },
    {
      id: 3,
      title: 'Storage Solutions',
      description: 'Secure, climate-controlled storage facilities for your belongings.',
      video: storageVideo,
      features: ['Climate Controlled', '24/7 Security', 'Easy Access'],
      bgColor: 'bg-purple-500',
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-100',
    },
    {
      id: 4,
      title: 'International Shipping',
      description: 'Global logistics and customs clearance for international moves.',
      video: internationalVideo,
      features: ['Customs Clearance', 'Documentation', 'Global Network'],
      bgColor: 'bg-orange-500',
      iconColor: 'text-orange-500',
      iconBg: 'bg-orange-100',
    },
    {
      id: 5,
      title: 'Packing Services',
      description: 'Professional packing with premium materials and expert techniques.',
      video: packingVideo,
      features: ['Premium Materials', 'Expert Techniques', 'Labeled Boxes'],
      bgColor: 'bg-pink-500',
      iconColor: 'text-pink-500',
      iconBg: 'bg-pink-100',
    },
    {
      id: 6,
      title: 'Vehicle Transport',
      description: 'Safe and reliable car, motorcycle, and boat transportation.',
      video: vehicleVideo,
      features: ['Enclosed Transport', 'Insurance Coverage', 'Door-to-Door'],
      bgColor: 'bg-indigo-500',
      iconColor: 'text-indigo-500',
      iconBg: 'bg-indigo-100',
    },
  ];

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
        variants={itemVariants}
        whileHover={{ 
          scale: 1.02,
          y: -5,
          transition: { duration: 0.3 }
        }}
        className="group relative overflow-hidden rounded-xl md:rounded-2xl p-4 sm:p-6 cursor-pointer bg-white border-2 border-gray-200 hover:border-accent/50 shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Large Video Section */}
          <div className="w-full h-48 sm:h-56 md:h-64 rounded-lg md:rounded-xl overflow-hidden mb-4 sm:mb-6 bg-gray-100">
            <video
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={service.video} type="video/mp4" />
            </video>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
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

        {/* Decorative blur element */}
        <div className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-full ${service.bgColor} opacity-5 blur-2xl pointer-events-none`} />
      </motion.div>
    );
  };

  return (
    <section id="services" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-accent/10 to-orange-100 rounded-full text-accent font-medium text-xs sm:text-sm mb-4 sm:mb-6"
            >
              <CheckCircle className="w-4 h-4" />
              What We Offer
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6"
            >
              Expert Logistics Services
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-700 mx-auto leading-relaxed px-4 sm:px-8 md:px-16 lg:px-24"
            >
              From residential moves to international shipping, we provide comprehensive logistics solutions 
              tailored to your specific needs with professional expertise and modern technology.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

      
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
