# Velmesa Project Documentation

## 🌟 Interactive Animated Background System

The Velmesa background features a sophisticated 9-blob organic animation system designed for premium aesthetics and high performance.

### 🏗️ Architecture

The system is built using `framer-motion` and follows a **4-layer nested architecture** to ensure independent timelines and performance isolation:

1.  **Parallax Wrapper (Outer)**:
    -   Maps `scrollY` (absolute pixels) to a spring-smoothed offset.
    -   **Why `scrollY`?** We use absolute pixels instead of percentage-based `scrollYProgress` to prevent "snap-back" issues on mobile devices caused by dynamic viewport height changes (like the address bar hiding).

2.  **Idle Motion Layer (Middle)**:
    -   Handles three independent sub-animations:
        -   **Wandering**: Random X/Y drifting keyframes.
        -   **Rotation**: Subtle 360° or oscillatory rotation.
        -   **Scaling**: Periodic "breathing" effect.
    -   All durations are **coprime** (e.g., 47s, 53s, 59s) to ensure the visual state never repeats for days.

3.  **Stable Filter Wrapper**:
    -   Applies the `filter: blur()`.
    -   This wrapper is **static** (not animated), which allows the browser to cache the expensive blur calculation. This was the key fix for visual flashing during scrolling.

4.  **Morph Shape (Inner)**:
    -   Animates the `borderRadius` property with complex keyframes (e.g., `60% 40% 70% 30% / 50% 60% 40% 50%`).
    -   Uses linear gradients for the liquid color effect.

### 📱 Responsive Design

The system dynamically scales based on the viewport:

| Viewport | Blob Count | Size Scale | Animation Speed |
| :--- | :--- | :--- | :--- |
| **Desktop** | 9 blobs | 100% | 100% |
| **Tablet** | 7 blobs | 70% | 65% |
| **Mobile** | 5 blobs | 45% | 40% |

### 🛠️ Configuration

All blob properties are centralized in `src/constants/blobConfigs.js`. You can easily tweak:
-   **Colors**: 3-color linear gradients.
-   **Layers**: 3 depth layers with varying z-index and blur.
-   **Speed**: Parallax intensity and idle cycle durations.

### 🚀 Performance Optimizations

-   **GPU Acceleration**: Uses `transform: translateZ(0)` to promote layers to the GPU.
-   **Will-Change**: Applied `will-change: transform` to optimize compositing.
-   **Shared Spring**: The entire system shares a single smoothed scroll value to reduce the number of active springs in memory.
-   **Accessibility**: Respects `prefers-reduced-motion` settings.

---

## 🎨 Design Tokens

-   **Primary Purple**: `#303188` (Logos, Headings, Text)
-   **Accent Gold**: `#E6B222` (Buttons, Highlights, Logos)
-   **Background**: `#f8f9ff` (Soft white/blue)
-   **Glassmorphism**: White backgrounds with `backdrop-blur-2xl` and low opacity.

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── BackgroundBlobs.jsx  # Main background logic
│   ├── Hero.jsx             # Hero section
│   ├── Navbar.jsx           # Responsive glassmorphism nav
│   └── ...
├── constants/
│   └── blobConfigs.js       # Central data store for blobs
├── App.jsx                  # Main layout assembly
└── index.css                # Global styles & animation tokens
```
