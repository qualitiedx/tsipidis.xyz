export default function HeroImage() {
  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* Background Image/Gradient */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        {/* Optional: Add your hero image here */}
        {/* <img
          src="/path-to-your-image.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        /> */}
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'rgba(0, 0, 0, 0.3)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4">
          <h1
            className="text-6xl md:text-8xl font-black uppercase mb-6 tracking-tighter"
            style={{ color: '#ffffff' }}
          >
            Urnovl
          </h1>
          <p
            className="text-xl md:text-3xl max-w-2xl mx-auto"
            style={{ color: '#ffffff' }}
          >
            Stories that move you
          </p>
        </div>
      </div>

      {/* Scroll indicator (optional) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
