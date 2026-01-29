import React from "react";
import {
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
} from "lucide-react";
import logo from "../../assets/cropped-abul-khair-group-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Vision", href: "#vision" },
    { name: "Board of Directors", href: "#directors" },
    { name: "Global Presence", href: "#global" },
  ];

  const businessLinks = [
    { name: "Cement & Steel", href: "#" },
    { name: "Consumer Goods", href: "#" },
    { name: "Tobacco", href: "#" },
    { name: "CSR Projects", href: "#" },
  ];

  return (
    <div className="bg-slate-200 pt-20 pb-10 border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Profile */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <img src={logo} alt="AKG" className="w-10 h-10 object-contain" />
              <span className="text-2xl font-black text-slate-900 tracking-tighter">
                AKG<span className="text-blue-600">.</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Leading the path of excellence for over decades. Committed to
              sustainable growth and quality innovations in every industry.
            </p>
            <div className="flex gap-3">
              <a href="#" className="social-icon">
                <Facebook size={18} />
              </a>
              <a href="#" className="social-icon">
                <Linkedin size={18} />
              </a>
              <a href="#" className="social-icon">
                <Twitter size={18} />
              </a>
              <a href="#" className="social-icon">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">The Company</h4>
            <ul className="flex flex-col gap-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    <ArrowRight
                      size={14}
                      className="opacity-0 -ml-4 group-hover:opacity-100 transition-all"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Sectors */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Our Businesses</h4>
            <ul className="flex flex-col gap-4">
              {businessLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-slate-900 font-bold mb-6">Stay Connected</h4>
            <p className="text-slate-500 text-sm mb-4">
              Subscribe to receive latest corporate updates.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-5 pr-12 text-sm focus:ring-2 focus:ring-blue-600 transition-all outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2.5 rounded-xl hover:bg-slate-900 transition-colors">
                <Send size={16} />
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-slate-500 text-sm">
                <MapPin size={16} className="text-blue-600" />
                <span>Chattogram, Bangladesh</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500 text-sm">
                <Phone size={16} className="text-blue-600" />
                <span>+880 1234 567890</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">
            © {currentYear} Abul Khair Group. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-slate-400 hover:text-slate-600 text-xs font-bold uppercase tracking-wider"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-slate-600 text-xs font-bold uppercase tracking-wider"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
