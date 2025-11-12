export default function Footer() {
  return (
    <footer className="w-full relative px-8 py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company */}
          <div>
            <div
              className="text-lg font-semibold mb-4"
              style={{
                color: 'var(--text-primary)',
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              Company
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <div
              className="text-lg font-semibold mb-4"
              style={{
                color: 'var(--text-primary)',
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              Community
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  Authors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  Readers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div
              className="text-lg font-semibold mb-4"
              style={{
                color: 'var(--text-primary)',
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              Resources
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div
              className="text-lg font-semibold mb-4"
              style={{
                color: 'var(--text-primary)',
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              Legal
            </div>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors duration-300"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: "'Open Sans', sans-serif",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px mb-8" style={{ backgroundColor: 'var(--border-primary)' }} />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p
            style={{
              color: 'var(--text-secondary)',
              fontFamily: "'Open Sans', sans-serif",
              fontSize: '0.875rem',
            }}
          >
            © 2025 Urnovl. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a
              href="#"
              className="transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  stroke="var(--text-secondary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  ry="5"
                  stroke="var(--text-secondary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                  stroke="var(--text-secondary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="17.5"
                  y1="6.5"
                  x2="17.51"
                  y2="6.5"
                  stroke="var(--text-secondary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  stroke="var(--text-secondary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#"
              className="transition-all duration-300 hover:scale-110"
              aria-label="Discord"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                  fill="var(--text-secondary)"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
