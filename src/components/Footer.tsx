import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className=" bg-white rounded-xl p-1 w-20 h-20 flex items-center justify-center">
                  <img
                    src="/PTC.svg"
                    alt="Paint Tech Logo"
                    className="w-full h-full"
                    width={24}
                    height={24}
                  />
                  <span className="text-white font-bold text-sm"></span>
                </div>
                <span className="font-bold text-lg text-white">
                  Paint Tech Contracting WLL
                </span>
              </Link>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Professional painting and coating solutions in Qatar. Transforming
              spaces with quality, reliability, and expertise since 2008.
            </p>
            <div className="space-y-2">
              <p className="text-gray-400 flex items-center">
                📍 Gulf Business Building D-Ring Road, Doha, Qatar
              </p>
              <p className="text-gray-400 flex items-center">📞 77525388</p>
              <p className="text-gray-400 flex items-center">
                ✉️ info@painttechcontracting.com
              </p>
              <p className="text-gray-400 flex items-center">
                ✉️ sales@painttechcontracting.com
              </p>
              <p className="text-gray-400 flex items-center">
                ✉️ accounts@painttechcontracting
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: t("home"), href: "/" },
                { name: t("about"), href: "/about" },
                { name: t("services"), href: "/services" },
                { name: t("portfolio"), href: "/portfolio" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Interior Painting",
                "Exterior Painting",
                "Waterproofing",
                "Industrial Coating",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Paint Tech Contracting WLL. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-orange-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-orange-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
