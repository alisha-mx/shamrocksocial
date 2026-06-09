import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import SectionLabel from './SectionLabel';
import heartyFoodImg from '../assets/hearty-food.png';
import whatsOnMusicImg from '../assets/whats-on-music.jpg';

const events = [
  {
    label: 'Every Sunday',
    heading: 'Sunday Roast',
    subheading: 'The Ultimate Weekend Tradition',
    body: 'Enjoy perfectly roasted meats, crispy potatoes, seasonal vegetables, and rich homemade gravy in a lively Irish-inspired setting. Gather friends and family for the ultimate Sunday tradition: great food, great atmosphere, and unforgettable roasts served every weekend here at The Shamrock Social.',
    ctas: [
      { label: 'Book Now', to: '/bookings', primary: true },
      { label: 'Sunday Menu', to: '/menu', primary: false },
    ],
    image: heartyFoodImg,
    imageAlt: 'Sunday Roast at The Shamrock Social',
    reverse: false,
  },
  {
    label: 'Thursday, Friday & Saturday',
    heading: 'Live Music',
    subheading: 'Celebrating Local Talent',
    body: 'Here at The Shamrock Social, we love to celebrate local talent and have live music on every Thursday, Friday & Saturday in the heart of Nottingham.\n\nIf you\'re looking for a bustling atmosphere and some great craic, we\'ve got you covered. Whether you want to watch from the comfort of your seat, or get up and dance, there\'s something for everyone.\n\nStay tuned on our social media for details of bands and artists.',
    hours: [
      { day: 'Thursday', time: '6:30pm - 8:30pm' },
      { day: 'Friday & Saturday', time: '6:30pm - 11pm' },
    ],
    ctas: [
      { label: 'Book Now', to: '/bookings', primary: true },
    ],
    image: whatsOnMusicImg,
    imageAlt: 'Live music at The Shamrock Social',
    reverse: true,
  },
];

const HomeEvents = () => (
  <section className="bg-brandCream pt-12 md:pt-16 pb-16 md:pb-24 px-6 md:px-16">
    <div className="max-w-[1440px] mx-auto">
      {/* Banners */}
      <div>
        {events.map((event, i) => (
          <div
            key={i}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center ${event.reverse ? 'lg:grid-flow-col-dense' : ''}
              ${i > 0 ? 'mt-16 md:mt-24 pt-16 md:pt-24 border-t border-brandOlive/10' : ''}`}
          >
            {/* Image */}
            <ScrollReveal delay={0.1} className={event.reverse ? 'lg:col-start-2' : ''}>
              <div className="overflow-hidden aspect-[4/3] group">
                <motion.img
                  src={event.image}
                  alt={event.imageAlt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal delay={0.2} className={event.reverse ? 'lg:col-start-1' : ''}>
              <SectionLabel>{event.label}</SectionLabel>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-textMain leading-tight tracking-tight mt-3 mb-1">
                {event.heading}
              </h3>
              <p className="font-display text-2xl md:text-3xl italic font-medium text-brandOlive mb-6">
                {event.subheading}
              </p>

              <div className="w-10 h-px bg-brandBrass/60 mb-6" />

              <div className="space-y-4 mb-6">
                {event.body.split('\n\n').map((para, j) => (
                  <p key={j} className="font-body text-sm md:text-base text-textMuted leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Hours */}
              {event.hours && (
                <div className="border-l-2 border-brandBrass/40 pl-5 mb-8">
                  <p className="font-body text-[9px] font-semibold tracking-[0.3em] uppercase text-brandBrass mb-3">Hours</p>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-1 max-w-xs font-body text-sm text-textMain">
                    {event.hours.map(({ day, time }) => (
                      <div key={day} className="contents">
                        <span className="text-textMuted">{day}</span>
                        <span>{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                {event.ctas.map(({ label, to, primary }) => (
                  <Link
                    key={label}
                    to={to}
                    className={`font-body text-[11px] font-semibold tracking-[0.25em] uppercase px-8 py-3.5 transition-all duration-300
                      ${primary
                        ? 'bg-brandOlive text-brandCream hover:bg-brandOlive/80'
                        : 'border border-brandOlive text-brandOlive hover:bg-brandOlive hover:text-brandCream'
                      }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeEvents;
