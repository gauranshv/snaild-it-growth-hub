
import React from 'react';

const WhyExciting = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">🌟 Why This is Exciting:</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="text-3xl mb-4">👥</div>
            <p className="text-gray-700">Work <strong>directly with the founder</strong> of a fast-growing design-led business</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="text-3xl mb-4">🎨</div>
            <p className="text-gray-700">Get to be part of a purpose-driven, artistic brand with deep client impact</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="text-3xl mb-4">🧠</div>
            <p className="text-gray-700">Exposure to both business-building and design-thinking — no two days will feel the same</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="text-3xl mb-4">✨</div>
            <p className="text-gray-700">Flexible work environment with creative freedom and open brainstorming sessions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyExciting;
