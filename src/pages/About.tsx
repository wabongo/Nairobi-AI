// React is automatically imported by JSX transform
import CommunitySpotlight from '../components/layouts/home/CommunitySpotlight';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center overflow-x-hidden">
      {/* Hero Section with Nairobi Skyline */}
      <section className="relative w-full h-screen min-h-[100vh] flex items-center justify-center overflow-hidden mb-8 md:mb-16">
        {/* Full opacity image with fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-800 to-pink-700" id="image-fallback"></div>
        <img
          src="https://cdn.pixabay.com/photo/2017/09/08/21/32/nairobi-2730268_1280.jpg"
          alt="Nairobi Skyline"
          className="absolute w-full h-full object-cover object-center"
          loading="eager"
          onError={(e) => {
            // If image fails to load, show the fallback gradient
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
      <section className="w-full max-w-2xl mb-12 md:mb-20 border-l-4 border-black pl-4 sm:pl-8 py-6 md:py-8 bg-white/90 shadow-sm mx-4 sm:mx-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-black">Our Origins</h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Nairobi AI was born from a shared vision: to create a vibrant hub where curiosity, collaboration, and technology converge. What started as a small gathering of AI enthusiasts has grown into a dynamic movement, uniting students, professionals, and innovators across Nairobi and beyond.
        </p>
      </section>

      {/* Goals & Aspirations */}
      <section className="w-full max-w-2xl mb-12 md:mb-20 border-l-4 border-black pl-4 sm:pl-8 py-6 md:py-8 bg-white/90 shadow-sm mx-4 sm:mx-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-black">Aspirations</h2>
        <ul className="list-disc text-base md:text-lg text-gray-700 ml-4 space-y-2">
          <li><span className="font-semibold text-black">Foster Community:</span> Build a supportive network for AI learning and growth.</li>
          <li><span className="font-semibold text-black">Drive Innovation:</span> Encourage real-world projects and creative problem-solving.</li>
          <li><span className="font-semibold text-black">Promote Inclusion:</span> Make AI accessible to all, regardless of background or experience.</li>
          <li><span className="font-semibold text-black">Shape the Future:</span> Inspire the next generation of African AI leaders.</li>
        </ul>
      </section>

      {/* Community Spotlight */}
      <section className="w-full max-w-5xl mb-20">
        {/* <h2 className="text-3xl font-bold mb-8 text-black text-center">Community Spotlight</h2> */}
        <CommunitySpotlight />
      </section>

      {/* Vision Statement */}
      <section className="w-full max-w-2xl mb-12 md:mb-20 border-l-4 border-black pl-4 sm:pl-8 py-6 md:py-8 bg-white/90 shadow-sm mx-4 sm:mx-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-black">Our Vision</h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          We envision Nairobi as Africa's AI capital—a place where bold ideas hatch, talent flourishes, and technology shapes a brighter, more inclusive future for all.
        </p>
      </section>

      {/* Call to Action */}
      <section className="w-full min-h-[30vh] md:min-h-[50vh] max-w-2xl text-center mt-8 bg-gradient-to-b from-white via-blue-50 to-white flex items-center justify-center px-4">
        <Link to="/register" className="inline-block bg-black text-white font-bold py-3 md:py-4 px-6 md:px-10 rounded-full text-base md:text-lg shadow-lg hover:bg-gray-900 transition-colors duration-200">Become a Member</Link>
      </section>
    </main>
  );
};

export default About;
