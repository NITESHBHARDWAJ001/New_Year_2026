import { motion } from 'framer-motion';
import { FaFireAlt } from 'react-icons/fa';
import { IoSparklesSharp } from 'react-icons/io5';
import { GiFireworkRocket } from 'react-icons/gi';

/**
 * Hero Component - Landing section with animated heading and fireworks
 * Features: Fade-in animations, floating particles, gradient text, enhanced effects
 */
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Enhanced animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 
                ? 'rgba(139, 92, 246, 0.4)' 
                : i % 3 === 1 
                  ? 'rgba(236, 72, 153, 0.4)'
                  : 'rgba(6, 182, 212, 0.4)',
            }}
            animate={{
              y: [0, -50 - Math.random() * 50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5 + Math.random(), 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Rotating gradient circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl">
        {/* Sparkles animation */}
        <motion.div
          className="flex justify-center gap-8 mb-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {['⭐', '✨', '💫'].map((emoji, idx) => (
            <motion.span
              key={idx}
              className="text-6xl"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.5, 1],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: idx * 0.3,
                ease: "easeInOut",
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>

        {/* Main heading with enhanced animations */}
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block"
            style={{
              background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)',
              backgroundSize: '300% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
              scale: [1, 1.02, 1],
            }}
            transition={{
              backgroundPosition: {
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            ✨ Happy New Year 2026 ✨
          </motion.span>
        </motion.h1>

        {/* Subheading with staggered fade-in */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.p
            className="text-2xl md:text-4xl text-purple-200 font-semibold"
            animate={{
              textShadow: [
                '0 0 10px rgba(139, 92, 246, 0.5)',
                '0 0 20px rgba(139, 92, 246, 0.8)',
                '0 0 10px rgba(139, 92, 246, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Naye saal ki hardik shubhkamnayein!
          </motion.p>
          <p className="text-xl md:text-2xl text-cyan-200 font-medium flex items-center justify-center gap-2 flex-wrap">
            May this year bring success, happiness & growth 
            <motion.span
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
            >
              🚀
            </motion.span>
          </p>
        </motion.div>

        {/* Enhanced Firework effects */}
        <div className="absolute top-10 left-10 md:left-20">
          <motion.div
            className="text-6xl md:text-8xl"
            animate={{
              scale: [0, 2, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            🎆
          </motion.div>
        </div>
        
        <div className="absolute top-20 right-10 md:right-20">
          <motion.div
            className="text-6xl md:text-8xl"
            animate={{
              scale: [0, 2, 0],
              rotate: [360, 180, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 2,
              delay: 1,
            }}
          >
            🎇
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/4">
          <motion.div
            className="text-5xl md:text-7xl"
            animate={{
              scale: [0, 1.5, 0],
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1.5,
              delay: 0.5,
            }}
          >
            🎉
          </motion.div>
        </div>

        <div className="absolute bottom-20 right-1/4">
          <motion.div
            className="text-5xl md:text-7xl"
            animate={{
              scale: [0, 1.5, 0],
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1.5,
              delay: 1.5,
            }}
          >
            🎊
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 15, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="text-4xl">⬇️</div>
          <p className="text-purple-300 text-sm mt-2">Scroll to explore</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
