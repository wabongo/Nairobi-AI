import { ArrowRight, Calendar, FileText, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroAnimation from '../animations/HeroAnimation';
import { useEffect, useState } from 'react';

const HomePage = () => {
  // Animation states for text elements
  const [visible, setVisible] = useState(false);
  
  // Words for the typing effect
  const innovationWords = ['Innovate', 'Build', 'Discover', 'Create', 'Transform'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayWord, setDisplayWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Implement typing effect
  useEffect(() => {
    const typeEffect = () => {
      const currentWord = innovationWords[currentWordIndex];
      const shouldDelete = isDeleting;
      
      // Set the speed based on the action (typing or deleting)
      setTypingSpeed(isDeleting ? 80 : 150);
      
      if (!shouldDelete && displayWord === currentWord) {
        // Pause at the end of typing a word
        setTypingSpeed(2000); // Pause for 2 seconds
        setIsDeleting(true);
      } else if (shouldDelete && displayWord === '') {
        // Move to the next word
        setIsDeleting(false);
        setCurrentWordIndex((currentWordIndex + 1) % innovationWords.length);
      }
      
      // Update the displayed text
      setDisplayWord(prev => {
        if (shouldDelete) {
          return prev.substring(0, prev.length - 1);
        } else {
          return currentWord.substring(0, prev.length + 1);
        }
      });
    };
    
    const timer = setTimeout(typeEffect, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWordIndex, displayWord, isDeleting, typingSpeed, innovationWords]);

  // Show elements after initial load
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full screen with animation background and custom hero background */}
      <section className="relative min-h-screen flex items-center bg-hero overflow-hidden">
        {/* Animated glowing particles in background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={`particle-${i}`}
              className="absolute rounded-full bg-primary/30"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 15}s linear infinite`,
                opacity: Math.random() * 0.7 + 0.3,
                boxShadow: '0 0 10px 2px rgba(0, 144, 255, 0.4)'
              }}
            />
          ))}
        </div>
        
        {/* Semi-transparent overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/30 to-transparent"></div>
        
        {/* Content Grid */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content - Left Side */}
            <div className="flex flex-col justify-center">
              <div 
                className={`transition-all duration-700 ease-out transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full text-sm font-medium bg-primary/10 text-primary backdrop-blur-sm border border-primary/20 shadow-glow">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  Nairobi AI Community Hub
                </div>
              </div>
              
              <h1 
                className={`text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: '400ms' }}
              >
                Connect, Learn & <br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 animate-gradient">
                  {displayWord}<span className="animate-blink">|</span>
                </span>
                <br/>
                <span className="text-4xl md:text-6xl">with <span className="text-primary drop-shadow-glow">Nairobi AI</span></span>
              </h1>
              
              <p 
                className={`text-xl text-white/80 max-w-xl backdrop-blur-sm mb-10 leading-relaxed transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: '600ms' }}
              >
                Join Nairobi's thriving community of researchers, developers, and enthusiasts collaborating on AI solutions for Africa's greatest challenges.
              </p>
              
              <div 
                className={`flex flex-col sm:flex-row gap-6 items-start transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: '800ms' }}
              >
                <Link
                  to="/register"
                  className="button-glow group relative overflow-hidden text-lg px-8 py-4 rounded-md font-medium"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Join the Community
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-blue-700 animate-gradient-x"></span>
                </Link>
                
                <Link
                  to="/about"
                  className="relative text-white/90 hover:text-white px-8 py-4 text-lg font-medium transition-colors overflow-hidden group"
                >
                  <span className="relative z-10">Learn More</span>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              </div>
              
              {/* Stats Counter */}
              <div 
                className={`grid grid-cols-3 gap-4 mt-12 transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: '1000ms' }}
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-white/70">Community Members</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-white/70">AI Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">12</p>
                  <p className="text-sm text-white/70">African Countries</p>
                </div>
              </div>
            </div>
            
            {/* Animation - Right Side */}
            <div 
              className={`relative h-[500px] lg:h-[600px] transition-all duration-1000 transform ${visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`}
              style={{ transitionDelay: '600ms' }}
            >
              {/* Decorative ring elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-primary/20 rounded-full animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/10 rounded-full animate-spin-slow-reverse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-primary/5 rounded-full animate-pulse"></div>
              
              {/* Hero animation for cinematic 3D effect */}
              <HeroAnimation />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-white/60 text-sm mb-2">Explore</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </section>

      {/* Community Spotlight Section */}
      <section className="py-12 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Community Spotlight</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Learn from and connect with leading AI practitioners in our community.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Member Cards */}
          {[
            {
              name: "Arthur Adinda",
              role: "Community Manager",
              imgSrc: "src/assets/Arthur_PassportPhoto.jpg",
              linkedIn: "https://www.linkedin.com/in/arthur-adinda-3a1266120/"
            },
            {
              name: "Willie Macharia",
              role: "Community Organiser",
              imgSrc: "src/assets/Screenshot 2024-11-27 164150.png",
              linkedIn: "https://www.linkedin.com/in/willie-ng-ang-a-macharia-121518102/"
            },
            {
              name: "Betty Kamande",
              role: "Co-organiser",
              imgSrc: "src/assets/Screenshot 2025-03-03 164713.png",
              linkedIn: "https://www.linkedin.com/in/bettykamande/"
            },
            {
              name: "Dancan Angwenyi",
              role: "Strategy",
              imgSrc: "src/assets/Screenshot 2025-03-03 171342.png",
              linkedIn: "https://www.linkedin.com/in/dancan-angwenyi-687752101/"
            },
            {
              name: "Grace Ngari",
              role: "Community Manager",
              imgSrc: "src/assets/Screenshot 2025-03-03 171702.png",
              linkedIn: "https://www.linkedin.com/in/grace-ngari-2b8a01245/"
            }
          ].map((member, index) => (
            <div
              key={index}
              className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-primary/30 via-primary/20 to-primary before:absolute before:top-0 w-80 h-72 relative bg-card flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden"
            >
              <div className="w-28 h-28 bg-primary mt-8 rounded-full border-4 border-card z-10 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500 overflow-hidden">
                <img src={member.imgSrc} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
                <span className="text-2xl font-semibold block text-foreground">{member.name}</span>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
              <Link
                to={member.linkedIn}
                className="bg-primary px-4 py-1 text-primary-foreground rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-primary/90"
              >
                Connect
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Monthly Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-muted-foreground">Partner Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Projects Launched</div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Platform Section */}
      <section className="py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Explore Our Platform</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Discover the tools and resources available to our community members.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {/* Card 1 - Events */}
          <div className="relative flex w-80 flex-col rounded-xl bg-card text-foreground shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-primary shadow-lg shadow-primary/30 flex items-center justify-center">
              <Calendar className="w-20 h-20 text-white opacity-90" />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                Events & Workshops
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-muted-foreground antialiased">
                Join our regular meetups, hackathons, workshops, and conferences to connect with other AI practitioners and learn new skills.
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link 
                to="/events" 
                className="select-none rounded-lg bg-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none inline-flex items-center"
              >
                View Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Card 2 - Resources */}
          <div className="relative flex w-80 flex-col rounded-xl bg-card text-foreground shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-primary shadow-lg shadow-primary/30 flex items-center justify-center">
              <FileText className="w-20 h-20 text-white opacity-90" />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                Learning Resources
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-muted-foreground antialiased">
                Access our curated collection of articles, tutorials, courses, and research papers to stay at the cutting edge of AI.
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link 
                to="/resources" 
                className="select-none rounded-lg bg-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none inline-flex items-center"
              >
                Browse Resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Card 3 - Community */}
          <div className="relative flex w-80 flex-col rounded-xl bg-card text-foreground shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-primary shadow-lg shadow-primary/30 flex items-center justify-center">
              <MessageSquare className="w-20 h-20 text-white opacity-90" />
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                Discussion Forums
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-muted-foreground antialiased">
                Engage in discussions with fellow members, ask questions, share insights, and collaborate on AI projects.
              </p>
            </div>
            <div className="p-6 pt-0">
              <Link 
                to="/forums" 
                className="select-none rounded-lg bg-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none inline-flex items-center"
              >
                Join Discussions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Partners</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Collaborating with leading organizations to advance AI innovation in Africa.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 items-center max-w-6xl mx-auto px-4">
          <div className="bg-card p-6 rounded-lg w-36 h-36 flex items-center justify-center">
            <img src="/logos/partner1.svg" alt="Partner 1" className="max-w-full max-h-full" />
          </div>
          <div className="bg-card p-6 rounded-lg w-36 h-36 flex items-center justify-center">
            <img src="/logos/partner2.svg" alt="Partner 2" className="max-w-full max-h-full" />
          </div>
          <div className="bg-card p-6 rounded-lg w-36 h-36 flex items-center justify-center">
            <img src="/logos/partner3.svg" alt="Partner 3" className="max-w-full max-h-full" />
          </div>
          <div className="bg-card p-6 rounded-lg w-36 h-36 flex items-center justify-center">
            <img src="/logos/partner4.svg" alt="Partner 4" className="max-w-full max-h-full" />
          </div>
          <div className="bg-card p-6 rounded-lg w-36 h-36 flex items-center justify-center">
            <img src="/logos/partner5.svg" alt="Partner 5" className="max-w-full max-h-full" />
          </div>
          <div className="bg-card p-6 rounded-lg w-36 h-36 flex items-center justify-center">
            <img src="/logos/partner6.svg" alt="Partner 6" className="max-w-full max-h-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
