import React from 'react';

const RoleDetails = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🎯 Executive Assistant (Design &amp; Ops)</h2>
          
          {/* New clean design pattern for job details */}
          <div className="bg-gray-50 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl mb-2">📍</div>
                <div className="font-medium text-gray-900">Location</div>
                <div className="text-sm text-gray-600">Remote / Bangalore (hybrid preferred)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">⏰</div>
                <div className="font-medium text-gray-900">Schedule</div>
                <div className="text-sm text-gray-600">Part-time or Full-time (Flexible)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🚀</div>
                <div className="font-medium text-gray-900">Start Date</div>
                <div className="text-sm text-gray-600">Immediate</div>
              </div>
            </div>
          </div>
          
          {/* Moved section from HeroSection */}
          <div className="bg-lime-100 border-l-4 border-lime-500 p-6 rounded-r-lg max-w-4xl mx-auto mt-8">
            <p className="text-lg font-bold text-gray-900 mb-2">
              🎯 Perfect for someone who wants to learn how to run an online business
            </p>
            <p className="text-gray-700">
              This isn't just an assistant role — it's a front-row seat to building, scaling, and monetizing a creative business from the inside out.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <div className="bg-lime-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">💼 What You'll Own:</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-lime-800 mb-3">1. Client Communication & Community Management</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Promptly respond to DMs on Instagram (and potentially email/WhatsApp) to nurture leads</li>
                  <li>• Act as the bridge between Snehal and the community — friendly, warm, and efficient</li>
                  <li>• Maintain a clear log of all ongoing communication</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-lime-800 mb-3">2. Calendar, Deadlines & Operations Management</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Keep Snehal updated with daily tasks, ongoing design projects, and client timelines</li>
                  <li>• Maintain an organized schedule: client meetings, project delivery dates, and workshop planning</li>
                  <li>• Follow up with vendors, collaborators, and clients where needed</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-lime-800 mb-3">3. Creative Strategy & Monetisation Support</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Collaborate on planning new monetisation ideas — workshops, digital templates, collaborative drops</li>
                  <li>• Assist in building pitch decks, mood boards, visual concepts, and internal brand documents</li>
                  <li>• Be a brainstorming buddy to bring new design or business ideas to life</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-lime-800 mb-3">4. Social Media Support</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Cross-posting content across different social media platforms</li>
                  <li>• Brainstorming creative content ideas and campaign concepts</li>
                  <li>• Moodboarding support for visual content and brand aesthetics</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🧠 We're Looking For Someone Who:</h3>
            
            <ul className="text-gray-700 space-y-4">
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">•</span>
                Is an aspiring designer who can learn from assisting behind the scenes
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">•</span>
                Has <strong> strong bias for action</strong>: you're self-driven and don't wait to be told what to do
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">•</span>
                Has a strong eye for design & aesthetics — you don't need to be a designer, but you should know what makes things look good
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">•</span>
                Communicates clearly and professionally, especially with clients
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">•</span>
                Is obsessed with organizing things — Google Calendar, Notion, Asana, Airtable…whatever works
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">•</span>
                <strong>Bonus: </strong> Experience with Canva, Figma, or any design tools is a big plus
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleDetails;
