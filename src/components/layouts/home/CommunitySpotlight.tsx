import { useEffect, useState, useRef } from 'react';
import { ArrowRight, ArrowUpRightFromCircle, ArrowUpRightFromSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CommunitySpotlightProps {
  onSectionChange?: (section: string) => void;
}

const CommunitySpotlight = ({ onSectionChange }: CommunitySpotlightProps) => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const members = [
    {
      name: "Arthur Adinda",
      role: "Community Manager",
      imgSrc: "src/assets/Arthur_PassportPhoto.jpg",
      linkedIn: "https://www.linkedin.com/in/arthur-adinda-3a1266120/",
      website: "",
      fact: "Passionate about democratizing AI education across Kenya."
    },
    {
      name: "Willie Macharia",
      role: "Community Organiser",
      imgSrc: "src/assets/willy-nganga.jpg",
      linkedIn: "https://www.linkedin.com/in/willie-ng-ang-a-macharia-121518102/",
      website: "",
      fact: "Organized over 15 AI workshops connecting students with industry experts."
    },
    {
      name: "Betty Kamande",
      role: "Co-organiser",
      imgSrc: "src/assets/betty-kamande.jpg",
      linkedIn: "https://www.linkedin.com/in/bettykamande/",
      website: "",
      fact: "Advocate for women in AI and tech leadership across East Africa."
    },
    {
      name: "Dancan Angwenyi",
      role: "Strategy",
      imgSrc: "src/assets/dancan.jpg",
      linkedIn: "https://www.linkedin.com/in/dancan-angwenyi-687752101/",
      website: "",
      fact: "Developing strategic partnerships to grow AI innovation in Nairobi."
    },
    {
      name: "Grace Ngari",
      role: "Community Manager",
      imgSrc: "src/assets/grace-ngari.jpg",
      linkedIn: "https://www.linkedin.com/in/grace-ngari-2b8a01245/",
      website: "",
      fact: "Believes in the power of community to drive technological advancement."
    }
  ]

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
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-700 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: '400ms' }}
        >
          {members.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col group relative h-[400px] md:h-[450px]"
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
            >
              {/* Full-size image container */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-purple-400 overflow-hidden">
                <img
                  src={member.imgSrc}
                  alt={`${member.name} - ${member.role}`}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  onError={(e) => {
                    // If image fails to load, show a gradient with initials
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      // Create initials from name
                      const initials = member.name.split(' ').map(n => n[0]).join('');
                      // Add initials element if it doesn't exist
                      if (!parent.querySelector('.member-initials')) {
                        const initialsEl = document.createElement('div');
                        initialsEl.className = 'member-initials absolute inset-0 flex items-center justify-center text-6xl font-bold text-white';
                        initialsEl.textContent = initials;
                        parent.appendChild(initialsEl);
                      }
                    }
                  }}
                />
                
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                {/* Member info at bottom of card */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="text-sm font-medium uppercase tracking-wider text-blue-200">{member.role}</p>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  
                  {/* Social links */}
                  <div className="flex space-x-3 mt-3">
                    {member.linkedIn && (
                      <a 
                        href={member.linkedIn} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-300 hover:text-blue-100 transition-colors"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                      </a>
                    )}
                    
                    {member.website && (
                      <a 
                        href={member.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-300 hover:text-blue-100 transition-colors"
                        aria-label={`${member.name}'s website`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Hover overlay with fact */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-900/90 to-black/95 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-8 group-hover:translate-y-0">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-4">{member.name}</h3>
                  <p className="text-lg italic mb-6 text-blue-200">"<span className="text-white">{member.fact}</span>"</p>
                  
                  {/* Conditionally render Link or anchor based on URL type */}
                  {member.linkedIn && (
                    member.linkedIn.startsWith('http') ? (
                      <a 
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200"
                      >
                        View Profile <ArrowUpRightFromSquare className="inline-block ml-1 h-4 w-4" />
                      </a>
                    ) : (
                      <Link 
                        to={member.linkedIn} 
                        className="inline-block px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200"
                      >
                        View Profile <ArrowRight className="inline-block ml-1 h-4 w-4" />
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySpotlight;
