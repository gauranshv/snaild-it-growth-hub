
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import RoleDetails from '../components/RoleDetails';
import WhyExciting from '../components/WhyExciting';
import ApplicationSection from '../components/ApplicationSection';
import InstagramShowcase from '../components/InstagramShowcase';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <RoleDetails />
      <WhyExciting />
      <ApplicationSection />
      <InstagramShowcase />
      <Footer />
    </div>
  );
};

export default Index;
