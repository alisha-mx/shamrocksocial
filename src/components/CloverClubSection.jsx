import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../data/images';

const CloverClubSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px 0px' });

  return (
    <section className="relative min-h-[80vh] flex items-center py-14 px-6 md:px-16 overflow-hidden bg-guinnessBlack">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.cloverClub}
          alt="The Clover Club"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-guinnessBlack via-guinnessBlack/80 to-guinnessBlack/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-guinnessBlack/60 via-transparent to-guinnessBlack/40" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-xl"
          style={{
            background: 'rgba(79, 83, 57, 0.18)',
            backdropFilter: 'blur(12px)',
            borderLeft: '3px solid #B59461',
            padding: 'clamp(32px, 5vw, 64px)',
          }}
        >
          {/* Label */}
          <p className="font-body text-[10px] font-semibold tracking-[0.35em] uppercase text-brandBrass mb-5">
            Downstairs
          </p>

          {/* Heading */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-brandCream leading-[1.0] tracking-tight mb-2">
            Clover Club:
          </h2>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-brandCream leading-[1.0] tracking-tight mb-7">
            A <span className="italic font-medium text-brandBrass">Different</span> World.
          </h2>

          {/* Divider */}
          <div className="w-10 h-px bg-brandBrass/60 mb-7" />

          {/* Body */}
          <p className="font-body text-brandCream/70 text-sm md:text-base leading-relaxed mb-8">
            A beautifully decorated, whimsical space hidden beneath the streets of Nottingham. Hosting our legendary Bottomless Brunches and available for the city's most exclusive private hire events.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/private-hire"
              className="inline-block font-body text-[11px] font-semibold tracking-[0.25em] uppercase px-7 py-3.5 border border-brandCream text-brandCream hover:bg-brandCream hover:text-brandOlive transition-all duration-300 text-center"
            >
              Private Hire
            </Link>
            <Link
              to="/bottomless-brunch"
              className="inline-block font-body text-[11px] font-semibold tracking-[0.25em] uppercase px-7 py-3.5 border border-brandCream text-brandCream hover:bg-brandCream hover:text-brandOlive transition-all duration-300 text-center"
            >
              Bottomless Brunch
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Right image hint */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-2/5">
        <img
          src={images.cloverClub}
          alt=""
          aria-hidden
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-guinnessBlack to-transparent" />
      </div>
    </section>
  );
};

export default CloverClubSection;
