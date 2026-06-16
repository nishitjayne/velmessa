import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    id: '01',
    title: 'Drive Up Performance & Engagement',
    content: 'Our platform helps you identify key performance drivers and boost employee engagement through data-driven insights and actionable feedback loops.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80'
  },
  {
    id: '02',
    title: 'Boost Productivity with AI Assistance',
    content: 'Leverage the power of AI to automate routine tasks and provide intelligent recommendations that help your team work smarter, not harder.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80'
  },
  {
    id: '03',
    title: 'Strengthen Culture and Collaboration',
    content: 'Foster a culture of transparency and collaboration with tools designed to bring teams together and align them with your company values.',
    image: 'https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?auto=format&fit=crop&q=80'
  },
  {
    id: '04',
    title: 'Reduce Turnover & Improve Retention',
    content: 'A SHRM report found that organizations using AI in feedback processes achieved a 22% increase in employee retention. Velmesa helps you stay ahead of the curve.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80'
  }
];

export const Features = () => {
  const [active, setActive] = useState('04');

  return (
    <section className="py-24 px-6 md:px-12 bg-transparent relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-velmesa-blue mb-16">Why Velmesa</h2>
        
        <div className="bg-white/40 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-4 md:p-8 shadow-2xl">
          <div className="space-y-2">
            {features.map((feature) => (
              <div key={feature.id} className="border-b border-velmesa-blue/5 last:border-0">
                <button 
                  onClick={() => setActive(feature.id)}
                  className="w-full py-6 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-8">
                    <span className="text-xs font-black text-velmesa-blue/40 tracking-widest">{feature.id}</span>
                    <span className={`text-lg md:text-xl font-extrabold transition-colors ${active === feature.id ? 'text-velmesa-blue' : 'text-velmesa-blue/60 group-hover:text-velmesa-blue'}`}>
                      {feature.title}
                    </span>
                  </div>
                  <motion.div 
                    animate={{ rotate: active === feature.id ? 180 : 0 }}
                    className="text-velmesa-blue/40"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {active === feature.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 items-center">
                        <div className="pl-16">
                          <p className="text-velmesa-blue/70 leading-relaxed mb-6">
                            {feature.content}
                          </p>
                          <button className="flex items-center gap-2 text-[10px] font-black tracking-widest text-velmesa-blue border-b-2 border-velmesa-yellow pb-1 hover:text-velmesa-yellow transition-colors">
                            READ MORE
                            <svg className="w-3 h-3 rotate-[-45deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </button>
                        </div>
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                          <img 
                            src={feature.image} 
                            alt={feature.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-velmesa-blue/10" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
