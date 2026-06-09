import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderLogo from './HeaderLogo';

const SubscribeColumn = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div>
      <p className="font-body text-[10px] font-semibold tracking-[0.25em] uppercase text-brandBrass mb-4">Subscribe To Newsletter</p>
      {submitted ? (
        <p className="font-body text-sm text-textMuted">✓ You're on the list. Sláinte!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-[240px] mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="w-full bg-transparent border-b border-brandOlive/40 text-textMain placeholder-textMuted/50 font-body text-sm py-2 text-center focus:outline-none focus:border-brandOlive transition-colors duration-200"
          />
          <button
            type="submit"
            className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase px-5 py-2 border border-brandOlive text-brandOlive hover:bg-brandOlive hover:text-brandCream transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

const Footer = () => {
  return (
  <footer className="bg-brandCream border-t border-brandOlive/10 pt-16 pb-10 px-6 md:px-16">
    <div className="max-w-[1440px] mx-auto">
      {/* Logo */}
      <div className="border-b border-brandOlive/10 pb-10 mb-10 flex justify-center">
        <HeaderLogo />
      </div>

      {/* Columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-center">
        {/* Subscribe */}
        <SubscribeColumn />

        {/* Explore */}
        <div>
          <p className="font-body text-[10px] font-semibold tracking-[0.25em] uppercase text-brandBrass mb-4">Explore</p>
          <ul className="space-y-2">
            {[
              { to: '/whats-on', label: "What's On" },
              { to: '/menu', label: 'Menu' },
              { to: '/private-hire', label: 'Private Hire' },
              { to: '/bottomless-brunch', label: 'Bottomless Brunch' },
              { to: '/bookings', label: 'Bookings' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="font-body text-sm text-textMuted hover:text-brandBrass transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-body text-[10px] font-semibold tracking-[0.25em] uppercase text-brandBrass mb-4">Contact</p>
          <address className="not-italic space-y-2">
            <p className="font-body text-sm text-textMuted">6-10 Carrington Street</p>
            <p className="font-body text-sm text-textMuted">Nottingham, NG1 7FF</p>
            <a
              href="mailto:info@theshamrocksocial.co.uk"
              className="font-body text-sm text-textMuted hover:text-brandBrass transition-colors duration-200 block mt-3"
            >
              info@theshamrocksocial.co.uk
            </a>
          </address>
        </div>

        {/* Social */}
        <div>
          <p className="font-body text-[10px] font-semibold tracking-[0.25em] uppercase text-brandBrass mb-5">Follow</p>
          <div className="flex justify-center gap-5">
            {/* Instagram */}
            <a href="https://www.instagram.com/theshamrocksocial" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-textMuted hover:text-brandBrass transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/profile.php?id=61587057304579" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-textMuted hover:text-brandBrass transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* TikTok */}
            <a href="https://www.tiktok.com/@theshamrocksocialnotts" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-textMuted hover:text-brandBrass transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.87a8.18 8.18 0 0 0 4.78 1.52V6.93a4.85 4.85 0 0 1-1.01-.24z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brandOlive/10 pt-6 flex flex-col md:flex-row justify-between gap-2">
        <p className="font-body text-xs text-textMuted/60">
          © {new Date().getFullYear()} The Shamrock Social. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
