"use client"

import { Button } from '@/components/ui/button';
import { ShinyButton } from '@/components/ui/shiny-button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-hero pattern-background relative overflow-hidden flex items-center"
    >

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white"
          >
            <motion.h1
              className="text-4xl sm:text-5xl text-neutral-600 lg:text-6xl font-bold mb-6 pt-2 leading-tight"
              initial={{ opacity: 0, }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Turn Your Data
              Into Insights
              with Power BI.
            </motion.h1>

            <motion.p
              className="text-xl text-neutral-400 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              We help businesses unlock their data&apos;s full potential with training,
              consulting, and stunning Power BI dashboards.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="group relative bg-primary cursor-pointer text-white hover:bg-transparent hover:text-black border hover:border-primary transition-all duration-200 font-semibold px-8 py-3 hover-lift pulse-glow micro-bounce"
                >
                  <span className='relative z-10'>Book a Free Consultation</span>
                  <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-emerald-600 to-transparent h-px w-3/4 mx-auto"></span>
                  <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[4px] w-full mx-auto blur-sm"></span>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <ShinyButton
                  className="border-neutral-300 cursor-pointer text-black bg-transparent hover:border-primary hover:bg-primary font-semibold px-8 py-2 backdrop-blur-sm micro-bounce"
                >
                  View Templates
                </ShinyButton>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative"
          >
            <motion.div
              className="glass-card rounded-2xl p-8 hover-lift"
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="bg-[#1E1E1E] rounded-xl p-6 relative overflow-hidden border border-[#47D7AC]/20">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold">Sales Analytics Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                {/* Mock Chart Elements */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <motion.div
                    className="bg-gray-800/80 rounded-lg p-4 border border-[#47D7AC]/10 hover:border-[#47D7AC]/30 transition-all duration-300"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(71, 215, 172, 0.05)" }}
                  >
                    <div className="text-[#47D7AC] text-2xl font-bold">$847K</div>
                    <div className="text-gray-400 text-sm">Total Revenue</div>
                  </motion.div>
                  <motion.div
                    className="bg-gray-800/80 rounded-lg p-4 border border-[#47D7AC]/10 hover:border-[#47D7AC]/30 transition-all duration-300"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(71, 215, 172, 0.05)" }}
                  >
                    <div className="text-[#47D7AC] text-2xl font-bold">+23%</div>
                    <div className="text-gray-400 text-sm">Growth Rate</div>
                  </motion.div>
                </div>

                {/* Mock Chart */}
                <motion.div
                  className="bg-gray-800/80 rounded-lg p-4 h-32 relative border border-[#47D7AC]/10 hover:border-[#47D7AC]/30 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <svg className="w-full h-full" viewBox="0 0 200 100">
                    <motion.path
                      d="M 10 80 Q 50 20 100 40 T 190 30"
                      stroke="#47D7AC"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#47D7AC" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#47D7AC" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 10 80 Q 50 20 100 40 T 190 30 L 190 100 L 10 100 Z"
                      fill="url(#gradient)"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;