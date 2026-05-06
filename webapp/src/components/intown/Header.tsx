import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/values", label: "Our Values" },
  { href: "/director", label: "Meet the Director" },
  { href: "/camps", label: "Camps" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        solid ? "bg-[#0B1F3A] shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="text-white">
          <Logo variant="text-only" size={40} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "font-barlow-condensed font-semibold text-sm tracking-wide transition-colors uppercase",
                location.pathname === link.href
                  ? "text-[#69BE28]"
                  : "text-white/80 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            className="bg-[#69BE28] hover:bg-[#5aaa22] text-white font-barlow-condensed font-bold uppercase tracking-wide"
          >
            <a href="https://intownathletics2026registration.netlify.app" target="_blank" rel="noopener noreferrer">Register Now</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 bg-[#0B1F3A] z-40 flex flex-col pt-20 px-6 overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-barlow-condensed font-extrabold text-3xl uppercase text-white py-4 border-b border-white/10 hover:text-[#69BE28] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8">
            <Button
              asChild
              className="w-full bg-[#69BE28] hover:bg-[#5aaa22] text-white font-barlow-condensed font-bold uppercase tracking-wide text-lg py-6"
            >
              <a href="https://intownathletics2026registration.netlify.app" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>Register Now</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
