import { useEffect, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  opacity: number;
  scale: number;
  createdAt: number;
}

export default function Pages() {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailPointsRef = useRef<TrailPoint[]>([]);
  const animationFrameRef = useRef<number>();
  const lastPointTime = useRef(0);
  const isActiveRef = useRef(false);
  const MAX_TRAIL_POINTS = 35;
  const TRAIL_DURATION = 2000; // milliseconds

  // Canvas rendering loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const render = () => {
      const now = Date.now();

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw trail points
      trailPointsRef.current = trailPointsRef.current.filter((point) => {
        const age = now - point.createdAt;
        if (age > TRAIL_DURATION) return false;

        // Calculate animation progress (0 to 1)
        const progress = age / TRAIL_DURATION;

        // Animate opacity: fade in quickly, fade out slowly
        const opacity = progress < 0.15 ? progress * 6.67 : 1 - (progress - 0.15) / 0.85;

        // Animate scale: grow from 0.5 to 2.5
        const scale = 0.5 + (2 * progress);

        // Draw gradient circle
        const radius = 180 * scale;
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, radius);

        gradient.addColorStop(0, `rgba(102, 126, 234, ${0.5 * opacity})`);
        gradient.addColorStop(0.3, `rgba(118, 75, 162, ${0.35 * opacity})`);
        gradient.addColorStop(0.6, `rgba(118, 75, 162, ${0.2 * opacity})`);
        gradient.addColorStop(1, 'rgba(118, 75, 162, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(point.x - radius, point.y - radius, radius * 2, radius * 2);

        return true;
      });

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Mouse tracking
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isActiveRef.current) return;

      const now = Date.now();
      if (now - lastPointTime.current < 30) return;
      lastPointTime.current = now;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newPoint: TrailPoint = {
        x,
        y,
        opacity: 1,
        scale: 0.5,
        createdAt: now,
      };

      trailPointsRef.current.push(newPoint);

      // Limit trail points
      if (trailPointsRef.current.length > MAX_TRAIL_POINTS) {
        trailPointsRef.current.shift();
      }
    };

    const handleMouseEnter = () => {
      isActiveRef.current = true;
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    };

    const handleMouseLeave = () => {
      isActiveRef.current = false;
      window.removeEventListener('mousemove', handleMouseMove);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Update canvas size on mount and resize
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <section ref={containerRef} className="w-full relative" style={{ height: '90vh' }}>
      {/* Cursor Trail Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 pointer-events-none"
        style={{ width: '100%', height: '100%' }}
      />

      {/* Title with mix blend mode */}
      <div
        className="absolute top-0 left-0 right-0 z-30 pointer-events-none px-8 py-20 flex items-center"
        style={{ mixBlendMode: 'difference' }}
      >
        <h2
          className="text-2xl md:text-4xl lg:text-5xl max-w-4xl"
          style={{
            color: '#ffffff',
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            textTransform: 'none',
            lineHeight: '1',
          }}
        >
          Pages
        </h2>
      </div>

      {/* Content */}
      <div className="w-full h-full px-8 py-20 flex items-center relative z-10">
        <div className="max-w-6xl">
          <div className="mb-8" style={{ visibility: 'hidden' }}>
            <h2 className="text-2xl md:text-4xl lg:text-5xl max-w-4xl">Pages</h2>
          </div>
          <p
            className="text-lg md:text-xl lg:text-2xl max-w-3xl"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 300,
              lineHeight: '1.5',
            }}
          >
            Build your author page. Share your work, engage with your community, and grow your audience.
          </p>
        </div>
      </div>
    </section>
  );
}
