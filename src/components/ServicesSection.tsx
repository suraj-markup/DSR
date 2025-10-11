import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Home, 
  Building2, 
  Warehouse, 
  Globe, 
  Package, 
  Truck,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

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
      icon: Home,
      featured: true,
      features: ['Professional Packing', 'Furniture Protection', 'Insurance Coverage'],
      color: 'from-blue-500 to-blue-600',
      iconColor: 'text-blue-500',
    },
    {
      id: 2,
      title: 'Commercial Relocation',
      description: 'Office and business moving solutions with minimal downtime.',
      icon: Building2,
      featured: false,
      features: ['Business Hours Moving', 'IT Equipment Handling', 'Document Security'],
      color: 'from-green-500 to-green-600',
      iconColor: 'text-green-500',
    },
    {
      id: 3,
      title: 'Storage Solutions',
      description: 'Secure, climate-controlled storage facilities for your belongings.',
      icon: Warehouse,
      featured: false,
      features: ['Climate Controlled', '24/7 Security', 'Easy Access'],
      color: 'from-purple-500 to-purple-600',
      iconColor: 'text-purple-500',
    },
    {
      id: 4,
      title: 'International Shipping',
      description: 'Global logistics and customs clearance for international moves.',
      icon: Globe,
      featured: false,
      features: ['Customs Clearance', 'Documentation', 'Global Network'],
      color: 'from-orange-500 to-orange-600',
      iconColor: 'text-orange-500',
    },
    {
      id: 5,
      title: 'Packing Services',
      description: 'Professional packing with premium materials and expert techniques.',
      icon: Package,
      featured: false,
      features: ['Premium Materials', 'Expert Techniques', 'Labeled Boxes'],
      color: 'from-pink-500 to-pink-600',
      iconColor: 'text-pink-500',
    },
    {
      id: 6,
      title: 'Vehicle Transport',
      description: 'Safe and reliable car, motorcycle, and boat transportation.',
      icon: Truck,
      featured: false,
      features: ['Enclosed Transport', 'Insurance Coverage', 'Door-to-Door'],
      color: 'from-indigo-500 to-indigo-600',
      iconColor: 'text-indigo-500',
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

  const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
    const Icon = service.icon;
    
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ 
          scale: service.featured ? 1.02 : 1.05,
          y: -10,
          transition: { duration: 0.3 }
        }}
        className={`
          group relative overflow-hidden rounded-2xl p-6 cursor-pointer
          ${service.featured 
            ? 'col-span-2 row-span-2 bg-gradient-to-br from-primary to-secondary text-white' 
            : 'bg-white border border-gray-200 hover:border-gray-300'
          }
          shadow-lg hover:shadow-2xl transition-all duration-300
        `}
      >
        {/* Background Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className={`
            inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4
            ${service.featured 
              ? 'bg-white/20' 
              : `bg-gradient-to-br ${service.color}`
            }
          `}>
            <Icon className="w-6 h-6 text-white" />
          </div>

          {/* Title */}
          <h3 className={`
            font-display font-semibold mb-3
            ${service.featured ? 'text-2xl text-white' : 'text-xl text-gray-900'}
          `}>
            {service.title}
          </h3>

          {/* Description */}
          <p className={`
            mb-4 leading-relaxed
            ${service.featured 
              ? 'text-white/90 text-lg' 
              : 'text-gray-700'}
          `}>
            {service.description}
          </p>

          {/* Features List */}
          <ul className="space-y-2 mb-6">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm">
                <CheckCircle className={`
                  w-4 h-4 flex-shrink-0
                  ${service.featured ? 'text-white/80' : service.iconColor}
                `} />
                <span className={service.featured ? 'text-white/90' : 'text-gray-700'}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <motion.button
            whileHover={{ x: 5 }}
            className={`
              inline-flex items-center gap-2 font-medium transition-all duration-200
              ${service.featured 
                ? 'text-white hover:text-white/80' 
                : 'text-primary hover:text-accent'
              }
            `}
          >
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 opacity-10">
          <div className={`
            w-20 h-20 rounded-full
            ${service.featured ? 'bg-white' : `bg-gradient-to-br ${service.color}`}
          `} />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent/10 to-orange-100 rounded-full text-accent font-medium text-sm mb-6"
            >
              <Package className="w-4 h-4" />
              What We Offer
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6"
            >
              Expert Logistics Services
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            >
              From residential moves to international shipping, we provide comprehensive logistics solutions 
              tailored to your specific needs with professional expertise and modern technology.
            </motion.p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px]">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              <span>Get Custom Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
            
            <p className="text-sm text-gray-500 mt-4">
              Free consultation • No hidden fees • 24/7 support
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
