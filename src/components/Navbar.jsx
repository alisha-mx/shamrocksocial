import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MobileMenu from './MobileMenu';
import HeaderLogo from './HeaderLogo';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/whats-on', label: "What's On" },
  { to: '/menu', label: 'Menu' },
  { to: '/private-hire', label: 'Private Hire' },
  { to: '/bottomless-brunch', label: 'Bottomless Brunch' },
  { to: '/bookings', label: 'Bookings' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 h-20
          transition-all duration-500
          ${scrolled
            ? 'bg-brandCream/95 backdrop-blur-md border-b border-brandOlive/10 shadow-sm'
            : 'bg-brandCream/90 backdrop-blur-sm border-b border-brandOlive/10'}
        `}
      >
        <div className="max-w-[1440px] mx-auto h-full px-6 md:px-16 flex items-center gap-8">
          {/* Left — Logo */}
          <HeaderLogo />

          {/* Centre — all nav links */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-8">
            {navLinks.map(({ to, label }) => (
              <NavLinkItem key={to} to={to} label={label} />
            ))}
          </div>

          {/* Right — Book Now button */}
          <div className="hidden lg:block ml-auto">
            <Link
              to="/bookings"
              className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase px-6 py-2.5 border border-brandOlive text-brandOlive hover:bg-brandOlive hover:text-brandCream transition-all duration-300 whitespace-nowrap"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden ml-auto text-textMain p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <div className="flex flex-col gap-[5px]">
              <span className="block w-6 h-[1.5px] bg-textMain" />
              <span className="block w-4 h-[1.5px] bg-textMain" />
              <span className="block w-6 h-[1.5px] bg-textMain" />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

const NavLinkItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `relative font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-textMain group
      transition-all duration-200 hover:scale-105 hover:font-bold
      ${isActive ? 'text-brandBrass' : ''}`
    }
  >
    {({ isActive }) => (
      <>
        {label}
        <span
          className={`
            absolute -bottom-0.5 left-0 h-px bg-brandBrass
            transition-all duration-300
            ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
          `}
        />
      </>
    )}
  </NavLink>
);

export default Navbar;
