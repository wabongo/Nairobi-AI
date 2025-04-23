import { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientBackground from '../../animations/GradientBackground';

interface HeroProps {
  onSectionChange?: (section: string) => void;
}

const Hero = ({ onSectionChange }: HeroProps) => {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Motion gradient background */}
      <GradientBackground 
        colors={['#f8fafc', '#f1f5f9', '#f5f3ff', '#faf5ff']} 
        duration={20} 
      />

      {/* Optional subtle overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0 pointer-events-none" />

      <div className="bg-red-500 relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="min-w-screen p-0 m-0 bg-red-200 ">
          {/* Badge */}
          <div
            className={`transition-all duration-700 ease-out transform ${
              visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full text-sm font-medium bg-blue-50/80 text-blue-600 border border-blue-100">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
              Kenya's Premier AI Community
            </div>
          </div>

          {/* Headline & Description */}
          <div className="flex items-center justify-between gap-4 sm:grid-cols-1 bg-blue-300">
            <section className="flex flex-col w-full bg-amber-700">
            <h1
              className={`uppercase text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 mb-6 transition-all duration-700 transform ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <span className="block">Scaling</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                With AI
              </span>
            </h1>
            </section>

            <section className="flex flex-col w-full bg-amber-400 w-1/2">
              <p
                className={`text-lg md:text-xl text-gray-600 max-w-md mb-10 leading-relaxed transition-all duration-700 transform ${
                  visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                We build bold AI solutions for Africa's unique challenges through
                community, research, and innovation.
              </p>

              <div
                className={`flex flex-row gap-4 items-center transition-all duration-700 transform ${
                  visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <Link
                  to="/register"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
                >
                  Start a Project
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/about"
                  className="text-gray-700 hover:text-blue-600 px-6 py-3 font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </section>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1200ms' }}
          onClick={() => onSectionChange && onSectionChange('statistics')}
        >
          <div className="flex flex-col items-center cursor-pointer">
            <span className="text-sm text-gray-500 mb-2">Explore</span>
            <div className="w-6 h-10 border-2 border-gray-200 rounded-full flex justify-center p-1">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-scroll-down"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
