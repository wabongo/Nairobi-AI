import { useState } from 'react';

// Import segmented components
import Hero from '../components/layouts/home/Hero';
import Statistics from '../components/layouts/home/Statistics';
import CommunitySpotlight from '../components/layouts/home/CommunitySpotlight';
import CallToAction from '../components/layouts/home/CallToAction';
import Partners from '../components/layouts/home/Partners';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('hero');
  
  // Handle section changes for smooth scrolling and transitions
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div id="hero">
        <Hero onSectionChange={handleSectionChange} />
      </div>
      
      {/* Statistics Section */}
      <div id="statistics">
        <Statistics onSectionChange={handleSectionChange} />
      </div>
      
      {/* Community Spotlight Section */}
      <div id="community">
        <CommunitySpotlight onSectionChange={handleSectionChange} />
      </div>
      
      {/* Call to Action Section */}
      <div id="cta">
        <CallToAction onSectionChange={handleSectionChange} />
      </div>
      
      {/* Partners Section */}
      <div id="partners">
        <Partners onSectionChange={handleSectionChange} />
      </div>
    </div>
  );
};

export default HomePage;
