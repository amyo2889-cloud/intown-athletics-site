import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const pillars = ["Access", "Excellence", "Character", "Community"];

export function MissionSection() {
  const { ref, inView } = useInView();
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Left: Mission quote */}
          <div>
            <div className="text-[120px] leading-none font-barlow-condensed font-black text-[#69BE28]/20 -mb-8 select-none">"</div>
            <p className="font-barlow-condensed font-bold text-2xl md:text-3xl text-[#0B1F3A] leading-tight italic">
              Our mission is to empower Atlanta's youth through athletic training, mentorship, and community programming — providing access to quality sports education regardless of socioeconomic background.
            </p>
          </div>

          {/* Right: Pillars */}
          <div>
            <h3 className="font-barlow-condensed font-black text-3xl text-[#0B1F3A] uppercase mb-8">
              What We Stand For
            </h3>
            <ul className="space-y-4 mb-10">
              {pillars.map((pillar) => (
                <li key={pillar} className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#69BE28] flex items-center justify-center">
                    <Check size={16} className="text-white" strokeWidth={3} />
                  </span>
                  <span className="font-barlow-condensed font-bold text-xl text-[#0B1F3A] uppercase tracking-wide">{pillar}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              variant="outline"
              className="border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white font-barlow-condensed font-bold uppercase tracking-wide"
            >
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
