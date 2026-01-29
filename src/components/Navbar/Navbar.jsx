import React, { useState, useEffect } from "react";
import {
  AlignRight,
  X,
  ChevronDown,
  Rocket,
  Users,
  Layout,
  Home,
  Briefcase,
  Layers,
  Video,
  Image as ImageIcon,
  ArrowUpRight,
  Info,
} from "lucide-react";
import logo from "../../assets/cropped-abul-khair-group-logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false); // Mobile Accordion state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = [
        "home",
        "business-portfolio",
        "brands",
        "tvc",
        "gallery",
        "about-us",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 120) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const aboutLinks = [
    { title: "Founder", id: "founder", icon: <Layout size={16} /> },
    {
      title: "Mission & Values",
      id: "mission-values",
      icon: <Rocket size={16} />,
    },
    {
      title: "Board of Directors",
      id: "board-of-directors",
      icon: <Users size={16} />,
    },
  ];

  const mainLinks = [
    { name: "Home", id: "home", href: "#home", icon: <Home size={18} /> },
    {
      name: "Portfolio",
      id: "business-portfolio",
      href: "business-portfolio",
      icon: <Briefcase size={18} />,
    },
    {
      name: "All Brands",
      id: "brands",
      href: "brands",
      icon: <Layers size={18} />,
    },
    { name: "TVC", id: "tvc", href: "tvc", icon: <Video size={18} /> },
    {
      name: "Gallery",
      id: "gallery",
      href: "gallery",
      icon: <ImageIcon size={18} />,
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-60 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-white/80 backdrop-blur-xl shadow-lg"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="AKG"
              className="w-10 h-10 object-contain group-hover:rotate-12 transition-transform duration-300"
            />
            <span className="text-2xl font-black text-slate-900 tracking-tighter">
              AKG<span className="text-blue-600">.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Home Link */}
            <a
              href="/"
              className={`nav-link ${activeSection === "home" ? "nav-link-active" : "nav-link-inactive"}`}
            >
              <Home size={16} /> Home
            </a>

            {/* About Dropdown (Desktop) */}
            <div className="relative group px-1">
              {/* <a
                href="#about-us"
                className={`nav-link flex items-center gap-1 ${aboutLinks.some((al) => activeSection === al.id) ? "nav-link-active" : "nav-link-inactive"}`}
              >
                <Info size={16} /> About Us{" "}
                <ChevronDown
                  size={14}
                  className="group-hover:rotate-180 transition-transform"
                />
              </a> */}
              <button
                onClick={() => {
                  const element = document.getElementById("about-us");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`nav-link flex items-center gap-1 cursor-pointer ${aboutLinks.some((al) => activeSection === al.id) ? "nav-link-active" : "nav-link-inactive"}`}
              >
                <Info size={16} /> About Us{" "}
                <ChevronDown
                  size={14}
                  className="group-hover:rotate-180 transition-transform"
                />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {aboutLinks.map((sub) => (
                  // <a
                  //   key={sub.id}
                  //   href={`#${sub.id}`}
                  //   className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors"
                  // >
                  //   <span className="text-slate-400">{sub.icon}</span>
                  //   <span className="text-sm font-bold text-slate-700">
                  //     {sub.title}
                  //   </span>
                  // </a>
                  <button
                    onClick={() => {
                      const element = document.getElementById(sub.id);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    key={sub.id}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <span className="text-slate-400">{sub.icon}</span>
                    <span className="text-sm font-bold text-slate-700">
                      {sub.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Other Main Links */}
            {mainLinks.slice(1).map((link) => (
              // <a
              //   key={link.id}
              //   href={link.href}
              //   className={`nav-link ${activeSection === link.id ? "nav-link-active" : "nav-link-inactive"}`}
              // >
              //   {link.icon} {link.name}
              // </a>
              <button
                onClick={() => {
                  const element = document.getElementById(link.id);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                key={link.id}
                className={`nav-link cursor-pointer ${activeSection === link.id ? "nav-link-active" : "nav-link-inactive"}`}
              >
                {link.icon} {link.name}
              </button>
            ))}

            <button
              onClick={() => {
                const element = document.getElementById('contact-us');
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="ml-4 bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-blue-600 hover:shadow-blue-200 transition-all active:scale-95 shadow-lg"
            >
              Get Started <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <AlignRight size={30} />
          </button>
        </div>
      </nav>

      {/* --- Mobile Drawer Menu --- */}
      <div
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-70 transition-opacity duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[62.5%] bg-white z-80 shadow-[-20px_0_50px_rgba(0,0,0,0.1)] transition-transform duration-500 ease-out transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full p-6 overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-black text-slate-900">
              Menu<span className="text-blue-600">.</span>
            </span>
            <button
              className="p-2 bg-slate-100 rounded-full text-slate-600"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-2">
            {/* Home */}
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className={`mobile-link ${activeSection === "home" ? "text-blue-600 bg-blue-50/80" : "text-slate-600 bg-slate-50"}`}
            >
              <Home size={18} /> Home
            </a>

            {/* About Accordion (Mobile) */}
            <div className="flex flex-col">
              <div className="relative">
                <a
                  href="#about-us"
                  onClick={() => setIsOpen(false)}
                  className={`mobile-link w-full justify-between ${aboutLinks.some((al) => activeSection === al.id) ? "text-blue-600 bg-blue-50/80" : "text-slate-600 bg-slate-50"}`}
                >
                  <div className="flex items-center gap-4">
                    <Info size={18} /> About Us
                  </div>
                </a>
                <button className="absolute top-4 right-4">
                  <ChevronDown
                    onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                    size={18}
                    className={`text-slate-700 transition-transform duration-300 ${isMobileAboutOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isMobileAboutOpen
                    ? "max-h-60 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                {aboutLinks.map((sub) => (
                  <a
                    key={sub.id}
                    href={`#${sub.id}`}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 pl-6 py-3 text-sm font-bold transition-all duration-300 rounded-xl ${
                      activeSection === sub.id
                        ? "text-blue-600 bg-blue-50/50"
                        : "text-slate-500 hover:text-blue-600"
                    }`}
                  >
                    <span
                      className={
                        activeSection === sub.id
                          ? "text-blue-600"
                          : "text-slate-400"
                      }
                    >
                      {sub.icon}
                    </span>
                    {sub.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Other Main Links */}
            {mainLinks.slice(1).map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`mobile-link ${activeSection === link.id ? "text-blue-600 bg-blue-50/80" : "text-slate-600 bg-slate-50"}`}
              >
                {link.icon} {link.name}
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto pt-6 border-t border-slate-100">
            <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-transform">
              Get Started <ArrowUpRight size={20} />
            </button>
            <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-widest font-bold italic">
              Abul Khair Group
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
