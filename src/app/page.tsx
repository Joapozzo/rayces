'use client';

import React, { useEffect } from 'react';
import HeroSection from './components/Hero';
import StatsSection from './components/Stats';
import ValuesSection from './components/Values';
import FeaturedProductsSection from './components/FeaturedProduct';
import CategoriesSection from './components/Category';
// import AmbientesSection from './components/Ambiente';
// import ProcessSection from './components/Process';
import ContactSection from './components/Contact';

// Custom hook para animaciones de scroll
const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Pequeño delay para asegurar que el DOM esté listo
    setTimeout(() => {
      document.querySelectorAll('.section-reveal').forEach(el => {
        observer.observe(el);
      });
    }, 100);

    return () => observer.disconnect();
  }, []);
};

// Main Landing Page Component
const RaycesLandingPage: React.FC = () => {
  useScrollAnimation();
  
  // Auto-show all sections after a delay to ensure visibility
  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll('.section-reveal').forEach(el => {
        el.classList.add('visible');
      });
    }, 500);
  }, []);

  return (
    <>
      <div className="bg-white text-gray-900">
        <HeroSection />
        <StatsSection />
        <ValuesSection />
        <FeaturedProductsSection />
        <CategoriesSection />
        {/* <AmbientesSection /> */}
        {/* <ProcessSection /> */}
        {/* <TestimonialsSection /> */}
        <ContactSection />
      </div>
    </>
  );
};

export default RaycesLandingPage;