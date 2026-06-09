import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Small floating "play the game" pop-up in the bottom-right corner of every
// page (hidden on the game page itself). Links to /split-the-g.
const SplitTheGFab = () => {
  const { pathname } = useLocation();
  const [hovered, setHovered] = useState(false);

  if (pathname === '/split-the-g') return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* label pill (to the left, on hover) */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.25 }}
            className="whitespace-nowrap font-body text-[10px] font-semibold tracking-[0.22em] uppercase text-guinnessBlack bg-brandBrass px-4 py-2 rounded-full shadow-lg"
          >
            Split the G
          </motion.span>
        )}
      </AnimatePresence>

      {/* small "play me" tag above the circle (hidden while the side label shows) */}
      <AnimatePresence>
        {!hovered && (
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="absolute -top-7 right-1 whitespace-nowrap font-body text-[9px] font-semibold tracking-[0.2em] uppercase text-white bg-guinnessBlack/90 border border-brandBrass/30 px-2 py-1 rounded shadow"
          >
            Play Me
          </motion.span>
        )}
      </AnimatePresence>

      <Link
        to="/split-the-g"
        aria-label="Play Split the G"
        className="relative grid place-items-center w-16 h-16 rounded-full bg-brandOlive border border-brandOlive shadow-xl hover:scale-105 transition-all duration-300"
      >
        {/* gentle pulse ring (perfect circle) */}
        <span className="absolute inset-0 rounded-full border border-brandOlive/50 animate-ping opacity-40" />

        {/* brass coin with pint icon */}
        <span className="grid place-items-center w-11 h-11 rounded-full bg-brandBrass text-guinnessBlack">
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none" aria-hidden="true">
            <path d="M4 3 h12 l-1.4 16 a2 2 0 0 1 -2 1.8 h-5.2 a2 2 0 0 1 -2 -1.8 Z" fill="#1c1109" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
            <path d="M4 3 h12 l-0.5 5 h-11 Z" fill="#f4efe1" />
          </svg>
        </span>
      </Link>
    </motion.div>
  );
};

export default SplitTheGFab;
