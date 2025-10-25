import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroWireframe() {
  const [mousePos, setMousePos] = useState({ x: 500, y: 500 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const svg = document.getElementById('hero-wireframe-svg') as SVGSVGElement;
      if (svg) {
        const pt = svg.createSVGPoint();
        pt.x = e.clientX;
        pt.y = e.clientY;
        const svgP = pt.matrixTransform(svg.getScreenCTM()?.inverse());
        setMousePos({ x: svgP.x, y: svgP.y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="w-full h-full absolute inset-0">
      <svg
        id="hero-wireframe-svg"
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        style={{ background: 'var(--bg-secondary)' }}
      >
        <defs>
          {/* Distortion filter */}
          <filter id="distortion" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.03"
              numOctaves="3"
              result="turbulence"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="20"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* Distortion mask - follows cursor */}
          <radialGradient id="distortionMask">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          {/* Wireframe grid */}
          <pattern id="wireGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--border-primary)" strokeWidth="0.5" opacity="0.2"/>
          </pattern>

          {/* Code lines pattern */}
          <pattern id="codeLines" x="0" y="0" width="100" height="60" patternUnits="userSpaceOnUse">
            <line x1="5" y1="10" x2="80" y2="10" stroke="var(--border-primary)" strokeWidth="1" opacity="0.3"/>
            <line x1="5" y1="20" x2="60" y2="20" stroke="var(--border-primary)" strokeWidth="1" opacity="0.3"/>
            <line x1="5" y1="30" x2="70" y2="30" stroke="var(--border-primary)" strokeWidth="1" opacity="0.3"/>
            <line x1="5" y1="40" x2="50" y2="40" stroke="var(--border-primary)" strokeWidth="1" opacity="0.3"/>
          </pattern>

          {/* Terminal pattern */}
          <pattern id="terminal" x="0" y="0" width="100" height="50" patternUnits="userSpaceOnUse">
            <text x="2" y="15" fill="var(--border-primary)" fontSize="12" opacity="0.4" fontFamily="monospace">$_</text>
            <line x1="2" y1="25" x2="70" y2="25" stroke="var(--border-primary)" strokeWidth="0.5" opacity="0.3"/>
            <line x1="2" y1="35" x2="50" y2="35" stroke="var(--border-primary)" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>

        {/* Main grid overlay */}
        <rect x="0" y="0" width="1000" height="1000" fill="url(#wireGrid)" opacity="0.5"/>

        {/* Normal content - always visible - wrapped in group for reference */}
        <g id="wireframeContent">
        {/* Low-Fi App Wireframes */}
        <g transform="translate(100, 150)">

          {/* Mobile App Frame 1 */}
          <g>
            <motion.rect
              x="0" y="0" width="180" height="320"
              fill="var(--bg-primary)"
              stroke="var(--border-primary)"
              strokeWidth="3"
              rx="8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            {/* Header bar */}
            <motion.rect
              x="10" y="10" width="160" height="30"
              fill="none"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            />
            {/* Menu lines */}
            <motion.line x1="145" y1="20" x2="155" y2="20" stroke="var(--border-primary)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
            <motion.line x1="145" y1="25" x2="155" y2="25" stroke="var(--border-primary)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6 }} />
            <motion.line x1="145" y1="30" x2="155" y2="30" stroke="var(--border-primary)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7 }} />

            {/* Content blocks */}
            <motion.rect x="10" y="55" width="160" height="80" fill="url(#codeLines)" stroke="var(--border-primary)" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
            <motion.rect x="10" y="150" width="75" height="60" fill="none" stroke="var(--border-primary)" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} />
            <motion.rect x="95" y="150" width="75" height="60" fill="var(--accent-primary)" stroke="var(--border-primary)" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} />
            <motion.rect x="10" y="225" width="160" height="40" fill="none" stroke="var(--border-primary)" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} />

            {/* CTA Button */}
            <motion.rect
              x="35" y="280" width="110" height="30"
              fill="var(--border-primary)"
              stroke="var(--border-primary)"
              strokeWidth="3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            />
          </g>

          {/* Desktop Browser Window */}
          <g transform="translate(250, 0)">
            <motion.rect
              x="0" y="0" width="400" height="280"
              fill="var(--bg-primary)"
              stroke="var(--border-primary)"
              strokeWidth="3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            {/* Browser chrome */}
            <motion.rect x="0" y="0" width="400" height="35" fill="var(--bg-tertiary)" stroke="var(--border-primary)" strokeWidth="3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
            <motion.circle cx="15" cy="17" r="5" fill="none" stroke="var(--border-primary)" strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }} />
            <motion.circle cx="35" cy="17" r="5" fill="none" stroke="var(--border-primary)" strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }} />
            <motion.circle cx="55" cy="17" r="5" fill="none" stroke="var(--border-primary)" strokeWidth="2" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} />

            {/* URL bar */}
            <motion.rect x="80" y="10" width="300" height="15" fill="none" stroke="var(--border-primary)" strokeWidth="2" rx="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} />

            {/* Content sections */}
            <motion.rect x="15" y="55" width="370" height="50" fill="url(#terminal)" stroke="var(--border-primary)" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
            <motion.rect x="15" y="120" width="180" height="140" fill="url(#codeLines)" stroke="var(--border-primary)" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} />
            <motion.rect x="210" y="120" width="175" height="65" fill="none" stroke="var(--border-primary)" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} />
            <motion.rect x="210" y="195" width="175" height="65" fill="var(--accent-primary)" stroke="var(--border-primary)" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} />
          </g>

          {/* Terminal/Console Window */}
          <g transform="translate(700, 30)">
            <motion.rect
              x="0" y="0" width="250" height="180"
              fill="var(--bg-primary)"
              stroke="var(--border-primary)"
              strokeWidth="3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            {/* Terminal header */}
            <motion.rect x="0" y="0" width="250" height="25" fill="var(--bg-tertiary)" stroke="var(--border-primary)" strokeWidth="3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
            <motion.line x1="230" y1="8" x2="240" y2="18" stroke="var(--border-primary)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8 }} />
            <motion.line x1="240" y1="8" x2="230" y2="18" stroke="var(--border-primary)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8 }} />

            {/* Terminal content */}
            <motion.rect x="10" y="40" width="230" height="130" fill="url(#terminal)" stroke="none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />

            {/* Command lines */}
            <motion.line x1="15" y1="55" x2="180" y2="55" stroke="var(--border-primary)" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2, duration: 0.8 }} />
            <motion.line x1="15" y1="75" x2="150" y2="75" stroke="var(--border-primary)" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.3, duration: 0.8 }} />
            <motion.line x1="15" y1="95" x2="200" y2="95" stroke="var(--border-primary)" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.4, duration: 0.8 }} />
            <motion.rect x="15" y="115" width="8" height="12" fill="var(--border-primary)" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ delay: 1.5, duration: 1, repeat: Infinity }} />
          </g>

          {/* API/Data Flow Diagram */}
          <g transform="translate(700, 250)">
            {/* Database */}
            <motion.ellipse cx="30" cy="60" rx="25" ry="15" fill="none" stroke="var(--border-primary)" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
            <motion.ellipse cx="30" cy="50" rx="25" ry="15" fill="var(--bg-primary)" stroke="var(--border-primary)" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
            <motion.line x1="5" y1="50" x2="5" y2="60" stroke="var(--border-primary)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7 }} />
            <motion.line x1="55" y1="50" x2="55" y2="60" stroke="var(--border-primary)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7 }} />

            {/* Connection arrow */}
            <motion.line x1="60" y1="55" x2="110" y2="55" stroke="var(--border-primary)" strokeWidth="2" strokeDasharray="5,5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.9, duration: 1 }} />
            <motion.polygon points="110,55 100,50 100,60" fill="var(--border-primary)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} />

            {/* Server */}
            <motion.rect x="120" y="35" width="50" height="40" fill="none" stroke="var(--border-primary)" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} />
            <motion.line x1="125" y1="45" x2="165" y2="45" stroke="var(--border-primary)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1 }} />
            <motion.line x1="125" y1="55" x2="165" y2="55" stroke="var(--border-primary)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.1 }} />
            <motion.line x1="125" y1="65" x2="165" y2="65" stroke="var(--border-primary)" strokeWidth="1" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2 }} />

            {/* Connection arrow */}
            <motion.line x1="175" y1="55" x2="225" y2="55" stroke="var(--border-primary)" strokeWidth="2" strokeDasharray="5,5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.3, duration: 1 }} />
            <motion.polygon points="225,55 215,50 215,60" fill="var(--border-primary)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} />

            {/* Client/User */}
            <motion.circle cx="250" cy="55" r="25" fill="none" stroke="var(--border-primary)" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
            <motion.circle cx="250" cy="45" r="8" fill="none" stroke="var(--border-primary)" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} />
            <motion.path d="M 235 70 Q 250 60 265 70" fill="none" stroke="var(--border-primary)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.3 }} />
          </g>
        </g>

        {/* Tech connection nodes - rising animation */}
        <g>
          {/* Node 1 */}
          <motion.circle cx="150" r="8" fill="var(--border-primary)" stroke="var(--border-primary)" strokeWidth="2" animate={{ cy: [1000, -50] }} transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 0 }} />
          {/* Node 2 */}
          <motion.circle cx="400" r="8" fill="var(--border-primary)" stroke="var(--border-primary)" strokeWidth="2" animate={{ cy: [1000, -50] }} transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 3 }} />
          {/* Node 3 */}
          <motion.circle cx="650" r="8" fill="var(--border-primary)" stroke="var(--border-primary)" strokeWidth="2" animate={{ cy: [1000, -50] }} transition={{ duration: 13, repeat: Infinity, ease: "linear", delay: 6 }} />
          {/* Node 4 */}
          <motion.circle cx="850" r="8" fill="var(--border-primary)" stroke="var(--border-primary)" strokeWidth="2" animate={{ cy: [1000, -50] }} transition={{ duration: 14, repeat: Infinity, ease: "linear", delay: 9 }} />
        </g>

        {/* Code brackets decorative elements */}
        <g opacity="0.2">
          <motion.text x="50" y="900" fontSize="80" fill="var(--border-primary)" fontFamily="monospace" fontWeight="bold" initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ delay: 1.5 }}>{'<>'}</motion.text>
          <motion.text x="850" y="180" fontSize="60" fill="var(--border-primary)" fontFamily="monospace" fontWeight="bold" initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ delay: 1.7 }}>{'{ }'}</motion.text>
          <motion.text x="100" y="80" fontSize="50" fill="var(--border-primary)" fontFamily="monospace" fontWeight="bold" initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ delay: 1.6 }}>{'[ ]'}</motion.text>
        </g>

        {/* Floating data packets - rising */}
        <motion.rect x="300" width="15" height="15" fill="none" stroke="var(--border-primary)" strokeWidth="2" animate={{ y: [1000, -50] }} transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 0 }} />
        <motion.rect x="600" width="15" height="15" fill="none" stroke="var(--border-primary)" strokeWidth="2" animate={{ y: [1000, -50] }} transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }} />
        <motion.rect x="800" width="15" height="15" fill="none" stroke="var(--border-primary)" strokeWidth="2" animate={{ y: [1000, -50] }} transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 4 }} />
        </g>

        {/* Distortion layer - only visible in cursor area */}
        <defs>
          <mask id="cursorMask">
            <rect x="0" y="0" width="1000" height="1000" fill="black" />
            <motion.circle
              cx={mousePos.x}
              cy={mousePos.y}
              r="50"
              fill="white"
              animate={{ cx: mousePos.x, cy: mousePos.y }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </mask>
        </defs>

        {/* Use element to reference and distort the content, only visible in cursor area */}
        <use href="#wireframeContent" mask="url(#cursorMask)" filter="url(#distortion)" />

        {/* Cursor indicator circle */}
        <motion.circle
          cx={mousePos.x}
          cy={mousePos.y}
          r="50"
          fill="none"
          stroke="var(--border-primary)"
          strokeWidth="1"
          opacity="0.3"
          animate={{ cx: mousePos.x, cy: mousePos.y }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

      </svg>
    </div>
  );
}
