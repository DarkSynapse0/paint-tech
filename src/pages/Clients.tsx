import { useLanguage } from "../contexts/LanguageContext";

const Clients = () => {
  const { t } = useLanguage();

  const clients = [
    { name: "Emirates Group", logo: "🏢", sector: "Aviation" },
    { name: "DAMAC Properties", logo: "🏗️", sector: "Real Estate" },
    { name: "Emaar Properties", logo: "🌟", sector: "Development" },
    { name: "Qatar Municipality", logo: "🏛️", sector: "Government" },
    { name: "Jumeirah Hotels", logo: "🏨", sector: "Hospitality" },
    { name: "DP World", logo: "🚢", sector: "Logistics" },
    { name: "Qatar Airports", logo: "✈️", sector: "Aviation" },
    { name: "DEWA", logo: "⚡", sector: "Utilities" },
    { name: "Qatar Health Authority", logo: "🏥", sector: "Healthcare" },
    { name: "Nakheel Properties", logo: "🌴", sector: "Real Estate" },
    { name: "Qatar Metro", logo: "🚇", sector: "Transportation" },
    { name: "Mall of Emirates", logo: "🛍️", sector: "Retail" },
  ];

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      company: "Emaar Properties",
      position: "Project Manager",
      text: "Paint Tech has been our trusted partner for multiple residential projects. Their attention to detail and quality of work is exceptional.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      company: "Jumeirah Hotels",
      position: "Facilities Director",
      text: "Professional service with minimal disruption to our operations. The team completed the hotel renovation ahead of schedule.",
      rating: 5,
    },
    {
      name: "Mohammed Hassan",
      company: "DAMAC Properties",
      position: "Construction Manager",
      text: "Reliable, efficient, and cost-effective. Paint Tech delivers consistent quality across all our projects.",
      rating: 5,
    },
  ];

  const portfolioJobs = [
    "Al Jazi Real Estate",
    "Al Faisal Holding",
    "Al Samriya Village",
    "Lagoona Compound",
    "Man Enterprises",
    "Viva 14 & Vila 15",
    "QIMPCO International",
    "Al Egla Garden",
    "Mirage International",
    "Al Forosia Garden",
    "Doha British School",
    "Aqwa Housing Complex",
    "Zad Holding Company",
    "Gulf United Cascade - 1 & 2 Garden",
    "Gulf United - Sapphire",
    "Gulf United - Ruby",
    "Gulf United - Diamond",
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
              Our Valued Clients
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by leading organizations across Qatar and the UAE for over
              15 years
            </p>
          </div>
        </div>
      </section>

      <section className="p-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <h2 className="text-center text-3xl md:text-4xl mt-10 font-bold mb-10 text-white">
            Our Clients
          </h2>
          <div className=" w-full flex items-start justify-start">
            <ul className="w-full flex items-center justify-center flex-wrap gap-8">
              {portfolioJobs.map((job, index) => (
                <li
                  key={index}
                  className="text-center flex-grow text-lg bg-gray-800 p-5 rounded-xl hover:scale-105 text-gray-400 transition-all"
                >
                  {job}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Client Logos
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-400 text-lg">Some of our prestigious clients across various sectors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition-all duration-300 group text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {client.logo}
                </div>
                <h3 className="text-white font-semibold mb-2">{client.name}</h3>
                <p className="text-gray-400 text-sm">{client.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 text-lg">
              Hear from our satisfied clients about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-600 pt-4">
                  <h4 className="text-white font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-orange-400 text-sm">
                    {testimonial.position}
                  </p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🏢",
                title: "Commercial",
                desc: "Office buildings, retail spaces, shopping centers",
              },
              {
                icon: "🏠",
                title: "Residential",
                desc: "Villas, apartments, residential complexes",
              },
              {
                icon: "🏭",
                title: "Industrial",
                desc: "Factories, warehouses, industrial facilities",
              },
              {
                icon: "🏨",
                title: "Hospitality",
                desc: "Hotels, restaurants, entertainment venues",
              },
              {
                icon: "🏥",
                title: "Healthcare",
                desc: "Hospitals, clinics, medical facilities",
              },
              {
                icon: "🏫",
                title: "Education",
                desc: "Schools, universities, training centers",
              },
              {
                icon: "🏛️",
                title: "Government",
                desc: "Public buildings, municipal facilities",
              },
              {
                icon: "🚗",
                title: "Infrastructure",
                desc: "Transportation hubs, public utilities",
              },
            ].map((sector, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {sector.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {sector.title}
                </h3>
                <p className="text-gray-400 text-sm">{sector.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
