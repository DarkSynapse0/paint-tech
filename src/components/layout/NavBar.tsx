"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Info,
  Layers,
  Briefcase,
  Users,
  Handshake,
  Mail,
  ChevronDown,
  Users2,
  Target,
  Code,
  Palette,
} from "lucide-react";
import LanguageSwitcher from "../LanguageSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-white fixed shadow-md w-full z-50">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-gray-800">LOGO</div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a
              href="#"
              className="gap-1 flex items-center text-gray-700 hover:text-blue-600 transition"
            >
              <Home className="w-4 h-4 mr-1" /> Home
            </a>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="gap-1 flex items-center text-gray-700 hover:text-blue-600 transition">
                <Info className="w-4 h-4 mr-1" /> About
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-1 w-55 bg-white border rounded-md shadow-md z-50 flex flex-col"
                  >
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                    >
                      <Users2 className="w-4 h-4 mr-2" /> Team
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                    >
                      <Target className="w-4 h-4 mr-2" /> Mission
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="gap-1 flex items-center text-gray-700 hover:text-blue-600 transition">
                <Layers className="w-4 h-4 mr-1" /> Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-1  w-55 bg-white border rounded-md shadow-md z-50 flex flex-col"
                  >
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                    >
                      <Code className="w-4 h-4 mr-2" /> Web Development
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                    >
                      <Palette className="w-4 h-4 mr-2" /> Design
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#"
              className="gap-1 flex items-center text-gray-700 hover:text-blue-600 transition"
            >
              <Briefcase className="w-4 h-4 mr-1" /> Portfolio
            </a>
            <a
              href="#"
              className="gap-1 flex items-center text-gray-700 hover:text-blue-600 transition"
            >
              <Users className="w-4 h-4 mr-1" /> Clients
            </a>
            <a
              href="#"
              className="gap-1 flex items-center text-gray-700 hover:text-blue-600 transition"
            >
              <Handshake className="w-4 h-4 mr-1" /> Partners
            </a>
            <a
              href="#"
              className="gap-1 flex items-center text-gray-700 hover:text-blue-600 transition"
            >
              <Mail className="w-4 h-4 mr-1" /> Contact
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-4 pt-4 pb-6 space-y-2 shadow"
          >
            <a
              href="#"
              className="gap-1 flex items-center text-gray-700 hover:text-blue-600 transition"
            >
              <Home className="w-4 h-4 mr-2" /> Home
            </a>

            <div>
              <p className="flex items-center text-gray-700 font-medium">
                <Info className="w-4 h-4 mr-2" /> About
              </p>
              <div className="ml-6 mt-1 space-y-1">
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition"
                >
                  <Users2 className="w-4 h-4 mr-2" /> Team
                </a>
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition"
                >
                  <Target className="w-4 h-4 mr-2" /> Mission
                </a>
              </div>
            </div>

            <div>
              <p className="flex items-center text-gray-700 font-medium">
                <Layers className="w-4 h-4 mr-2" /> Services
              </p>
              <div className="ml-6 mt-1 space-y-1">
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition"
                >
                  <Code className="w-4 h-4 mr-2" /> Web Development
                </a>
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-blue-600 transition"
                >
                  <Palette className="w-4 h-4 mr-2" /> Design
                </a>
              </div>
            </div>

            <a
              href="#"
              className="gap-1 flex items-center text-gray-700 hover:text-blue-600 transition"
            >
              <Briefcase className="w-4 h-4 mr-2" /> Portfolio
            </a>
            <a
              href="#"
              className="gap-1 flex items-center text-gray-700 hover:text-blue-600 transition"
            >
              <Users className="w-4 h-4 mr-2" /> Clients
            </a>
            <a
              href="#"
              className="gap-1 flex items-center text-gray-700 hover:text-blue-600 transition"
            >
              <Handshake className="w-4 h-4 mr-2" /> Partners
            </a>
            <a
              href="#"
              className="gap-1 flex items-center text-gray-700 hover:text-blue-600 transition"
            >
              <Mail className="w-4 h-4 mr-2" /> Contact
            </a>
            <div>
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
