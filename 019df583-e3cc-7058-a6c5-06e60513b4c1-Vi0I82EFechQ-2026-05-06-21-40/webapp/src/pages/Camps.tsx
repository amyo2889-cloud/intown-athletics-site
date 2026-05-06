import { Link } from "react-router-dom";
import { PageLayout } from "@/components/intown/PageLayout";
import { Calendar, Clock, MapPin, CheckCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const sports = [
  {
    name: "Basketball",
    desc: "Skill development, game play, and fundamentals taught by experienced coaches.",
    image: "https://images.unsplash.com/photo-1546519638405-a9c7a6e399ed?w=600&q=80",
    ages: "Ages 6–12",
  },
  {
    name: "Soccer",
    desc: "Footwork, teamwork, and competitive play in a structured environment.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80",
    ages: "Ages 6–12",
  },
  {
    name: "Flag Football",
    desc: "Technique, strategy, and athletic development for all skill levels.",
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&q=80",
    ages: "Ages 6–12",
  },
  {
    name: "Baseball",
    desc: "Batting, fielding, and pitching fundamentals in a supportive team setting.",
    image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=600&q=80",
    ages: "Ages 6–12",
  },
  {
    name: "Softball",
    desc: "Hitting, fielding, and pitching skills developed in a fun, team-focused setting.",
    image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=600&q=80",
    ages: "Ages 6–12",
  },
];

const ageGroups = [
  {
    label: "Junior",
    ages: "Ages 6–10",
    desc: "Introduction to fundamentals, learning the love of sport in a fun environment.",
  },
  {
    label: "Intermediate",
    ages: "Ages 11–12",
    desc: "Skill refinement, competitive play, and team dynamics development.",
  },
];

const whatToBring = [
  "Athletic clothing and appropriate footwear",
  "Water bottle (labeled with your child's name)",
  "Sunscreen and hat",
  "Any required sports equipment",
  "Positive attitude and team spirit!",
];

const spondFeatures = [
  "Free for families",
  "Instant registration confirmation",
  "Direct communication with coaches",
  "Schedule updates and reminders",
  "Secure payment processing",
];

function CampInfoCards() {
  const { ref, inView } = useInView();
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Info strip */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {[
            { icon: Calendar, label: "Dates", value: "June 9 – August 15, 2026" },
            { icon: Clock, label: "Hours", value: "Mon–Fri, 9:00 AM – 3:00 PM" },
            { icon: MapPin, label: "Location", value: "Atlanta Metro Area Parks & Rec" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-4 p-6 border border-gray-100 rounded-xl bg-[#F8F9FA]">
              <item.icon size={28} className="text-[#69BE28] flex-shrink-0 mt-1" />
              <div>
                <div className="font-barlow-condensed font-black text-sm text-gray-400 uppercase tracking-widest mb-1">{item.label}</div>
                <div className="font-barlow-condensed font-bold text-xl text-[#0B1F3A]">{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Sport cards */}
        <h2 className="font-barlow-condensed font-black text-4xl text-[#0B1F3A] uppercase mb-10">Available Sports</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {sports.map((sport) => (
            <div key={sport.name} className="rounded-xl overflow-hidden shadow-md border border-gray-100 group">
              <div className="h-48 overflow-hidden">
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 bg-[#0B1F3A]">
                <h3 className="font-barlow-condensed font-black text-xl text-white uppercase mb-1">{sport.name}</h3>
                <p className="font-barlow text-white/50 text-sm mb-3">{sport.desc}</p>
                <span className="inline-block bg-[#69BE28]/20 text-[#69BE28] font-barlow-condensed font-bold text-xs uppercase tracking-wide px-3 py-1 rounded-full">
                  {sport.ages}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AgeGroups() {
  const { ref, inView } = useInView();
  return (
    <section className="bg-[#F8F9FA] py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-barlow-condensed font-black text-4xl md:text-5xl text-[#0B1F3A] uppercase text-center mb-14">
          Camp Age Groups
        </h2>
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {ageGroups.map((group, i) => (
            <div key={group.label} className="bg-white rounded-xl p-8 shadow-sm text-center border-b-4 border-[#69BE28]">
              <div className="font-barlow-condensed font-black text-6xl text-[#69BE28]/20 mb-2">0{i + 1}</div>
              <h3 className="font-barlow-condensed font-black text-3xl text-[#0B1F3A] uppercase mb-1">{group.label}</h3>
              <div className="font-barlow font-semibold text-[#69BE28] text-sm uppercase tracking-widest mb-4">{group.ages}</div>
              <p className="font-barlow text-gray-500 leading-relaxed">{group.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatToBring() {
  return (
    <section className="bg-[#0B1F3A] py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-barlow-condensed font-black text-4xl text-white uppercase text-center mb-14">
          What to Bring
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {whatToBring.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle size={20} className="text-[#69BE28] flex-shrink-0" />
              <span className="font-barlow text-white/80">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpondRegistration() {
  const { ref, inView } = useInView();
  return (
    <section className="bg-[#69BE28] py-20">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div>
            <div className="inline-block bg-white/20 rounded-full px-4 py-1 mb-4">
              <span className="font-barlow-condensed font-bold text-white text-sm uppercase tracking-widest">Official Registration Platform</span>
            </div>
            <h2 className="font-barlow-condensed font-black text-4xl md:text-5xl text-white uppercase leading-tight mb-6">
              All Registration is Managed Through Spond
            </h2>
            <p className="font-barlow text-white/80 leading-relaxed mb-8">
              Intown Athletics uses Spond to manage all weekly camp registrations, team communication, and schedules. Spond is free for families and makes it easy to register, receive notifications, and stay connected with the coaching staff.
            </p>
            <ul className="space-y-3">
              {spondFeatures.map((feat) => (
                <li key={feat} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-white flex-shrink-0" />
                  <span className="font-barlow text-white/90">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="https://spond.com/invite/ZIUTQ"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#0B1F3A] hover:bg-[#0a1a30] text-white font-barlow-condensed font-black uppercase tracking-wide text-xl text-center py-5 px-8 rounded-lg transition-colors"
            >
              Register on Spond
            </a>
            <Link
              to="/register"
              className="block border-2 border-white text-white hover:bg-white hover:text-[#69BE28] font-barlow-condensed font-bold uppercase tracking-wide text-center py-4 px-8 rounded-lg transition-colors"
            >
              Join Interest List Instead
            </Link>
            <p className="font-barlow text-white/70 text-sm text-center">
              Questions? Contact us at <a href="mailto:intownathletics@outlook.com" className="underline text-white">intownathletics@outlook.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Camps() {
  return (
    <PageLayout>
      {/* Hero */}
      <section
        className="relative bg-[#0B1F3A] pt-32 pb-24"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-[#0B1F3A]/85" />
        <div className="absolute inset-0 dot-pattern" />
        <div className="relative container mx-auto px-4">
          <div className="text-white/40 font-barlow text-sm mb-4 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Camps</span>
          </div>
          <div className="inline-block bg-[#69BE28]/20 border border-[#69BE28]/40 rounded-full px-4 py-1 mb-4">
            <span className="font-barlow-condensed font-bold text-[#69BE28] text-sm uppercase tracking-widest">Summer 2026</span>
          </div>
          <h1 className="font-barlow-condensed font-black text-5xl md:text-7xl text-white uppercase leading-none mb-4">
            Summer Sports Camps
          </h1>
          <p className="font-barlow text-white/60 text-xl max-w-xl">
            Weekly intensive camps for youth ages 6–12. June through August in Atlanta, GA.
          </p>
        </div>
      </section>

      <CampInfoCards />
      <AgeGroups />
      <WhatToBring />
      <SpondRegistration />
    </PageLayout>
  );
}
