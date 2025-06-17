
import React from 'react';

const WhyExciting = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">🌟 Why This is Exciting:</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="text-3xl mb-4">💰</div>
            <p className="text-gray-700"><strong>Paid</strong> - Rs. 15,000 per month</p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="text-3xl mb-4">🎭</div>
            <p className="text-gray-700">Get to work on the <strong>behind the scenes</strong> of business</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyExciting;
