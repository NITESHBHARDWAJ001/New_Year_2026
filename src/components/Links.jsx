import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

/**
 * Links Component - Compact social links section
 * Features: "By Nitesh Sharma" appears after 10 seconds automatically
 */
const Links = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/NITESHBHARDWAJ001',
      symbol: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      color: 'text-purple-400 hover:text-purple-300',
      bgGlow: 'hover:shadow-purple-500/50',
    },
    {
      name: 'Portfolio',
      url: 'https://portfolio-git-main-nitesh-sharmas-projects-3b96572d.vercel.app/',
      symbol: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'text-cyan-400 hover:text-cyan-300',
      bgGlow: 'hover:shadow-cyan-500/50',
    },
    {
      name: 'Assignment',
      url: 'https://demo-five-umber-16.vercel.app/',
      symbol: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'text-green-400 hover:text-green-300',
      bgGlow: 'hover:shadow-green-500/50',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nitesh-sharma-5b4115306',
      symbol: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: 'text-blue-400 hover:text-blue-300',
      bgGlow: 'hover:shadow-blue-500/50',
    },
  ];

  if (!isVisible) return null;

  return (
    <section className="relative py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="glass-effect rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl text-purple-200 mb-2">Let's Connect 🤝</p>
            <h3 className="text-4xl md:text-5xl font-black text-gradient">
              By Nitesh Sharma
            </h3>
          </motion.div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 md:gap-8 flex-wrap">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative ${link.color} transition-all duration-300`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: idx * 0.1 + 0.3,
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Icon background circle */}
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center p-4 border border-white/20 transition-all duration-300 ${link.bgGlow} shadow-lg group-hover:border-white/40`}>
                  {link.symbol}
                </div>
                
                {/* Tooltip on hover */}
                <motion.div
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-white text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  initial={{ y: -5 }}
                  whileHover={{ y: 0 }}
                >
                  {link.name}
                </motion.div>

                {/* Pulse effect */}
                <motion.div
                  className={`absolute inset-0 rounded-full ${link.color} opacity-0 group-hover:opacity-20`}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0, 0.3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.2,
                  }}
                />
              </motion.a>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-center mt-8 text-purple-300 text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            Full Stack Developer • Tech Enthusiast • Problem Solver
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Links;
