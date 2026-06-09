import { Link } from 'react-router-dom';
import EventCard from './EventCard';
import ScrollReveal from './ScrollReveal';
import SectionLabel from './SectionLabel';
import { events } from '../data/images';

const WhatsOnPreview = () => (
  <section className="bg-surfaceLow py-24 md:py-32 px-6 md:px-16">
    <div className="max-w-[1440px] mx-auto">
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4 border-b border-brandOlive/10 pb-8">
        <div>
          <ScrollReveal>
            <SectionLabel>Events & More</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-textMain leading-tight tracking-tight">
              What's On
            </h2>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.15}>
          <Link
            to="/whats-on"
            className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-brandBrass border-b border-brandBrass/40 pb-0.5 hover:border-brandBrass transition-colors duration-200 whitespace-nowrap"
          >
            View All Events →
          </Link>
        </ScrollReveal>
      </div>

      {/* Event cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {events.map((event, i) => (
          <EventCard key={event.heading} {...event} delay={i * 0.1} />
        ))}
      </div>
    </div>
  </section>
);

export default WhatsOnPreview;
