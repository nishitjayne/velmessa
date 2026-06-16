import { motion } from 'framer-motion';

export const CTA = () => {
  return (
    <section className="relative mt-20 pt-32 pb-20 px-6 overflow-hidden">
      {/* Dark Curved Background */}
      <div className="absolute inset-0 bg-velmesa-blue rounded-t-[100px] md:rounded-t-[200px]" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          The Future of Management
        </h2>
        <h3 className="text-4xl md:text-6xl font-extrabold text-velmesa-yellow mb-8">
          Starts Now
        </h3>
        
        <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Sign up to experience a smarter, more adaptive way to run assessments — 
          and stay connected as we roll out new capabilities.
        </p>
        
        <div className="text-left space-y-3 mb-16 inline-block mx-auto">
          {[
            'Get behind-the-scenes updates',
            'Be notified when we go live',
            'Get early adopter perks and pricing',
            'No spam. Just smart updates.'
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-sm font-medium text-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-velmesa-yellow" />
              {item}
            </div>
          ))}
        </div>

        <form className="max-w-xl mx-auto space-y-4">
          <input 
            type="text" 
            placeholder="First Name" 
            className="w-full px-8 py-4 bg-white rounded-full text-velmesa-blue font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-velmesa-yellow transition-all"
          />
          <input 
            type="text" 
            placeholder="Organization" 
            className="w-full px-8 py-4 bg-white rounded-full text-velmesa-blue font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-velmesa-yellow transition-all"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full px-8 py-4 bg-white rounded-full text-velmesa-blue font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-velmesa-yellow transition-all"
          />
          <div className="flex items-center justify-center gap-3 pt-4 pb-8">
            <input type="checkbox" id="beta" className="w-5 h-5 accent-velmesa-yellow" />
            <label htmlFor="beta" className="text-sm font-medium text-white/60">I'm interested in beta testing.</label>
          </div>
          
          <button className="w-full py-5 bg-white text-velmesa-blue rounded-full font-black text-xs tracking-widest hover:bg-velmesa-yellow hover:text-white transition-all duration-300 shadow-xl">
            GET STARTED
          </button>
          
          <p className="pt-6 text-[10px] font-bold text-velmesa-yellow tracking-widest">
            ALREADY 350+ HR LEADERS AND TEAMS ON THE WAITLIST.
          </p>
          <p className="text-[10px] text-white/40 font-medium">
            We respect your inbox and your data. No spam.
          </p>
        </form>
      </div>
    </section>
  );
};
