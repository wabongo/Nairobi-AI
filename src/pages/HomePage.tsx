import { useState } from 'react';

// Import segmented components
import Hero from '../components/layouts/home/Hero';
import Statistics from '../components/layouts/home/Statistics';
import Hatch from '../components/layouts/home/Hatch';
import CommunitySpotlight from '../components/layouts/home/CommunitySpotlight';
import CallToAction from '../components/layouts/home/CallToAction';
import Partners from '../components/layouts/home/Partners';
import SmoothScrollSection from '../components/layouts/home/SmoothScrollSection';

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
      <SmoothScrollSection id="hero">
        <Hero onSectionChange={handleSectionChange} />
      </SmoothScrollSection>

      {/* Community Section (inserted after Hero) */}
      <SmoothScrollSection id="community-main">
        <Hatch />
      </SmoothScrollSection>

      {/* Statistics Section */}
      <SmoothScrollSection id="statistics">
        <Statistics onSectionChange={handleSectionChange} />
      </SmoothScrollSection>

      {/* Community Spotlight Section */}
      {/* <SmoothScrollSection id="community">
        <CommunitySpotlight onSectionChange={handleSectionChange} />
      </SmoothScrollSection> */}

      {/* Call to Action Section */}
      <SmoothScrollSection id="cta">
        <CallToAction onSectionChange={handleSectionChange} />
      </SmoothScrollSection>

      {/* Partners Section */}
      <SmoothScrollSection id="partners">
        <Partners onSectionChange={handleSectionChange} />
      </SmoothScrollSection>
    </div>
  );
};

export default HomePage;
