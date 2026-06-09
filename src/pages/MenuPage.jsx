import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import heartyFoodImg from '../assets/hearty-food.png';
import beer2Img from '../assets/beer2.jpg';
import brunchImg from '../assets/brunch.png';
import drinkImg from '../assets/drink.png';
import menuBannerImg from '../assets/menu.png';
import whatsOnMusicImg from '../assets/whats-on-music.jpg';

const menus = [
  {
    number: '01',
    label: 'The Menu',
    heading: 'Food Menu',
    description: 'From sharing plates and hearty mains to Sunday roasts and bar snacks, our kitchen celebrates bold, honest Irish-inspired cooking with a modern edge.',
    pdf: 'https://8f77759a-92ab-4051-9c12-b6aa5ffffde7.filesusr.com/ugd/a8a9a0_12c9dcee2d364a29a2c229b90cae0033.pdf',
    image: heartyFoodImg,
    accent: 'bg-brandOlive',
    cta: 'View Food',
  },
  {
    number: '02',
    label: 'Saturday Sessions',
    heading: 'Bottomless Brunch Menu',
    description: 'Two hours of free-flowing Guinness, Prosecco and cocktails paired with our signature brunch classics. £39.95 per person, Saturdays only.',
    pdf: 'https://8f77759a-92ab-4051-9c12-b6aa5ffffde7.filesusr.com/ugd/a8a9a0_e4e166bbca414b5aab638ce3f0d432d9.pdf',
    image: brunchImg,
    accent: 'bg-brandBrass',
    cta: 'View Brunch',
  },
  {
    number: '03',
    label: 'The Bar',
    heading: 'Drinks Menu',
    description: '42 taps, a curated list of premium Irish spirits, classic cocktails and seasonal specials. Something for every taste and every occasion.',
    pdf: 'https://8f77759a-92ab-4051-9c12-b6aa5ffffde7.filesusr.com/ugd/a8a9a0_7a33c4eebebf4ce78066be205cb541a0.pdf',
    image: drinkImg,
    accent: 'bg-textMain',
    cta: 'View Drinks',
  },
];

const MenuPage = () => (
  <Layout>
    {/* Hero */}
    <section className="relative bg-guinnessBlack flex items-center justify-center text-center px-6 py-32 pt-40 overflow-hidden min-h-[55vh]">
      <div className="absolute inset-0">
        <img
          src={menuBannerImg}
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-guinnessBlack/60 via-transparent to-guinnessBlack/80" />
      </div>
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
          Our <span className="italic font-medium text-brandBrass">Menus</span>
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
          Bold flavours, honest ingredients, and a genuine love of great hospitality.
        </motion.p>
      </div>
    </section>

    {/* Menu Cards */}
    <section className="bg-brandCream py-16 md:py-24 px-6 md:px-16">
      {/* Intro */}
      <div className="max-w-[1440px] mx-auto text-center mb-14 md:mb-20">
        <ScrollReveal>
          <SectionLabel>Feeling Peckish?</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-textMain leading-tight tracking-tight mt-3">
            Take Your Pick
          </h2>
        </ScrollReveal>
      </div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {menus.map((menu, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="flex flex-col h-full group">
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/4] mb-6">
                <motion.img
                  src={menu.image}
                  alt={menu.heading}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                />
                {/* Number overlay */}
                {menu.number !== '03' && (
                  <div className="absolute top-5 left-5">
                    <span className="font-display text-[70px] font-bold text-white/20 leading-none select-none">
                      {menu.number}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 border-t border-brandBrass/25 pt-5">
                <p className="font-body text-[9px] font-semibold tracking-[0.3em] uppercase text-brandBrass mb-2">
                  {menu.label}
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-textMain leading-tight tracking-tight mb-3">
                  {menu.heading}
                </h2>
                <p className="font-body text-sm text-textMuted leading-relaxed mb-6 flex-1">
                  {menu.description}
                </p>
                <div className="mt-auto">
                  <a
                    href={menu.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center font-body text-[11px] font-semibold tracking-[0.25em] uppercase px-8 py-4 border border-brandOlive text-brandOlive hover:bg-brandOlive hover:text-brandCream transition-all duration-300"
                  >
                    {menu.cta}
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Book A Table CTA */}
      <ScrollReveal>
        <div className="flex justify-center mt-16 md:mt-20">
          <Link
            to="/bookings"
            className="inline-block text-center font-body text-[11px] font-semibold tracking-[0.25em] uppercase px-8 py-4 bg-brandOlive text-brandCream hover:bg-brandOlive/85 transition-all duration-300"
          >
            Book A Table
          </Link>
        </div>
      </ScrollReveal>
    </section>

    {/* Allergens note */}
    <section className="bg-surfaceLow py-10 px-6 md:px-16 border-t border-brandOlive/10">
      <div className="max-w-[1440px] mx-auto text-center">
        <p className="font-body text-xs text-textMuted leading-relaxed max-w-2xl mx-auto">
          Please let your server know of any dietary requirements or allergies before ordering. Full allergen information is available on request.
          For enquiries contact <a href="mailto:info@theshamrocksocial.co.uk" className="text-brandBrass hover:underline">info@theshamrocksocial.co.uk</a>
        </p>
      </div>
    </section>
  </Layout>
);

export default MenuPage;
