import { motion } from 'framer-motion';
import { Truck } from 'lucide-react';

const TransportationModesSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const transportationModes = [
    {
      image: "/land.png",
      title: "BY ROAD TRANSPORTATION",
      description: "Efficient ground transportation for local and domestic deliveries",
    },
    {
      image: "/sea.png",
      title: "BY SEA TRANSPORTATION", 
      description: "Cost-effective international shipping and cargo transport",
    },
    {
      image: "/air.png",
      title: "BY AIR TRANSPORTATION",
      description: "Fast and reliable air freight for urgent shipments",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-8xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-orange-100 rounded-full text-blue-700 font-medium text-xs sm:text-sm mb-4 sm:mb-6"
            >
              <Truck className="w-4 h-4" />
              Transportation Modes
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6"
            >
              <span className="text-blue-700">Multiple Ways</span> <span className='text-yellow-500'>to Ship</span>
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-700 mx-auto leading-relaxed px-4 sm:px-8 md:px-16 lg:px-24"
            >
              Choose from our flexible transportation options tailored to your timeline and budget.
            </motion.p>
          </div>

          {/* Transportation Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {transportationModes.map((mode, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center"
            >
              {/* Image */}
              <div className="flex justify-center mb-6">
                <div className="overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={mode.image} 
                    alt={mode.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-black uppercase tracking-wide mb-4">
                {mode.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {mode.description}
              </p>
            </motion.div>
          ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransportationModesSection;
