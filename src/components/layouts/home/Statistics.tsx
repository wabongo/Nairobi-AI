import { FileLineChartIcon, LineChart, LineChartIcon, LucideTrendingUp, TrendingUpIcon } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface StatisticsProps {
  onSectionChange?: (sectionId: string) => void;
}

const Statistics: React.FC<StatisticsProps> = ({ onSectionChange }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const stats = [
    { value: '3000+', label: 'Community Members', color: 'bg-blue-400/20', borderColor: 'border-blue-500/20', textColor: 'text-blue-600' },
    { value: '25+', label: 'Upcoming Projects', color: 'bg-pink-400/20', borderColor: 'border-pink-500/20', textColor: 'text-pink-600' },
    { value: '20+', label: 'Events Hosted', color: 'bg-purple-400/20', borderColor: 'border-purple-500/20', textColor: 'text-purple-600' },
  ];

  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!onSectionChange) return;
    const section = sectionRef.current;
    if (!section) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onSectionChange('statistics');
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(section);
    return () => {
      observer.disconnect();
    };
  }, [onSectionChange]);

  return (
    <section ref={sectionRef} className="py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12 text-gray-900 tracking-tight">
         Raging Growth
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-start justify-center p-8 min-h-[180px] "
            >
              <div className="flex items-center mb-2">
                <span className="text-6xl md:text-6xl font-bold text-gray-900 mr-2">{stat.value}</span>
                <TrendingUpIcon className="inline-block text-green-500" size={36} />
              </div>
              <div className={`${stat.color} ${stat.borderColor} border-2 mt-4 ${stat.textColor} text-base md:text-lg tracking-wide text-center lowercase rounded-full px-2 py-0.5 inline-block`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;