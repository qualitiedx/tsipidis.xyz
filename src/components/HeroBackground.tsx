import { motion } from 'framer-motion';

export default function HeroBackground() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 1000"
        preserveAspectRatio="xMidYMid slice"
        style={{ background: 'var(--bg-secondary)' }}
      >
        {/* Define patterns for textures */}
        <defs>
          {/* Vertical lines pattern */}
          <pattern id="verticalLines" x="0" y="0" width="8" height="100" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="100" stroke="var(--border-primary)" strokeWidth="1" opacity="0.3" />
            <line x1="4" y1="0" x2="4" y2="100" stroke="var(--border-primary)" strokeWidth="1" opacity="0.3" />
          </pattern>

          {/* Dense vertical lines */}
          <pattern id="denseVertical" x="0" y="0" width="4" height="100" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="100" stroke="var(--border-primary)" strokeWidth="0.5" opacity="0.4" />
            <line x1="2" y1="0" x2="2" y2="100" stroke="var(--border-primary)" strokeWidth="0.5" opacity="0.4" />
          </pattern>

          {/* Horizontal lines pattern */}
          <pattern id="horizontalLines" x="0" y="0" width="100" height="8" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="100" y2="0" stroke="var(--border-primary)" strokeWidth="1" opacity="0.3" />
            <line x1="0" y1="4" x2="100" y2="4" stroke="var(--border-primary)" strokeWidth="1" opacity="0.3" />
          </pattern>

          {/* Concrete dots pattern */}
          <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.5" fill="var(--border-primary)" opacity="0.2" />
            <circle cx="7" cy="7" r="0.5" fill="var(--border-primary)" opacity="0.2" />
          </pattern>

          {/* Grid pattern */}
          <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="20" height="20" fill="none" stroke="var(--border-primary)" strokeWidth="0.5" opacity="0.2" />
          </pattern>

          {/* Diagonal lines */}
          <pattern id="diagonal" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <line x1="0" y1="10" x2="10" y2="0" stroke="var(--border-primary)" strokeWidth="0.5" opacity="0.3" />
          </pattern>

          {/* Window pattern */}
          <pattern id="windows" x="0" y="0" width="30" height="40" patternUnits="userSpaceOnUse">
            <rect x="5" y="5" width="8" height="12" fill="var(--bg-primary)" opacity="0.5" />
            <rect x="17" y="5" width="8" height="12" fill="var(--bg-primary)" opacity="0.5" />
            <rect x="5" y="23" width="8" height="12" fill="var(--bg-primary)" opacity="0.5" />
            <rect x="17" y="23" width="8" height="12" fill="var(--bg-primary)" opacity="0.5" />
          </pattern>
        </defs>

        {/* Isometric Building Complex */}
        <g transform="translate(400, 400)">

          {/* Far Background Platform */}
          <g>
            <motion.polygon
              points="-300,-320 -200,-360 100,-230 0,-190"
              fill="url(#grid)"
              stroke="var(--border-primary)"
              strokeWidth="1"
              opacity="0.3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1, delay: 0.1 }}
            />
          </g>

          {/* Far Back Tower - Super Tall */}
          <g>
            <motion.polygon
              points="-250,-50 -250,-350 -220,-365 -220,-65"
              fill="url(#denseVertical)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            />
            <motion.polygon
              points="-220,-365 -220,-65 -150,-30 -150,-330"
              fill="var(--bg-primary)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.polygon
              points="-250,-350 -220,-365 -150,-330 -180,-315"
              fill="var(--bg-tertiary)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            />
          </g>

          {/* Back Building - Tall Tower with Windows */}
          <g>
            <motion.polygon
              points="-120,50 -120,-200 -80,-220 -80,30"
              fill="url(#windows)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            />
            <motion.polygon
              points="-80,-220 -80,30 20,80 20,-170"
              fill="var(--bg-tertiary)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.polygon
              points="-120,-200 -80,-220 20,-170 -20,-150"
              fill="var(--bg-primary)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </g>

          {/* Stepped Platform Structure */}
          <g>
            {/* Bottom step */}
            <motion.polygon
              points="-180,80 -180,120 -100,160 -100,120"
              fill="url(#horizontalLines)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            />
            <motion.polygon
              points="-100,120 -100,160 -30,125 -30,85"
              fill="var(--bg-primary)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            {/* Middle step */}
            <motion.polygon
              points="-160,40 -160,80 -80,120 -80,80"
              fill="var(--accent-primary)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            />
            <motion.polygon
              points="-80,80 -80,120 -10,85 -10,45"
              fill="var(--bg-tertiary)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
          </g>

          {/* Middle Building - Wide Block */}
          <g>
            <motion.polygon
              points="-200,150 -200,0 -140,-30 -140,120"
              fill="url(#dots)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.polygon
              points="-140,-30 -140,120 0,180 0,30"
              fill="var(--accent-primary)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.polygon
              points="-200,0 -140,-30 0,30 -60,60"
              fill="var(--bg-tertiary)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </g>

          {/* Small Floating Platform */}
          <g>
            <motion.polygon
              points="40,10 40,-20 80,-40 80,-10"
              fill="url(#diagonal)"
              stroke="var(--border-primary)"
              strokeWidth="1.5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            />
            <motion.polygon
              points="80,-40 80,-10 140,15 140,-15"
              fill="var(--bg-primary)"
              stroke="var(--border-primary)"
              strokeWidth="1.5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
          </g>

          {/* Front Left - Small Cube */}
          <g>
            <motion.polygon
              points="30,200 30,100 70,80 70,180"
              fill="url(#horizontalLines)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            <motion.polygon
              points="70,80 70,180 150,140 150,40"
              fill="var(--bg-primary)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />
            <motion.polygon
              points="30,100 70,80 150,40 110,60"
              fill="var(--border-primary)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </g>

          {/* Angular Structure - Left Side */}
          <g>
            <motion.polygon
              points="-280,200 -280,80 -240,60 -240,180"
              fill="url(#grid)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
            />
            <motion.polygon
              points="-240,60 -240,180 -190,155 -190,35"
              fill="var(--accent-primary)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />
          </g>

          {/* Right Side - Tall Thin Block */}
          <g>
            <motion.polygon
              points="100,-80 100,-280 130,-295 130,-95"
              fill="var(--bg-primary)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
            />
            <motion.polygon
              points="130,-295 130,-95 180,-70 180,-270"
              fill="url(#denseVertical)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
            <motion.polygon
              points="100,-280 130,-295 180,-270 150,-255"
              fill="var(--bg-tertiary)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />
          </g>

          {/* Ultra-tall Right Tower */}
          <g>
            <motion.polygon
              points="200,50 200,-380 225,-395 225,35"
              fill="url(#verticalLines)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.85 }}
            />
            <motion.polygon
              points="225,-395 225,35 270,60 270,-370"
              fill="var(--bg-tertiary)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            />
            <motion.polygon
              points="200,-380 225,-395 270,-370 245,-355"
              fill="var(--accent-primary)"
              stroke="var(--border-primary)"
              strokeWidth="2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </g>

          {/* Small decorative cube - floating */}
          <g>
            <motion.polygon
              points="180,120 180,90 200,80 200,110"
              fill="var(--border-primary)"
              stroke="var(--border-primary)"
              strokeWidth="1.5"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.95 }}
            />
            <motion.polygon
              points="200,80 200,110 230,95 230,65"
              fill="var(--bg-primary)"
              stroke="var(--border-primary)"
              strokeWidth="1.5"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            />
          </g>

          {/* Structural Beams/Lines */}
          <motion.line
            x1="-250" y1="250" x2="200" y2="100"
            stroke="var(--border-primary)"
            strokeWidth="1"
            opacity="0.15"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.1 }}
          />
          <motion.line
            x1="-100" y1="-350" x2="250" y2="-150"
            stroke="var(--border-primary)"
            strokeWidth="1"
            opacity="0.15"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
          />
          <motion.line
            x1="-300" y1="100" x2="100" y2="-200"
            stroke="var(--border-primary)"
            strokeWidth="0.5"
            opacity="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 1.3 }}
          />
          <motion.line
            x1="50" y1="200" x2="280" y2="-100"
            stroke="var(--border-primary)"
            strokeWidth="0.5"
            opacity="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 1.4 }}
          />

          {/* Circular geometric elements */}
          <motion.circle
            cx="-50"
            cy="-150"
            r="3"
            fill="var(--border-primary)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 1.5 }}
          />
          <motion.circle
            cx="120"
            cy="-200"
            r="3"
            fill="var(--border-primary)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 1.6 }}
          />
          <motion.circle
            cx="250"
            cy="0"
            r="3"
            fill="var(--border-primary)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 1.7 }}
          />

          {/* Frame overlay elements */}
          <motion.rect
            x="-320"
            y="-400"
            width="650"
            height="700"
            fill="none"
            stroke="var(--border-primary)"
            strokeWidth="0.5"
            opacity="0.1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1.5, delay: 1.8 }}
          />
        </g>
      </svg>
    </div>
  );
}
