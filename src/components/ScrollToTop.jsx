import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Instantly jumps to the top of the page whenever the route changes,
// before the new page paints (so there's no flash of a scrolled position).
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Disable browser scroll restoration so back/forward also start at top.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
