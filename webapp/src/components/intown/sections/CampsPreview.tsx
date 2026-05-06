import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const sports = [
  { emoji: "🏀", name: "Basketball", tagline: "Fundamentals, skill, and game IQ" },
  { emoji: "⚽", name: "Soccer", tagline: "Footwork, teamwork, and competitive play" },
  { emoji: "🏈", name: "Flag Football", tagline: "Strategy, technique, and athleticism" },
  { emoji: "⚾", name: "Baseball", tagline: "Batting, fielding, and pitching basics" },
  { emoji: "🥎", name: "Softball", tagline: "Hitting, fielding, and pitching skills" },
];

export function CampsPreview() {
  const { ref, inView } = useInView();
  return (
    <section className="bg-[#0B1F3A] py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block bg-[#69BE28]/20 border border-[#69BE28]/30 rounded-full px-4 py-1 mb-4">
            <span className="font-barlow-condensed font-bold text-[#69BE28] text-sm uppercase tracking-widest">June – August 2026</span>
          </div>
          <h2 className="font-barlow-condensed font-black text-4xl md:text-6xl text-white uppercase">Summer 2026 Camps</h2>
          <p className="font-barlow text-white/60 mt-4 max-w-xl mx-auto">Weekly intensive camps for youth ages 6–12 across Atlanta's best parks and recreation centers.</p>
        </div>

        {/* Sport Cards */}
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {sports.map((sport) => (
            <div
              key={sport.name}
              className="bg-[#0d2448] border border-[#69BE28]/30 hover:border-[#69BE28] rounded-lg p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#69BE28]/10 group"
            >
              <div className="text-5xl mb-4">{sport.emoji}</div>
              <h3 className="font-barlow-condensed font-black text-2xl text-white uppercase mb-2 group-hover:text-[#69BE28] transition-colors">{sport.name}</h3>
              <p className="font-barlow text-white/50 text-sm">{sport.tagline}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            variant="outline"
            className="border-white/30 text-white hover:bg-white hover:text-[#0B1F3A] font-barlow-condensed font-bold uppercase tracking-wide bg-transparent"
          >
            <Link to="/camps">View All Camps</Link>
          </Button>
          <Button
            asChild
            className="bg-[#69BE28] hover:bg-[#5aaa22] text-white font-barlow-condensed font-bold uppercase tracking-wide"
          >
            <a href="https://intownathletics2026registration.netlify.app" target="_blank" rel="noopener noreferrer">Register Now</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
