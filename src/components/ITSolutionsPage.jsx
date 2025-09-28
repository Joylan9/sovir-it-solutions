import React from 'react';
import HeroSection from './sections/HeroSection';
import ServicesOverview from './sections/ServicesOverview';
import DetailedServices from './sections/DetailedServices';
import WhyChooseUs from './sections/WhyChooseUs';
import RecommendedServices from './sections/RecommendedServices';

const ITSolutionsPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <DetailedServices />
      <WhyChooseUs />
      <RecommendedServices />
    </div>
  );
};

export default ITSolutionsPage;
