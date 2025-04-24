import { useState } from 'react';

const Statistics = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const stats = [
    { value: '5000+', label: 'Community Members' },
    { value: '50+', label: 'Upcoming AI Projects' },
    { value: '10+', label: 'Events Hosted' },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-blue-50/50 to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-white/60 to-pink-100/40 animate-gradient-shift"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8">
          {/* Card 1: Bold, vertical color bar, huge number */}
          <div className="flex-1 bg-white border-l-8 border-blue-500 flex flex-col justify-center items-start px-10 py-14 min-h-[220px] relative group">
            <span className="absolute top-6 left-8 text-blue-100 text-7xl font-black opacity-20 select-none" style={{letterSpacing: '-8px'}}>#</span>
            <span className="text-7xl md:text-8xl font-black text-blue-600 mb-2 leading-none tracking-tight">5000+</span>
            <span className="text-lg font-bold uppercase tracking-widest text-gray-900 mt-4">Community Members</span>
          </div>
          {/* Card 2: Circle accent, number inside, label outside */}
          <div className="flex-1 bg-gradient-to-tr from-purple-50 to-white border-4 border-purple-500 rounded-full flex flex-col justify-center items-center px-6 py-14 min-h-[220px] relative group">
            <div className="w-32 h-32 rounded-full bg-purple-500 flex items-center justify-center mb-4 shadow-lg">
              <span className="text-white text-6xl md:text-7xl font-black">50+</span>
            </div>
            <span className="text-lg font-bold uppercase tracking-widest text-purple-700 mt-2">Upcoming AI Projects</span>
          </div>
          {/* Card 3: Diagonal stripe, rotated label */}
          <div className="flex-1 bg-white border-r-8 border-pink-500 flex flex-col justify-center items-end px-10 py-14 min-h-[220px] relative group overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-br from-pink-400/30 to-pink-100/0 rotate-12 origin-top-right" style={{zIndex:0}}></div>
            <span className="text-7xl md:text-8xl font-black text-pink-600 mb-2 leading-none tracking-tight z-10">10+</span>
            <span className="text-lg font-bold uppercase tracking-widest text-pink-700 mt-4 z-10" style={{transform: 'rotate(-6deg)'}}>Events Hosted</span>
          </div>
        </div>
      </div>

      {/* Top and bottom borders that expand from center */}
      <div className="absolute top-0 left-1/2 h-px bg-black w-full left-0 transition-all duration-1000 ease-out"></div>
      <div className="absolute bottom-0 left-1/2 h-px bg-black w-full left-0 transition-all duration-1000 ease-out"></div>
    </section>
  );
};

export default Statistics;