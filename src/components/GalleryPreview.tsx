import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Image as ImageIcon, ArrowRight } from 'lucide-react';

const GalleryPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  // Preview images - showing 8 best images
  const previewImages = [
    { id: 1, src: '/gallery/home.jpeg', alt: 'Home Moving Service' },
    { id: 2, src: '/gallery/packing.jpeg', alt: 'Professional Packing' },
    { id: 3, src: '/gallery/coorporate.jpeg', alt: 'Corporate Relocation' },
    { id: 4, src: '/gallery/transport.jpeg', alt: 'Vehicle Transport' },
    { id: 5, src: '/gallery/home1.jpeg', alt: 'Home Organization' },
    { id: 6, src: '/gallery/packing2.jpeg', alt: 'Packing Materials' },
    { id: 7, src: '/gallery/WhatsApp Image 2025-10-16 at 8.50.26 PM.jpeg', alt: 'Moving Process' },
    { id: 8, src: '/gallery/WhatsApp Image 2025-10-16 at 8.50.21 PM.jpeg', alt: 'Storage Solutions' },
  ];


  return (
    <section id="gallery" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
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
              <ImageIcon className="w-4 h-4" />
              Our Gallery
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6"
            >
              <span className="text-blue-700">See Our Work</span> <span className="text-yellow-500">In Action</span>
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-700 mx-auto leading-relaxed px-4 sm:px-8 md:px-16 lg:px-24"
            >
              A glimpse of our successful moves and satisfied customers across the country.
            </motion.p>
          </div>

          {/* Preview Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 md:mb-12"
          >
            {previewImages.map((image) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl cursor-pointer bg-gray-100 aspect-[4/3]"
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
              </motion.div>
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <Link to="/gallery">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>View Full Gallery</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              See all <span className="font-bold text-blue-700">33 photos</span> of our work
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;

