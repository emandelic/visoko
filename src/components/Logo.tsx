"use client";

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 36, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Bosnian Pyramids Logo"
    >
      {/* Sun rays */}
      <circle cx="24" cy="13" r="5" fill="url(#sunGrad)" opacity="0.9" />
      <line x1="24" y1="4" x2="24" y2="7" stroke="#E8C97A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="19" x2="24" y2="22" stroke="#E8C97A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="15" y1="13" x2="18" y2="13" stroke="#E8C97A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="30" y1="13" x2="33" y2="13" stroke="#E8C97A" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="17.5" y1="6.5" x2="19.6" y2="8.6" stroke="#E8C97A" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="28.4" y1="17.4" x2="30.5" y2="19.5" stroke="#E8C97A" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="30.5" y1="6.5" x2="28.4" y2="8.6" stroke="#E8C97A" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="19.6" y1="17.4" x2="17.5" y2="19.5" stroke="#E8C97A" strokeWidth="1.2" strokeLinecap="round" />

      {/* Large pyramid */}
      <polygon
        points="24,22 44,44 4,44"
        fill="url(#pyGrad1)"
        stroke="url(#strokeGrad)"
        strokeWidth="0.8"
      />
      {/* Pyramid shading right face */}
      <polygon
        points="24,22 44,44 24,44"
        fill="rgba(0,0,0,0.25)"
      />
      {/* Small pyramid left */}
      <polygon
        points="10,30 18,44 2,44"
        fill="url(#pyGrad2)"
        opacity="0.6"
      />
      {/* Ground line */}
      <line x1="2" y1="44" x2="46" y2="44" stroke="url(#groundGrad)" strokeWidth="1" />

      <defs>
        <linearGradient id="sunGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E8C97A" />
          <stop offset="100%" stopColor="#C9A84C" />
        </linearGradient>
        <linearGradient id="pyGrad1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C9A84C" />
          <stop offset="50%" stopColor="#9A7A2E" />
          <stop offset="100%" stopColor="#5c4418" />
        </linearGradient>
        <linearGradient id="pyGrad2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9A7A2E" />
          <stop offset="100%" stopColor="#5c4418" />
        </linearGradient>
        <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E8C97A" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#C9A84C" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#E8C97A" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="groundGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="#C9A84C" stopOpacity="0.6" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
}
