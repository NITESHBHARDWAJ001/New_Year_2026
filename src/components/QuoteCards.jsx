import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

/**
 * QuoteCards Component - Dynamic appearing quotes from random directions
 * Features: One quote at a time, appears every 6 seconds from different angles
 */
const QuoteCards = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [direction, setDirection] = useState('top');

  const allQuotes = [
    {
      quote: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन",
      translation: "You have the right to work only, never to its fruits",
      author: "भगवद गीता 2.47",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      icon: "🕉️",
    },
    {
      quote: "योगस्थः कुरु कर्माणि",
      translation: "Established in yoga, perform actions",
      author: "भगवद गीता 2.48",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      icon: "🧘",
    },
    {
      quote: "परित्राणाय साधूनां विनाशाय च दुष्कृताम्",
      translation: "To protect the good and destroy evil, I manifest age after age",
      author: "भगवद गीता 4.8",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      icon: "⚡",
    },
    {
      quote: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत",
      translation: "Whenever dharma declines, I manifest myself",
      author: "भगवद गीता 4.7",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      icon: "🌟",
    },
    {
      quote: "Change is the law of the universe. You can be a millionaire or a pauper in an instant.",
      author: "Bhagavad Gita",
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      icon: "🔄",
      translation: null,
    },
    {
      quote: "A person can rise through their own efforts. Don't degrade yourself.",
      author: "Bhagavad Gita 6.5",
      gradient: "from-rose-500 via-red-500 to-orange-500",
      icon: "🚀",
      translation: null,
    },
    {
      quote: "You are what you believe in. You become that which you believe you can become.",
      author: "Bhagavad Gita",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      icon: "💫",
      translation: null,
    },
    {
      quote: "The mind is restless and difficult to control, but it can be conquered through practice.",
      author: "Bhagavad Gita 6.35",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      icon: "🧠",
      translation: null,
    },
    {
      quote: "Set your heart upon your work, but never on its reward.",
      author: "Bhagavad Gita",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      icon: "❤️‍🔥",
      translation: null,
    },
    {
      quote: "Whatever happened was good. Whatever is happening is good. Whatever will happen will be good.",
      author: "Bhagavad Gita",
      gradient: "from-lime-500 via-green-500 to-emerald-500",
      icon: "☮️",
      translation: null,
    },
  ];

  // Change quote every 6 seconds with random direction
  useEffect(() => {
    const directions = ['top', 'bottom', 'left', 'right'];
    
    const interval = setInterval(() => {
      setDirection(directions[Math.floor(Math.random() * directions.length)]);
      setCurrentQuoteIndex((prev) => (prev + 1) % allQuotes.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Animation variants for different directions
  const variants = {
    top: {
      initial: { y: -200, opacity: 0, scale: 0.5 },
      animate: { y: 0, opacity: 1, scale: 1 },
      exit: { y: 200, opacity: 0, scale: 0.5 },
    },
    bottom: {
      initial: { y: 200, opacity: 0, scale: 0.5 },
      animate: { y: 0, opacity: 1, scale: 1 },
      exit: { y: -200, opacity: 0, scale: 0.5 },
    },
    left: {
      initial: { x: -200, opacity: 0, scale: 0.5, rotateY: -90 },
      animate: { x: 0, opacity: 1, scale: 1, rotateY: 0 },
      exit: { x: 200, opacity: 0, scale: 0.5, rotateY: 90 },
    },
    right: {
      initial: { x: 200, opacity: 0, scale: 0.5, rotateY: 90 },
      animate: { x: 0, opacity: 1, scale: 1, rotateY: 0 },
      exit: { x: -200, opacity: 0, scale: 0.5, rotateY: -90 },
    },
  };

  const currentQuote = allQuotes[currentQuoteIndex];

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Section Title - Always visible */}
        <motion.div
          className="text-center mb-12 md:mb-16 px-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-gradient mb-3 md:mb-4">
            Words of Wisdom ✨
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-purple-200">
            Timeless Wisdom from Bhagavad Gita
          </p>
        </motion.div>

        {/* Animated Quote Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuoteIndex}
            variants={variants[direction]}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, 0.01, 0.9],
            }}
            className="relative"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              className="glass-effect rounded-3xl md:rounded-[2rem] p-6 sm:p-10 md:p-16 relative overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient overlay with enhanced glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${currentQuote.gradient} opacity-30 md:opacity-20`} />
              
              {/* Pulsing glow effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${currentQuote.gradient} blur-3xl opacity-20`}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              
              {/* Animated particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 md:w-2 md:h-2 bg-white rounded-full"
                  style={{
                    left: `${(i + 1) * 8}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -40, 0],
                    opacity: [0.2, 1, 0.2],
                    scale: [0.5, 1.5, 0.5],
                  }}
                  transition={{
                    duration: 2 + i * 0.2,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}

              {/* Content */}
              <div className="relative z-10 text-center space-y-6 md:space-y-8">
                {/* Icon with enhanced animation */}
                <motion.div
                  className="text-6xl sm:text-7xl md:text-9xl filter drop-shadow-2xl"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {currentQuote.icon}
                </motion.div>

                {/* Quote */}
                <div className="space-y-4 md:space-y-6">
                  <FaQuoteLeft className="text-3xl sm:text-4xl md:text-5xl text-purple-300/50 mx-auto drop-shadow-lg" />
                  
                  <motion.p
                    className="text-xl sm:text-2xl md:text-4xl font-bold text-white leading-relaxed px-2 sm:px-4 drop-shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {currentQuote.quote}
                  </motion.p>

                  {currentQuote.translation && (
                    <motion.p
                      className="text-base sm:text-lg md:text-xl text-purple-100 italic px-2 sm:px-4 drop-shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      "{currentQuote.translation}"
                    </motion.p>
                  )}

                  <motion.div
                    className="flex items-center justify-center gap-2 md:gap-3 flex-wrap px-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <p className={`text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r ${currentQuote.gradient} bg-clip-text text-transparent drop-shadow-lg`}>
                      — {currentQuote.author}
                    </p>
                    <FaQuoteRight className="text-2xl sm:text-3xl md:text-4xl text-purple-300/50 drop-shadow-lg" />
                  </motion.div>
                </div>
              </div>

              {/* Progress indicator dots */}
              <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-1.5 md:gap-2 z-20">
                {allQuotes.map((_, idx) => (
                  <motion.div
                    key={idx}
                    className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                      idx === currentQuoteIndex ? 'bg-white' : 'bg-white/30'
                    }`}
                    animate={{
                      scale: idx === currentQuoteIndex ? [1, 1.8, 1] : 1,
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: idx === currentQuoteIndex ? Infinity : 0,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default QuoteCards;
