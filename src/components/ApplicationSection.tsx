
import React from 'react';

const ApplicationSection = () => {
  const handleApplyClick = () => {
    window.open('https://forms.gle/KEgSR8cpt9pwTuFWA', '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🚀 Ready to Apply?</h2>
        
        <div className="bg-white border-2 border-lime-100 rounded-2xl p-8">
          <p className="text-xl text-gray-800 mb-6">
            Fill out our application form to start your journey with Snaild.it
          </p>
          
          <button 
            onClick={handleApplyClick}
            className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-sm hover:shadow-md transform hover:scale-105"
          >
            Apply Now - Fill the Form
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
