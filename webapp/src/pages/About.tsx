import { Link } from "react-router-dom";
import { PageLayout } from "@/components/intown/PageLayout";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useInView";

const uniqueFeatures = [
  { title: "Nonprofit Mission", desc: "Access for all, regardless of financial situation." },
  { title: "Character-First Coaching", desc: "We develop people, not just players." },
  { title: "Multi-Sport Development", desc: "Explore multiple sports, find your passion." },
  { title: "Community Partnerships", desc: "Deep roots in Atlanta neighborhoods." },
  { title: "Professional Coaching", desc: "Certified, experienced coaches at every camp." },
  { title: "Atlanta-Born", desc: "Rooted in the community we serve." },
];

function PageHero() {
  return (
    <section className="bg-[#0B1F3A] pt-32 pb-20 dot-pattern">
      <div className="container mx-auto px-4">
        <div className="text-white/40 font-barlow text-sm mb-4 uppercase tracking-widest">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">About</span>
        </div>
        <h1 className="font-barlow-condensed font-black text-5xl md:text-7xl text-white uppercase leading-none mb-4">
          About Intown Athletics
        </h1>
        <p className="font-barlow text-white/60 text-xl max-w-xl">
          A nonprofit rooted in Atlanta. Built for Atlanta's youth.
        </p>
      </div>
    </section>
  );
}

function MissionVision() {
  const { ref, inView } = useInView();
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="border-l-4 border-[#69BE28] pl-6 py-4">
            <h3 className="font-barlow-condensed font-black text-2xl text-[#0B1F3A] uppercase mb-3">Our Mission</h3>
            <p className="font-barlow text-gray-600 leading-relaxed">
              Our mission is to empower Atlanta's youth through athletic training, mentorship, and community programming — providing access to quality sports education regardless of socioeconomic background.
            </p>
          </div>
          <div className="border-l-4 border-[#F56600] pl-6 py-4">
            <h3 className="font-barlow-condensed font-black text-2xl text-[#0B1F3A] uppercase mb-3">Our Vision</h3>
            <p className="font-barlow text-gray-600 leading-relaxed">
              A city where every child has the opportunity to discover their potential through sport — building the athletes, leaders, and citizens of tomorrow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeServe() {
  const { ref, inView } = useInView();
  return (
    <section className="bg-[#F8F9FA] py-20">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div>
            <h2 className="font-barlow-condensed font-black text-4xl md:text-5xl text-[#0B1F3A] uppercase mb-6">Who We Serve</h2>
            <p className="font-barlow text-gray-600 leading-relaxed mb-8">
              Founded to bridge the gap between high-quality athletic development and underserved communities in Atlanta, Intown Athletics provides a safe, structured, and supportive environment for youth ages 6–18 to learn fundamentals, build teamwork skills, and develop the character traits that translate beyond the playing field.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { stat: "Ages 6–18", label: "Youth Served" },
                { stat: "4 Sports", label: "Available" },
                { stat: "ATL Metro", label: "Service Area" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="font-barlow-condensed font-black text-2xl text-[#69BE28]">{item.stat}</div>
                  <div className="font-barlow text-gray-500 text-xs uppercase tracking-wide mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800&q=80"
              alt="Youth sports"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatMakesUnique() {
  const { ref, inView } = useInView();
  return (
    <section className="bg-[#0B1F3A] py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-barlow-condensed font-black text-4xl md:text-5xl text-white uppercase text-center mb-14">
          What Makes Intown Unique
        </h2>
        <div
          ref={ref}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {uniqueFeatures.map((feat) => (
            <div key={feat.title} className="bg-[#0d2448] border border-white/10 rounded-lg p-6 hover:border-[#69BE28]/40 transition-colors">
              <div className="w-2 h-8 bg-[#69BE28] rounded-full mb-4" />
              <h3 className="font-barlow-condensed font-black text-xl text-white uppercase mb-2">{feat.title}</h3>
              <p className="font-barlow text-white/50 text-sm">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="bg-[#69BE28] py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-barlow-condensed font-black text-4xl text-white uppercase mb-4">
          Ready to Be Part of Something Bigger?
        </h2>
        <Button
          asChild
          size="lg"
          className="bg-[#0B1F3A] hover:bg-[#0a1a30] text-white font-barlow-condensed font-bold uppercase tracking-wide px-10 mt-2"
        >
          <Link to="/register">Register for Summer 2026</Link>
        </Button>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <PageLayout>
      <PageHero />
      <MissionVision />
      <WhoWeServe />
      <WhatMakesUnique />
      <AboutCTA />
    </PageLayout>
  );
}
