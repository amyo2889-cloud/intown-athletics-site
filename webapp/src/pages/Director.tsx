import { Link } from "react-router-dom";
import { PageLayout } from "@/components/intown/PageLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const credentials = [
  "25+ Years Coaching Youth Athletes",
  "Strength & Conditioning Specialist",
  "Atlanta Youth Sports Alliance Member",
  "501(c)(3) Nonprofit Founder",
];

const philosophies = [
  {
    title: "Athlete-Centered Approach",
    desc: "We build programs around the athlete's individual needs, not a one-size-fits-all curriculum.",
  },
  {
    title: "Character Before Championship",
    desc: "Winning matters, but who you become matters more. We prioritize the right values.",
  },
  {
    title: "Community Investment",
    desc: "Every athlete we develop becomes a leader in their community. That's the real win.",
  },
];

function DirectorProfile() {
  const { ref, inView } = useInView();
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Photo */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/marcus-salter.png"
                alt="Marcus Salter, MAT - Founder & Executive Director"
                className="w-full h-[500px] object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#69BE28] text-white font-barlow-condensed font-black text-sm uppercase tracking-wide px-6 py-3 rounded-lg shadow-lg">
              Founder & Executive Director
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="inline-block bg-[#69BE28]/10 border border-[#69BE28]/30 rounded-full px-4 py-1 mb-4">
              <span className="font-barlow-condensed font-bold text-[#69BE28] text-sm uppercase tracking-widest">Founder & Executive Director</span>
            </div>
            <h2 className="font-barlow-condensed font-black text-5xl text-[#0B1F3A] uppercase leading-none mb-2">
              Marcus Salter, MAT
            </h2>
            <p className="font-barlow text-gray-500 text-sm mb-6">Founder & Executive Director, Intown Athletics</p>

            <p className="font-barlow text-gray-600 leading-relaxed mb-8">
              With over 25 years of experience coaching youth athletes, Marcus Salter founded Intown Athletics to bring professional-grade athletic development to Atlanta's underserved communities. A strength and conditioning coach with a Master of Arts in Teaching, Marcus believes that sport is one of the most powerful tools for developing the next generation of leaders.
            </p>

            {/* Quote */}
            <div className="bg-[#0B1F3A] border-l-4 border-[#69BE28] rounded-r-lg p-6 mb-8">
              <p className="font-barlow-condensed font-bold text-white text-lg italic leading-relaxed">
                "I coach athletes, not just players. Every drill, every session, every interaction is an opportunity to build someone up — to help them discover who they can be. Sport is the vehicle; character is the destination."
              </p>
            </div>

            {/* Credentials */}
            <ul className="space-y-3">
              {credentials.map((cred) => (
                <li key={cred} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-[#69BE28] flex-shrink-0" />
                  <span className="font-barlow text-gray-700">{cred}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoachingPhilosophy() {
  const { ref, inView } = useInView();
  return (
    <section className="bg-[#F8F9FA] py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-barlow-condensed font-black text-4xl md:text-5xl text-[#0B1F3A] uppercase text-center mb-14">
          Coaching Philosophy
        </h2>
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {philosophies.map((p, i) => (
            <div key={p.title} className="bg-white rounded-xl p-8 shadow-sm border-t-4 border-[#69BE28]">
              <div className="font-barlow-condensed font-black text-5xl text-[#69BE28]/20 leading-none mb-4">
                0{i + 1}
              </div>
              <h3 className="font-barlow-condensed font-black text-xl text-[#0B1F3A] uppercase mb-3">{p.title}</h3>
              <p className="font-barlow text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Director() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-[#0B1F3A] pt-32 pb-20 dot-pattern">
        <div className="container mx-auto px-4">
          <div className="text-white/40 font-barlow text-sm mb-4 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Meet the Director</span>
          </div>
          <h1 className="font-barlow-condensed font-black text-5xl md:text-7xl text-white uppercase leading-none mb-4">
            Meet the Director
          </h1>
          <p className="font-barlow text-white/60 text-xl">A coach, mentor, and community champion.</p>
        </div>
      </section>

      <DirectorProfile />
      <CoachingPhilosophy />

      {/* CTA */}
      <section className="bg-[#0B1F3A] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-barlow-condensed font-black text-4xl text-white uppercase mb-8">
            Train Under Our Leadership
          </h2>
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
              className="border-white/40 text-white hover:bg-white hover:text-[#0B1F3A] font-barlow-condensed font-bold uppercase tracking-wide px-10 bg-transparent"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
