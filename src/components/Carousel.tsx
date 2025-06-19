
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Link } from "lucide-react";
import { useLanguage } from '../contexts/LanguageContext';

const Carousel = () => {
  const { t } = useLanguage();
  
  // Sample carousel data - you can move this to the language context later
  const carouselData = [
    {
      id: 1,
      content: "Premium Interior Painting",
      description: "Transform your living spaces with our expert interior painting services using premium quality paints.",
      link: "/services",
      imgSrc: "./img8.jpg"
    },
    {
      id: 2,
      content: "Exterior Painting Excellence", 
      description: "Protect and beautify your property's exterior with weather-resistant paints and professional application.",
      link: "/services",
      imgSrc: "./img4.png"
    },
    {
      id: 3,
      content: "Industrial Coating Solutions",
      description: "Specialized industrial painting and coating services for commercial and industrial facilities.",
      link: "/services", 
      imgSrc: "./img16.jpg"
    },
    {
      id: 4,
      content: "Decorative & Artistic Finishes",
      description: "Add elegance with our decorative painting techniques and artistic wall finishes.",
      link: "/portfolio",
      imgSrc: "./img5.jpg"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 2000);
    return () => clearInterval(autoSlide);
  }, [carouselData.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselData.length) % carouselData.length
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={carouselData[currentSlide].imgSrc}
          alt={carouselData[currentSlide].content}
          className="w-full h-full object-cover transition-opacity duration-1200 ease-in-out"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="transform transition-all duration-800 ease-in-out translate-x-0 opacity-100">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                {carouselData[currentSlide].content}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                {carouselData[currentSlide].description}
              </p>
              <Link
                href={carouselData[currentSlide].link}
                className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {t('learnMore')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 text-white hover:scale-110"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 text-white hover:scale-110"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
