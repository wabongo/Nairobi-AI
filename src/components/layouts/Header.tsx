import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun, Home, Calendar, BookOpen, FolderGit2, MessageSquare, Briefcase, LogIn, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import logoImage from '../../assets/NairobiAI_Logo_HighRes.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check user's preference for dark mode - default to dark
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    
    // Add scroll listener
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300",
      isDarkMode 
        ? "bg-black/95 border-blue-900/30 text-white" 
        : "bg-white/95 border-blue-200/30 text-blue-950"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className={cn(
            "relative overflow-hidden rounded-full p-0.5",
            isDarkMode
              ? "bg-gradient-to-r from-[#003366] via-[#0066cc] to-[#0099ff]"
              : "bg-gradient-to-r from-[#0066cc] via-[#0099ff] to-[#00ccff]"
          )}>
            <img 
              src={logoImage} 
              alt="Nairobi AI Logo" 
              className={cn(
                "h-10 w-10 rounded-full", 
                isDarkMode ? "bg-black" : "bg-white"
              )} 
            />
          </div>
          <span className={cn(
            "text-2xl font-bold tracking-tighter bg-clip-text text-transparent",
            isDarkMode
              ? "bg-gradient-to-r from-[#4d9fff] to-[#00ccff]"
              : "bg-gradient-to-r from-[#0066cc] to-[#0099ff]"
          )}>
            Nairobi AI
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/forums">Forums</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          
          <button 
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-full transition-all duration-300 relative overflow-hidden group",
              isDarkMode 
                ? "text-blue-300 hover:text-[#0099ff] hover:bg-[#0066cc]/10" 
                : "text-blue-600 hover:text-[#0066cc] hover:bg-[#0099ff]/10"
            )}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            <span className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full",
              isDarkMode
                ? "bg-gradient-to-r from-[#003366]/20 to-[#0099ff]/10"
                : "bg-gradient-to-r from-[#0066cc]/10 to-[#00ccff]/5"
            )}></span>
            {isDarkMode ? 
              <Sun className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" /> : 
              <Moon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
            }
          </button>
          
          <Link 
            to="/profile" 
            className="relative overflow-hidden rounded-md group"
          >
            <span className={cn(
              "absolute inset-0 opacity-100 group-hover:opacity-90 transition-opacity",
              isDarkMode
                ? "bg-gradient-to-r from-[#003366] via-[#0066cc] to-[#0099ff]"
                : "bg-gradient-to-r from-[#0066cc] via-[#0099ff] to-[#00ccff]"
            )}></span>
            <span className="relative block px-5 py-2.5 text-white font-medium transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
              Sign In
            </span>
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button 
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-full transition-colors",
              isDarkMode 
                ? "text-blue-300 hover:text-[#0099ff]" 
                : "text-blue-600 hover:text-[#0066cc]"
            )}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <button 
            onClick={toggleMenu} 
            className={cn(
              "p-2 rounded-md transition-all duration-300",
              isMenuOpen 
                ? "rotate-90 bg-blue-500/10" 
                : "rotate-0",
              isDarkMode
                ? "text-blue-300 hover:bg-[#0066cc]/10"
                : "text-blue-600 hover:bg-[#0099ff]/10"
            )}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out",
          isMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        )}
        onClick={toggleMenu}
      >
        {/* Backdrop */}
        <div 
          className={cn(
            "absolute inset-0 transition-opacity duration-300",
            isDarkMode 
              ? "bg-black/80 backdrop-blur-sm" 
              : "bg-blue-950/20 backdrop-blur-sm"
          )}
        />
        
        {/* Menu Panel */}
        <div 
          className={cn(
            "absolute top-[80px] right-0 h-[calc(100vh-80px)] w-full max-w-sm overflow-y-auto transition-transform duration-300 ease-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
            isDarkMode 
              ? "bg-gradient-to-b from-[#001a33] to-black border-l border-blue-900/30" 
              : "bg-gradient-to-b from-white to-blue-50 border-l border-blue-200/50"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 space-y-6">
            <div className="space-y-1">
              <h3 className={cn(
                "text-sm font-medium uppercase tracking-wider opacity-70",
                isDarkMode ? "text-blue-300" : "text-blue-600"
              )}>
                Navigation
              </h3>
              
              <div className="pt-2">
                <MobileNavLink to="/" onClick={toggleMenu}>
                  <Home className="h-5 w-5 mr-3" />
                  <span>Home</span>
                  <ChevronRight className="h-4 w-4 ml-auto opacity-60" />
                </MobileNavLink>
                
                <MobileNavLink to="/events" onClick={toggleMenu}>
                  <Calendar className="h-5 w-5 mr-3" />
                  <span>Events</span>
                  <ChevronRight className="h-4 w-4 ml-auto opacity-60" />
                </MobileNavLink>
                
                <MobileNavLink to="/resources" onClick={toggleMenu}>
                  <BookOpen className="h-5 w-5 mr-3" />
                  <span>Resources</span>
                  <ChevronRight className="h-4 w-4 ml-auto opacity-60" />
                </MobileNavLink>
                
                <MobileNavLink to="/projects" onClick={toggleMenu}>
                  <FolderGit2 className="h-5 w-5 mr-3" />
                  <span>Projects</span>
                  <ChevronRight className="h-4 w-4 ml-auto opacity-60" />
                </MobileNavLink>
                
                <MobileNavLink to="/forums" onClick={toggleMenu}>
                  <MessageSquare className="h-5 w-5 mr-3" />
                  <span>Forums</span>
                  <ChevronRight className="h-4 w-4 ml-auto opacity-60" />
                </MobileNavLink>
                
                <MobileNavLink to="/jobs" onClick={toggleMenu}>
                  <Briefcase className="h-5 w-5 mr-3" />
                  <span>Jobs</span>
                  <ChevronRight className="h-4 w-4 ml-auto opacity-60" />
                </MobileNavLink>
              </div>
            </div>
            
            <div className="pt-6 border-t border-blue-500/10">
              <Link 
                to="/profile" 
                onClick={toggleMenu}
                className={cn(
                  "flex items-center justify-center w-full py-3 px-4 rounded-md font-medium",
                  "transition-all duration-300 hover:shadow-md",
                  isDarkMode
                    ? "bg-gradient-to-r from-[#003366] via-[#0066cc] to-[#0099ff] text-white hover:brightness-110"
                    : "bg-gradient-to-r from-[#0066cc] via-[#0099ff] to-[#00ccff] text-white hover:brightness-105"
                )}
              >
                <LogIn className="h-5 w-5 mr-2" />
                Sign In
              </Link>
              
              <div className="mt-6 flex items-center justify-between">
                <span className={cn(
                  "text-sm",
                  isDarkMode ? "text-blue-300/70" : "text-blue-600/70"
                )}>
                  {isDarkMode ? "Dark Mode" : "Light Mode"}
                </span>
                
                <button
                  onClick={toggleTheme}
                  className={cn(
                    "relative h-6 w-12 rounded-full transition-colors duration-300",
                    isDarkMode 
                      ? "bg-blue-900/50" 
                      : "bg-blue-200"
                  )}
                >
                  <span className={cn(
                    "absolute top-1 h-4 w-4 rounded-full transition-all duration-300",
                    isDarkMode 
                      ? "left-7 bg-blue-300" 
                      : "left-1 bg-blue-600"
                  )}></span>
                </button>
              </div>
            </div>
            
            <div className="pt-6 border-t border-blue-500/10">
              <h3 className={cn(
                "text-lg font-bold",
                isDarkMode ? "text-white" : "text-blue-950"
              )}>
                Explore Our Platform
              </h3>
              <p className={cn(
                "mt-2 text-sm",
                isDarkMode ? "text-blue-200/70" : "text-blue-700/80"
              )}>
                Discover the tools and resources available to our community members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

// Enhanced desktop navigation link with animated underline effect
const NavLink = ({ to, className, children }: NavLinkProps) => {
  const isDarkMode = document.documentElement.classList.contains('dark');
  
  return (
    <Link
      to={to}
      className={cn(
        "font-medium transition-all duration-300 relative group py-2",
        isDarkMode ? "text-blue-300 hover:text-white" : "text-blue-700 hover:text-blue-950",
        className
      )}
    >
      {children}
      <span className={cn(
        "absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300",
        isDarkMode 
          ? "bg-gradient-to-r from-[#0066cc] to-[#0099ff]" 
          : "bg-gradient-to-r from-[#0066cc] to-[#00ccff]"
      )}></span>
    </Link>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

// Enhanced mobile navigation link with subtle animation
const MobileNavLink = ({ to, className, onClick, children }: MobileNavLinkProps) => {
  const isDarkMode = document.documentElement.classList.contains('dark');
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "flex items-center py-3 px-4 rounded-lg mb-1 transition-all duration-200",
        isDarkMode 
          ? "text-blue-100 hover:bg-blue-900/20 active:bg-blue-900/30" 
          : "text-blue-800 hover:bg-blue-100 active:bg-blue-200",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default Header;
