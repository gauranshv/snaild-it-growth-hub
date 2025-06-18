
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
          
          <div className="bg-lime-100 border-l-4 border-lime-500 p-6 rounded-r-lg">
            <p className="text-lg font-bold text-gray-900 mb-2">
              🎯 Perfect for someone who wants to learn how to run an online business
            </p>
            <p className="text-gray-700">
              This isn't just an assistant role — it's a front-row seat to building, scaling, and monetizing a creative business from the inside out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
