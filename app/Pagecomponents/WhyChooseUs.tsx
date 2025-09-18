"use client"

import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 overflow-hidden bg-white mask-b-from-80% lg:mask-b-from-65% lg:mask-b-to-80%">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-[#1E1E1E] mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why <span className="text-[#47D7AC]">DataTraining.io</span>?
            </motion.h2>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that every piece of data tells a story. For over a decade, we&apos;ve been helping 
                businesses worldwide transform their raw data into compelling narratives that drive decision-making.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                From startups to Fortune 500 companies, we&apos;ve seen how the right visualization can turn 
                confusion into clarity, and insights into action. Our approach combines technical expertise 
                with storytelling mastery.
              </p>
              
              <motion.div 
                className="bg-gradient-to-r from-[#47D7AC]/10 to-[#00a49b]/10 p-6 rounded-xl border-l-4 border-[#47D7AC]"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="text-lg font-semibold text-[#1E1E1E] italic">
                  &quot;Data is the new oil, but without proper refining, it&apos;s just crude potential. 
                  We&apos;re the refiners who turn your data into pure business gold.&quot;
                </p>
                <p className="text-sm text-gray-500 mt-2">- Our Founder&apos;s Philosophy</p>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <motion.div 
                  className="text-center p-4 bg-gray-50 rounded-lg hover:bg-[#47D7AC]/5 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-[#47D7AC]">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </motion.div>
                <motion.div 
                  className="text-center p-4 bg-gray-50 rounded-lg hover:bg-[#47D7AC]/5 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-[#47D7AC]">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main Dashboard Illustration */}
              <motion.div 
                className="bg-gradient-to-br from-[#1E1E1E] to-gray-800 rounded-2xl p-8 shadow-2xl"
                whileHover={{ 
                  rotateY: 10,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-white text-sm font-medium">Live Analytics Dashboard</div>
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <motion.div 
                    className="bg-gray-700/50 rounded-lg p-4 border border-[#47D7AC]/20"
                    whileHover={{ backgroundColor: "rgba(71, 215, 172, 0.1)" }}
                  >
                    <div className="text-[#47D7AC] text-xl font-bold">$2.4M</div>
                    <div className="text-gray-400 text-xs">Annual Revenue</div>
                    <div className="mt-2 h-8 bg-gradient-to-r from-[#47D7AC]/30 to-transparent rounded"></div>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-700/50 rounded-lg p-4 border border-[#47D7AC]/20"
                    whileHover={{ backgroundColor: "rgba(71, 215, 172, 0.1)" }}
                  >
                    <div className="text-[#47D7AC] text-xl font-bold">+47%</div>
                    <div className="text-gray-400 text-xs">Growth Rate</div>
                    <div className="mt-2 h-8 bg-gradient-to-r from-[#47D7AC]/30 to-transparent rounded"></div>
                  </motion.div>
                </div>

                {/* Main Chart */}
                <div className="bg-gray-700/30 rounded-lg p-4 h-24 relative overflow-hidden border border-[#47D7AC]/10">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#47D7AC]/20 to-transparent"
                    animate={{ 
                      x: ["-100%", "100%"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <svg className="w-full h-full" viewBox="0 0 200 60">
                    <motion.path
                      d="M 0 40 Q 50 10 100 25 T 200 15"
                      stroke="#47D7AC"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-[#47D7AC] rounded-full flex items-center justify-center text-white shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-[#47D7AC] to-[#00a49b] rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;