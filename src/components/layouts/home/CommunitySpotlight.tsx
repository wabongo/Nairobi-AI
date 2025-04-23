import { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CommunitySpotlightProps {
  onSectionChange?: (section: string) => void;
}

const CommunitySpotlight = ({ onSectionChange }: CommunitySpotlightProps) => {
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
      className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl font-bold mb-4 transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            Community Spotlight
          </h2>
          <p 
            className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '200ms' }}
          >
            Meet the talented individuals driving AI innovation in Nairobi
          </p>
        </div>

        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: '400ms' }}
        >
          {/* Community Member Cards */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-400 relative">
              <img 
                src="/images/members/member1.jpg" 
                alt="Community Member" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Sarah Kimani</h3>
              <p className="text-gray-600 mb-4">AI Research Lead</p>
              <p className="text-gray-700 mb-6">Working on natural language processing solutions for Swahili and other African languages.</p>
              <Link to="/members/sarah" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                View Profile <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-400 relative">
              <img 
                src="/images/members/member2.jpg" 
                alt="Community Member" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">David Ochieng</h3>
              <p className="text-gray-600 mb-4">ML Engineer</p>
              <p className="text-gray-700 mb-6">Building computer vision applications for agricultural monitoring and crop disease detection.</p>
              <Link to="/members/david" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                View Profile <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="h-48 bg-gradient-to-r from-pink-400 to-orange-400 relative">
              <img 
                src="/images/members/member3.jpg" 
                alt="Community Member" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Amina Hassan</h3>
              <p className="text-gray-600 mb-4">AI Ethics Researcher</p>
              <p className="text-gray-700 mb-6">Focusing on responsible AI development and ensuring ethical implementation across Africa.</p>
              <Link to="/members/amina" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                View Profile <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div 
          className={`mt-12 text-center transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <Link 
            to="/community" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors duration-300"
          >
            Meet More Members <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunitySpotlight;
