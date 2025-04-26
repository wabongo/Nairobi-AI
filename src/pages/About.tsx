// React is automatically imported by JSX transform
import { useState } from 'react';
import CommunitySpotlight from '../components/layouts/about/CommunitySpotlight';
import { Link } from 'react-router-dom';
import Spinner from '../components/layouts/Spinner';

const About = () => {
  const [imageLoading, setImageLoading] = useState(true);
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center overflow-x-hidden">
      {/* Hero Section with Nairobi Skyline */}
      <section className="relative w-full h-screen min-h-[100vh] flex items-center justify-center overflow-hidden mb-8 md:mb-16">
        {/* Full opacity image with fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-800 to-pink-700" id="image-fallback"></div>
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-800 to-pink-700">
            <Spinner size="lg" color="white" text="Loading image..." />
          </div>
        )}
        <img
          src="https://cdn.pixabay.com/photo/2017/09/08/21/32/nairobi-2730268_1280.jpg"
          alt="Nairobi Skyline"
          className="absolute w-full h-full object-cover object-center"
          loading="eager"
          onLoad={() => setImageLoading(false)}
          onError={(e) => {
            // If image fails to load, show the fallback gradient
            setImageLoading(false);
            const target = e.currentTarget;
            target.style.display = 'none';
            document.getElementById('image-fallback')?.classList.add('animate-gradient-x');
          }}
        />
        {/* Darker overlay for more contrast and bolder text appearance */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        
        {/* Hero content with bolder styling */}
        <div className="relative z-10 text-center px-4 py-8 md:py-0 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-6 md:mb-8 tracking-tight text-white drop-shadow-xl" style={{textShadow: '0 4px 8px rgba(0,0,0,0.3)'}}>
            NAIROBI AI
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white max-w-xs sm:max-w-lg md:max-w-2xl mx-auto drop-shadow-lg" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>
            Empowering Nairobi's AI Community to Innovate, Connect, and Lead the Future.
          </p>
        </div>
      </section>

      {/* Origins */}
      <section className="w-full max-w-6xl mb-12 md:mb-20 pl-4 sm:pl-8 py-8 md:py-10 bg-transparent mx-4 sm:mx-0 transform transition-all duration-300">
        <h2 className="text-xl md:text-2xl font-black mb-4 md:mb-6 text-indigo-800">OUR ORIGINS</h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">
          Nairobi AI was born from a shared vision: to create a vibrant hub where curiosity, collaboration, and technology converge. What started as a small gathering of AI enthusiasts has grown into a dynamic movement, uniting students, professionals, and innovators across Nairobi and beyond.
        </p>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
          Founded in 2020, we've grown from meetups of just 12 members to a thriving community of over 500 AI enthusiasts. Our journey reflects Nairobi's emergence as a tech powerhouse in Africa.
        </p>
        <div className="mt-6 flex items-center">
          <div className="h-1 w-16 bg-indigo-600 mr-3"></div>
          <span className="text-sm font-bold text-indigo-600">EST. 2020</span>
        </div>
      </section>

      {/* Goals & Aspirations */}
      <section className="w-full max-w-6xl mb-12 md:mb-20 pl-4 sm:pl-8 py-8 md:py-10 bg-transparent mx-4 sm:mx-0 transform transition-all duration-300">
        <h2 className="text-xl md:text-2xl mb-4 md:mb-6 text-pink-800">ASPIRATIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
          <div className="bg-white/80 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-pink-700 mb-2">01. FOSTER COMMUNITY</h3>
            <p className="text-gray-800">Build a supportive network for AI learning and growth, creating spaces where knowledge flows freely and collaboration thrives.</p>
          </div>
          <div className="bg-white/80 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-pink-700 mb-2">02. DRIVE INNOVATION</h3>
            <p className="text-gray-800">Encourage real-world projects and creative problem-solving that address local challenges with global technologies.</p>
          </div>
          <div className="bg-white/80 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-pink-700 mb-2">03. PROMOTE INCLUSION</h3>
            <p className="text-gray-800">Make AI accessible to all, regardless of background or experience, ensuring diverse voices shape our technological future.</p>
          </div>
          <div className="bg-white/80 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-pink-700 mb-2">04. SHAPE THE FUTURE</h3>
            <p className="text-gray-800">Inspire the next generation of African AI leaders who will transform industries and create positive social impact.</p>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <div className="h-1 w-16 bg-pink-600 mr-3"></div>
          <span className="text-sm font-bold text-pink-600">OUR MISSION</span>
        </div>
      </section>

      
      {/* Vision Statement */}
      <section className="w-full max-w-6xl mb-12 md:mb-20 pl-4 sm:pl-8 py-8 md:py-10 bg-transparent mx-4 sm:mx-0 transform transition-all duration-300">
        <h2 className="text-xl md:text-2xl mb-4 md:mb-6 text-emerald-800">OUR VISION</h2>
        <div className="bg-white/80 p-6 rounded-lg mb-6">
          <p className="text-lg md:text-xl font-medium text-emerald-700 leading-relaxed italic">
            "We envision Nairobi as Africa's AI capital—a place where bold ideas hatch, talent flourishes, and technology shapes a brighter, more inclusive future for all."
          </p>
        </div>
        <p className="text-base md:text-lg   text-gray-800 leading-relaxed">
          By 2030, we aim to establish Nairobi as a globally recognized hub for AI innovation, with our community members leading groundbreaking research, launching successful startups, and implementing AI solutions that address Africa's most pressing challenges.
        </p>
        <div className="mt-6 flex items-center">
          <div className="h-1 w-16 bg-emerald-600 mr-3"></div>
          <span className="text-sm font-bold text-emerald-600">LOOKING FORWARD</span>
        </div>
      </section>

      {/* Community Spotlight */}
      <section className="w-full max-w-5xl mb-20 bg-transparent">
        <CommunitySpotlight />
      </section>

      {/* Call to Action */}
      <section className="w-full min-h-[30vh] md:min-h-[50vh] max-w-2xl text-center mt-8 bg-gradient-to-b from-white via-blue-50 to-white flex items-center justify-center px-4">
        <Link to="/register" className="inline-block bg-black text-white font-bold py-3 md:py-4 px-6 md:px-10 rounded-full text-base md:text-lg shadow-lg hover:bg-gray-900 transition-colors duration-200">Become a Member</Link>
      </section>
    </main>
  );
};

export default About;
