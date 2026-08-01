export const Hero = () => {
  return (
    <section className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 pt-40 md:pt-24 pb-12 mx-auto max-w-7xl">
      <div className="w-full md:w-1/2 md:pr-12 text-center md:text-left mb-12 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-black text-[#303188] leading-tight mb-8 font-sans drop-shadow-sm">
          Lead with clarity,<br />
          grow with confidence
        </h1>
        <p className="text-lg md:text-xl text-[#303188] mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed font-medium">
          Welcome to the future of management. <br className="hidden md:block" />
          At Velmesa, we aren't just providing data; <br className="hidden md:block" />
          we're breaking the barriers between leadership <br className="hidden md:block" />
          and the teams of tomorrow.
        </p>
        
        <div className="flex justify-center md:justify-start">
          <button className="px-8 py-3.5 text-sm font-bold text-[#303188] border-2 border-[#E6B222] rounded-full hover:bg-[#E6B222] hover:text-white transition-all flex items-center space-x-2">
            <span>Get started</span>
            <svg className="w-3 h-3 text-[#E6B222] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="flex items-center justify-center w-full md:w-1/2">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M120 50 L190 260 L240 160 L180 50 Z" fill="#303188" />
            <path d="M260 50 L310 50 L285 100 Z" fill="#E6B222" />
          </svg>
        </div>
      </div>
    </section>
  );
};
