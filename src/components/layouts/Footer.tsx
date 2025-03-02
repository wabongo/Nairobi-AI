import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail } from 'lucide-react';
import logoImage from '../../assets/NairobiAI_Logo_HighRes.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Intro */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logoImage} alt="Nairobi AI Logo" className="h-10" />
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Empowering Nairobi's AI community to collaborate, learn, and innovate together.
            </p>
            <div className="flex space-x-4 mt-4">
              <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="https://facebook.com" icon={<Facebook size={18} />} label="Facebook" />
              <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialLink href="https://github.com" icon={<Github size={18} />} label="GitHub" />
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Platform</h3>
            <ul className="space-y-2">
              <FooterLink to="/events">Events</FooterLink>
              <FooterLink to="/resources">Resources</FooterLink>
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/forums">Forums</FooterLink>
              <FooterLink to="/jobs">Jobs</FooterLink>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/team">Our Team</FooterLink>
              <FooterLink to="/partners">Partners</FooterLink>
              <FooterLink to="/sponsorship">Sponsorship</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for updates on the latest AI events, resources, and news.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md bg-background border border-border w-full focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors"
              >
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            {currentYear} Nairobi AI. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FooterLink to="/privacy" className="text-xs">Privacy Policy</FooterLink>
            <FooterLink to="/terms" className="text-xs">Terms of Service</FooterLink>
            <FooterLink to="/code-of-conduct" className="text-xs">Code of Conduct</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const FooterLink = ({ to, children, className = '' }: FooterLinkProps) => (
  <li>
    <Link
      to={to}
      className={`text-muted-foreground hover:text-primary transition-colors ${className}`}
    >
      {children}
    </Link>
  </li>
);

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Footer;
