import React from 'react';
const InstagramShowcase = () => {
  return <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Work in Action</h2>
          <p className="text-lg text-gray-600 mb-8">
            See the magic we create for our clients on Instagram
          </p>
          <a href="https://www.instagram.com/snaild.it/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-white border border-gray-200 hover:border-lime-300 text-gray-700 hover:text-lime-600 px-6 py-3 rounded-full transition-colors shadow-sm hover:shadow-md">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="font-semibold">Follow @snaild.it</span>
          </a>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-lime-600 mb-2">5,000+</div>
              <div className="text-gray-600">Engaged Followers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-lime-600 mb-2">1 Million +</div>
              <div className="text-gray-600">Views</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-lime-600 mb-2">Since Day 1</div>
              <div className="text-gray-600">Profitable Journey</div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-gray-50 rounded-xl">
            <p className="text-gray-700 text-center italic">
              "Every post, every story, every design we share converts into real business. 
              We're not just building a following — we're building meaningful client relationships."
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default InstagramShowcase;