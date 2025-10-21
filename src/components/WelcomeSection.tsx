import { motion } from 'framer-motion';

const WelcomeSection = () => {
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

    const videoVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut" as const,
            },
        },
    };

    return (
        <section className="py-16 md:py-24 bg-gray-50">
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
                            <span className="text-2xl">👋</span>
                            About Us
                        </motion.div>
                        
                        <motion.h2
                            variants={itemVariants}
                            className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-6"
                        >
                            <span className="text-blue-700">Welcome to</span> <span className="text-yellow-500">DSR Logistics</span>
                        </motion.h2>
                        
                        <motion.p
                            variants={itemVariants}
                            className="text-base sm:text-lg md:text-xl text-gray-700 mx-auto leading-relaxed px-4 sm:px-8 md:px-16 lg:px-24"
                        >
                            Your trusted partner for seamless moving and logistics solutions with excellence in every delivery.
                        </motion.p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Side - Text Content */}
                        <motion.div variants={itemVariants} className="space-y-8">


                            {/* Description */}
                            <motion.p
                                variants={itemVariants}
                                className="text-base sm:text-lg text-gray-700 leading-relaxed"
                            >
                                We are a leading provider of packing and moving services, known for excellent services,
                                and a trusted name in the logistics segment, offering world-class relocation assistance
                                to corporate, industrial, and residential clients.
                            </motion.p>

                        {/* Features List */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <span className="text-gray-700 font-medium">Professional Packing & Moving Services</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <span className="text-gray-700 font-medium">International Shipping Solutions</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <span className="text-gray-700 font-medium">Corporate & Residential Relocation</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <span className="text-gray-700 font-medium">24/7 Customer Support</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Video */}
                    <motion.div
                        variants={videoVariants}
                        className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                    >
                        <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                            <video
                                className="w-full h-full object-cover transition-transform duration-300"
                                controls
                                autoPlay
                                loop
                                muted
                                playsInline
                                poster="/three.mp4"
                            >
                                <source src="/three.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="font-semibold text-xl">Our Professional Moving Services</h3>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            </div>
        </section>
    );
};

export default WelcomeSection;
