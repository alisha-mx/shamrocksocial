import { motion } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';

const allLinks = [
  { to: '/whats-on', label: "What's On" },
  { to: '/menu', label: 'Menu' },
  { to: '/private-hire', label: 'Private Hire' },
  { to: '/bottomless-brunch', label: 'Bottomless Brunch' },
  { to: '/bookings', label: 'Bookings' },
];

const MobileMenu = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={{ duration: 0.35, ease: [0.32, 0, 0.2, 1] }}
    className="fixed inset-0 z-50 bg-brandCream flex flex-col"
  >
    {/* Header */}
    <div className="flex items-center justify-between px-6 h-20 border-b border-brandOlive/10">
      <Link to="/" onClick={onClose} className="flex flex-col leading-none">
        <span className="font-display text-base font-bold tracking-[0.12em] uppercase text-textMain">
          The Shamrock
        </span>
        <span className="font-display text-[9px] tracking-[0.45em] uppercase text-brandBrass font-medium">
          Social
        </span>
      </Link>
      <button
        onClick={onClose}
        className="p-2 text-textMain"
        aria-label="Close menu"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M2 2L18 18M18 2L2 18" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
    </div>

    {/* Links */}
    <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
      {allLinks.map(({ to, label }, i) => (
        <motion.div
          key={to}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.07 + 0.1, duration: 0.35 }}
        >
          <NavLink
            to={to}
            onClick={onClose}
            className={({ isActive }) =>
              `block font-display text-3xl font-medium py-3 border-b border-brandOlive/10
              ${isActive ? 'text-brandBrass' : 'text-textMain hover:text-brandBrass'}
              transition-colors duration-200`
            }
          >
            {label}
          </NavLink>
        </motion.div>
      ))}
    </nav>

    {/* CTA */}
    <div className="px-8 pb-12">
      <Link
        to="/bookings"
        onClick={onClose}
        className="block w-full text-center font-body text-[11px] font-semibold tracking-[0.25em] uppercase px-6 py-4 bg-brandOlive text-brandCream"
      >
        Book A Table
      </Link>
    </div>
  </motion.div>
);

export default MobileMenu;
