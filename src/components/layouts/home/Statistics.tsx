import { useEffect, useState, useRef } from 'react';

interface StatisticsProps {
  onSectionChange?: (section: string) => void;
}

const Statistics = ({ onSectionChange }: StatisticsProps) => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
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
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 w-full max-w-3xl mx-auto transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <p className="text-4xl font-bold text-blue-600 mb-1">500+</p>
            <p className="text-gray-600">Community Members</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <p className="text-4xl font-bold text-blue-600 mb-1">50+</p>
            <p className="text-gray-600">AI Projects</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <p className="text-4xl font-bold text-blue-600 mb-1">20+</p>
            <p className="text-gray-600">Events Hosted</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
