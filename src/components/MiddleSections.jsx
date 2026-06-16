import { motion } from 'framer-motion';

export const PricingSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/60 backdrop-blur-md rounded-[2rem] p-10 shadow-lg flex flex-col items-center text-center">
          <h3 className="text-2xl font-extrabold text-velmesa-blue mb-4">How much is doing assessments costing you right now?</h3>
          <p className="text-velmesa-blue/60 mb-8">Culture Assessment | 360 Feedback | Leadership Assessment and more</p>
          <button className="px-6 py-3 text-[10px] font-black tracking-widest text-velmesa-blue border border-velmesa-blue/10 rounded-full hover:bg-velmesa-blue hover:text-white transition-all uppercase">
            Discover what you're really spending
          </button>
        </div>
        <div className="bg-white/60 backdrop-blur-md rounded-[2rem] p-10 shadow-lg flex flex-col items-center text-center">
          <h3 className="text-2xl font-extrabold text-velmesa-blue mb-4">How Velmesa is changing it?</h3>
          <p className="text-velmesa-blue/60 mb-4">Build and deploy enterprise-grade assessments at $240/year*. AI-powered reports, self-serve builder, pay-per-response pricing. No consultants needed.</p>
          <p className="text-[10px] text-velmesa-blue/40 mb-8 italic">* the actual cost depends on the plan and add-ons you choose</p>
          <button className="px-6 py-3 text-[10px] font-black tracking-widest text-velmesa-blue border border-velmesa-blue/10 rounded-full hover:bg-velmesa-blue hover:text-white transition-all uppercase">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export const FrameworkCard = () => {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-velmesa-blue rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="flex-1 p-12 md:p-20 flex flex-col justify-center text-white">
            <div className="text-xs font-black tracking-[0.3em] opacity-30 mb-8 uppercase">VELMESA</div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">The leadership framework</h2>
            <p className="text-white/70 text-lg mb-10 max-w-md">Explore our guide to assessing your team's capabilities, potentials and obstacles in this new era.</p>
            <div className="flex gap-4">
              <div className="w-12 h-1 bg-velmesa-yellow rounded-full" />
              <div className="w-4 h-1 bg-white/20 rounded-full" />
            </div>
          </div>
          <div className="flex-1 relative min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
              className="absolute inset-0 w-full h-full object-cover"
              alt="Leadership framework"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
