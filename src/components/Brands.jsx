export const Brands = () => {
  const brands = [
    { name: 'P&G', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Procter_%26_Gamble_logo.svg' },
    { name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'McDonald\'s', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg' },
    { name: 'Starbucks', logo: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg' },
    { name: 'LEGO', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg' },
  ];

  return (
    <section className="py-20 px-6 border-t border-gray-50 relative z-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[10px] font-black tracking-[0.2em] text-velmesa-blue/40 uppercase mb-12">
          A proud partner to brands and businesses around the world
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:opacity-60 transition-opacity">
          {brands.map((brand) => (
            <img 
              key={brand.name}
              src={brand.logo} 
              alt={brand.name} 
              className="h-8 md:h-10 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
