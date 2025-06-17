
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-lime-50 to-yellow-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join the Snaild.it Team
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We're Not Just Building a Following — We're Building a Brand That's Brought in Business Since Day 1.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Snaild.it has been creating bespoke wedding stationery, animated invites, and magical design experiences that have 
            <span className="font-semibold text-lime-700"> actually converted into real business</span> from the very beginning. 
            With <span className="font-semibold">5,000+ engaged followers</span> and a growing list of delighted clients, 
            we're scaling intentionally — and we're looking for the right person to help us do it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
