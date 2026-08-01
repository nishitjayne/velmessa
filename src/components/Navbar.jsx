import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/60 py-4' 
        : 'bg-transparent py-7'
    }`}>
      <div className="text-2xl md:text-3xl font-black tracking-tight text-[#303188] uppercase font-sans">
        VELMESA
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-10 text-sm font-bold tracking-widest text-[#303188] uppercase">
        <a href="#about" className="hover:text-[#E6B222] transition-colors relative group">
          About
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E6B222] transition-all group-hover:w-full"></span>
        </a>
        <a href="#pricing" className="hover:text-[#E6B222] transition-colors relative group">
          Pricing
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E6B222] transition-all group-hover:w-full"></span>
        </a>
        <a href="#signin" className="hover:text-[#E6B222] transition-colors relative group">
          Sign In
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E6B222] transition-all group-hover:w-full"></span>
        </a>
        
        <button className="px-6 py-2.5 ml-4 text-[#E6B222] border-2 border-[#E6B222] rounded-full hover:bg-[#E6B222] hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95">
          Create an Account
        </button>
      </div>

      {/* Mobile Burger */}
      <button 
        className="md:hidden p-2 text-[#303188] transition-transform active:scale-90"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 p-8 flex flex-col space-y-8 md:hidden shadow-2xl animate-in slide-in-from-top duration-500">
          <a href="#about" className="text-lg font-bold tracking-widest text-[#303188] uppercase" onClick={() => setIsOpen(false)}>About</a>
          <a href="#pricing" className="text-lg font-bold tracking-widest text-[#303188] uppercase" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#signin" className="text-lg font-bold tracking-widest text-[#303188] uppercase" onClick={() => setIsOpen(false)}>Sign In</a>
          <button className="w-full px-6 py-5 text-[#E6B222] border-2 border-[#E6B222] rounded-full font-bold uppercase tracking-widest text-base">
            Create an Account
          </button>
        </div>
      )}
    </nav>
  );
};
