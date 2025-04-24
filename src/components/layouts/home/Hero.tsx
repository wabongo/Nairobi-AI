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

      <div className=" relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="min-w-screen p-0 m-0">
          {/* Badge */}
          <div
            className={`transition-all duration-700 ease-out transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full text-sm font-medium bg-amber-50/80 text-amber-600 border border-amber-300">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
              Kenya's Premier AI Community
            </div>
          </div>

          {/* Headline & Description */}
          <div className="items-center justify-between gap-4 lg:grid-cols-2 md:grid md:grid-cols-2 sm:grid-cols-1">
            <section className="flex flex-col w-full bg-transparent">
              <h1
                className={`uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                style={{ transitionDelay: '400ms' }}
              >
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  EMPOWER
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  CO-CREATE
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-600">
                  TRANSFORM
                </span>
              </h1>
            </section>

            <section className="flex flex-col w-full bg-transparent items-end">
              <p
                className={`text-lg italic md:text-md text-gray-700 max-w-md mb-10 leading-relaxed transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                style={{ transitionDelay: '600ms' }}
              >
                Welcome to NAIROBI.AI - learn the tools, spark ideas, <br/> and collaborate to create solutions that empower people and transform our society.
              </p>

              <div
                className={`flex flex-row gap-4 items-center transition-all duration-700 transform p-2 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                style={{ transitionDelay: '800ms' }}
              >
                <Link
                  to="/register"
                  className="text-2xl group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-medium bg-black backdrop-blur-sm hover:bg-black/90 text-white transition-all duration-300"
                >
                  Join Us
                  <ArrowRight className="w-7 h-7 transition-transform group-hover:translate-x-1 bg-white text-black rounded-full" />
                </Link>
              </div>
            </section>
          </div>
        </div>


        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'
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
