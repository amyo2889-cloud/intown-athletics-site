import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1F3A]">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1546519638405-a9c7a6e399ed?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[#0B1F3A]/85" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern" />

      {/* Green radial glow from bottom-left */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#69BE28]/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl animate-fade-up">
          {/* Elite badge */}
          <div className="inline-flex items-center gap-2 bg-[#69BE28]/20 border border-[#69BE28]/40 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#69BE28] animate-pulse" />
            <span className="font-barlow-condensed font-bold text-[#69BE28] text-sm uppercase tracking-widest">
              Summer 2026 Registration Open
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-barlow-condensed font-black text-5xl md:text-7xl lg:text-8xl leading-none mb-6">
            <span className="block text-white">BUILDING ATHLETES.</span>
            <span className="block text-[#69BE28] green-glow">GROWING LEADERS.</span>
            <span className="block text-white">STRENGTHENING ATLANTA.</span>
          </h1>

          <p className="font-barlow text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            Intown Athletics is Atlanta's premier nonprofit youth sports organization, empowering the next generation through athletic excellence, mentorship, and community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#69BE28] hover:bg-[#5aaa22] text-white font-barlow-condensed font-bold uppercase tracking-wide text-base px-8 py-6"
            >
              <Link to="/register">Register for Summer 2026</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#F56600] text-[#F56600] hover:bg-[#F56600] hover:text-white font-barlow-condensed font-bold uppercase tracking-wide text-base px-8 py-6 bg-transparent"
            >
              <a href="https://spond.com/invite/ZIUTQ" target="_blank" rel="noopener noreferrer">
                Register on Spond
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="font-barlow text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </div>
    </section>
  );
}
