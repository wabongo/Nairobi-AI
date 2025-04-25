import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Calendar,
  BookOpen,
  FolderGit2,
  MessageSquare,
  Briefcase,
  LogIn,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";
import logoImage from "../../assets/NairobiAI_Logo_HighRes.png";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setCurrentPage, setPageTheme, PageTheme } from '../../store/navigationSlice';

interface NavLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
  scrolled?: boolean;
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

interface NavItem {
  to: string;
  label: string;
  icon: React.ReactNode;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentPage, pageTheme } = useSelector((state: RootState) => state.navigation);

  const navItems: NavItem[] = [
    // { to: "/", label: "Home", icon: <Home className="h-5 w-5 mr-3" /> },
    { to: "/events", label: "Events", icon: <Calendar className="h-5 w-5 mr-3" /> },
    { to: "/resources", label: "Resources", icon: <BookOpen className="h-5 w-5 mr-3" /> },
    { to: "/projects", label: "Projects", icon: <FolderGit2 className="h-5 w-5 mr-3" /> },
    { to: "/about", label: "About", icon: <BookOpen className="h-5 w-5 mr-3" /> },
    { to: "/forums", label: "Forums", icon: <MessageSquare className="h-5 w-5 mr-3" /> },
    { to: "/jobs", label: "Jobs", icon: <Briefcase className="h-5 w-5 mr-3" /> },
  ];

  useEffect(() => {
    // Add scroll listener
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update Redux state when location changes
  useEffect(() => {
    dispatch(setCurrentPage(location.pathname));
    
    // Set page theme based on current page
    if (location.pathname === '/about') {
      dispatch(setPageTheme('dark'));
    } else if (location.pathname === '/') {
      dispatch(setPageTheme('transparent'));
    } else {
      dispatch(setPageTheme('light'));
    }
  }, [location, dispatch]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-4 left-0 right-0 mx-auto max-w-[95%] md:max-w-[90%] z-50 transition-all duration-300 rounded-full",
        scrolled ? "py-3 backdrop-blur-md bg-white/20 shadow-lg" : "py-4 bg-white/10 backdrop-blur-[10px]",
        pageTheme === 'dark' ? "text-white" : "text-gray-800",
        pageTheme === 'dark' && !scrolled && "bg-black/20"
      )}
    >
      <div className="px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center space-x-4"
        >


          <Link to="/" className={cn(
            "font-extrabold lowercase text-lg font-bold tracking-tight flex flex-row items-center rounded-full px-2 py-0.5 border",
            // Apply different styles based on page theme
            pageTheme === 'dark' ? 
              "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 border-white/30" : 
              "bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-purple-700 to-red-700 border-gradient-to-r from-blue-900 via-purple-700 to-red-700",
            // Add white glow effect on dark backgrounds
            pageTheme === 'dark' && "border"
          )}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Nairobi.
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              AI
            </motion.span>
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink 
              key={item.to} 
              to={item.to} 
              scrolled={scrolled}
              className={currentPage === item.to ? 'active' : ''}
            >
              {item.label}
            </NavLink>
          ))}

          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <Link
              to="/login"
              className="group relative overflow-hidden text-base px-8 py-4 rounded-full font-medium bg-black hover:bg-black/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              Sign In
            </Link>
          </motion.div>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="p-2 rounded-full bg-blue-50 text-blue-500 hover:bg-blue-100"
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay with Framer Motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-50"
          >
            {/* Light overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-white/95 backdrop-blur-md"
              onClick={toggleMenu}
            ></motion.div>

            {/* Menu content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-lg border-l border-gray-100"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-lg font-bold">
                      <span className="text-gray-800">Nairobi</span>
                      <span className="text-blue-500 ml-1">AI</span>
                    </span>
                  </motion.div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleMenu}
                    className="p-2 rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </motion.button>
                </div>

                <nav className="flex-1 space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <MobileNavLink to={item.to} onClick={toggleMenu}>
                        {item.icon}
                        {item.label}
                      </MobileNavLink>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-auto pt-6"
                >
                  <Link
                    to="/login"
                    className="button-primary w-full flex items-center justify-center gap-2"
                    onClick={toggleMenu}
                  >
                    <LogIn className="h-5 w-5" />
                    Sign In
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

// Enhanced desktop navigation link with animated underline effect
const NavLink = ({ to, className, children, scrolled = false }: NavLinkProps) => {
  const { currentPage, pageTheme } = useSelector((state: RootState) => state.navigation);
  const isActive = currentPage === to;
  
  return (
    <Link
      to={to}
      className={cn(
        "font-medium transition-all duration-300 relative group py-2",
        scrolled ? "text-black hover:text-blue-600" : pageTheme === 'dark' ? "text-white hover:text-blue-300" : "text-black hover:text-blue-500",
        isActive && "text-white bg-gradient-to-r from-blue-900 to-purple-700 px-2 py-1 rounded-full transition-all duration-300 ease-in-out hover:text-gray-300",
        className
      )}
    >
      {children}
      {!isActive && (
        <span
          className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500"
        ></span>
      )}
    </Link>
  );
};

// Enhanced mobile navigation link with subtle animation
const MobileNavLink = ({
  to,
  className,
  onClick,
  children,
}: MobileNavLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center w-full p-3 rounded-md transition-all duration-300 text-gray-700 hover:bg-blue-50 hover:text-blue-600",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Header;
