import { Link } from "react-router-dom";
import { Calendar, UserPlus, CheckCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const steps = [
  { icon: Calendar, label: "Click Register on Spond" },
  { icon: UserPlus, label: "Create your free Spond account" },
  { icon: CheckCircle, label: "Select your camp and complete signup" },
];

export function SpondSection() {
  const { ref, inView } = useInView();
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Left: Info */}
          <div>
            <div className="inline-block bg-[#69BE28]/10 border border-[#69BE28]/30 rounded-full px-4 py-1 mb-6">
              <span className="font-barlow-condensed font-bold text-[#69BE28] text-sm uppercase tracking-widest">How Registration Works</span>
            </div>
            <h2 className="font-barlow-condensed font-black text-4xl md:text-5xl text-[#0B1F3A] uppercase leading-tight mb-6">
              We Use Spond for All Camp Registration
            </h2>
            <p className="font-barlow text-gray-600 leading-relaxed mb-8">
              Intown Athletics uses Spond to manage weekly camp registrations, schedules, and family communication. Spond is a free app that makes it easy to sign up for camps, receive updates from coaches, and stay connected. All official registrations happen through our Spond invite link.
            </p>

            {/* Steps */}
            <div className="space-y-4 mb-10">
              {steps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0B1F3A] flex items-center justify-center text-white font-barlow-condensed font-black text-lg">
                    {i + 1}
                  </div>
                  <step.icon size={20} className="text-[#69BE28] flex-shrink-0" />
                  <span className="font-barlow font-semibold text-[#0B1F3A]">{step.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://spond.com/invite/ZIUTQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#F56600] hover:bg-[#d95a00] text-white font-barlow-condensed font-bold uppercase tracking-wide px-8 py-3 rounded transition-colors text-center"
              >
                Register on Spond
              </a>
              <Link
                to="/register"
                className="inline-block border border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white font-barlow-condensed font-bold uppercase tracking-wide px-8 py-3 rounded transition-colors text-center"
              >
                Submit Interest Form Instead
              </Link>
            </div>
          </div>

          {/* Right: App mockup */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-[500px] bg-[#0B1F3A] rounded-[40px] border-4 border-[#1a3a6b] shadow-2xl flex flex-col overflow-hidden">
                {/* Phone status bar */}
                <div className="h-10 bg-[#0B1F3A] flex items-center justify-center px-6">
                  <div className="w-20 h-5 bg-[#1a3a6b] rounded-full" />
                </div>
                {/* App header */}
                <div className="bg-[#69BE28] px-4 py-5">
                  <div className="font-barlow-condensed font-black text-white text-xl uppercase">Spond</div>
                  <div className="font-barlow text-white/80 text-xs mt-1">Intown Athletics</div>
                </div>
                {/* Fake content cards */}
                <div className="flex-1 bg-gray-50 p-3 space-y-3">
                  {["Basketball Camp — Week 1", "Soccer Camp — Week 2", "Flag Football — Week 3"].map((item) => (
                    <div key={item} className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="font-barlow font-semibold text-[#0B1F3A] text-xs">{item}</div>
                      <div className="flex items-center gap-1 mt-1">
                        <div className="w-2 h-2 rounded-full bg-[#69BE28]" />
                        <span className="font-barlow text-gray-400 text-xs">Registration open</span>
                      </div>
                    </div>
                  ))}
                  <div className="bg-[#F56600] rounded-lg p-3 text-center">
                    <div className="font-barlow-condensed font-bold text-white text-sm uppercase">Register Now</div>
                  </div>
                </div>
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-[#69BE28]/10 rounded-[50px] blur-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
