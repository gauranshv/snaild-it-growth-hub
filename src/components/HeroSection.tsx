
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join the Snaild.it Team
          </h1>
          
        </div>
        
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Snaild.it, by Snehal Mallya, has been creating bespoke wedding stationery, animated invites, and magical design experiences that have 
            <span className="font-semibold text-lime-600"> actually converted into real business</span> from the very beginning. 
            With <span className="font-semibold">5,000+ engaged followers</span> and a growing list of delighted clients, 
            we're scaling intentionally — and we're looking for the right person to help us do it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
