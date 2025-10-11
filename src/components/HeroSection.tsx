import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };


  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-20">
      {/* Subtle Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" as const }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" as const }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      {/* Two Column Layout */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Trust Badge */}
            <motion.div
              variants={badgeVariants}
              className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-full text-gray-900 text-sm font-semibold mb-8 shadow-lg"
            >
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
              Trusted by 5000+ Customers
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-gray-900 mb-6 leading-tight"
            >
              Seamless Moving,
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-orange-500 bg-clip-text text-transparent">
                Stress-Free Solutions
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
            >
              Professional logistics and moving services that make your relocation effortless. 
              From residential moves to international shipping, we've got you covered.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              {/* Primary CTA */}
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(247, 148, 29, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-accent to-orange-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
              >
                <span className="relative z-10">Get a Free Quote</span>
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-300 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-400 hover:text-white transition-all duration-300"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 fill-current" />
                Watch How It Works
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            >
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-900">4.9/5 from 1000+ reviews</span>
              </div>
              
              <div className="hidden sm:block w-px h-8 bg-gray-300" />
              
              <div className="text-sm text-gray-700">
                <span className="font-bold text-accent text-lg">10+</span> Years Experience
              </div>
              
              <div className="hidden sm:block w-px h-8 bg-gray-300" />
              
              <div className="text-sm text-gray-700">
                <span className="font-bold text-accent text-lg">98%</span> Satisfaction
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:h-[500px] xl:h-[500px] lg:w-[600px] xl:w-[700px]"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-full">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/three.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video Overlay for Better Integration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
            </div>

            {/* Decorative Elements Around Video */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
