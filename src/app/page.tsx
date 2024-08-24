// components/HeroSection.tsx
import Testimonials from "@/components/global/Testimonials";
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        {/* Hero Title and Button */}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          PATH TO SELF-DISCOVERY
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          because <span className="font-semibold">Mental Health</span> matters!
        </p>
        <button className="bg-teal-600 text-white py-2 px-6 rounded-lg hover:bg-teal-700 transition duration-300 mb-8">
          Get Started &rarr;
        </button>

        {/* Hero Image */}
        <div className="flex justify-center mb-12">
          <img
            src="./image 2.png" // Replace with the actual image path
            alt="Mental Health Illustration"
            className="max-w-full h-auto"
          />
        </div>

        {/* New Text Content */}
        <div className="text-left align-baseline max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Tackling Impostor Phenomena – a step out for a better life
          </h2>
          <p className="text-gray-700 mb-6">
            The concept of being constantly on the move to either achieve goals or make ends meet, be it socially, academically, or professionally at times comes at any cost of evaluating oneself.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Impostor Phenomena
          </h3>
          <p className="text-gray-700 mb-6">
            “Impostor phenomena (IP) is an outcome that results from behavioral health processing when he or she experiences self-doubt concerning intelligence, skill, and accomplishments.” (Huecker et al 2023)
          </p>
          <p className="text-gray-700 mb-6">
            When one internalizes this behavior, they are likely to develop pervasive or atypical feelings of self-doubt, anxiety, depression or apprehension of rating success as non-rewarding or non-existent!
            So, Welcome to an at-ease approach to addressing Impostor Phenomena.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-2">
            About this Test
          </h3>
          <p className="text-gray-700 mb-6">
            This Small program is a seven-step process that helps you in the journey of discovery. It aims to provide you with an easy track that can address how one can overcome self-doubt, build resilience and overall address either the occurrence or presence of IP.
          </p>

          <p className="text-gray-700 italic">
            (Note: Feel free to go through the program if it is just for the experience or to enjoy some uplifting of self in a self-asserted manner)
          </p>
        </div>
      </div>
      <Testimonials />
    </section>

    
  );
};

export default HeroSection;