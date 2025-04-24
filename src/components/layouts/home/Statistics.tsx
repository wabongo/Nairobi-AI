import { useEffect, useState, useRef } from 'react';

interface StatisticsProps {
  onSectionChange?: (section: string) => void;
}

const Statistics = ({ onSectionChange }: StatisticsProps) => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (onSectionChange) onSectionChange('statistics');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [onSectionChange]);

  const stats = [
    { value: '5000+', label: 'Community Members' },
    { value: '50+', label: 'Upcoming AI Projects' },
    { value: '10+', label: 'Events Hosted' },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-white via-blue-50/50 to-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-white/60 to-pink-100/40 animate-gradient-shift"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <div className={`flex flex-col md:flex-row items-stretch justify-between gap-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex-1 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${visible ? 'scale-100' : 'scale-95'} ${activeIndex === index ? 'shadow-2xl scale-105' : 'shadow-lg'} bg-white/90 rounded-2xl p-8 mx-2 group hover:scale-105 hover:shadow-2xl`}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              style={{ transitionDelay: `${index * 120 + 200}ms` }}
            >
              <div className="group relative h-full">
                {/* Line indicator */}
                <div className={`absolute bottom-0 left-0 w-full h-1 rounded bg-blue-400 transition-all duration-500 ${activeIndex === index ? 'w-full' : 'w-16'}`}></div>
                
                {/* Main content */}
                <div className="py-12 px-6">
                  <p className="text-8xl font-black mb-4 transition-all duration-300 text-black">
                    {stat.value}
                  </p>
                  <p className={`text-xl uppercase tracking-wider font-medium transition-all duration-300 ${activeIndex === index ? 'text-black' : 'text-gray-500'}`}>
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top and bottom borders that expand from center */}
      <div className={`absolute top-0 left-1/2 h-px bg-black transition-all duration-1000 ease-out ${visible ? 'w-full left-0' : 'w-0'}`}></div>
      <div className={`absolute bottom-0 left-1/2 h-px bg-black transition-all duration-1000 ease-out ${visible ? 'w-full left-0' : 'w-0'}`}></div>
    </section>
  );
};

export default Statistics;