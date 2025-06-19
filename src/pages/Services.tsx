import { useLanguage } from "../contexts/LanguageContext";
import { useState } from "react";

const Services = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const services = [
    {
      category: "residential",
      title: "Interior Painting",
      description:
        "Transform your living spaces with our premium interior painting services",
      features: [
        "Wall painting",
        "Ceiling painting",
        "Trim & molding",
        "Color consultation",
      ],
      icon: "🏠",
      image: "./img8.jpg",
    },
    {
      category: "residential",
      title: "Exterior Painting",
      description:
        "Protect and beautify your property exterior with weather-resistant coatings",
      features: [
        "Surface preparation",
        "Weather protection",
        "Color matching",
        "Multi-story capability",
      ],
      icon: "🏢",
      image: "./img4.png",
    },
    {
      category: "commercial",
      title: "Commercial Painting",
      description:
        "Professional painting solutions for offices, retail spaces, and commercial buildings",
      features: [
        "Minimal disruption",
        "Fast turnaround",
        "Quality materials",
        "Safety compliance",
      ],
      icon: "🏬",
      image: "./img6.jpg",
    },
    {
      category: "specialized",
      title: "Decorative Painting",
      description:
        "Artistic finishes and decorative techniques for unique aesthetic appeal",
      features: [
        "Texture painting",
        "Faux finishes",
        "Murals",
        "Custom designs",
      ],
      icon: "🎨",
      image: "./img5.jpg",
    },
    {
      category: "industrial",
      title: "Industrial Coating",
      description:
        "Heavy-duty protective coatings for industrial facilities and equipment",
      features: [
        "Corrosion protection",
        "Chemical resistance",
        "High durability",
        "Safety compliance",
      ],
      icon: "🏭",
      image: "./img16.jpg",
    },
    {
      category: "specialized",
      title: "Waterproofing",
      description:
        "Complete waterproofing solutions for walls, roofs, and foundations",
      features: [
        "Leak prevention",
        "Moisture control",
        "Long-term protection",
        "Various surfaces",
      ],
      icon: "💧",
      image: "./img7.jpg",
    },
    {
      category: "maintenance",
      title: "Maintenance Services",
      description:
        "Regular maintenance and touch-up services to keep your property looking fresh",
      features: [
        "Regular inspections",
        "Touch-up services",
        "Preventive maintenance",
        "Emergency repairs",
      ],
      icon: "🔧",
      image: "./img17.jpg",
    },
  ];

  const categories = [
    { id: "all", name: "All Services" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "industrial", name: "Industrial" },
    { id: "specialized", name: "Specialized" },
    { id: "maintenance", name: "Maintenance" },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <div className="pt-16 min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive painting and coating solutions for residential,
            commercial, and industrial projects
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute top-4 left-4 text-4xl">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-orange-400 font-semibold">
                    Key Features:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-gray-400 flex items-center"
                      >
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold py-3 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Process
          </h2>
          <p className="text-gray-400 text-lg mb-16">
            How we deliver exceptional results
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center items-center justify-center">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                desc: "Initial assessment and project planning",
              },
              {
                step: "02",
                title: "Project Planning and Preparation",
                desc: "Surface cleaning and preparation",
              },
              {
                step: "03",
                title: "Surface Preparation",
                desc: "Inspection of surfaces and preparation for painting",
              },
              {
                step: "04",
                title: "Painting and Coating Application",
                desc: "Applying primer and topcoat for finish and protection",
              },
              {
                step: "05",
                title: "Final Inspection and Touch-Ups",
                desc: "Final inspection for quality and consistency",
              },
              {
                step: "06",
                title: "Client Walkthrough and Approval",
                desc: "Walkthrough with client and feedback collection",
              },
              {
                step: "07",
                title: "Post-Project Follow-Up",
                desc: "Feedback review and client satisfaction check",
              },
            ].map((item, index, arr) => (
              <div key={index} className=" flex flex-col justify-center items-center relative">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex-wrap flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <div>

                <h3 className="text-white text-lg font-semibold text-center mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-center text-sm">{item.desc}</p>
                </div>

                {/* Arrow (right) */}
                {index < arr.length - 1 && (
                  <div className="hidden md:block absolute right-[-24px] top-[32px]">
                    <svg
                      className="w-6 h-6 text-orange-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;