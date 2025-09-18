"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image'
import { RainbowButton } from '@/components/ui/rainbow-button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebar, setSidebar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Training', href: '#training' },
    { name: 'Templates', href: '#templates' },
    { name: 'Consulting', href: '#consulting' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 max-w-6xl mx-auto rounded ${isScrolled
          ? 'bg-white backdrop-blur-xl shadow-lg rounded-3xl mt-1 mx-2'
          : 'bg-transparent backdrop-blur-sm mx-2'
        }`}
    >
      <div className="container mx-auto px-2 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-xl font-bold text-foreground">
              <Image
                src="/Logo.png"
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-neutral-500 hover:text-black transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className='flex gap-4'>
          {!sidebar && <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          >
            <RainbowButton 
              className="bg-emerald-700 hover:bg-primary-dark cursor-pointer text-white px-6 py-2 rounded-lg font-semibold hover-glow"
            >
             Sign In
            </RainbowButton >
          </motion.div>}

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setSidebar(!sidebar)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>

          {/* Sidebar */}
          {sidebar && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-screen w-64 bg-white shadow-2xl z-50"
            >
              <div className="p-6">
                {/* Close button */}
                <div className="flex justify-end mb-8">
                  <Button variant="ghost" size="icon" onClick={() => setSidebar(false)}>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </Button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-4">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className="text-neutral-500 hover:text-black transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-gray-100"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setSidebar(false)}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>

                {/* Mobile Sign In Button */}
                <div className="mt-8">
                  <RainbowButton 
                    className="w-full bg-emerald-700 hover:bg-primary-dark cursor-pointer text-white px-6 py-2 rounded-lg font-semibold hover-glow"
                    onClick={() => setSidebar(false)}
                  >
                    Sign In
                  </RainbowButton>
                </div>
              </div>
            </motion.div>
          )}
          
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;