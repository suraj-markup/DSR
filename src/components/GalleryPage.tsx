import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const GalleryPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  // All gallery images from both folders
  const allImages = [
    // Gallery folder images
    { id: 1, src: '/gallery/home.jpeg', alt: 'Home Moving Service', },
    { id: 2, src: '/gallery/packing.jpeg', alt: 'Professional Packing', },
    { id: 3, src: '/gallery/coorporate.jpeg', alt: 'Corporate Relocation',  },
    { id: 4, src: '/gallery/transport.jpeg', alt: 'Vehicle Transport', },
    { id: 5, src: '/gallery/packing2.jpeg', alt: 'Packing Materials', },
    { id: 6, src: '/gallery/home1.jpeg', alt: 'Home Organization',  },
    { id: 7, src: '/gallery/WhatsApp Image 2025-10-16 at 8.50.26 PM.jpeg', alt: 'Moving Process',  },
    { id: 8, src: '/gallery/WhatsApp Image 2025-10-16 at 8.50.27 PM (1).jpeg', alt: 'Professional Team', },
    { id: 9, src: '/gallery/WhatsApp Image 2025-10-16 at 8.50.28 PM (1).jpeg', alt: 'Loading Service', },
    { id: 10, src: '/gallery/WhatsApp Image 2025-10-16 at 8.50.29 PM.jpeg', alt: 'Delivery Service', },
    { id: 11, src: '/gallery/WhatsApp Image 2025-10-16 at 8.50.21 PM.jpeg', alt: 'Storage Solutions', },
    { id: 12, src: '/gallery/WhatsApp Image 2025-10-16 at 8.50.25 PM.jpeg', alt: 'Careful Handling', },
    { id: 13, src: '/gallery/WhatsApp Image 2025-10-16 at 8.50.24 PM.jpeg', alt: 'Moving Equipment', },
    { id: 14, src: '/gallery/WhatsApp Image 2025-10-16 at 8.50.25 PM (1).jpeg', alt: 'Team Coordination', },
    { id: 15, src: '/gallery/WhatsApp Image 2025-10-16 at 8.50.26 PM (1).jpeg', alt: 'Safe Transport', },
    { id: 16, src: '/gallery/WhatsApp Image 2025-10-16 at 8.50.27 PM (2).jpeg', alt: 'Efficient Service', },
    { id: 17, src: '/gallery/WhatsApp Image 2025-10-16 at 8.50.29 PM (1).jpeg', alt: 'Quality Service', },
    
    // General folder images - properly named
    { id: 18, src: '/general/residential.jpeg', alt: 'Residential Moving',  },
    { id: 19, src: '/general/coorporate.jpeg', alt: 'Corporate Moving',  },
    { id: 20, src: '/general/international.jpeg', alt: 'International Shipping',  },
    { id: 21, src: '/general/packing.jpeg', alt: 'Packing Services',  },
    { id: 22, src: '/general/storage.jpeg', alt: 'Storage Solutions',  },
    { id: 23, src: '/general/car.jpeg', alt: 'Vehicle Transport',  },
    
    // General folder - WhatsApp images
    { id: 24, src: '/general/WhatsApp Image 2025-10-13 at 11.52.29 PM.jpeg', alt: 'Moving Service',  },
    { id: 25, src: '/general/WhatsApp Image 2025-10-13 at 11.52.29 PM (2).jpeg', alt: 'Professional Service',  },
    { id: 26, src: '/general/WhatsApp Image 2025-10-13 at 11.52.30 PM.jpeg', alt: 'Loading Process',  },
    { id: 27, src: '/general/WhatsApp Image 2025-10-13 at 11.52.30 PM (1).jpeg', alt: 'Transport Service',  },
    { id: 28, src: '/general/WhatsApp Image 2025-10-13 at 11.52.30 PM (2).jpeg', alt: 'Delivery Service',  },
    { id: 29, src: '/general/WhatsApp Image 2025-10-13 at 11.52.30 PM (3).jpeg', alt: 'Moving Team',  },
    { id: 30, src: '/general/WhatsApp Image 2025-10-13 at 11.52.31 PM.jpeg', alt: 'Packing Process',  },
    { id: 31, src: '/general/WhatsApp Image 2025-10-13 at 11.52.32 PM.jpeg', alt: 'Safe Handling',  },
    { id: 32, src: '/general/WhatsApp Image 2025-10-13 at 11.52.33 PM.jpeg', alt: 'Quality Service',  },
    { id: 33, src: '/general/WhatsApp Image 2025-10-13 at 11.52.33 PM (1).jpeg', alt: 'Professional Moving',  },
  ];

  const handlePrevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImage !== null && selectedImage < allImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevImage();
    if (e.key === 'ArrowRight') handleNextImage();
    if (e.key === 'Escape') setSelectedImage(null);
  };

  return (
    <section id="gallery-page" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-8xl mx-auto"
        >
          {/* Page Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-orange-100 rounded-full text-blue-700 font-medium text-xs sm:text-sm mb-4 sm:mb-6"
            >
              <ImageIcon className="w-4 h-4" />
              Complete Gallery
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 sm:mb-6"
            >
              <span className="text-blue-700">Our Work</span> <span className="text-yellow-500">Gallery</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-700 mx-auto leading-relaxed px-4 sm:px-8 md:px-16 lg:px-24 mb-4"
            >
              Browse through our complete collection of successful moves and satisfied customers.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-blue-700 font-semibold"
            >
              {allImages.length} Photos
            </motion.p>
          </div>

          {/* Masonry Grid Gallery */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
          >
            {allImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl cursor-pointer bg-gray-100"
                onClick={() => setSelectedImage(index)}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            onKeyDown={handleKeyPress}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold text-sm">
              {selectedImage + 1} / {allImages.length}
            </div>

            {/* Previous Button */}
            {selectedImage > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className="absolute left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next Button */}
            {selectedImage < allImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="absolute right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Main Image */}
            <motion.div
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={allImages[selectedImage].src}
                alt={allImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryPage;

