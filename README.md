# ✨ Happy New Year 2026 Website ✨

A beautiful, modern, animated New Year wishing website with year transition effects, inspiring quotes, and stunning animations built with React, Tailwind CSS, and Framer Motion.

![New Year 2026](https://img.shields.io/badge/Year-2026-purple?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15.0-ff0055?style=for-the-badge&logo=framer)

## 🎆 Features

### 🌟 **Enhanced Components**
- **Animated Landing Page** - Spectacular entrance with 50+ floating particles, rotating gradients, and fireworks (🎆 🎇 🎉 🎊)
- **Personal Greeting Section** - Elegant glassmorphism card with gradient text and smooth animations
- **Year Transition (2025 → 2026)** - Interactive switcher showing:
  - ✅ **2025 Reflections**: Good moments & lessons learned with animated cards
  - 🎊 **2026 Commitments**: New goals, consistency, hard work, innovation
  - 📅 Calendar animation showing year as "fully lived" vs "fresh & ready"
- **Quote Cards** - Deep, meaningful quotes in both:
  - 🇮🇳 **Hindi** - Bhagavad Gita, Swami Vivekananda, ancient wisdom
  - 🌍 **English** - Churchill, Steve Jobs, Chinese proverbs
  - 3D hover effects with rotating animations
- **Compact Social Links** - "By Nitesh Sharma" with elegant platform icons
  - GitHub, Portfolio, Assignment, LinkedIn
  - SVG icons with hover tooltips and pulse effects
- **Enhanced Footer** - Animated heart, floating decorations, and smooth glow effects

### 🎨 **Visual Excellence**
- Dark gradient theme (slate → purple → indigo) with glassmorphism
- 50+ animated particles with varied colors (purple, pink, cyan)
- Rotating gradient backgrounds
- Custom scrollbar styling
- Smooth scroll behavior
- 3D card transformations
- Text gradient animations
- Glow and shadow effects

### ⚡ **Advanced Animations**
- Fade, scale, rotate, and float effects
- Interactive hover animations
- Continuous background particle systems
- Firework burst effects
- Year transition with celebration animations
- Quote card 3D rotations
- Icon pulse and wave effects
- Scroll indicator

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd e:\new-year
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - The app will be running at `http://localhost:5173`

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
new-year/
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # Landing with enhanced animations & particles
│   │   ├── Greeting.jsx          # Personal greeting section
│   │   ├── YearTransition.jsx    # 2025→2026 interactive transition
│   │   ├── QuoteCards.jsx        # Hindi & English inspirational quotes
│   │   ├── Links.jsx             # Compact social links with icons
│   │   └── Footer.jsx            # Animated footer
│   ├── App.jsx                   # Main app with all sections
│   ├── main.jsx                  # App entry point
│   └── index.css                 # Global styles with custom scrollbar
├── index.html                    # HTML template
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
└── package.json                  # Dependencies and scripts
```

## 🎨 Tech Stack

- **React 18.3.1** - UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Framer Motion 11.15.0** - Animation library
- **PostCSS & Autoprefixer** - CSS processing

## ✨ Key Animations

### Hero Section
- **50+ Floating Particles** - Multi-colored (purple, pink, cyan) with varied sizes
- **Rotating Gradient Orbs** - Large background circles creating depth
- **Sparkle Effects** - ⭐ ✨ 💫 with rotation and bounce
- **Firework Bursts** - 🎆 🎇 🎉 🎊 with scale and rotation
- **Gradient Text Flow** - Animated color transition across heading
- **Scroll Indicator** - Bouncing arrow guiding users

### Year Transition
- **Interactive Toggle** - Switch between 2025 reflections and 2026 goals
- **Good vs Lessons Cards** - Slide-in animations with hover scaling
- **Commitment Grid** - 4 animated commitment cards (Goals, Consistency, Hard Work, Innovation)
- **Calendar Animation** - Shows "Fully Lived" vs "Fresh & Ready"
- **Background Particles** - Rising sparkles

### Quote Cards
- **3D Hover Effects** - Cards rotate on X and Y axis
- **Icon Animations** - Bounce, rotate, and scale effects
- **Gradient Overlays** - Color-themed backgrounds per card
- **Floating Particles** - Subtle animated dots inside cards
- **Border Pulse** - Animated border on hover

### Social Links
- **Icon Pop-in** - Spring animation on load
- **Hover Rotation** - Icons wiggle on hover
- **Pulse Effect** - Continuous subtle pulsing
- **Tooltip Reveal** - Name appears below on hover
- **Glow Rings** - Colored shadow effects

## 🎯 Customization

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      'gradient-start': '#0f172a',
      'gradient-end': '#1e1b4b',
    },
  },
}
```

### Modify Animations

All animations are in the component files using Framer Motion. Example:

```jsx
<motion.div
  animate={{
    scale: [1, 1.05, 1],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
>
  Content
</motion.div>
```

### Update Links

Edit `src/components/Links.jsx` to change social platform URLs or icons:

```jsx
const socialLinks = [
  {
    name: 'GitHub',
    url: 'YOUR_GITHUB_URL',
    symbol: <svg>...</svg>,
    // ...
  },
  // Add more platforms
];
```

### Add More Quotes

Edit `src/components/QuoteCards.jsx` to add your own inspirational quotes:

```jsx
const hindiQuotes = [
  {
    quote: "आपका हिंदी उद्धरण",
    translation: "Your translation",
    author: "लेखक का नाम",
    gradient: "from-color-to-color",
    icon: "🕉️",
  },
];
```

### Modify Year Transition

Edit `src/components/YearTransition.jsx` to customize reflections and commitments:

```jsx
const reflections2025 = {
  good: [/* your achievements */],
  challenges: [/* your lessons */],
};

const commitments2026 = [/* your goals */];
```

## 🌟 Component Breakdown

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| `Hero.jsx` | Landing page | 50+ particles, fireworks, gradient text |
| `Greeting.jsx` | Personal intro | Glassmorphism card, name display |
| `YearTransition.jsx` | 2025→2026 | Interactive toggle, reflections, goals |
| `QuoteCards.jsx` | Inspiration | Hindi + English quotes, 3D hover |
| `Links.jsx` | Social connect | Icon grid, compact design, tooltips |
| `Footer.jsx` | Credits | Animated heart, floating decorations |

## 🎊 What Makes This Special

✨ **Interactive Year Journey** - Click between 2025 and 2026 to see reflections and commitments  
🌍 **Bilingual Quotes** - Deep wisdom in both Hindi and English  
🎨 **Premium Design** - Glassmorphism, gradients, and 3D effects  
⚡ **Smooth Performance** - Optimized Framer Motion animations  
📱 **Fully Responsive** - Beautiful on all screen sizes  
🎯 **No Dependencies** - Just React, Tailwind, and Framer Motion  

## 🌟 Made With Love By

**Nitesh Sharma** 💙  
Full Stack Developer | Tech Enthusiast

### Connect With Me

- 🔗 [GitHub](https://github.com/NITESHBHARDWAJ001)
- 💼 [Portfolio](https://portfolio-git-main-nitesh-sharmas-projects-3b96572d.vercel.app/)
- 📋 [Assignment Demo](https://demo-five-umber-16.vercel.app/)
- 💼 [LinkedIn](https://www.linkedin.com/in/nitesh-sharma-5b4115306)

## 📄 License

This project is open source and available for personal and commercial use.

## 🎊 Happy New Year 2026! 🎊

Naye saal ki hardik shubhkamnayein! May this year bring success, happiness & growth 🚀

**Key Message**: This website showcases the transition from 2025 (reflections on achievements and lessons) to 2026 (commitments to new goals, consistency, and hard work). It's a celebration of growth and a promise for the future!

---

**Made with ❤️ by Nitesh Sharma**  
*Built with React, Tailwind CSS & Framer Motion ✨*  
*New Year, New Energy, Same Dedication! 💪*
