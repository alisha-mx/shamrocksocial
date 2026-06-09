import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { images } from '../data/images';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.wixstatic.com/media/a8a9a0_bd5b9ab3eaa341a8b8be5187356318a1f000.jpg/v1/fill/w_1907,h_1080,fp_0.50_0.50,q_90,enc_auto/a8a9a0_bd5b9ab3eaa341a8b8be5187356318a1f000.jpg"
          alt="The Shamrock Social interior"
          className="w-full h-full object-cover ken-burns"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-guinnessBlack/55" />
        {/* Gradient bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-guinnessBlack/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-[10px] font-semibold tracking-[0.4em] uppercase text-brandBrass mb-6"
        >
          Nottingham's Modern Irish Social House
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase text-brandCream leading-[0.95] tracking-tight mb-3"
        >
          Come for
          <br />
          <span className="italic font-medium">one.</span>
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase text-brandCream leading-[0.95] tracking-tight mb-8"
        >
          Stay for the <span className="italic font-medium text-brandBrass">craic.</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="w-16 h-px bg-brandBrass mx-auto mb-8 origin-left"
        />

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/bookings"
            className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase px-8 py-4 border border-brandCream text-brandCream hover:bg-brandCream hover:text-brandOlive transition-all duration-300 w-full sm:w-auto text-center"
          >
            Book A Table
          </Link>
          <Link
            to="/whats-on"
            className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase px-8 py-4 border border-brandCream text-brandCream hover:bg-brandCream hover:text-brandOlive transition-all duration-300 w-full sm:w-auto text-center"
          >
            Explore What's On
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="font-body text-[9px] tracking-[0.3em] uppercase text-brandCream/40">Scroll</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-brandCream/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
