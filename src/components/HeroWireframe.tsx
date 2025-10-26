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
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--border-primary)" strokeWidth="0.2" opacity="0.2"/>
          </pattern>

          {/* Code lines pattern */}
          <pattern id="codeLines" x="0" y="0" width="100" height="60" patternUnits="userSpaceOnUse">
            <line x1="5" y1="10" x2="80" y2="10" stroke="var(--border-primary)" strokeWidth="0.2" opacity="0.3"/>
            <line x1="5" y1="20" x2="60" y2="20" stroke="var(--border-primary)" strokeWidth="0.2" opacity="0.3"/>
            <line x1="5" y1="30" x2="70" y2="30" stroke="var(--border-primary)" strokeWidth="0.2" opacity="0.3"/>
            <line x1="5" y1="40" x2="50" y2="40" stroke="var(--border-primary)" strokeWidth="0.2" opacity="0.3"/>
          </pattern>

          {/* Terminal pattern */}
          <pattern id="terminal" x="0" y="0" width="100" height="50" patternUnits="userSpaceOnUse">
            <text x="2" y="15" fill="var(--border-primary)" fontSize="12" opacity="0.4" fontFamily="monospace">$_</text>
            <line x1="2" y1="25" x2="70" y2="25" stroke="var(--border-primary)" strokeWidth="0.2" opacity="0.3"/>
            <line x1="2" y1="35" x2="50" y2="35" stroke="var(--border-primary)" strokeWidth="0.2" opacity="0.3"/>
          </pattern>
        </defs>

        {/* Distortion layer mask definitions */}
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
          <mask id="inverseCursorMask">
            <rect x="0" y="0" width="1000" height="1000" fill="white" />
            <motion.circle
              cx={mousePos.x}
              cy={mousePos.y}
              r="50"
              fill="black"
              animate={{ cx: mousePos.x, cy: mousePos.y }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </mask>
        </defs>

        {/* Main grid overlay */}
        <rect x="0" y="0" width="1000" height="1000" fill="url(#wireGrid)" opacity="0.5"/>

        {/* Define content once (won't render, just for reference) */}
        <defs>
          <g id="wireframeContent">
        {/* Low-Fi App Wireframes */}
        <g transform="translate(100, 150)">

          {/* Mobile App Frame 1 */}
          <g>
            <motion.rect
              x="0" y="0" width="180" height="320"
              fill="var(--bg-primary)"
              stroke="var(--border-primary)"
              strokeWidth="0.75"
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
              strokeWidth="0.75"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            />
            {/* Menu lines */}
            <motion.line x1="145" y1="20" x2="155" y2="20" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
            <motion.line x1="145" y1="25" x2="155" y2="25" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6 }} />
            <motion.line x1="145" y1="30" x2="155" y2="30" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7 }} />

            {/* Content blocks */}
            <motion.rect x="10" y="55" width="160" height="80" fill="url(#codeLines)" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
            <motion.rect x="10" y="150" width="75" height="60" fill="none" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} />
            <motion.rect x="95" y="150" width="75" height="60" fill="var(--accent-primary)" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} />
            <motion.rect x="10" y="225" width="160" height="40" fill="none" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} />

            {/* CTA Button */}
            <motion.rect
              x="35" y="280" width="110" height="30"
              fill="var(--border-primary)"
              stroke="var(--border-primary)"
              strokeWidth="0.75"
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
              strokeWidth="0.75"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            {/* Browser chrome */}
            <motion.rect x="0" y="0" width="400" height="35" fill="var(--bg-tertiary)" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
            <motion.circle cx="15" cy="17" r="5" fill="none" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }} />
            <motion.circle cx="35" cy="17" r="5" fill="none" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }} />
            <motion.circle cx="55" cy="17" r="5" fill="none" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} />

            {/* URL bar */}
            <motion.rect x="80" y="10" width="300" height="15" fill="none" stroke="var(--border-primary)" strokeWidth="0.75" rx="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} />

            {/* Content sections */}
            <motion.rect x="15" y="55" width="370" height="50" fill="url(#terminal)" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
            <motion.rect x="15" y="120" width="180" height="140" fill="url(#codeLines)" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} />
            <motion.rect x="210" y="120" width="175" height="65" fill="none" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} />
            <motion.rect x="210" y="195" width="175" height="65" fill="var(--accent-primary)" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} />
          </g>

          {/* Terminal/Console Window */}
          <g transform="translate(700, 30)">
            <motion.rect
              x="0" y="0" width="250" height="180"
              fill="var(--bg-primary)"
              stroke="var(--border-primary)"
              strokeWidth="0.75"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            {/* Terminal header */}
            <motion.rect x="0" y="0" width="250" height="25" fill="var(--bg-tertiary)" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
            <motion.line x1="230" y1="8" x2="240" y2="18" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8 }} />
            <motion.line x1="240" y1="8" x2="230" y2="18" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8 }} />

            {/* Terminal content */}
            <motion.rect x="10" y="40" width="230" height="130" fill="url(#terminal)" stroke="none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />

            {/* Command lines */}
            <motion.line x1="15" y1="55" x2="180" y2="55" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2, duration: 0.8 }} />
            <motion.line x1="15" y1="75" x2="150" y2="75" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.3, duration: 0.8 }} />
            <motion.line x1="15" y1="95" x2="200" y2="95" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.4, duration: 0.8 }} />
            <motion.rect x="15" y="115" width="8" height="12" fill="var(--border-primary)" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ delay: 1.5, duration: 1, repeat: Infinity }} />
          </g>

          {/* API/Data Flow Diagram */}
          <g transform="translate(700, 250)">
            {/* Database */}
            <motion.ellipse cx="30" cy="60" rx="25" ry="15" fill="none" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
            <motion.ellipse cx="30" cy="50" rx="25" ry="15" fill="var(--bg-primary)" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
            <motion.line x1="5" y1="50" x2="5" y2="60" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7 }} />
            <motion.line x1="55" y1="50" x2="55" y2="60" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7 }} />

            {/* Connection arrow */}
            <motion.line x1="60" y1="55" x2="110" y2="55" stroke="var(--border-primary)" strokeWidth="0.75" strokeDasharray="5,5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.9, duration: 1 }} />
            <motion.polygon points="110,55 100,50 100,60" fill="var(--border-primary)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} />

            {/* Server */}
            <motion.rect x="120" y="35" width="50" height="40" fill="none" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} />
            <motion.line x1="125" y1="45" x2="165" y2="45" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1 }} />
            <motion.line x1="125" y1="55" x2="165" y2="55" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.1 }} />
            <motion.line x1="125" y1="65" x2="165" y2="65" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2 }} />

            {/* Connection arrow */}
            <motion.line x1="175" y1="55" x2="225" y2="55" stroke="var(--border-primary)" strokeWidth="0.75" strokeDasharray="5,5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.3, duration: 1 }} />
            <motion.polygon points="225,55 215,50 215,60" fill="var(--border-primary)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} />

            {/* Client/User */}
            <motion.circle cx="250" cy="55" r="25" fill="none" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
            <motion.circle cx="250" cy="45" r="8" fill="none" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} />
            <motion.path d="M 235 70 Q 250 60 265 70" fill="none" stroke="var(--border-primary)" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.3 }} />
          </g>
        </g>

        {/* Code brackets decorative elements */}
        <g opacity="0.2">
          <motion.text x="50" y="900" fontSize="80" fill="var(--border-primary)" fontFamily="monospace" fontWeight="bold" initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ delay: 1.5 }}>{'<>'}</motion.text>
          <motion.text x="850" y="180" fontSize="60" fill="var(--border-primary)" fontFamily="monospace" fontWeight="bold" initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ delay: 1.7 }}>{'{ }'}</motion.text>
          <motion.text x="100" y="80" fontSize="50" fill="var(--border-primary)" fontFamily="monospace" fontWeight="bold" initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ delay: 1.6 }}>{'[ ]'}</motion.text>
        </g>

        {/* Miro Board Elements - Sticky Notes & Cards */}
        <g>
          {/* Sticky Note 1 - Top Right */}
          <motion.g
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: 1, rotate: 3 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <rect x="750" y="600" width="120" height="120" fill="var(--accent-primary)" stroke="var(--border-primary)" strokeWidth="0.75" rx="2" opacity="0.9"/>
            <line x1="760" y1="625" x2="860" y2="625" stroke="var(--accent-secondary)" strokeWidth="0.75" opacity="0.6"/>
            <line x1="760" y1="645" x2="850" y2="645" stroke="var(--accent-secondary)" strokeWidth="0.75" opacity="0.6"/>
            <line x1="760" y1="665" x2="840" y2="665" stroke="var(--accent-secondary)" strokeWidth="0.75" opacity="0.6"/>
            <circle cx="860" cy="610" r="3" fill="var(--border-primary)"/>
          </motion.g>

          {/* Sticky Note 2 - Left Side */}
          <motion.g
            initial={{ opacity: 0, rotate: 5 }}
            animate={{ opacity: 1, rotate: -2 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <rect x="50" y="550" width="100" height="100" fill="var(--bg-tertiary)" stroke="var(--border-primary)" strokeWidth="0.75" rx="2" opacity="0.9"/>
            <line x1="60" y1="570" x2="130" y2="570" stroke="var(--text-primary)" strokeWidth="0.75" opacity="0.5"/>
            <line x1="60" y1="590" x2="140" y2="590" stroke="var(--text-primary)" strokeWidth="0.75" opacity="0.5"/>
            <circle cx="140" cy="560" r="3" fill="var(--border-primary)"/>
          </motion.g>

          {/* Index Card 1 - Middle */}
          <motion.g
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.6 }}
          >
            <rect x="400" y="700" width="150" height="90" fill="var(--bg-primary)" stroke="var(--border-primary)" strokeWidth="0.75" rx="3"/>
            <line x1="410" y1="720" x2="540" y2="720" stroke="var(--border-primary)" strokeWidth="0.75" opacity="0.4"/>
            <line x1="410" y1="740" x2="530" y2="740" stroke="var(--border-primary)" strokeWidth="0.75" opacity="0.4"/>
            <line x1="410" y1="760" x2="520" y2="760" stroke="var(--border-primary)" strokeWidth="0.75" opacity="0.4"/>
            <text x="415" y="715" fontSize="10" fill="var(--text-primary)" fontWeight="bold" opacity="0.6">SPRINT GOAL</text>
          </motion.g>

          {/* Sticky Note 3 - Bottom */}
          <motion.g
            initial={{ opacity: 0, rotate: -3 }}
            animate={{ opacity: 1, rotate: 1 }}
            transition={{ delay: 2.1, duration: 0.6 }}
          >
            <rect x="250" y="850" width="110" height="110" fill="var(--accent-primary)" stroke="var(--border-primary)" strokeWidth="0.75" rx="2" opacity="0.85"/>
            <line x1="260" y1="875" x2="340" y2="875" stroke="var(--accent-secondary)" strokeWidth="0.75" opacity="0.6"/>
            <line x1="260" y1="895" x2="350" y2="895" stroke="var(--accent-secondary)" strokeWidth="0.75" opacity="0.6"/>
            <circle cx="350" cy="860" r="3" fill="var(--border-primary)"/>
          </motion.g>

          {/* Connecting Arrows */}
          <motion.g
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ delay: 2.3, duration: 1 }}
          >
            <path d="M 150 600 Q 300 650 400 700" fill="none" stroke="var(--border-primary)" strokeWidth="0.75" strokeDasharray="5,5"/>
            <polygon points="400,700 390,695 390,705" fill="var(--border-primary)"/>
          </motion.g>

          {/* Avatar/User Indicator 1 */}
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.2, duration: 0.4 }}
          >
            <circle cx="200" cy="750" r="15" fill="var(--bg-secondary)" stroke="var(--border-primary)" strokeWidth="0.75"/>
            <circle cx="200" cy="745" r="5" fill="none" stroke="var(--border-primary)" strokeWidth="0.75"/>
            <path d="M 190 760 Q 200 755 210 760" fill="none" stroke="var(--border-primary)" strokeWidth="0.75"/>
          </motion.g>

          {/* Avatar/User Indicator 2 */}
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.4, duration: 0.4 }}
          >
            <circle cx="650" cy="800" r="15" fill="var(--bg-secondary)" stroke="var(--border-primary)" strokeWidth="0.75"/>
            <circle cx="650" cy="795" r="5" fill="none" stroke="var(--border-primary)" strokeWidth="0.75"/>
            <path d="M 640 810 Q 650 805 660 810" fill="none" stroke="var(--border-primary)" strokeWidth="0.75"/>
          </motion.g>

          {/* Small Task Card */}
          <motion.g
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            <rect x="550" y="500" width="80" height="60" fill="var(--bg-primary)" stroke="var(--border-primary)" strokeWidth="0.75" rx="2"/>
            <rect x="555" y="510" width="10" height="10" fill="none" stroke="var(--border-primary)" strokeWidth="0.75"/>
            <line x1="570" y1="515" x2="635" y2="515" stroke="var(--border-primary)" strokeWidth="0.75" opacity="0.5"/>
            <line x1="570" y1="530" x2="630" y2="530" stroke="var(--border-primary)" strokeWidth="0.75" opacity="0.5"/>
          </motion.g>

          {/* Thumbtack/Pin on sticky */}
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.6, duration: 0.3 }}
          >
            <circle cx="100" cy="555" r="4" fill="var(--border-primary)"/>
            <line x1="100" y1="559" x2="100" y2="565" stroke="var(--border-primary)" strokeWidth="0.75"/>
          </motion.g>
        </g>

          </g>
        </defs>

        {/* Render normal content everywhere EXCEPT cursor area */}
        <use href="#wireframeContent" mask="url(#inverseCursorMask)" />

        {/* Colored versions of ALL elements - ONLY visible in cursor area */}
        <g mask="url(#cursorMask)">
          {/* Colored Wireframe Elements */}
          <g transform="translate(100, 150)">
            {/* Mobile App Frame 1 - Purple */}
            <g>
              <motion.rect
                x="0" y="0" width="180" height="320"
                fill="#E8EAF6"
                stroke="#2D2D2D"
                strokeWidth="0.75"
                rx="8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <motion.rect x="10" y="10" width="160" height="30" fill="#7C4DFF" stroke="#2D2D2D" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.4 }} />
              <motion.line x1="145" y1="20" x2="155" y2="20" stroke="#FFFFFF" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 }} />
              <motion.line x1="145" y1="25" x2="155" y2="25" stroke="#FFFFFF" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.6 }} />
              <motion.line x1="145" y1="30" x2="155" y2="30" stroke="#FFFFFF" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7 }} />
              <motion.rect x="10" y="55" width="160" height="80" fill="#FFFFFF" stroke="#2D2D2D" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
              <motion.rect x="10" y="150" width="75" height="60" fill="#FFFFFF" stroke="#2D2D2D" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} />
              <motion.rect x="95" y="150" width="75" height="60" fill="#FFD93D" stroke="#2D2D2D" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} />
              <motion.rect x="10" y="225" width="160" height="40" fill="#FFFFFF" stroke="#2D2D2D" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} />
              <motion.rect x="35" y="280" width="110" height="30" fill="#4CAF50" stroke="#2D2D2D" strokeWidth="0.75" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }} />
            </g>

            {/* Desktop Browser Window - Blue */}
            <g transform="translate(250, 0)">
              <motion.rect x="0" y="0" width="400" height="280" fill="#FFFFFF" stroke="#2D2D2D" strokeWidth="0.75" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} />
              <motion.rect x="0" y="0" width="400" height="35" fill="#4A90E2" stroke="#2D2D2D" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
              <motion.circle cx="15" cy="17" r="5" fill="#FF6B6B" stroke="#2D2D2D" strokeWidth="0.75" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }} />
              <motion.circle cx="35" cy="17" r="5" fill="#FFD93D" stroke="#2D2D2D" strokeWidth="0.75" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }} />
              <motion.circle cx="55" cy="17" r="5" fill="#4CAF50" stroke="#2D2D2D" strokeWidth="0.75" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }} />
              <motion.rect x="80" y="10" width="300" height="15" fill="#E3F2FD" stroke="#2D2D2D" strokeWidth="0.75" rx="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} />
              <motion.rect x="15" y="55" width="370" height="50" fill="#FFF9C4" stroke="#2D2D2D" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
              <motion.rect x="15" y="120" width="180" height="140" fill="#E8F5E9" stroke="#2D2D2D" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} />
              <motion.rect x="210" y="120" width="175" height="65" fill="#FFFFFF" stroke="#2D2D2D" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} />
              <motion.rect x="210" y="195" width="175" height="65" fill="#FFB6D9" stroke="#2D2D2D" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} />
            </g>

            {/* Terminal/Console Window - Dark */}
            <g transform="translate(700, 30)">
              <motion.rect x="0" y="0" width="250" height="180" fill="#1E1E2E" stroke="#2D2D2D" strokeWidth="0.75" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} />
              <motion.rect x="0" y="0" width="250" height="25" fill="#181825" stroke="#2D2D2D" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
              <motion.line x1="230" y1="8" x2="240" y2="18" stroke="#FF6B6B" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8 }} />
              <motion.line x1="240" y1="8" x2="230" y2="18" stroke="#FF6B6B" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8 }} />
              {/* $ prompt symbols */}
              <motion.text x="15" y="53" fontSize="12" fill="#F38BA8" fontFamily="monospace" fontWeight="bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>$</motion.text>
              <motion.text x="15" y="73" fontSize="12" fill="#F38BA8" fontFamily="monospace" fontWeight="bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>$</motion.text>
              <motion.text x="15" y="93" fontSize="12" fill="#F38BA8" fontFamily="monospace" fontWeight="bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>$</motion.text>
              {/* Command lines */}
              <motion.line x1="25" y1="55" x2="180" y2="55" stroke="#A6E3A1" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2, duration: 0.8 }} />
              <motion.line x1="25" y1="75" x2="150" y2="75" stroke="#89DCEB" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.3, duration: 0.8 }} />
              <motion.line x1="25" y1="95" x2="200" y2="95" stroke="#F9E2AF" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.4, duration: 0.8 }} />
              {/* Blinking cursor */}
              <motion.rect x="15" y="115" width="8" height="12" fill="#CBA6F7" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ delay: 1.5, duration: 1, repeat: Infinity }} />
            </g>

            {/* API/Data Flow Diagram - Colorful */}
            <g transform="translate(700, 250)">
              <motion.ellipse cx="30" cy="60" rx="25" ry="15" fill="#4A90E2" stroke="#2D2D2D" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
              <motion.ellipse cx="30" cy="50" rx="25" ry="15" fill="#64B5F6" stroke="#2D2D2D" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
              <motion.line x1="5" y1="50" x2="5" y2="60" stroke="#2D2D2D" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7 }} />
              <motion.line x1="55" y1="50" x2="55" y2="60" stroke="#2D2D2D" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.7 }} />
              <motion.line x1="60" y1="55" x2="110" y2="55" stroke="#FF9800" strokeWidth="0.75" strokeDasharray="5,5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.9, duration: 1 }} />
              <motion.polygon points="110,55 100,50 100,60" fill="#FF9800" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} />
              <motion.rect x="120" y="35" width="50" height="40" fill="#9C27B0" stroke="#2D2D2D" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} />
              <motion.line x1="125" y1="45" x2="165" y2="45" stroke="#FFFFFF" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1 }} />
              <motion.line x1="125" y1="55" x2="165" y2="55" stroke="#FFFFFF" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.1 }} />
              <motion.line x1="125" y1="65" x2="165" y2="65" stroke="#FFFFFF" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2 }} />
              <motion.line x1="175" y1="55" x2="225" y2="55" stroke="#FF9800" strokeWidth="0.75" strokeDasharray="5,5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.3, duration: 1 }} />
              <motion.polygon points="225,55 215,50 215,60" fill="#FF9800" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} />
              <motion.circle cx="250" cy="55" r="25" fill="#FF6B6B" stroke="#2D2D2D" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
              <motion.circle cx="250" cy="45" r="8" fill="#FFFFFF" stroke="#2D2D2D" strokeWidth="0.75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} />
              <motion.path d="M 235 70 Q 250 60 265 70" fill="none" stroke="#FFFFFF" strokeWidth="0.75" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.3 }} />
            </g>
          </g>

          {/* Sticky Note 1 - Bright Yellow */}
          <motion.g
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: 1, rotate: 3 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <rect x="750" y="600" width="120" height="120" fill="#FFD93D" stroke="#2D2D2D" strokeWidth="0.75" rx="2"/>
            <line x1="760" y1="625" x2="860" y2="625" stroke="#2D2D2D" strokeWidth="0.75" opacity="0.4"/>
            <line x1="760" y1="645" x2="850" y2="645" stroke="#2D2D2D" strokeWidth="0.75" opacity="0.4"/>
            <line x1="760" y1="665" x2="840" y2="665" stroke="#2D2D2D" strokeWidth="0.75" opacity="0.4"/>
            <circle cx="860" cy="610" r="3" fill="#FF6B6B"/>
          </motion.g>

          {/* Sticky Note 2 - Light Blue */}
          <motion.g
            initial={{ opacity: 0, rotate: 5 }}
            animate={{ opacity: 1, rotate: -2 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            <rect x="50" y="550" width="100" height="100" fill="#A8E6CF" stroke="#2D2D2D" strokeWidth="0.75" rx="2"/>
            <line x1="60" y1="570" x2="130" y2="570" stroke="#2D2D2D" strokeWidth="0.75" opacity="0.4"/>
            <line x1="60" y1="590" x2="140" y2="590" stroke="#2D2D2D" strokeWidth="0.75" opacity="0.4"/>
            <circle cx="140" cy="560" r="3" fill="#FF6B6B"/>
          </motion.g>

          {/* Index Card 1 - White with shadow */}
          <motion.g
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.6 }}
          >
            <rect x="400" y="700" width="150" height="90" fill="#FFFFFF" stroke="#2D2D2D" strokeWidth="0.75" rx="3"/>
            <line x1="410" y1="720" x2="540" y2="720" stroke="#CCCCCC" strokeWidth="0.75"/>
            <line x1="410" y1="740" x2="530" y2="740" stroke="#CCCCCC" strokeWidth="0.75"/>
            <line x1="410" y1="760" x2="520" y2="760" stroke="#CCCCCC" strokeWidth="0.75"/>
            <text x="415" y="715" fontSize="10" fill="#2D2D2D" fontWeight="bold">SPRINT GOAL</text>
          </motion.g>

          {/* Sticky Note 3 - Pink */}
          <motion.g
            initial={{ opacity: 0, rotate: -3 }}
            animate={{ opacity: 1, rotate: 1 }}
            transition={{ delay: 2.1, duration: 0.6 }}
          >
            <rect x="250" y="850" width="110" height="110" fill="#FFB6D9" stroke="#2D2D2D" strokeWidth="0.75" rx="2"/>
            <line x1="260" y1="875" x2="340" y2="875" stroke="#2D2D2D" strokeWidth="0.75" opacity="0.4"/>
            <line x1="260" y1="895" x2="350" y2="895" stroke="#2D2D2D" strokeWidth="0.75" opacity="0.4"/>
            <circle cx="350" cy="860" r="3" fill="#FF6B6B"/>
          </motion.g>

          {/* Connecting Arrows - Bright */}
          <motion.g
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ delay: 2.3, duration: 1 }}
          >
            <path d="M 150 600 Q 300 650 400 700" fill="none" stroke="#4A90E2" strokeWidth="0.75" strokeDasharray="5,5"/>
            <polygon points="400,700 390,695 390,705" fill="#4A90E2"/>
          </motion.g>

          {/* Avatar/User Indicator 1 - Colored */}
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.2, duration: 0.4 }}
          >
            <circle cx="200" cy="750" r="15" fill="#7C4DFF" stroke="#2D2D2D" strokeWidth="0.75"/>
            <circle cx="200" cy="745" r="5" fill="#FFFFFF"/>
            <path d="M 190 760 Q 200 755 210 760" fill="none" stroke="#FFFFFF" strokeWidth="0.75"/>
          </motion.g>

          {/* Avatar/User Indicator 2 - Colored */}
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.4, duration: 0.4 }}
          >
            <circle cx="650" cy="800" r="15" fill="#FF6B6B" stroke="#2D2D2D" strokeWidth="0.75"/>
            <circle cx="650" cy="795" r="5" fill="#FFFFFF"/>
            <path d="M 640 810 Q 650 805 660 810" fill="none" stroke="#FFFFFF" strokeWidth="0.75"/>
          </motion.g>

          {/* Small Task Card - Colored */}
          <motion.g
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            <rect x="550" y="500" width="80" height="60" fill="#E8F5E9" stroke="#2D2D2D" strokeWidth="0.75" rx="2"/>
            <rect x="555" y="510" width="10" height="10" fill="#4CAF50" stroke="#2D2D2D" strokeWidth="0.75"/>
            <line x1="570" y1="515" x2="635" y2="515" stroke="#2D2D2D" strokeWidth="0.75" opacity="0.5"/>
            <line x1="570" y1="530" x2="630" y2="530" stroke="#2D2D2D" strokeWidth="0.75" opacity="0.5"/>
          </motion.g>

          {/* Thumbtack/Pin - Red */}
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.6, duration: 0.3 }}
          >
            <circle cx="100" cy="555" r="4" fill="#FF6B6B"/>
            <line x1="100" y1="559" x2="100" y2="565" stroke="#FF6B6B" strokeWidth="0.75"/>
          </motion.g>
        </g>

        {/* Cursor indicator circle */}
        <motion.circle
          cx={mousePos.x}
          cy={mousePos.y}
          r="50"
          fill="none"
          stroke="var(--border-primary)"
          strokeWidth="0.75"
          opacity="0.3"
          animate={{ cx: mousePos.x, cy: mousePos.y }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

      </svg>
    </div>
  );
}
