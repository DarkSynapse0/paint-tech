// Removed incorrect import of 'url'
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const sisterCompanies = [
    {
      name: "Synagratic",
      description:
        "A dynamic company dedicated to delivering innovative solutions across various industries, including the IT sector.",
      url: "https://Synagratic.com",
      logo: "https://synagratic.com/uploads/sitesetting/1210f08c26ef02626fcab55b15be4dd8.png", // Put the logo in public/logos/
    },
  ];


const team = [
  {
    name: "Late. Jhabindra Acharya",
    role: "Founder",
    image: "./Foundcer.jpeg",
  },
  {
    name: "Kamal Khatri",
    role: "Operation Manager",
    image: "./OM.jpeg",
  },
  {
    name: "Arjun Acharya",
    role: "General Manager",
    image: "./GM.jpeg",
  },
  {
    name: "Ashish Gale",
    role: "Managing Director",
    image: "./MD.jpeg",
  },
];


  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section
        className="py-20 bg-gradient-to-br from-gray-900 to-gray-800"
        style={{
          background: 'url("./img14.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
              About Paint Tech Contracting
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leading painting contractors in Qatar with over 15 years of
              experience in transforming spaces
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                At Paint Tech Contracting WLL, we are driven by a relentless
                pursuit of quality and customer satisfaction. Our commitment to
                excellence is ingrained in every aspect of our operations, from
                our meticulous attention to detail during the painting process
                to our unwavering dedication to meeting and exceeding our
                clients' expectations. We understand that each project is
                unique, and we approach every task with the same level of
                dedication and professionalism. Our team of skilled
                professionals utilizes cutting-edge techniques, premium-quality
                materials, and industry-best practices to ensure that our
                clients receive the highest caliber of service and
                craftsmanship. As we continue to grow and evolve, our commitment
                to quality and customer satisfaction remains steadfast.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We are constantly striving to raise the bar and set new
                standards of excellence in the painting industry, and we are
                grateful for the opportunity to partner with you on your
                painting projects. Thank you for choosing Paint Tech Contracting
                WLL as your trusted partner. We look forward to exceeding your
                expectations and delivering outstanding results that enhance the
                beauty, durability, and value of your properties.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">
                    500+
                  </div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">
                    15+
                  </div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="./img6.jpg"
                alt="Paint Tech Team"
                className=" rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our mission at Paint Tech Contracting is to deliver exceptional
                painting services that exceed our clients' expectations. Through
                our dedication to quality, integrity, and professionalism, we
                aim to enhance the aesthetic appeal, value, and longevity of
                every property we work on. We strive to build lasting
                relationships with our clients based on trust, reliability, and
                superior craftsmanship.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                At Paint Tech Contracting, our vision is to be the premier
                painting contractor of choice in Qatar and beyond. We aspire to
                set the industry standard for excellence in painting services,
                innovation, and sustainability. By continuously investing in our
                people, technology, and processes, we seek to achieve growth,
                profitability, and leadership in the painting industry while
                making a positive impact on the communities we serve."With its
                clear mission and vision, Paint Tech Contracting is committed to
                delivering outstanding painting services, driving innovation,
                and fostering long-term relationships with clients, partners,
                and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Team
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Meet the people behind the success of Paint Tech Contracting
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-700 hover:bg-gray-600 transition-all p-6 rounded-xl text-center group"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-gray-600 mb-4"
                />
                <h3 className="text-white text-lg font-semibold group-hover:text-orange-400 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-gray-400 text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "⭐",
                title: "Quality",
                desc: "Uncompromising commitment to excellence in every project",
              },
              {
                icon: "🤝",
                title: "Integrity",
                desc: "Honest, transparent business practices with all stakeholders",
              },
              {
                icon: "💡",
                title: "Innovation",
                desc: "Embracing new technologies and techniques for better results",
              },
              {
                icon: "🌱",
                title: "Sustainability",
                desc: "Environmentally responsible practices and eco-friendly materials",
              },
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Licensed & Insured",
                desc: "Fully licensed contracting company with comprehensive insurance coverage",
                icon: "📋",
              },
              {
                title: "Experienced Team",
                desc: "Skilled professionals with extensive training and years of experience",
                icon: "👥",
              },
              {
                title: "Quality Materials",
                desc: "Partnership with leading paint manufacturers for premium results",
                icon: "🎨",
              },
              {
                title: "Timely Delivery",
                desc: "Committed to completing projects on time and within budget",
                icon: "⏰",
              },
              {
                title: "Customer Service",
                desc: "24/7 support and maintenance services for complete peace of mind",
                icon: "📞",
              },
              {
                title: "Competitive Pricing",
                desc: "Fair, transparent pricing without compromising on quality",
                icon: "💰",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Sister Concern Companies
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover our group companies that share the same commitment to
              quality and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sisterCompanies.map((company, index) => (
              <a
                key={index}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 transition-all p-6 rounded-xl text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-4">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-contain rounded"
                  />
                </div>
                <h3 className="text-white text-xl font-semibold group-hover:text-orange-400 mb-2">
                  {company.name}
                </h3>
                <p className="text-gray-400">{company.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
