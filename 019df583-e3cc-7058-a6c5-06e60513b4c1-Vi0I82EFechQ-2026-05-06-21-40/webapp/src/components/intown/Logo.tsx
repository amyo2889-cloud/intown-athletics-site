interface LogoProps {
  variant?: "primary" | "badge" | "text-only";
  className?: string;
  size?: number;
}

export function Logo({ variant = "primary", className = "", size = 48 }: LogoProps) {
  if (variant === "badge") {
    return (
      <svg width={size} height={size} viewBox="0 0 80 80" className={className}>
        <circle cx="40" cy="40" r="38" fill="#0B1F3A" stroke="#69BE28" strokeWidth="3"/>
        <circle cx="40" cy="40" r="33" fill="none" stroke="#69BE28" strokeWidth="1" strokeDasharray="3 2"/>
        <text x="40" y="35" textAnchor="middle" fontFamily="'Barlow Condensed', sans-serif" fontWeight="900" fontSize="22" fill="#69BE28">IA</text>
        <text x="40" y="52" textAnchor="middle" fontFamily="'Barlow Condensed', sans-serif" fontWeight="700" fontSize="7" fill="white" letterSpacing="2">ATHLETICS</text>
        <text x="17" y="46" textAnchor="middle" fontSize="6" fill="#F56600">★</text>
        <text x="63" y="46" textAnchor="middle" fontSize="6" fill="#F56600">★</text>
      </svg>
    );
  }

  if (variant === "text-only") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <svg width={size * 0.6} height={size * 0.7} viewBox="0 0 36 42">
          <path d="M18 2 L34 9 L34 26 Q34 38 18 42 Q2 38 2 26 L2 9 Z" fill="#69BE28"/>
          <path d="M18 5 L31 11 L31 25 Q31 36 18 40 Q5 36 5 25 L5 11 Z" fill="#0B1F3A"/>
          <text x="18" y="27" textAnchor="middle" fontFamily="'Barlow Condensed', sans-serif" fontWeight="900" fontSize="16" fill="#69BE28">IA</text>
        </svg>
        <div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: size * 0.38, color: "currentColor", lineHeight: 1, letterSpacing: "-0.01em" }}>INTOWN</div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: size * 0.25, color: "#69BE28", lineHeight: 1, letterSpacing: "0.1em" }}>ATHLETICS</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg width={size * 1.2} height={size * 1.1} viewBox="0 0 96 88">
        <g fill="#0B1F3A" opacity="0.3">
          <rect x="0" y="55" width="8" height="33"/>
          <rect x="10" y="42" width="6" height="46"/>
          <rect x="18" y="35" width="10" height="53"/>
          <rect x="30" y="25" width="8" height="63"/>
          <rect x="40" y="18" width="6" height="70"/>
          <rect x="48" y="28" width="10" height="60"/>
          <rect x="60" y="38" width="8" height="50"/>
          <rect x="70" y="44" width="7" height="44"/>
          <rect x="79" y="52" width="8" height="36"/>
          <rect x="89" y="58" width="7" height="30"/>
        </g>
        <path d="M48 2 L82 16 L82 48 Q82 74 48 86 Q14 74 14 48 L14 16 Z" fill="#0B1F3A"/>
        <path d="M48 7 L77 20 L77 47 Q77 70 48 81 Q19 70 19 47 L19 20 Z" fill="#69BE28" opacity="0.15"/>
        <text x="48" y="54" textAnchor="middle" fontFamily="'Barlow Condensed', sans-serif" fontWeight="900" fontSize="30" fill="white">IA</text>
        <rect x="34" y="62" width="28" height="2" fill="#69BE28"/>
        <text x="30" y="48" textAnchor="middle" fontSize="7" fill="#F56600">★</text>
        <text x="66" y="48" textAnchor="middle" fontSize="7" fill="#F56600">★</text>
      </svg>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: size * 0.38, color: "currentColor", lineHeight: 1.1, textAlign: "center" }}>INTOWN ATHLETICS</div>
    </div>
  );
}
