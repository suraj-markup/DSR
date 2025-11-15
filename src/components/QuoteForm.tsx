import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPin, ArrowRightLeft, Calendar, Users, ArrowRight, User, Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    from: '',
    to: '',
    movingDate: '',
    serviceType: 'Residential',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS service configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          from_location: formData.from,
          to_location: formData.to,
          moving_date: formData.movingDate,
          service_type: formData.serviceType,
          to_email: 'info@dsrlogistics.com', // Your email
        },
        publicKey
      );

      alert('Thank you! We will contact you soon with a quote.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        from: '',
        to: '',
        movingDate: '',
        serviceType: 'Residential',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error submitting your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const swapLocations = () => {
    setFormData({
      ...formData,
      from: formData.to,
      to: formData.from,
    });
  };

  return (
    <motion.div
      id="quote-form"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="relative z-20 -mt-16 lg:-mt-16 mb-8 lg:mb-16"
    >
      {/* Floating Form Card */}
      <div className="container mx-auto px-4">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl lg:rounded-2xl shadow-2xl border border-gray-100 px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-7xl mx-auto">
          {/* Contact Information Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
            {/* Name */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
                />
              </div>
            </div>

            {/* Email */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 1234567890"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
                />
              </div>
            </div>
          </div>

          {/* Main Form Row - Compact One Line */}
          <div className="flex flex-col sm:flex-row lg:flex-row xl:flex-row gap-3 sm:gap-4 lg:gap-6 items-center justify-center">
          {/* From Location */}
          <div className="w-full sm:w-auto sm:min-w-[140px] lg:min-w-[160px] xl:min-w-[180px]">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              From
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                name="from"
                required
                value={formData.from}
                onChange={handleChange}
                placeholder="Enter pickup location"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
              />
            </div>
          </div>

          {/* Swap Button */}
          <motion.button
            type="button"
            onClick={swapLocations}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 self-center mt-4 sm:mt-0"
          >
            <ArrowRightLeft className="w-4 h-4 text-gray-600 rotate-90 sm:rotate-0" />
          </motion.button>

          {/* To Location */}
          <div className="w-full sm:w-auto sm:min-w-[140px] lg:min-w-[160px] xl:min-w-[180px]">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              To
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                name="to"
                required
                value={formData.to}
                onChange={handleChange}
                placeholder="Enter destination"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
              />
            </div>
          </div>

          {/* Moving Date */}
          <div className="w-full sm:w-auto sm:min-w-[140px] lg:min-w-[160px] xl:min-w-[180px]">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Moving Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="date"
                name="movingDate"
                required
                value={formData.movingDate}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
              />
            </div>
          </div>

          {/* Service Type */}
          <div className="w-full sm:w-auto sm:min-w-[140px] lg:min-w-[160px] xl:min-w-[180px]">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Type
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white appearance-none text-sm"
              >
                <option>Residential</option>
                <option>Commercial</option>
                <option>Storage</option>
                <option>International</option>
                <option>Packing</option>
                <option>Vehicle Transport</option>
              </select>
            </div>
          </div>

          {/* Get Quote Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 group text-sm self-end w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Get Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </>
            )}
          </motion.button>
        </div>
        </form>
      </div>
    </motion.div>
  );
};

export default QuoteForm;
