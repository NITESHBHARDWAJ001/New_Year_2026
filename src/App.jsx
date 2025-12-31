import Hero from './components/Hero';
import Greeting from './components/Greeting';
import YearTransition from './components/YearTransition';
import QuoteCards from './components/QuoteCards';
import Links from './components/Links';
import Footer from './components/Footer';

/**
 * Main App Component
 * A beautiful New Year 2026 wishing website with smooth animations
 * Features: Year transition, quote cards, social links, and more
 */
function App() {
  return (
    <div className="min-h-screen relative">
      {/* Animated gradient background with fixed position */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      </div>

      {/* Main content sections with smooth flow */}
      <main className="relative">
        {/* Year Transition 2025 → 2026 - First Thing */}
        <YearTransition />

        {/* Landing Section */}
        <Hero />

        {/* Personal Greeting */}
        <Greeting />

        {/* Inspirational Quote Cards */}
        <QuoteCards />

        {/* Compact Social Links - "By Nitesh Sharma" at the end */}
        <Links />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
