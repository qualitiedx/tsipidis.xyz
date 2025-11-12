import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AuthorTestimonial() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section ref={sectionRef} className="w-full relative overflow-hidden" style={{ height: '90vh' }}>
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <motion.img
          src="/landing-urnovl/author-book-presentation.jpg"
          alt="Author testimonial"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'left top', y }}
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 100%)',
          }}
        />
      </div>

      {/* Quote Content at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-8 pb-24">
        <div className="max-w-4xl">
          <blockquote
            className="text-2xl md:text-3xl lg:text-4xl mb-6"
            style={{
              color: '#ffffff',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 300,
              lineHeight: '1.4',
            }}
          >
            "Urnovl gave me the platform to share my stories with readers who truly care. It's more than a publishing tool—it's a community."
          </blockquote>
          <div
            className="text-lg md:text-xl"
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 400,
            }}
          >
            — Sarah Chen, Fantasy Author
          </div>
        </div>
      </div>
    </section>
  );
}
