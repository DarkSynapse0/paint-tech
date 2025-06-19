import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services does Paint Tech Contracting offer?",
      answer:
        "Paint Tech Contracting offers a comprehensive range of painting services for residential properties, villas, and towers in Qatar. Our services include interior painting, exterior painting, repainting, surface preparation, color consultation, and specialized coatings application.",
    },
    {
      question: "What areas does Paint Tech Contracting serve?",
      answer:
        "Paint Tech Contracting provides painting services across Qatar, including Doha, Al Rayyan, Al Wakrah, and other major cities. We cater to residential properties, villas, and commercial buildings throughout the country.",
    },
    {
      question: "Are your paints eco-friendly?",
      answer:
        "Yes, Paint Tech Contracting prioritizes the use of eco-friendly paints and coatings whenever possible. We offer low-VOC and zero-VOC paints that emit fewer harmful chemicals into the environment, contributing to better indoor air quality and sustainability.",
    },
    {
      question: "How do I request a painting estimate?",
      answer:
        "To request a painting estimate, simply contact Paint Tech Contracting through our website or by phone. Our team will schedule a convenient time to visit your property, assess the scope of work, and provide you with a detailed and transparent cost estimate.",
    },
    {
      question: "Do you provide color consultation services?",
      answer:
        "Yes, Paint Tech Contracting offers color consultation services to help clients choose the perfect colors for their painting projects. Our experienced professionals can provide expert advice on color selection, coordination, and trends to achieve the desired aesthetic and ambiance.",
    },
    {
      question: "What is your approach to surface preparation?",
      answer:
        "At Paint Tech Contracting, we prioritize thorough surface preparation to ensure optimal paint adhesion and longevity. Our process includes cleaning, sanding, priming, and repairing surface defects to create a smooth and durable foundation for the paint coatings.",
    },
    {
      question: "How long does a typical painting project take?",
      answer:
        "The duration of a painting project depends on various factors, including the size of the property, the scope of work, and weather conditions. Paint Tech Contracting provides personalized project timelines based on these factors, ensuring efficient completion while maintaining quality.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    viewport: { once: true },
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Carousel />

      {/* Services Preview */}
      <motion.section className="py-20 bg-gray-800" {...fadeInUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional painting solutions for all your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t("interiorPainting"), icon: "🏠" },
              { title: t("exteriorPainting"), icon: "🏢" },
              { title: t("decorativePainting"), icon: "🎨" },
              { title: t("industrialPainting"), icon: "🏭" },
              { title: t("waterproofing"), icon: "💧" },
              { title: t("woodCoating"), icon: "🪵" },
            ].map((service, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  Professional service with quality materials
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              {t("viewAll")} Services
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section className="py-20 bg-gray-900" {...fadeInUp}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Choose Paint Tech?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "15+ Years Experience",
                desc: "Trusted expertise in Qatar market",
              },
              {
                title: "Premium Materials",
                desc: "Only the finest paints and coatings",
              },
              {
                title: "Professional Team",
                desc: "Skilled craftsmen and project managers",
              },
              {
                title: "24/7 Support",
                desc: "Always available for your needs",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Got questions? We’ve got answers to the most common inquiries
              about our painting services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none group"
                >
                  <span className="text-orange-400 text-lg font-semibold">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-orange-400 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`px-6 pb-4 text-gray-300 transition-all duration-300 ${
                    activeIndex === index ? "block border-t p-2 border-gray-700" : "hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
