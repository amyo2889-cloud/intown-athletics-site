import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="text-only" size={36} className="text-white mb-4" />
            <p className="text-white/60 text-sm font-barlow leading-relaxed mt-4">
              A nonprofit youth sports organization dedicated to developing athletes, leaders, and citizens in Atlanta, GA.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-white/40 hover:text-[#69BE28] transition-colors"><Instagram size={20}/></a>
              <a href="#" aria-label="Twitter" className="text-white/40 hover:text-[#69BE28] transition-colors"><Twitter size={20}/></a>
              <a href="#" aria-label="Facebook" className="text-white/40 hover:text-[#69BE28] transition-colors"><Facebook size={20}/></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-barlow-condensed font-bold uppercase tracking-widest text-[#69BE28] text-sm mb-4">Organization</h4>
            <ul className="space-y-2">
              {[
                { to: "/about", label: "About Us" },
                { to: "/values", label: "Our Values" },
                { to: "/director", label: "Meet the Director" },
                { to: "/camps", label: "Summer 2026 Camps" },
                { to: "/register", label: "Register" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/60 hover:text-white text-sm font-barlow transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-barlow-condensed font-bold uppercase tracking-widest text-[#69BE28] text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-[#69BE28] mt-0.5 shrink-0"/>
                <a href="mailto:intownathletics@outlook.com" className="text-white/60 hover:text-white text-sm font-barlow transition-colors">
                  intownathletics@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-[#69BE28] mt-0.5 shrink-0"/>
                <a href="tel:4040000000" className="text-white/60 hover:text-white text-sm font-barlow transition-colors">
                  (404) 000-0000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#69BE28] mt-0.5 shrink-0"/>
                <span className="text-white/60 text-sm font-barlow">Atlanta Metro Area, GA</span>
              </li>
            </ul>
          </div>

          {/* Spond CTA */}
          <div>
            <h4 className="font-barlow-condensed font-bold uppercase tracking-widest text-[#69BE28] text-sm mb-4">Registration</h4>
            <p className="text-white/60 text-sm font-barlow mb-4">
              All camp registration is managed through Spond — the free family sports app.
            </p>
            <a
              href="https://spond.com/invite/ZIUTQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#F56600] hover:bg-[#d95a00] text-white font-barlow-condensed font-bold uppercase tracking-wide px-5 py-2.5 rounded text-sm transition-colors"
            >
              Register on Spond →
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-barlow">
            © {new Date().getFullYear()} Intown Athletics. All rights reserved. 501(c)(3) Nonprofit Organization.
          </p>
          <p className="text-white/30 text-xs font-barlow">Atlanta, Georgia</p>
        </div>
      </div>
    </footer>
  );
}
