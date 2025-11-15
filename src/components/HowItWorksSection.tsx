import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MessageSquare, 
  Calendar, 
  CheckCircle,
  Clock,
  Shield,
  Truck
} from 'lucide-react';

const HowItWorksSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Request a Quote',
      description: 'Fill out our simple form or call us for a free, no-obligation quote. We\'ll gather details about your move.',
      icon: MessageSquare,
      details: ['Free consultation', 'Custom pricing', 'No hidden fees'],
      color: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-500',
    },
    {
      id: 2,
      number: '02',
      title: 'Schedule Your Move',
      description: 'Choose your preferred date and time. Our team will coordinate everything for a smooth moving day.',
      icon: Calendar,
      details: ['Flexible scheduling', 'Same-day available', 'Weekend moves'],
      color: 'from-green-500 to-green-600',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-500',
    },
    {
      id: 3,
      number: '03',
      title: 'Relax & Move',
      description: 'Sit back and relax while our professional team handles everything with care and efficiency.',
      icon: CheckCircle,
      details: ['Professional handling', 'Insurance coverage', 'Real-time updates'],
      color: 'from-accent to-orange-500',
      iconBg: 'bg-orange-100',
      iconColor: 'text-accent',
    },
  ];

  const features = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer service',
      image: '/steps/support.jpg',
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Complete protection for your belongings',
      image: '/steps/insurance.jpg',
    },
    {
      icon: Truck,
      title: 'Modern Fleet',
      description: 'Well-maintained vehicles and equipment',
      image: '/steps/fleet.jpg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        ease: 'easeOut' as const,
      },
    },
  };


  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-8">
          <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-orange-100 rounded-full text-blue-700 font-medium text-xs sm:text-sm mb-4"
            >
              <CheckCircle className="w-4 h-4" />
              Simple Process
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6"
            >
              <span className="text-blue-700">How It Works- In </span> <span className='text-yellow-500'>3 Easy Steps</span>
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-700 mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32"
            >
              Our streamlined process ensures your move is stress-free from start to finish. 
              We handle all the details so you can focus on what matters most.
            </motion.p>
          </div>

          {/* Simple Timeline */}
          <div className="relative mb-8">
            {/* Desktop Timeline */}
            <div className="hidden lg:block">
              <div className="relative flex items-center justify-between px-4 lg:px-8 py-8 lg:py-12">
                {/* Connecting Line - positioned behind content */}
                <div className="absolute top-20 lg:top-24 left-16 lg:left-20 right-16 lg:right-20 h-0.5 bg-orange-300 transform -translate-y-1/2 z-0" />
                
                {/* Timeline Steps */}
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  
                  return (
                    <motion.div
                      key={step.id}
                      className="flex flex-col items-center text-center max-w-xs relative z-10"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      {/* Step Number Circle */}
                      <div className="relative z-20 flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full mb-4 lg:mb-6 border-2 border-gray-500 bg-white">
                        <span className="text-lg lg:text-xl font-bold text-gray-600">
                          {index + 1}
                        </span>
                        
                        {/* Icon overlay */}
                        <div className="absolute -top-2 -right-2 w-5 h-5 lg:w-8 lg:h-8 bg-blue-500 rounded-full border border-blue-600 flex items-center justify-center">
                          <Icon className="w-3 lg:w-5 h-3 lg:h-5 text-white" />
                        </div>
                      </div>

                      {/* Step Content */}
                      <div className="bg-white relative z-10 px-2">
                        <h3 className="font-display font-bold text-lg lg:text-xl mb-2 lg:mb-3 text-gray-900">
                          {step.title}
                        </h3>
                        
                        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-6 md:space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                
                return (
                  <motion.div
                    key={step.id}
                    className="flex items-start gap-4 sm:gap-6"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {/* Step Number Circle */}
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-600 bg-blue-500 relative">
                      <span className="text-base sm:text-lg font-bold text-gray-600">
                        {index + 1}
                      </span>
                      
                      {/* Icon overlay */}
                      <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full border border-blue-600 flex items-center justify-center">
                        <Icon className="w-3 h-3 sm:w-3 sm:h-3 text-white" />
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-base sm:text-lg mb-2 text-gray-900">
                        {step.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative overflow-hidden rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 bg-white h-[400px] sm:h-[450px] md:h-[500px]"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Fade-out Gradient Overlay - stronger at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90" />
                  </div>
                  
                  {/* Content - Positioned at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-6 text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 mb-3 sm:mb-4 backdrop-blur-sm">
                      <Icon className="w-5 h-5 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-base sm:text-xl text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
