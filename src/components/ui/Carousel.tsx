import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselData = [
    {
      id: 1,
      content: "Transforming Walls with Premium Paint Solutions",
      description:
        "Discover premium paints that elevate your walls to new heights of beauty and durability.",
      link: "https://example.com/paint-solutions",
      imgSrc: "https://picsum.photos/id/1011/1200/800",
    },
    {
      id: 2,
      content: "Tools that Define Precision in Painting",
      description:
        "Explore the latest painting tools designed for flawless finishes and professional results.",
      link: "https://example.com/painting-tools",
      imgSrc: "https://picsum.photos/id/1025/1200/800",
    },
    {
      id: 3,
      content: "Innovative Color Applications for Modern Interiors",
      description:
        "Transform your space with cutting-edge color techniques tailored for contemporary living.",
      link: "https://example.com/color-applications",
      imgSrc: "https://picsum.photos/id/1031/1200/800",
    },
    {
      id: 4,
      content: "Industrial Strength Meets Decorative Excellence",
      description:
        "Combining durability with style for the toughest industrial and decorative painting needs.",
      link: "https://example.com/industrial-paints",
      imgSrc: "https://picsum.photos/id/1050/1200/800",
    },
  ];

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);

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

  const fadeVariant = {
    initial: { opacity: 0.2 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0.2,
      transition: {
        duration: 1.2,
        ease: easeInOut,
      },
    },
  };

  const fadeLeftVariant = {
    initial: { opacity: 0, x: -300 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -300,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  };



  return (
    <div className="relative max-w-screen min-h-screen overflow-hidden overflow-x-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={carouselData[currentSlide].id}
          className="relative w-screen h-screen max-w-screen max-h-screen"
          variants={fadeVariant}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Image
            src={carouselData[currentSlide].imgSrc}
            alt={carouselData[currentSlide].content}
            fill
            className="object-cover overflow-hidden"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={"info-" + carouselData[currentSlide].id}
          className="
            absolute left-2 bottom-10 right-2
            max-w-md 
            bg-white bg-opacity-90 rounded-md p-6 shadow-lg text-black md:left-5 lg:left-15"
          variants={fadeLeftVariant}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <h2 className="text-2xl font-bold mb-2 sm:text-xl xs:text-lg">
            {carouselData[currentSlide].content}
          </h2>
          <p className="mb-4 sm:mb-3">
            {carouselData[currentSlide].description}
          </p>
          <a
            href={carouselData[currentSlide].link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition sm:px-3 sm:py-1.5 xs:px-2 xs:py-1 xs:text-sm"
          >
            Learn More
          </a>
        </motion.div>
      </AnimatePresence>

      <FiChevronLeft
        onClick={prevSlide}
        className="absolute rounded-full bg-white left-5 top-1/2 transform -translate-y-1/2 cursor-pointer text-black text-4xl drop-shadow-lg p-1
                   sm:text-3xl sm:p-0.5 sm:left-3
                   xs:text-2xl xs:p-0.5 xs:left-2"
        aria-label="Previous Slide"
      />

      <FiChevronRight
        onClick={nextSlide}
        className="absolute rounded-full bg-white right-5 top-1/2 transform -translate-y-1/2 cursor-pointer text-black text-4xl drop-shadow-lg p-1
                   sm:text-3xl sm:p-0.5 sm:right-3
                   xs:text-2xl xs:p-0.5 xs:right-2"
        aria-label="Next Slide"
      />
    </div>
  );
};

export default Carousel;
