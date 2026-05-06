const stats = [
  { value: "500+", label: "Youth Served" },
  { value: "10+", label: "Sports Programs" },
  { value: "15+", label: "Years Experience" },
  { value: "ATL", label: "Atlanta, GA" },
];

export function StatsBar() {
  return (
    <section className="bg-[#69BE28] py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-barlow-condensed font-black text-4xl md:text-5xl text-white leading-none">{stat.value}</div>
              <div className="font-barlow font-semibold text-white/80 text-sm uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
