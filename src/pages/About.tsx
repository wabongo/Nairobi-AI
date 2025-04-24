import React from 'react';
import CommunitySpotlight from '../components/layouts/home/CommunitySpotlight';

const About = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center px-4 py-12">
      {/* Page Title */}
      <section className="w-full max-w-3xl mb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-black">About Nairobi AI</h1>
        <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-2xl mx-auto">Empowering Nairobi's AI Community to Innovate, Connect, and Lead the Future.</p>
      </section>

      {/* Origins */}
      <section className="w-full max-w-2xl mb-20 border-l-4 border-black pl-8 py-8 bg-white/90 shadow-sm">
        <h2 className="text-3xl font-bold mb-4 text-black">Our Origins</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Nairobi AI was born from a shared vision: to create a vibrant hub where curiosity, collaboration, and technology converge. What started as a small gathering of AI enthusiasts has grown into a dynamic movement, uniting students, professionals, and innovators across Nairobi and beyond.
        </p>
      </section>

      {/* Goals & Aspirations */}
      <section className="w-full max-w-2xl mb-20 border-l-4 border-black pl-8 py-8 bg-white/90 shadow-sm">
        <h2 className="text-3xl font-bold mb-4 text-black">Goals & Aspirations</h2>
        <ul className="list-disc text-lg text-gray-700 ml-4 space-y-2">
          <li><span className="font-semibold text-black">Foster Community:</span> Build a supportive network for AI learning and growth.</li>
          <li><span className="font-semibold text-black">Drive Innovation:</span> Encourage real-world projects and creative problem-solving.</li>
          <li><span className="font-semibold text-black">Promote Inclusion:</span> Make AI accessible to all, regardless of background or experience.</li>
          <li><span className="font-semibold text-black">Shape the Future:</span> Inspire the next generation of African AI leaders.</li>
        </ul>
      </section>

      {/* Community Spotlight */}
      <section className="w-full max-w-5xl mb-20">
        <h2 className="text-3xl font-bold mb-8 text-black text-center">Community Spotlight</h2>
        <CommunitySpotlight />
      </section>

      {/* Vision Statement */}
      <section className="w-full max-w-2xl mb-20 border-l-4 border-black pl-8 py-8 bg-white/90 shadow-sm">
        <h2 className="text-3xl font-bold mb-4 text-black">Our Vision</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We envision Nairobi as Africa’s AI capital—a place where bold ideas hatch, talent flourishes, and technology shapes a brighter, more inclusive future for all.
        </p>
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-2xl text-center mt-8">
        <a href="/" className="inline-block bg-black text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:bg-gray-900 transition-colors duration-200">Back to Home</a>
      </section>
    </main>
  );
};

export default About;
