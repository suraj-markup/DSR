import { motion } from 'framer-motion';
import { MapPin, ArrowRightLeft, Calendar, Users, ArrowRight } from 'lucide-react';

const QuoteForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="relative z-20 -mt-16 lg:-mt-20 mb-16 lg:mb-20"
    >
      {/* Floating Form Card */}
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl lg:rounded-2xl shadow-2xl border border-gray-100 px-4 sm:px-6 lg:px-8 py-6 lg:py-8 max-w-7xl mx-auto">
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
                placeholder="Enter pickup location"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
              />
            </div>
          </div>

          {/* Swap Button */}
          <motion.button
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
              <select className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white appearance-none text-sm">
                <option>Residential</option>
                <option>Commercial</option>
                <option>Storage</option>
                <option>International</option>
              </select>
            </div>
          </div>

          {/* Get Quote Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-accent to-orange-500 text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 group text-sm self-end w-full sm:w-auto"
          >
            <span>Get Quote</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuoteForm;
