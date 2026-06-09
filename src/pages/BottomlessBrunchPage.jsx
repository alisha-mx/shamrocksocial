import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import cloverClubImg from '../assets/clover-club.jpg';
import brunchImg from '../assets/brunch.png';
import unforgetImg from '../assets/unforget.png';
import freeImg from '../assets/free1.png';

const BRUNCH_MENU_PDF = 'https://8f77759a-92ab-4051-9c12-b6aa5ffffde7.filesusr.com/ugd/a8a9a0_e4e166bbca414b5aab638ce3f0d432d9.pdf';

const details = [
  { label: 'When', value: 'Every Saturday' },
  { label: 'Sittings', value: '1pm – 3pm  /  4pm – 6pm' },
  { label: 'Price', value: '£39.95 pp' },
  { label: 'Boozeless', value: '£29.95 pp' },
];

const includes = [
  'Unlimited Guinness',
  'Free-flowing Prosecco',
  'Hearty brunch dishes',
  'Handcrafted cocktails',
];

const BottomlessBrunchPage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative bg-guinnessBlack flex items-center justify-center text-center px-6 py-32 pt-40 overflow-hidden min-h-[60vh]">
      <div className="absolute inset-0">
        <img src={unforgetImg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-guinnessBlack/70 via-guinnessBlack/40 to-guinnessBlack/85" />
      </div>
      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-body text-[10px] font-semibold tracking-[0.4em] uppercase text-brandBrass mb-4"
        >
          Downstairs At The Clover Club
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase text-brandCream leading-none tracking-tight"
        >
          Bottomless <span className="italic font-medium text-brandBrass">Brunch</span>
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-16 h-px bg-brandBrass mx-auto mt-8 origin-left"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="font-body text-brandCream/70 text-sm md:text-base mt-6 max-w-lg mx-auto leading-relaxed"
        >
          Two hours of free-flowing drinks and proper brunch, every Saturday in the heart of Nottingham.
        </motion.p>
      </div>
    </section>

    {/* Intro + Details */}
    <section className="bg-brandCream py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <ScrollReveal delay={0.1}>
            <SectionLabel>The Best Brunch In Town</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-textMain leading-tight tracking-tight mt-3 mb-1">
              Free-Flowing
            </h2>
            <p className="font-display text-2xl md:text-3xl italic font-medium text-brandOlive mb-6">
              From Start to Finish
            </p>
            <div className="w-10 h-px bg-brandBrass/60 mb-6" />
            <div className="space-y-4 mb-8">
              <p className="font-body text-sm md:text-base text-textMuted leading-relaxed">
                Looking for the best bottomless brunch in Nottingham city centre? Every Saturday, head downstairs to our Clover Club for two hours of free-flowing drinks and delicious food.
              </p>
              <p className="font-body text-sm md:text-base text-textMuted leading-relaxed">
                Enjoy unlimited Guinness, Prosecco and handcrafted cocktails, paired with hearty brunch dishes that hit the spot every time.
              </p>
              <p className="font-display italic text-brandOlive text-lg md:text-xl">
                Grab your table before they're gone.
              </p>
            </div>

            {/* What's included */}
            <ul className="grid grid-cols-[max-content_max-content] gap-x-12 gap-y-3 mb-8">
              {includes.map((item) => (
                <li key={item} className="flex items-center gap-3 font-body text-sm text-textMain">
                  <span className="w-1.5 h-1.5 rounded-full bg-brandBrass flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/bookings"
                className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase px-8 py-4 bg-brandOlive text-brandCream hover:bg-brandOlive/85 transition-all duration-300"
              >
                Book Now
              </Link>
              <a
                href={BRUNCH_MENU_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[11px] font-semibold tracking-[0.25em] uppercase px-8 py-4 border border-brandOlive text-brandOlive hover:bg-brandOlive hover:text-brandCream transition-all duration-300"
              >
                View Menu
              </a>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal delay={0.2}>
            <div className="overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[440px] group">
              <motion.img
                src={freeImg}
                alt="Bottomless Brunch at the Clover Club"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 50%' }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* Details bar — continuous marquee */}
    <section className="bg-brandOlive py-12 md:py-16">
      <div className="overflow-hidden">
        {/* track is the detail set repeated; -50% loop = duplicate the whole run */}
        <div className="flex w-max animate-marquee">
          {[...details, ...details, ...details, ...details, ...details, ...details].map(({ label, value }, i) => (
            <div key={i} className="flex items-center shrink-0">
              <div className="flex items-baseline gap-3 px-10">
                <span className="font-body text-[9px] font-semibold tracking-[0.3em] uppercase text-brandBrass">
                  {label}
                </span>
                <span className="font-display text-xl md:text-2xl font-medium text-brandCream leading-none">
                  {value}
                </span>
              </div>
              <span className="text-brandBrass/70 text-lg">✦</span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-center font-body text-brandCream/60 text-xs mt-10 px-6">
        Now available to book. Bookings essential, tables go fast.
      </p>
    </section>
  </Layout>
);

export default BottomlessBrunchPage;
