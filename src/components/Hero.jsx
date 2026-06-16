import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 px-6 md:px-12 min-h-[90vh] flex items-center overflow-hidden z-10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 relative"
        >
          <h1 className="text-[3.5rem] md:text-[5.5rem] font-black text-velmesa-blue leading-[1.05] mb-8 tracking-tighter font-outfit">
            Lead with clarity,<br /> grow with confidence
          </h1>
          <p className="text-velmesa-blue/60 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-medium">
            Welcome to the future of management. At Velmesa, we aren't just providing data; 
            we're breaking the barriers between leadership and the teams of tomorrow.
          </p>
          
          <button className="px-10 py-4 bg-velmesa-blue text-white rounded-full font-black text-xs tracking-widest hover:bg-velmesa-yellow transition-all duration-300 shadow-xl flex items-center gap-2">
            GET STARTED
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[500px] aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover"
              alt="Workspace"
            />
            <div className="absolute inset-0 bg-velmesa-blue/10" />
            
            {/* Accent Shapes */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-velmesa-yellow rounded-2xl rotate-12 -z-10" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-velmesa-purple/20 backdrop-blur-xl rounded-full -z-10" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
