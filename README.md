# Velmesa Landing Page

A beautifully animated, highly interactive landing page built for Velmesa, featuring organic scroll-driven background blobs and premium UI/UX design components.

## 🚀 Technologies Used
- **React (Vite)**
- **Tailwind CSS v4** for styling and utility classes
- **Framer Motion** for butter-smooth scroll animations and idle state physics
- **Vanilla CSS** for custom noise and background effects

## 🌐 Live Demo
- **[Velmesa on Vercel](https://velmessa.vercel.app/)**

## ✨ Key Features
- **Scroll-Driven Organic Blobs**: Background elements dynamically morph, travel, and shrink as the user scrolls down the page.
- **Premium Glassmorphism**: High-quality frosted glass effects over the animated backgrounds.
- **Dynamic Idle States**: When the page is stationary, elements independently drift and pulse organically.
- **Responsive Layouts**: Designed to perfectly match the provided mockups with precise spacing and typography.

## 💻 Getting Started

1. **Install Dependencies**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

2. **Run Development Server**
   Start the local preview:
   ```bash
   npm run dev
   ```

3. **Build for Production**
   To create an optimized production build:
   ```bash
   npm run build
   ```

## 📂 Project Structure
- `/src/components/BackgroundBlobs.jsx`: Contains the complex framer-motion logic for the background elements.
- `/src/components/Blob.jsx`: The reusable blob component.
- `/src/components/Hero.jsx`: The hero section component.
- `/src/components/Navbar.jsx`: The sticky top navigation.
- `/src/App.jsx`: The main layout assembly.
- `/src/index.css`: Global styling, base theme, and noise texture.

## 🎨 Design System
- **Primary Color**: Majestic Blue (`#303188`)
- **Accent Color**: Golden Yellow (`#E6B222`)
- **Font**: Inter
