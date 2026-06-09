import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import cloverClubImg from '../assets/clover-club.jpg';
import unforgetImg from '../assets/unforget.png';

const PrivateHirePage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative bg-guinnessBlack flex items-center justify-center text-center px-6 py-32 pt-40 overflow-hidden min-h-[55vh]">
      <div className="absolute inset-0">
        <img src="https://static.wixstatic.com/media/a8a9a0_bd5b9ab3eaa341a8b8be5187356318a1f000.jpg/v1/fill/w_1907,h_1080,fp_0.50_0.50,q_90,enc_auto/a8a9a0_bd5b9ab3eaa341a8b8be5187356318a1f000.jpg" alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-guinnessBlack/60 via-transparent to-guinnessBlack/80" />
      </div>
      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-body text-[10px] font-semibold tracking-[0.4em] uppercase text-brandBrass mb-4"
        >
          Events & Private Hire
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-brandCream leading-none tracking-tight"
        >
          Unforgettable <span className="italic font-medium text-brandBrass">Occasions</span>
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
          className="font-body text-sm text-brandCream/60 mt-6 max-w-sm mx-auto leading-relaxed"
        >
          From intimate gatherings to big celebrations, let's make it one to remember.
        </motion.p>
      </div>
    </section>

    {/* Content */}
    <section className="bg-brandCream py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal delay={0.1}>
            <div className="overflow-hidden aspect-[4/3] group">
              <motion.img
                src={unforgetImg}
                alt="The Shamrock Social event space"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={0.2}>
            <SectionLabel>Events & Private Hire</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-textMain leading-tight tracking-tight mt-3 mb-1">
              Unforgettable Occasions
            </h2>
            <p className="font-display text-xl md:text-2xl italic font-medium text-brandOlive mb-6">
              At The Shamrock Social
            </p>

            <div className="w-10 h-px bg-brandBrass/60 mb-6" />

            <div className="space-y-4 mb-8">
              <p className="font-body text-sm md:text-base text-textMuted leading-relaxed">
                Our flexible event spaces are perfect for corporate functions, private parties, celebrations, and group bookings of all sizes.
              </p>
              <p className="font-body text-sm md:text-base text-textMuted leading-relaxed">
                With an energetic setting and tailored food and drink packages, we make organising your event simple, seamless, and memorable.
              </p>
              <p className="font-body text-sm md:text-base text-textMuted leading-relaxed">
                Get in touch today to discuss venue hire, personalised quotes, and how The Shamrock Social can bring your event to life.
              </p>
              <p className="font-body text-sm md:text-base text-textMuted leading-relaxed">
                Email{' '}
                <a href="mailto:info@theshamrocksocial.co.uk" className="text-brandBrass hover:underline">
                  info@theshamrocksocial.co.uk
                </a>{' '}
                or place a booking enquiry below.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:info@theshamrocksocial.co.uk?subject=Private%20Hire%20Enquiry"
                className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase px-8 py-4 bg-brandOlive text-brandCream hover:bg-brandOlive/85 transition-all duration-300"
              >
                Enquire Now
              </a>
              <Link
                to="/bookings"
                className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase px-8 py-4 border border-brandOlive text-brandOlive hover:bg-brandOlive hover:text-brandCream transition-all duration-300"
              >
                Book A Table
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </Layout>
);

export default PrivateHirePage;
