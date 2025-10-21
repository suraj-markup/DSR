import { motion, useMotionValue, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { TrendingUp } from 'lucide-react';

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  index: number;
}

const StatCard = ({ value, suffix, label, index }: StatCardProps) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return controls.stop;
    }
  }, [inView, count, value]);

  // Alternating vertical positions for wave effect (only on desktop)
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut" as const,
      }}
      className={`relative ${index % 2 === 1 ? 'lg:mt-5' : ''}`}
    >
      {/* Hexagonal Card */}
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 md:p-10 w-full max-w-[280px] sm:max-w-[240px] lg:max-w-[260px] flex flex-col items-center justify-center transition-all duration-300"
        style={{
          clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
          minHeight: '200px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25), 0 10px 20px rgba(0, 0, 0, 0.15)',
        }}
      >
        {/* Colored glow behind card */}
        <div 
          className="absolute inset-0 -z-10 blur-xl opacity-40"
          style={{
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            background: index === 0 ? '#f97316' : index === 1 ? '#fb923c' : index === 2 ? '#fdba74' : '#fed7aa',
          }}
        />
        
        {/* Number */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 sm:mb-3">
          {displayValue.toLocaleString()}{suffix}
        </div>

        {/* Label */}
        <div className="text-xs sm:text-sm md:text-base text-gray-700 font-medium text-center leading-snug px-2">
          {label}
        </div>
      </motion.div>
    </motion.div>
  );
};

const StatsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const stats = [
    { value: 500, suffix: '+', label: 'Happy Customers' },
    { value: 15, suffix: 'k+', label: 'Successful Deliveries' },
    { value: 50, suffix: '+', label: 'Cities Covered' },
    { value: 98, suffix: '%', label: 'On-Time Delivery' },
  ];

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-20 lg:py-28 bg-gradient-to-br from-accent via-orange-500 to-accent overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-orange-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-xs sm:text-sm mb-4 sm:mb-4">
            <TrendingUp className="w-4 h-4" />
            Our Achievements
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6">
            Some Counts <span className="text-blue-200">That Matter</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mx-auto leading-relaxed px-4 sm:px-8 md:px-16 lg:px-24">
            Our achievement in the journey depicted in numbers
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6 items-start justify-items-center">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/10 to-transparent" />
    </section>
  );
};

export default StatsSection;

