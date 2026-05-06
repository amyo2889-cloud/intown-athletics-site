import { Link } from "react-router-dom";
import { GraduationCap, Target, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const values = [
  { icon: GraduationCap, title: "Youth Development", desc: "Investing in the whole child — mind, body, and spirit." },
  { icon: Target, title: "Discipline", desc: "Teaching consistency and commitment every single day." },
  { icon: Users, title: "Teamwork", desc: "Building teams that lift each other higher." },
  { icon: Heart, title: "Community", desc: "We are Atlanta. We serve our neighborhoods." },
];

export function ValuesTeaser() {
  const { ref, inView } = useInView();
  return (
    <section className="bg-[#F8F9FA] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-barlow-condensed font-black text-4xl md:text-6xl text-[#0B1F3A] uppercase">Our Core Values</h2>
          <p className="font-barlow text-gray-500 mt-4 max-w-xl mx-auto">Eight principles that guide everything we do — on and off the field.</p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {values.map((val) => (
            <div
              key={val.title}
              className="bg-white rounded-lg p-6 border-t-4 border-[#69BE28] shadow-sm hover:shadow-md transition-shadow"
            >
              <val.icon size={32} className="text-[#69BE28] mb-4" />
              <h3 className="font-barlow-condensed font-black text-xl text-[#0B1F3A] uppercase mb-2">{val.title}</h3>
              <p className="font-barlow text-gray-500 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            className="bg-[#0B1F3A] hover:bg-[#1a3a6b] text-white font-barlow-condensed font-bold uppercase tracking-wide"
          >
            <Link to="/values">See All 8 Values</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
