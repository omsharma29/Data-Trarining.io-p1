"use client"

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      id: 'training',
      title: 'Training',
      description: 'Comprehensive Power BI workshops for your team. Learn from experts and master data visualization.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600',
      stats: ['10+', 'Years Experience'],
    },
    {
      id: 'templates',
      title: 'Templates',
      description: 'Ready-to-use dashboard templates for faster insights. Save time and get professional results.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: 'from-purple-500 to-purple-600',
      stats: ['500+', 'Ready-to-use Templates'],
    },
    {
      id: 'consulting',
      title: 'Consulting',
      description: 'Expert guidance to unlock your data\'s full potential. Custom solutions for your business needs.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'from-green-500 to-green-600',
      stats: ['98%', 'Client Satisfaction'],
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to transform your raw data into meaningful business insights
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{  duration: 0.6 }}
              viewport={{ once: true }}
              whileTap={{ scale: 0.95 }}
              whileHover={{ 
                scale: 1.08,
                rotateY: 5,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
             
              className="group cursor-pointer"
            >
              <Card className="feature-card h-full border-2 border-transparent p-10  hover:border-[#47D7AC]/30 bg-white hover:bg-gradient-to-br hover:from-white hover:to-[#47D7AC]/5">
                <motion.div className="relative"
                 
                >
                  <motion.div 
                    className="w-16 h-16 bg-[#47D7AC] rounded-xl flex items-center justify-center text-white mb-6 relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 10,
                      transition: { type: "spring", stiffness: 500 }
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#47D7AC] to-[#00a49b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">{feature.icon}</div>
                  </motion.div>

                  {/* Content */}
                  <motion.h3 
                    className="text-2xl font-bold text-[#1E1E1E] mb-4 group-hover:text-[#47D7AC] transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <motion.div 
                    className="flex items-center space-x-2 text-[#47D7AC] font-semibold"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className=" text-xl md:text-2xl lg:text-3xl font-bold">{feature.stats[0]}</span>
                    <span className=" md:text-[0.75rem] lg:text-sm">{feature.stats[1]}</span>
                  </motion.div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#47D7AC]/5 to-[#47D7AC]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  {/* Micro interaction dots */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#47D7AC] rounded-full animate-ping"></div>
                      <div className="w-2 h-2 bg-[#47D7AC] rounded-full animate-ping" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-[#47D7AC] rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#47D7AC] to-[#00a49b] rounded-2xl p-12 text-white relative overflow-hidden shadow-2xl">
            {/* <div className="absolute inset-0 pattern-background opacity-10"></div> */}
            <div className="relative">
              <motion.h3 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Ready to Transform Your Data Strategy?
              </motion.h3>
              <motion.p 
                className="text-xl mb-8 text-white/90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Let our experts help you unlock the full potential of your data with Power BI
              </motion.p>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#1E1E1E] px-8 py-4 rounded-lg font-semibold hover:bg-white/95 transition-all duration-300 shadow-lg micro-bounce pulse-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, ease : "easeInOut"}}
                whileHover={{ 
                  scale: 1.08,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
                }}
                
              >
                Get Started Today
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;