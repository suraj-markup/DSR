import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const ContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@dsrlogistics.com',
      link: 'mailto:info@dsrlogistics.com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Logistics Ave, Suite 500, New York, NY 10001',
      link: 'https://maps.google.com',
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon-Fri: 8AM - 6PM, Sat: 9AM - 2PM',
      link: null,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Two Column Layout: Details Left, Form Right */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start relative">
          
          {/* OR Divider - Vertical between columns (Desktop only) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 z-10">
            <div className="w-px h-32 bg-gray-300"></div>
            <div className="bg-white px-4 py-2 rounded-full border-2 border-gray-300">
              <span className="text-gray-600 font-bold text-xl">OR</span>
            </div>
            <div className="w-px h-32 bg-gray-300"></div>
          </div>

          {/* LEFT COLUMN - Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Header Section */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent/10 to-orange-100 rounded-full text-sm font-semibold mb-6 shadow-lg">
                <Send className="w-4 h-4" />
                Get In Touch 
              </div>

              {/* Main Heading */}
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Let's Get Your Shipment Moving
              </h2>

              {/* Subheading */}
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Get in touch with our team for quotes, inquiries, or support. We're here to help with all your logistics needs.
              </p>
            </div>

            {/* Contact Methods - Vertical Stack */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  {item.link ? (
                    <a
                      href={item.link}
                      target={item.icon === MapPin ? '_blank' : undefined}
                      rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-accent/30"
                    >
                      {/* Isometric Icon Background */}
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl transform rotate-6"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <item.icon className="w-7 h-7 text-orange-400 drop-shadow-sm" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1 text-base">{item.label}</h3>
                        <p className="text-sm text-gray-800 font-medium leading-relaxed">{item.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 bg-white rounded-2xl p-6 border-2 border-gray-100">
                      {/* Isometric Icon Background */}
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl transform rotate-6"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                          <item.icon className="w-7 h-7 text-orange-400 drop-shadow-sm" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1 text-base">{item.label}</h3>
                        <p className="text-sm text-gray-800 font-medium leading-relaxed">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="tel:+15551234567"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white border-2 border-orange-300 text-orange-400 hover:text-orange-600 hover:border-orange-500  rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </motion.a>
              <motion.a
                href="mailto:info@dsrlogistics.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white border-2 border-orange-300 text-orange-400 hover:text-orange-600 hover:border-orange-500 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </motion.a>
            </div>
          </motion.div>

          {/* OR Divider - Horizontal for Mobile/Tablet */}
          <div className="lg:hidden flex items-center gap-4 py-8">
            <div className="flex-1 h-px bg-gray-300"></div>
            <div className="bg-white px-4 py-2 rounded-full border-2 border-gray-300">
              <span className="text-gray-600 font-bold text-lg">OR</span>
            </div>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* RIGHT COLUMN - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-3">
                  Send Us a Message
                </h3>
                <p className="text-gray-700 font-medium">
                  We'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors duration-200"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-gray-900 mb-2">
                    Service Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors duration-200 bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Moving</option>
                    <option value="commercial">Commercial Moving</option>
                    <option value="international">International Shipping</option>
                    <option value="storage">Storage Solutions</option>
                    <option value="packing">Packing Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell us about your moving or shipping needs..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary to-accent py-4 border-orange-300 text-orange-400 hover:text-orange-600 hover:border-orange-500  rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center border-2 justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default ContactSection;

