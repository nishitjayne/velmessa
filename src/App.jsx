import { BackgroundBlobs } from './components/BackgroundBlobs';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Brands } from './components/Brands';
import { CTA } from './components/CTA';

function App() {
  return (
    <div className="relative min-h-screen bg-transparent selection:bg-velmesa-yellow selection:text-white">
      {/* Persistent Animated Background */}
      <BackgroundBlobs />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content Sections */}
      <main>
        <Hero />
        <Brands />
        <Features />
        <Stats />
        <CTA />
      </main>

      {/* Simple Footer */}
      <footer className="bg-velmesa-blue py-12 px-6 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-[900] tracking-tighter text-white uppercase font-outfit">
            VELMESA
          </div>
          <p className="text-white/40 text-[10px] font-black tracking-[0.2em] uppercase">
            © 2026 VELMESA INC. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/40 hover:text-velmesa-yellow text-[10px] font-black tracking-[0.2em] uppercase transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-velmesa-yellow text-[10px] font-black tracking-[0.2em] uppercase transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
