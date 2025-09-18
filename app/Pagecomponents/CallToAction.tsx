"use client"
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShinyButton } from '@/components/ui/shiny-button';

const MotionButton = motion(Button)
const ShinyBtn = motion(ShinyButton)

const CallToAction = () => {
  return (
    <section className="py-20  relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-white/15 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative ">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
             transition={{  duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to unlock the power of your data?
          </motion.h2>

          <motion.p
            className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{  duration: 0.5 }}
            viewport={{ once: true }}
          >
            Join thousands of businesses who have transformed their decision-making with our Power BI expertise.
            Start your data transformation journey today.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{  duration: 0.5 }}
            viewport={{ once: true }}
          >

            <MotionButton
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              size="lg"
              className="bg-white cursor-pointer text-[#1E1E1E] hover:bg-white/95 font-semibold px-12 py-4 text-lg rounded-full shadow-2xl border-2 border-transparent hover:border-white/20 transition-all duration-300"
            >
              Book a Free Consultation
            </MotionButton>



            <ShinyBtn
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              
              className="border-2 cursor-pointer border-white text-white bg-transparent hover:bg-white hover:text-[#1E1E1E] font-semibold px-12 py-2 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
            >
              View Our Templetes
            </ShinyBtn>

          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/80"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{  duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">5.0 Client Rating</span>
            </div>

            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">500+ Projects Delivered</span>
            </div>

            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Certified Power BI Experts</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;