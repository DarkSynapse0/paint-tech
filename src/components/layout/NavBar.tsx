"use client";
import { useTranslation } from "react-i18next";
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
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  
  const { t } = useTranslation();
  const navbar = t("navbar", { returnObjects: true }) as {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    clients: string;
    partners: string;
    contact: string;
    team: string;
    mission: string;
    webDev: string;
    design: string;
    company: string;
  };

  return (
    <nav className="bg-white fixed shadow-md w-full z-100">
      <div className="mx-auto px-4 sm:px-6">
        <div className="w-full flex justify-between items-center py-5">
          <div className="gap-10 flex items-center justify-center">
            {/* Logo and Name */}
            <div className="flex gap-5 items-center text-xl font-extrabold text-gray-800">
              <Image src="/PTC.svg" alt="Logo" width={80} height={80} />
              {navbar.company}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              <a
                href="#"
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
              >
                <Home className="w-4 h-4 mr-1" /> {navbar.home}
              </a>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition">
                  <Info className="w-4 h-4 mr-1" /> {navbar.about}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <AnimatePresence>
                  {aboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-1 w-56 bg-white overflow-hidden rounded-md shadow-md z-50 flex flex-col"
                    >
                      <a
                        href="#"
                        className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                      >
                        <Users2 className="w-4 h-4 mr-2" /> {navbar.team}
                      </a>
                      <a
                        href="#"
                        className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                      >
                        <Target className="w-4 h-4 mr-2" /> {navbar.mission}
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
                <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition">
                  <Layers className="w-4 h-4 mr-1" /> {navbar.services}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-1 w-56 bg-white overflow-hidden rounded-md shadow-md z-50 flex flex-col"
                    >
                      <a
                        href="#"
                        className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                      >
                        <Code className="w-4 h-4 mr-2" /> {navbar.webDev}
                      </a>
                      <a
                        href="#"
                        className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                      >
                        <Palette className="w-4 h-4 mr-2" /> {navbar.design}
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#"
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
              >
                <Briefcase className="w-4 h-4 mr-1" /> {navbar.portfolio}
              </a>
              <a
                href="#"
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
              >
                <Users className="w-4 h-4 mr-1" /> {navbar.clients}
              </a>
              <a
                href="#"
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
              >
                <Handshake className="w-4 h-4 mr-1" /> {navbar.partners}
              </a>
              <a
                href="#"
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
              >
                <Mail className="w-4 h-4 mr-1" /> {navbar.contact}
              </a>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
              className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
            >
              <Home className="w-4 h-4 mr-2" /> {navbar.home}
            </a>

            <div>
              <p className="flex items-center text-gray-700 font-medium">
                <Info className="w-4 h-4 mr-2" /> {navbar.about}
              </p>
              <div className="ml-6 mt-1 space-y-1">
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <Users2 className="w-4 h-4 mr-2" /> {navbar.team}
                </a>
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <Target className="w-4 h-4 mr-2" /> {navbar.mission}
                </a>
              </div>
            </div>

            <div>
              <p className="flex items-center text-gray-700 font-medium">
                <Layers className="w-4 h-4 mr-2" /> {navbar.services}
              </p>
              <div className="ml-6 mt-1 space-y-1">
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <Code className="w-4 h-4 mr-2" /> {navbar.webDev}
                </a>
                <a
                  href="#"
                  className="flex items-center text-gray-600 hover:text-blue-600"
                >
                  <Palette className="w-4 h-4 mr-2" /> {navbar.design}
                </a>
              </div>
            </div>

            <a
              href="#"
              className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
            >
              <Briefcase className="w-4 h-4 mr-2" /> {navbar.portfolio}
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
            >
              <Users className="w-4 h-4 mr-2" /> {navbar.clients}
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
            >
              <Handshake className="w-4 h-4 mr-2" /> {navbar.partners}
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
            >
              <Mail className="w-4 h-4 mr-2" /> {navbar.contact}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
