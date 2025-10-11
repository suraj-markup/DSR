import { motion } from 'framer-motion';
import { Play, ArrowDown } from 'lucide-react';

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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-primary">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-contain"
        >
          {/* <source src="/two.mp4" type="video/mp4" /> */}
          <source src="/three.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40" />
        
        {/* Animated Gradient Mesh Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/20 animate-pulse" style={{ animationDuration: '4s' }} />
      </div>

      {/* Subtle Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" as const }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" as const }}
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Trust Badge */}
          <motion.div
            variants={badgeVariants}
            className="inline-flex items-center gap-2 px-5 py-3 bg-white/15 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-semibold mb-8 shadow-lg"
          >
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
            Trusted by 5000+ Customers
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
          >
            Seamless Moving,
            <br />
            <span className="bg-gradient-to-r from-accent via-orange-400 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
              Stress-Free Solutions
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto leading-relaxed font-medium"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            Professional logistics and moving services that make your relocation effortless. 
            From residential moves to international shipping, we've got you covered.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(247, 148, 29, 0.6)'
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-accent to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-glow transition-all duration-300"
            >
              <span className="relative z-10">Get a Free Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 1)'
              }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 bg-white text-primary border-2 border-white font-semibold rounded-full hover:shadow-xl transition-all duration-300"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 fill-current" />
              Watch How It Works
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-white"
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <span className="text-sm font-semibold">4.9/5 from 1000+ reviews</span>
            </div>
            
            <div className="hidden sm:block w-px h-8 bg-white/30" />
            
            <div className="text-base bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="font-bold text-accent">10+</span> <span className="font-medium">Years Experience</span>
            </div>
            
            <div className="hidden sm:block w-px h-8 bg-white/30" />
            
            <div className="text-base bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="font-bold text-accent">98%</span> <span className="font-medium">Customer Satisfaction</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

     
    </section>
  );
};

export default HeroSection;
