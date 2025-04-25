import { useEffect, useState, useRef } from 'react';

interface PartnersProps {
  onSectionChange?: (section: string) => void;
}

const Partners = ({ onSectionChange }: PartnersProps) => {
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
      className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div 
          className={`text-center mb-12 transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <h2 className="text-3xl font-bold">Partners</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Collaborating with leading organizations to advance AI innovation in Africa.
          </p>
        </div>
        
        <div 
          className={`flex flex-wrap justify-center gap-8 items-center max-w-6xl mx-auto transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="bg-white p-6 rounded-lg w-36 h-36 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <img src="/logos/partner1.svg" alt="Partner 1" className="max-w-full max-h-full" />
          </div>
          <div className="bg-white p-6 rounded-lg w-36 h-36 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <img src="/logos/partner2.svg" alt="Partner 2" className="max-w-full max-h-full" />
          </div>
          <div className="bg-white p-6 rounded-lg w-36 h-36 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <img src="/logos/partner3.svg" alt="Partner 3" className="max-w-full max-h-full" />
          </div>
          <div className="bg-white p-6 rounded-lg w-36 h-36 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <img src="/logos/partner4.svg" alt="Partner 4" className="max-w-full max-h-full" />
          </div>
          <div className="bg-white p-6 rounded-lg w-36 h-36 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <img src="/logos/partner5.svg" alt="Partner 5" className="max-w-full max-h-full" />
          </div>
          <div className="bg-white p-6 rounded-lg w-36 h-36 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <img src="/logos/partner6.svg" alt="Partner 6" className="max-w-full max-h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
