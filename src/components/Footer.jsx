import { motion } from 'framer-motion';
import { FaHeart, FaCode } from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiFramer } from 'react-icons/si';

/**
 * Footer Component - Bottom section with animated text and glow effect
 * Features: Pulsing animation, gradient text, heart icon animation
 */
const Footer = () => {
  return (
    <footer className="relative py-16 px-6 mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="glass-effect rounded-3xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Footer text with gradient and animation */}
          <motion.p
            className="text-xl md:text-2xl font-semibold flex items-center justify-center gap-3 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-purple-200 flex items-center gap-2">
              Made with <FaCode className="text-cyan-400" />
            </span>
            
            {/* Animated heart */}
            <motion.span
              className="text-3xl"
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaHeart className="text-red-500" />
            </motion.span>
            
            <span className="text-purple-200">by</span>
            <span className="text-gradient font-bold">Nitesh Sharma</span>
          </motion.p>

          {/* Year and additional info */}
          <motion.div
            className="mt-6 space-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-cyan-300 text-sm md:text-base">
              © 2025 · Wishing you a prosperous new year ahead! 🎊
            </p>
            <motion.p
              className="text-purple-300/60 text-xs md:text-sm flex items-center justify-center gap-3 flex-wrap"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Built with 
              <SiReact className="text-cyan-400 text-lg" title="React" />
              <SiTailwindcss className="text-sky-400 text-lg" title="Tailwind CSS" />
              <SiFramer className="text-pink-400 text-lg" title="Framer Motion" />
              ✨
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Floating decorative elements */}
        <div className="absolute -top-10 left-1/4">
          <motion.div
            className="text-4xl"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🎉
          </motion.div>
        </div>
        
        <div className="absolute -top-10 right-1/4">
          <motion.div
            className="text-4xl"
            animate={{
              y: [0, -20, 0],
              rotate: [0, -10, 10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            🎊
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
