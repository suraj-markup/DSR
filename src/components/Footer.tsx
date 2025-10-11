import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import logoImage from '../assets/logo.png';

// Instagram icon component (lucide-react Instagram is deprecated)
const Instagram = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
    </svg>
);

// LinkedIn icon component (lucide-react Linkedin is deprecated)
const Linkedin = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);

const Footer = () => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const currentYear = new Date().getFullYear();

    const footerLinks = {
        services: [
            { name: 'Residential Moving', href: '#services' },
            { name: 'Commercial Moving', href: '#services' },
            { name: 'International Shipping', href: '#services' },
            { name: 'Storage Solutions', href: '#services' },
            { name: 'Packing Services', href: '#services' },
        ],
        company: [
            { name: 'About Us', href: '#about' },
            { name: 'How It Works', href: '#how-it-works' },
            { name: 'Testimonials', href: '#testimonials' },
            { name: 'Contact', href: '#contact' },
            { name: 'FAQ', href: '#faq' },
        ],
        resources: [
            { name: 'Moving Guide', href: '#' },
            { name: 'Track Shipment', href: '#' },
            { name: 'Get a Quote', href: '#' },
            { name: 'Insurance Info', href: '#' },
            { name: 'Blog', href: '#' },
        ],
    };

    const socialLinks = [
        { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
        { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    ];

    return (
        <footer ref={ref} className="relative bg-gradient-to-br from-primary via-accent to-primary pt-1">
            {/* CTA Banner Section */}
            <section className="relative bg-gradient-to-br from-accent via-orange-500 to-primary pt-20 md:pt-28 overflow-hidden">
                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="mx-24 px-4 py-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                            See what DSR Logistics can do for you
                        </h2>
                        <p className="text-xl text-white/90 mb-8 mt-8 ">
                            From local moves to international shipping, we handle every step of your logistics needs with care and precision.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 mt-4"
                        >
                            Get a Free Quote
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.button>
                    </motion.div>
                </div>
                {/* Main Footer Section with Rounded Top */}
                <div className="bg-gray-900 text-white rounded-4xl relative z-10 mx-4 my-4 p-4">
                    <div className="mx-auto py-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                            {/* Company Info - Column 1 */}
                            <div className="lg:col-span-1 ml-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {/* Logo */}
                                    <div className="mb-6">
                                        <img 
                                            src={logoImage} 
                                            alt="DSR Logistics" 
                                            className="h-16 w-auto object-contain"
                                        />
                                    </div>

                                    {/* Follow Us */}
                                    <p className="text-gray-400 text-sm mb-4">Follow us</p>
                                    <div className="flex gap-3">
                                        {socialLinks.map((social) => (
                                            <motion.a
                                                key={social.name}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300"
                                                aria-label={social.name}
                                            >
                                                <social.icon className="w-5 h-5 text-gray-400" />
                                            </motion.a>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Services - Column 2 */}
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                >
                                    <h4 className="text-lg font-bold mb-2">Services</h4>
                                    <ul className="space-y-3">
                                        {footerLinks.services.map((link) => (
                                            <li key={link.name}>
                                                <a
                                                    href={link.href}
                                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                                >
                                                    {link.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>

                            {/* Company - Column 3 */}
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                >
                                    <h4 className="text-lg font-bold mb-4">Company</h4>
                                    <ul className="space-y-3">
                                        {footerLinks.company.map((link) => (
                                            <li key={link.name}>
                                                <a
                                                    href={link.href}
                                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                                >
                                                    {link.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>

                            {/* Resources - Column 4 */}
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4, delay: 0.3 }}
                                >
                                    <h4 className="text-lg font-bold mb-4">Resources</h4>
                                    <ul className="space-y-3">
                                        {footerLinks.resources.map((link) => (
                                            <li key={link.name}>
                                                <a
                                                    href={link.href}
                                                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                                >
                                                    {link.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>

                            {/* Contact Info - Column 5 */}
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4, delay: 0.4 }}
                                >
                                    <h4 className="text-lg font-bold mb-4">Contact</h4>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <Phone className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                            <a
                                                href="tel:+15551234567"
                                                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                            >
                                                +1 (555) 123-4567
                                            </a>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Mail className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                            <a
                                                href="mailto:info@dsrlogistics.com"
                                                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                            >
                                                info@dsrlogistics.com
                                            </a>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-400 text-sm leading-relaxed">
                                                123 Logistics Ave,<br />
                                                Suite 500,<br />
                                                New York, NY 10001
                                            </span>
                                        </li>
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-800">
                        <div className=" mx-auto px-4 py-6">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                <p className="text-gray-400 text-sm">
                                    © {currentYear} DSR Logistics, Inc. All rights reserved.
                                </p>
                                <div className="flex gap-6">
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        Terms & Conditions
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        Privacy Policy
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


        </footer>
    );
};

export default Footer;

