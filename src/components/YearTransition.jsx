import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaCar, FaRocket, FaTrophy, FaLightbulb, FaHeart, FaFire, FaStar, FaGem, FaCalendarAlt } from 'react-icons/fa';
import { GiPathDistance, GiFinishLine, GiPartyPopper } from 'react-icons/gi';
import { BsCalendarCheck, BsCalendarEvent } from 'react-icons/bs';
import { IoSparkles } from 'react-icons/io5';

/**
 * YearTransition Component - Automatic animated journey from 2025 → 2026
 * Features: Auto-playing car animation, countdown, celebration on arrival
 */
const YearTransition = () => {
  const [stage, setStage] = useState('journey'); // 'journey', 'arriving', 'arrived'
  const [progress, setProgress] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [currentMonth, setCurrentMonth] = useState(0);

  // 2025 Months journey with experiences
  const months2025 = [
    { name: 'JAN', experience: '🎯 New Beginnings', color: 'text-blue-400' },
    { name: 'FEB', experience: '❤️ Love & Care', color: 'text-pink-400' },
    { name: 'MAR', experience: '🌸 Growth', color: 'text-green-400' },
    { name: 'APR', experience: '🚀 Success', color: 'text-purple-400' },
    { name: 'MAY', experience: '📚 Knowledge', color: 'text-cyan-400' },
    { name: 'JUN', experience: '🎓 Achievement', color: 'text-yellow-400' },
    { name: 'JUL', experience: '☀️ Happiness', color: 'text-orange-400' },
    { name: 'AUG', experience: '💪 Strength', color: 'text-red-400' },
    { name: 'SEP', experience: '🌟 Wins', color: 'text-amber-400' },
    { name: 'OCT', experience: '📈 Progress', color: 'text-emerald-400' },
    { name: 'NOV', experience: '🔥 Challenges', color: 'text-rose-400' },
    { name: 'DEC', experience: '✨ Lessons', color: 'text-violet-400' },
  ];

  // 2026 Commitments with icons - Universal for everyone
  const commitments2026 = [
    { 
      text: "Chase New Dreams", 
      icon: <FaRocket className="text-4xl" />, 
      gradient: "from-cyan-400 to-blue-500",
      quote: "Aim for the stars, land on the moon" 
    },
    { 
      text: "Stay Consistent", 
      icon: <FaFire className="text-4xl" />, 
      gradient: "from-orange-400 to-red-500",
      quote: "Success is the sum of small efforts repeated" 
    },
    { 
      text: "Work Harder", 
      icon: <FaTrophy className="text-4xl" />, 
      gradient: "from-yellow-400 to-amber-500",
      quote: "Hard work beats talent when talent doesn't work hard" 
    },
    { 
      text: "Stay Inspired", 
      icon: <FaLightbulb className="text-4xl" />, 
      gradient: "from-purple-400 to-pink-500",
      quote: "Innovation distinguishes between a leader and a follower" 
    },
  ];

  // Auto-progress animation with month tracking
  useEffect(() => {
    // Stage 1: Journey animation (0-100% in 5 seconds, showing months)
    if (stage === 'journey') {
      const journeyInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 1.2; // Slower for better viewing
          
          // Update current month based on progress
          const monthIndex = Math.floor((newProgress / 100) * 12);
          setCurrentMonth(Math.min(monthIndex, 11));
          
          if (prev >= 100) {
            clearInterval(journeyInterval);
            setStage('arriving');
            return 100;
          }
          return newProgress;
        });
      }, 60);

      return () => clearInterval(journeyInterval);
    }

    // Stage 2: Arriving with countdown (3, 2, 1...)
    if (stage === 'arriving') {
      const countdownInterval = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            setStage('arrived');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [stage]);

  return (
    <section className="relative min-h-screen py-20 px-4 md:px-6 overflow-hidden flex items-center justify-center">
      {/* Enhanced animated starfield background */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Large rotating gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 360],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          rotate: [360, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Opening Title */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-8xl font-black text-gradient mb-4"
            animate={{
              textShadow: [
                '0 0 20px rgba(139, 92, 246, 0.5)',
                '0 0 40px rgba(139, 92, 246, 0.8)',
                '0 0 20px rgba(139, 92, 246, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎊 Your Year Journey 🎊
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-purple-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            From 2025 to 2026 ✨
          </motion.p>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* STAGE 1: JOURNEY ANIMATION */}
          {stage === 'journey' && (
            <motion.div
              key="journey"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              {/* Header */}
              <motion.h2
                className="text-4xl md:text-6xl font-black text-gradient mb-6"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <IoSparkles className="inline mb-2" /> Journey Through 2025 <IoSparkles className="inline mb-2" />
              </motion.h2>
              
              {/* Current month display */}
              <motion.div
                className="mb-8"
                key={currentMonth}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="glass-effect rounded-2xl px-8 py-4 inline-block">
                  <p className={`text-3xl md:text-5xl font-black ${months2025[currentMonth]?.color}`}>
                    {months2025[currentMonth]?.name} 2025
                  </p>
                  <p className="text-xl md:text-2xl text-purple-200 mt-2">
                    {months2025[currentMonth]?.experience}
                  </p>
                </div>
              </motion.div>

              {/* Road with all months displayed */}
              <div className="relative min-h-[300px] mb-12 px-4">
                {/* Vertical timeline/road */}
                <div className="relative">
                  {/* Background months display */}
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-4 mb-8">
                    {months2025.map((month, idx) => (
                      <motion.div
                        key={month.name}
                        className={`glass-effect rounded-xl p-3 text-center transition-all duration-300 ${
                          idx <= currentMonth ? 'opacity-100 scale-100' : 'opacity-30 scale-90'
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: idx <= currentMonth ? 1 : 0.3,
                          y: 0,
                          scale: idx === currentMonth ? 1.1 : idx < currentMonth ? 0.95 : 0.9,
                        }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <p className={`text-lg font-bold ${month.color}`}>{month.name}</p>
                        <p className="text-xs text-purple-300 mt-1">{month.experience.split(' ')[0]}</p>
                        {idx <= currentMonth && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-2xl mt-1"
                          >
                            ✓
                          </motion.div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Horizontal progress road */}
                  <div className="relative h-3 bg-gradient-to-r from-purple-900 via-pink-900 to-cyan-900 rounded-full overflow-hidden">
                    {/* Progress fill */}
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"
                      style={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Animated particles on road */}
                    <div className="absolute inset-0 flex justify-around items-center">
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-6 bg-white rounded-full"
                          animate={{
                            opacity: i * (100/12) <= progress ? [0.5, 1, 0.5] : 0.2,
                            scaleY: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            delay: i * 0.1,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2025 Start Label */}
                <motion.div
                  className="absolute left-0 -top-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className="glass-effect rounded-xl px-4 py-2 flex items-center gap-2">
                    <BsCalendarCheck className="text-2xl text-purple-400" />
                    <span className="text-lg font-bold text-white">JAN '25</span>
                  </div>
                </motion.div>

                {/* 2026 End Label */}
                <motion.div
                  className="absolute right-0 -top-4"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className="glass-effect rounded-xl px-4 py-2 flex items-center gap-2 glow-intense border-2 border-cyan-400/50">
                    <BsCalendarEvent className="text-2xl text-cyan-400" />
                    <span className="text-lg font-bold text-gradient">JAN '26</span>
                    <GiFinishLine className="text-2xl text-yellow-400" />
                  </div>
                </motion.div>

                {/* Animated Car */}
                <motion.div
                  className="absolute bottom-0 transform translate-y-12"
                  style={{
                    left: `calc(${progress}% - 30px)`,
                  }}
                  animate={{
                    y: [-3, 3, -3],
                  }}
                  transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, -1, 1, 0],
                    }}
                    transition={{ duration: 0.3, repeat: Infinity }}
                  >
                    <FaCar className="text-5xl md:text-6xl text-cyan-400 drop-shadow-[0_0_25px_rgba(6,182,212,0.9)]" />
                  </motion.div>
                  {/* Exhaust smoke */}
                  <motion.div
                    className="absolute -left-6 top-1/2 transform -translate-y-1/2"
                    animate={{
                      opacity: [0.7, 0, 0.7],
                      scale: [0.6, 1.8, 0.6],
                      x: [-5, -20, -5],
                    }}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  >
                    <div className="text-xl md:text-2xl">💨</div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Progress info */}
              <motion.div
                className="glass-effect rounded-2xl p-6 inline-block"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(139, 92, 246, 0.3)',
                    '0 0 40px rgba(139, 92, 246, 0.6)',
                    '0 0 20px rgba(139, 92, 246, 0.3)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex items-center gap-4">
                  <GiPathDistance className="text-4xl text-purple-400" />
                  <div>
                    <p className="text-3xl font-black text-gradient">{Math.round(progress)}%</p>
                    <p className="text-purple-200">Traveling to New Year...</p>
                  </div>
                </div>
              </motion.div>

              {/* Journey quote */}
              <motion.p
                className="mt-8 text-2xl text-cyan-300 font-semibold"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                "The journey of a thousand miles begins with a single step" 🚶‍♂️
              </motion.p>
            </motion.div>
          )}

          {/* STAGE 2: ARRIVING WITH COUNTDOWN */}
          {stage === 'arriving' && (
            <motion.div
              key="arriving"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              className="text-center"
            >
              <motion.div
                className="glass-effect rounded-full w-64 h-64 md:w-96 md:h-96 mx-auto flex items-center justify-center mb-8"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                  boxShadow: [
                    '0 0 40px rgba(6, 182, 212, 0.4)',
                    '0 0 80px rgba(139, 92, 246, 0.6)',
                    '0 0 40px rgba(236, 72, 153, 0.4)',
                  ],
                }}
                transition={{
                  scale: { duration: 1, repeat: Infinity },
                  rotate: { duration: 3, ease: "linear", repeat: Infinity },
                  boxShadow: { duration: 2, repeat: Infinity },
                }}
              >
                <motion.div
                  key={countdown}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 2, opacity: 0 }}
                  className="text-9xl md:text-[12rem] font-black text-gradient"
                >
                  {countdown}
                </motion.div>
              </motion.div>

              <motion.h2
                className="text-5xl md:text-7xl font-black text-white mb-4"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                Almost There! 🎯
              </motion.h2>
              <p className="text-2xl text-purple-200">Get ready for 2026...</p>
            </motion.div>
          )}

          {/* STAGE 3: ARRIVED! CELEBRATION */}
          {stage === 'arrived' && (
            <motion.div
              key="arrived"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              {/* Confetti burst */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(50)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-4xl"
                    style={{
                      left: '50%',
                      top: '30%',
                    }}
                    initial={{ opacity: 1, scale: 0 }}
                    animate={{
                      x: (Math.random() - 0.5) * 1000,
                      y: (Math.random() - 0.5) * 800,
                      rotate: Math.random() * 720,
                      opacity: 0,
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      ease: "easeOut",
                    }}
                  >
                    {['🎊', '🎉', '✨', '⭐', '💫', '🎆', '🎇'][i % 7]}
                  </motion.div>
                ))}
              </div>

              {/* Main celebration */}
              <motion.div
                className="mb-12"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
              >
                <motion.h2
                  className="text-6xl md:text-9xl font-black mb-6"
                  style={{
                    background: 'linear-gradient(90deg, #06b6d4, #8b5cf6, #ec4899, #fbbf24, #06b6d4)',
                    backgroundSize: '400% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  animate={{
                    backgroundPosition: ['0%', '100%', '0%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  Welcome 2026! 🎊
                </motion.h2>

                <motion.div
                  className="flex items-center justify-center gap-4 mb-8"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <GiPartyPopper className="text-6xl text-yellow-400" />
                  <p className="text-3xl md:text-5xl font-bold text-white">
                    January 1st, 2026
                  </p>
                  <GiPartyPopper className="text-6xl text-pink-400" />
                </motion.div>
              </motion.div>

              {/* New Year Commitments Grid */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-12"
              >
                <h3 className="text-4xl font-bold text-gradient mb-8 flex items-center justify-center gap-3">
                  <FaStar /> 2026 Commitments <FaStar />
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">,
                  {commitments2026.map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="glass-effect rounded-3xl p-8 relative overflow-hidden group cursor-pointer"
                      initial={{ opacity: 0, y: 50, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        delay: 0.7 + idx * 0.15,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -3, 3, 0],
                        transition: { duration: 0.3 },
                      }}
                    >
                      {/* Gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />

                      {/* Icon */}
                      <motion.div
                        className="relative z-10 mb-4 flex justify-center"
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: idx * 0.2,
                        }}
                      >
                        <div className={`text-transparent bg-gradient-to-br ${item.gradient} bg-clip-text`}>
                          {item.icon}
                        </div>
                      </motion.div>

                      {/* Text */}
                      <div className="relative z-10 space-y-3">
                        <h4 className={`text-2xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                          {item.text}
                        </h4>
                        <p className="text-sm text-purple-200 italic leading-relaxed">
                          "{item.quote}"
                        </p>
                      </div>

                      {/* Sparkle effect */}
                      <motion.div
                        className="absolute top-2 right-2"
                        animate={{
                          rotate: [0, 180, 360],
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: idx * 0.3,
                        }}
                      >
                        <IoSparkles className="text-2xl text-yellow-300" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Final inspirational message */}
              <motion.div
                className="glass-effect rounded-3xl p-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <FaHeart className="text-4xl text-red-400 animate-pulse" />
                  <FaGem className="text-4xl text-cyan-400" />
                  <FaRocket className="text-4xl text-purple-400" />
                </div>
                <motion.p
                  className="text-3xl md:text-4xl font-bold text-gradient leading-relaxed"
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(139, 92, 246, 0.5)',
                      '0 0 20px rgba(236, 72, 153, 0.8)',
                      '0 0 10px rgba(6, 182, 212, 0.5)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  "New Year, New Energy, Infinite Possibilities!" 🌟
                </motion.p>
                <p className="text-xl text-purple-200 mt-4">
                  Let's make 2026 the best year yet! 💪✨
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default YearTransition;
