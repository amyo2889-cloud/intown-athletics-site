import { Link } from "react-router-dom";
import { PageLayout } from "@/components/intown/PageLayout";
import { Button } from "@/components/ui/button";
import { GraduationCap, Target, Users, Shield, DoorOpen, Heart, Trophy, Handshake } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const values = [
  {
    number: "01",
    icon: GraduationCap,
    name: "Youth Development",
    desc: "We believe in investing in the whole child — mind, body, and spirit. Every program is designed with holistic development in mind.",
    accent: "#69BE28",
  },
  {
    number: "02",
    icon: Target,
    name: "Discipline",
    desc: "Success starts with showing up. We teach consistency and commitment every single day, on and off the field.",
    accent: "#F56600",
  },
  {
    number: "03",
    icon: Users,
    name: "Teamwork",
    desc: "No championship was ever won alone. We build teams that lift each other higher and celebrate collective success.",
    accent: "#69BE28",
  },
  {
    number: "04",
    icon: Shield,
    name: "Character",
    desc: "How you play says everything about who you are. We develop young people of integrity who lead with their values.",
    accent: "#F56600",
  },
  {
    number: "05",
    icon: DoorOpen,
    name: "Access",
    desc: "No child should be excluded from sport due to finances. We break down every barrier between youth and opportunity.",
    accent: "#69BE28",
  },
  {
    number: "06",
    icon: Heart,
    name: "Community",
    desc: "We are Atlanta. We serve our neighborhoods and strengthen the bonds that connect us as a community.",
    accent: "#F56600",
  },
  {
    number: "07",
    icon: Trophy,
    name: "Excellence",
    desc: "We pursue greatness in everything — from the way we coach to the way we show up for our athletes and families.",
    accent: "#69BE28",
  },
  {
    number: "08",
    icon: Handshake,
    name: "Mentorship",
    desc: "Every coach is a mentor. Every game is a lesson. We guide, encourage, and invest in the young people we serve.",
    accent: "#F56600",
  },
];

function ValuesGrid() {
  const { ref, inView } = useInView();
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {values.map((val) => (
            <div key={val.number} className="relative border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-shadow overflow-hidden">
              {/* Number background */}
              <div className="absolute top-4 right-6 font-barlow-condensed font-black text-8xl text-[#0B1F3A]/05 select-none leading-none">
                {val.number}
              </div>
              {/* Top accent bar */}
              <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: val.accent }} />
              <val.icon size={36} className="mb-4" style={{ color: val.accent }} />
              <h3 className="font-barlow-condensed font-black text-2xl text-[#0B1F3A] uppercase mb-3">{val.name}</h3>
              <p className="font-barlow text-gray-500 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Values() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-[#0B1F3A] pt-32 pb-20 dot-pattern">
        <div className="container mx-auto px-4">
          <div className="text-white/40 font-barlow text-sm mb-4 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Our Values</span>
          </div>
          <h1 className="font-barlow-condensed font-black text-5xl md:text-7xl text-white uppercase leading-none mb-4">
            Our Core Values
          </h1>
          <p className="font-barlow text-white/60 text-xl max-w-xl">
            Eight principles that guide everything we do.
          </p>
        </div>
      </section>

      <ValuesGrid />

      {/* CTA */}
      <section className="bg-[#0B1F3A] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-barlow-condensed font-black text-4xl text-white uppercase mb-4">
            These Values Guide Every Session, Every Interaction.
          </h2>
          <p className="font-barlow text-white/60 max-w-xl mx-auto mb-8">
            Experience it yourself — join us for Summer 2026 camps.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#69BE28] hover:bg-[#5aaa22] text-white font-barlow-condensed font-bold uppercase tracking-wide px-10"
          >
            <a href="https://intownathletics2026registration.netlify.app" target="_blank" rel="noopener noreferrer">Register Now</a>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
