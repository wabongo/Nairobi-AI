import { Link } from "react-router-dom";
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

  const navItems: NavItem[] = [
    { to: "/", label: "Home", icon: <Home className="h-5 w-5 mr-3" /> },
    { to: "/events", label: "Events", icon: <Calendar className="h-5 w-5 mr-3" /> },
    { to: "/resources", label: "Resources", icon: <BookOpen className="h-5 w-5 mr-3" /> },
    { to: "/projects", label: "Projects", icon: <FolderGit2 className="h-5 w-5 mr-3" /> },
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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-4 left-0 right-0 mx-auto max-w-[95%] md:max-w-[90%] z-50 transition-all duration-300 rounded-xl",
        scrolled ? "py-3 backdrop-blur-md bg-white/20 shadow-lg" : "py-4 bg-white/10 backdrop-blur-[10px]",
        "text-gray-800"
      )}
    >
      <div className="px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center space-x-4"
        >
          <div className="relative overflow-hidden rounded-full">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              src={logoImage}
              alt="Nairobi AI Logo"
              className="h-10 w-10 rounded-full"
            />
          </div>
          <div className="text-xl font-bold tracking-tight flex flex-row items-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`${scrolled ? 'text-gray-800' : 'text-gray-800'}`}
            >
              Nairobi
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`${scrolled ? 'text-blue-600' : 'text-blue-500'} ml-1`}
            >
              AI
            </motion.span>
          </div>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} scrolled={scrolled}>
              {item.label}
            </NavLink>
          ))}

          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <Link
              to="/profile"
              className="group relative overflow-hidden text-base px-8 py-4 rounded-full font-medium bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
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
                    <div className="relative overflow-hidden rounded-full">
                      <img
                        src={logoImage}
                        alt="Nairobi AI Logo"
                        className="h-8 w-8 rounded-full"
                      />
                    </div>
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
                    to="/profile"
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
  return (
    <Link
      to={to}
      className={cn(
        "font-medium transition-all duration-300 relative group py-2",
        scrolled ? "text-gray-700 hover:text-blue-600" : "text-gray-700 hover:text-blue-500",
        className
      )}
    >
      {children}
      <span
        className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500"
      ></span>
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
