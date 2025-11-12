import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function GetStarted() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section ref={containerRef} className="w-full relative overflow-hidden" style={{ height: '90vh' }}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <motion.img
          src="/landing-urnovl/nerd-asian.jpg"
          alt="Get Started"
          className="w-full h-full object-cover"
          style={{ y }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'rgba(0, 0, 0, 0.5)',
          }}
        />
      </div>

      {/* Content */}
      <div className="w-full h-full px-8 py-20 flex items-center relative z-10">
        <div className="max-w-6xl">
          <h2
            className="text-2xl md:text-4xl lg:text-5xl max-w-4xl mb-8"
            style={{
              color: '#ffffff',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
              textTransform: 'none',
              lineHeight: '1',
            }}
          >
            Get Started
          </h2>
          <p
            className="text-lg md:text-xl lg:text-2xl max-w-3xl mb-8"
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 300,
              lineHeight: '1.5',
            }}
          >
            Join Urnovl today and start your creative journey
          </p>

          {/* Get Started Button */}
          <button
            className="px-12 py-4 mb-8 text-lg font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#ffffff',
              color: '#000000',
              borderRadius: '8px',
              fontFamily: "'Open Sans', sans-serif",
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Get Started
          </button>

          {/* App Store Buttons */}
          <div className="flex gap-4 items-center">
            <a
              href="#"
              className="transition-all duration-300 hover:scale-105 inline-block"
              aria-label="Download on the App Store"
              style={{ cursor: 'pointer' }}
            >
              <img
                src="/landing-urnovl/appstore.png"
                alt="Download on the App Store"
                style={{ height: '50px' }}
              />
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:scale-105 inline-block"
              aria-label="Get it on Google Play"
              style={{ cursor: 'pointer' }}
            >
              <img
                src="/landing-urnovl/goolge-appstore.png"
                alt="Get it on Google Play"
                style={{ height: '50px' }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
