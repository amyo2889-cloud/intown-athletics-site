import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ContactStrip() {
  return (
    <section className="bg-[#0B1F3A] py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="dot-pattern absolute inset-0 pointer-events-none opacity-50" />
        <h2 className="font-barlow-condensed font-black text-4xl md:text-6xl text-white uppercase mb-4">
          Ready to Join the Team?
        </h2>
        <p className="font-barlow text-white/60 text-lg max-w-xl mx-auto mb-10">
          Take the first step for your athlete today. Register for Summer 2026 camps or get in touch with any questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#69BE28] hover:bg-[#5aaa22] text-white font-barlow-condensed font-bold uppercase tracking-wide px-10"
          >
            <a href="https://intownathletics2026registration.netlify.app" target="_blank" rel="noopener noreferrer">Register Now</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-[#F56600] text-[#F56600] hover:bg-[#F56600] hover:text-white font-barlow-condensed font-bold uppercase tracking-wide px-10 bg-transparent"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
