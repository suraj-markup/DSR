import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MessageSquare, 
  Calendar, 
  CheckCircle,
  ArrowRight,
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
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Complete protection for your belongings',
    },
    {
      icon: Truck,
      title: 'Modern Fleet',
      description: 'Well-maintained vehicles and equipment',
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
        ease: 'easeOut',
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="how-it-works" className="py-20 bg-white">
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full text-primary font-medium text-sm mb-6"
            >
              <CheckCircle className="w-4 h-4" />
              Simple Process
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6"
            >
              How It Works - In 3 Easy Steps
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            >
              Our streamlined process ensures your move is stress-free from start to finish. 
              We handle all the details so you can focus on what matters most.
            </motion.p>
          </div>

          {/* Steps Timeline */}
          <div className="relative mb-16">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2 z-0" />
            
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                
                return (
                  <motion.div
                    key={step.id}
                    variants={stepVariants}
                    className="relative"
                  >
                    {/* Step Card */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                      {/* Step Number */}
                      <div className={`
                        inline-flex items-center justify-center w-16 h-16 rounded-full mb-6
                        bg-gradient-to-r ${step.color} text-white font-display font-bold text-xl
                      `}>
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className={`
                        inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4
                        ${step.iconBg}
                      `}>
                        <Icon className={`w-6 h-6 ${step.iconColor}`} />
                      </div>

                      {/* Content */}
                      <h3 className="font-display font-semibold text-xl text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Details List */}
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Connection Arrow - Mobile */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden flex justify-center mt-6">
                        <ArrowRight className="w-6 h-6 text-gray-400" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-700">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              <span>Start Your Move Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
            
            <p className="text-sm text-gray-500 mt-4">
              Free consultation • No obligation • Get started in minutes
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
