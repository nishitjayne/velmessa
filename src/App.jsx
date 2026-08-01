import { BackgroundBlobs } from './components/BackgroundBlobs';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <>

      <BackgroundBlobs />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full space-y-4 mb-24"
          >
            {[
              { num: '01', title: 'Backed by industry leaders' },
              { num: '02', title: 'Made for leaders and future leaders' },
              { num: '03', title: 'Seamless and effortless' },
              { num: '04', title: 'Supported by industry leading AI, that works harder for you' }
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-6 md:space-x-12 px-6 md:px-10 py-6 bg-white/40 rounded-2xl md:rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-white/50 cursor-pointer hover:bg-white/60 transition-colors text-left">
                <span className="text-[#303188] font-semibold text-base md:text-lg shrink-0">{item.num}</span>
                <h3 className="text-[#303188] font-bold text-base md:text-lg">{item.title}</h3>
              </div>
            ))}
          </motion.div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center mb-32 text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full md:w-1/2 md:pr-10 mb-16 md:mb-0"
            >
              <p className="text-xs md:text-sm font-semibold text-[#E6B222] mb-6 uppercase tracking-wider">
                Traditional assessments are slow,<br />
                expensive, and vendor-dependent
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-[#303188] leading-tight mb-8 font-sans">
                Velmesa works hard<br />
                to change that,<br />
                giving HR teams,<br />
                consultants, and<br />
                change agents the<br />
                power to design,<br />
                analyze, and act with<br />
                speed and precision.
              </h2>
              <p className="text-sm text-[#303188] leading-relaxed max-w-sm mx-auto md:mx-0">
                Welcome to the future of management.<br />
                At Velmesa, we aren't just providing data;<br />
                we're breaking the barriers between leadership<br />
                and the teams of tomorrow.
              </p>
            </motion.div>
            
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-72 h-72 md:w-[500px] md:h-[500px]">
                <svg width="100%" height="100%" viewBox="0 0 400 400" className="absolute inset-0 drop-shadow-2xl">
                  <defs>
                    <clipPath id="v-mask">
                      <path d="M50 50 L180 300 L250 200 L120 50 Z" />
                      <path d="M220 50 L320 50 L270 150 Z" />
                    </clipPath>
                  </defs>
                  <image 
                    href="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
                    width="400" 
                    height="400" 
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#v-mask)" 
                  />
                  <path d="M260 50 L310 50 L285 100 Z" fill="#E6B222" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="w-full text-center mb-16">
            <h3 className="text-xl md:text-2xl text-[#303188] font-medium">Transformed over</h3>
            <h2 className="text-4xl md:text-6xl font-black text-[#303188] my-4">12,000 <span className="text-xl md:text-2xl font-medium block md:inline mt-2 md:mt-0">leaders and teams<br className="hidden md:block" />of tomorrow</span></h2>
          </div>
          
          <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row mb-20 border border-gray-100 relative">
            <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-between">
              <h4 className="text-xl font-black text-[#303188] tracking-widest uppercase mb-12 md:mb-16">VELMESA</h4>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-[#303188] mb-4">The leadership framework</h3>
                <p className="text-sm text-[#303188] opacity-80 mb-8 md:mb-0">Explore our guide to assessing your team's capabilities, potentials and obstacles in this new era.</p>
              </div>
            </div>
            <div className="w-full md:w-3/5 h-64 md:h-auto">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop" alt="Team meeting" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-8 right-8 w-6 h-6">
              <svg viewBox="0 0 24 24" fill="#E6B222"><path d="M12 0l12 12-12 12V0z"/></svg>
            </div>
          </div>
          
          <div className="w-full text-center mt-8">
            <p className="text-sm font-semibold text-[#303188] mb-8">A proud partner to brands and businesses around the world</p>
            <div className="grid grid-cols-3 md:flex md:justify-center items-center gap-8 md:space-x-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               <div className="font-black text-lg md:text-2xl">P&G</div>
               <div className="font-bold text-base md:text-xl">BMW</div>
               <div className="font-sans text-base md:text-xl font-bold">Apple</div>
               <div className="font-serif text-base md:text-xl font-bold italic">McDonald's</div>
               <div className="font-bold text-base md:text-xl">Starbucks</div>
               <div className="font-sans text-base md:text-xl font-bold">LEGO</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
