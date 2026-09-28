import React from 'react';

interface ZahlatteLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  showTagline?: boolean;
  variant?: 'badge' | 'image' | 'inline';
}

export const ZahlatteLogo: React.FC<ZahlatteLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
  variant = 'badge',
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-36 h-36',
    custom: '',
  };

  // If using the high-res image variant
  if (variant === 'image') {
    return (
      <div className={`relative inline-flex items-center justify-center rounded-full overflow-hidden shadow-lg border-2 border-[#C98A4C]/30 bg-[#F5EFEB] ${sizeMap[size]} ${className}`}>
        <img
          src="/src/assets/images/zahlatte_official_logo_1790588190517.jpg"
          alt="ZahLatté - sip into something beautiful"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Vector SVG rendition of the official uploaded ZahLatté emblem
  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox="0 0 300 300"
        className={`${sizeMap[size] || 'w-full h-full'} drop-shadow-md`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Warm Cream Circular Base */}
        <circle cx="150" cy="150" r="145" fill="#FAF6F0" stroke="#EDE5DC" strokeWidth="2" />

        {/* Top Arch Frame */}
        <path
          d="M 50 160 A 105 105 0 0 1 250 160"
          stroke="#264E4A"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Rolling Zahle Hills in background */}
        <path
          d="M 60 155 Q 110 95 195 125 T 240 145"
          stroke="#264E4A"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 90 152 Q 130 135 175 145"
          stroke="#264E4A"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Traditional Zahlawi Houses with Terracotta roofs */}
        {/* House 1 - Top Center */}
        <path d="M 135 105 L 155 88 L 175 105 Z" fill="#FAF6F0" stroke="#A85A38" strokeWidth="3" />
        <rect x="140" y="105" width="30" height="24" fill="#FAF6F0" stroke="#A85A38" strokeWidth="3" />
        <rect x="148" y="112" width="7" height="9" fill="#A85A38" />
        <rect x="159" y="112" width="7" height="9" fill="#A85A38" />

        {/* House 2 - Lower Left */}
        <path d="M 110 125 L 128 110 L 146 125 Z" fill="#FAF6F0" stroke="#A85A38" strokeWidth="3" />
        <rect x="114" y="125" width="28" height="25" fill="#FAF6F0" stroke="#A85A38" strokeWidth="3" />
        <rect x="122" y="132" width="6" height="8" fill="#A85A38" />
        <rect x="131" y="132" width="6" height="8" fill="#A85A38" />

        {/* House 3 - Lower Right small house */}
        <path d="M 148 132 L 163 120 L 178 132 Z" fill="#FAF6F0" stroke="#A85A38" strokeWidth="3" />
        <rect x="151" y="132" width="23" height="20" fill="#FAF6F0" stroke="#A85A38" strokeWidth="3" />
        <rect x="158" y="137" width="5" height="7" fill="#A85A38" />

        {/* Olive / Laurel Branch on Left */}
        <path
          d="M 68 155 Q 85 125 100 95"
          stroke="#264E4A"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Leaves */}
        <path d="M 76 142 C 65 140 60 130 65 120 C 75 122 80 132 76 142 Z" fill="#FAF6F0" stroke="#264E4A" strokeWidth="3" />
        <path d="M 85 126 C 75 118 76 106 85 100 C 92 108 92 120 85 126 Z" fill="#FAF6F0" stroke="#264E4A" strokeWidth="3" />
        <path d="M 88 136 C 98 132 105 125 104 115 C 95 116 88 126 88 136 Z" fill="#FAF6F0" stroke="#264E4A" strokeWidth="3" />
        <path d="M 96 112 C 102 98 114 96 116 106 C 110 114 100 116 96 112 Z" fill="#FAF6F0" stroke="#264E4A" strokeWidth="3" />

        {/* Steaming Coffee Cup on Saucer on Right */}
        {/* Steam scrolls */}
        <path
          d="M 205 92 Q 192 78 200 66 Q 208 55 198 42"
          stroke="#A85A38"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 218 88 Q 210 75 216 65 Q 222 55 215 46"
          stroke="#A85A38"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Cup Body */}
        <path
          d="M 175 106 C 175 106 173 138 202 138 C 231 138 230 106 230 106 Z"
          fill="#264E4A"
          stroke="#264E4A"
          strokeWidth="2"
        />
        {/* Cup Handle */}
        <path
          d="M 226 112 C 242 112 244 128 226 132"
          stroke="#264E4A"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Cup Rim */}
        <ellipse cx="202" cy="106" rx="28" ry="5" fill="#FAF6F0" stroke="#264E4A" strokeWidth="3" />

        {/* Saucer */}
        <ellipse cx="202" cy="144" rx="34" ry="7" fill="#FAF6F0" stroke="#A85A38" strokeWidth="3.5" />

        {/* Brand Name Typography: ZahLatté */}
        <text
          x="150"
          y="204"
          textAnchor="middle"
          fill="#264E4A"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="48"
          letterSpacing="-1"
        >
          ZahLatté
        </text>

        {/* Slogan: sip into something beautiful */}
        {showTagline && (
          <text
            x="150"
            y="232"
            textAnchor="middle"
            fill="#A85A38"
            fontFamily="Georgia, serif"
            fontStyle="italic"
            fontWeight="700"
            fontSize="18.5"
            letterSpacing="0.2"
          >
            sip into something beautiful
          </text>
        )}
      </svg>
    </div>
  );
};
