import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import bookingsImg from '../assets/bookings.png';

const BOOKING_URL = 'https://bookings.designmynight.com/book?venue_id=6981c2ef6e63cc03f104aa8b&source=partner';

const BookingsPage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative bg-guinnessBlack flex items-center justify-center text-center px-6 pt-40 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <img src={bookingsImg} alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-guinnessBlack/60 via-transparent to-guinnessBlack/80" />
      </div>
      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-body text-[10px] font-semibold tracking-[0.4em] uppercase text-brandBrass mb-4"
        >
          Reserve Your Table
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-brandCream leading-none tracking-tight"
        >
          Book A <span className="italic font-medium text-brandBrass">Table</span>
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-16 h-px bg-brandBrass mx-auto mt-8 origin-left"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="font-body text-brandCream/60 text-sm mt-6 max-w-md mx-auto leading-relaxed"
        >
          Tables, brunches and big nights out, all in a few clicks. Secure your spot below.
        </motion.p>
      </div>
    </section>

    {/* Booking widget */}
    <section className="bg-brandCream py-12 md:py-16 px-6 md:px-16">
      <div className="max-w-3xl mx-auto">
        {/* Intro */}
        <div className="text-center mb-10 md:mb-14">
          <ScrollReveal>
            <SectionLabel>Don't Be A Stranger</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-textMain leading-tight tracking-tight mt-3">
              Save Your Seat
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="bg-surfaceLow border border-brandOlive/10 p-2 md:p-4">
            <iframe
              title="Book a table at The Shamrock Social"
              src={BOOKING_URL}
              className="w-full"
              style={{ minHeight: '720px', border: 'none' }}
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-center font-body text-xs text-textMuted mt-8 leading-relaxed">
            Having trouble with the form?{' '}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brandBrass hover:underline"
            >
              Open the booking page in a new tab
            </a>{' '}
            or email us at{' '}
            <a href="mailto:info@theshamrocksocial.co.uk" className="text-brandBrass hover:underline">
              info@theshamrocksocial.co.uk
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default BookingsPage;
