import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import ScrollReveal from '../components/ScrollReveal';
import cloverClubImg from '../assets/clover-club.jpg';

const WhatsOnPage = () => (
  <Layout>
    {/* Page Hero */}
    <section className="relative bg-guinnessBlack flex items-center justify-center text-center px-6 py-32 pt-40 overflow-hidden min-h-[60vh]">
      <div className="absolute inset-0">
        <img src={cloverClubImg} alt="" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-guinnessBlack/60 via-transparent to-guinnessBlack/80" />
      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-body text-[10px] font-semibold tracking-[0.4em] uppercase text-brandBrass mb-4"
        >
          The Shamrock Social
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase text-brandCream leading-none tracking-tight"
        >
          What's <span className="italic font-medium text-brandBrass">On</span>
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
          Staying for the craic? Here's what's coming up at The Shamrock Social.
        </motion.p>
      </div>
    </section>

    {/* Coming soon */}
    <section className="bg-brandCream py-14 md:py-20 px-6 md:px-16">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <p className="font-body text-[10px] font-semibold tracking-[0.35em] uppercase text-brandBrass mb-6">
            Watch This Space
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl font-medium italic text-textMain leading-snug mb-8">
            No events at the moment, but we'll be crafting something real soon...
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-brandBrass" />
            <div className="w-1.5 h-1.5 rounded-full bg-brandBrass" />
            <div className="w-12 h-px bg-brandBrass" />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.25}>
          <p className="font-body text-sm md:text-base text-textMuted leading-relaxed">
            Follow us on social media to be the first to hear about live music, brunches and everything in between.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="flex justify-center gap-6 mt-8">
            {/* Instagram */}
            <a href="https://www.instagram.com/theshamrocksocial" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-textMuted hover:text-brandBrass transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/profile.php?id=61587057304579" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-textMuted hover:text-brandBrass transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* TikTok */}
            <a href="https://www.tiktok.com/@theshamrocksocialnotts" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-textMuted hover:text-brandBrass transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.87a8.18 8.18 0 0 0 4.78 1.52V6.93a4.85 4.85 0 0 1-1.01-.24z"/>
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </Layout>
);

export default WhatsOnPage;
