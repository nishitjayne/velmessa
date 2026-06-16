import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT US', href: '#about' },
    { name: 'ASSESSMENTS', href: '#assessments' },
    { name: 'BLOG', href: '#blog' },
    { name: 'SIGN IN', href: '#signin' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' 
        : 'bg-transparent py-8'
    }`}>
      {/* Logo */}
      <div className="text-xl md:text-2xl font-[900] tracking-tighter text-velmesa-blue uppercase font-outfit">
        VELMESA
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-10">
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href} 
            className="text-[10px] font-black tracking-[0.15em] text-velmesa-blue hover:text-velmesa-yellow transition-colors"
          >
            {link.name}
          </a>
        ))}
        
        <button className="px-6 py-2.5 text-[10px] font-black tracking-[0.15em] text-velmesa-blue border border-velmesa-blue/10 rounded-full hover:bg-velmesa-blue hover:text-white transition-all duration-300 flex items-center gap-2">
          JOIN NOW
          <svg className="w-3 h-3 translate-y-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Mobile Burger */}
      <button 
        className="md:hidden p-2 text-velmesa-blue"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white p-8 flex flex-col space-y-6 md:hidden shadow-xl border-t border-gray-100">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-xs font-black tracking-widest text-velmesa-blue uppercase"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full px-6 py-4 text-xs font-black tracking-widest text-velmesa-blue border border-velmesa-blue/20 rounded-full uppercase">
            JOIN NOW
          </button>
        </div>
      )}
    </nav>
  );
};
