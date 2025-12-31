import { motion } from 'framer-motion';

/**
 * Greeting Component - Personal greeting section with animated text reveal
 * Features: Gradient text, smooth animations, glassmorphism card
 */
const Greeting = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="glass-effect rounded-3xl p-10 md:p-16 glow"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting text with character-by-character reveal */}
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-2xl md:text-3xl text-purple-200 font-medium">
              Wishing you a wonderful year ahead! 🌟
            </p>
            
            <motion.h2
              className="text-4xl md:text-6xl font-black text-gradient flex items-center justify-center gap-3 flex-wrap"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              May 2026 bring you success, happiness & growth
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ✨
              </motion.span>
            </motion.h2>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-xl md:text-2xl text-cyan-300 font-semibold">
                Embrace every moment, chase your dreams, and make it your best year yet! 🚀
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Greeting;
