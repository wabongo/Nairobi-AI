import { ArrowRightCircle, ArrowUpRightFromCircle, ArrowUpRightFromSquare } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Community = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-20 my-8 bg-[#cf01922]">
      {/* Image */}
      <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
        <img
          src="https://images.pexels.com/photos/4045699/pexels-photo-4045699.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="hatching community"
          className="w-72 h-96 md:w-80 md:h-full transition-transform duration-300 ease-out hover:scale-110 rounded-xl"
          loading="eager"
        />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left max-w-xl text-gray-900">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          A Hatching Group
        </h2>
        <p className="text-lg md:text-xl mb-6 font-light">
          We are a thriving and vibrant community offering a platform where curious minds crack open, connections take flight, and AI-driven ingenuity shapes tomorrow. Ready to join the nest?
        </p>
        <Link
          to="/about"
          className="inline-block border border-black text-black font-semibold py-1.5 px-3 rounded-full text-lg shadow hover:bg-gray-100 transition-all duration-200 hover:scale-105"
        >
          About Us
          <ArrowUpRightFromSquare className="inline-block ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default Community;
