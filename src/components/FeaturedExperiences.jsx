import ExperienceCard from './ExperienceCard';
import ScrollReveal from './ScrollReveal';
import SectionLabel from './SectionLabel';
import { experiences } from '../data/images';

const FeaturedExperiences = () => (
  <section className="bg-surfaceLow py-12 md:py-16 px-6 md:px-16">
    <div className="max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
        <div>
          <ScrollReveal>
            <SectionLabel>The Experience</SectionLabel>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-textMain leading-tight tracking-tight">
              Why You'll{' '}
              <span className="italic font-medium">Love It Here</span>
            </h2>
          </ScrollReveal>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.number} {...exp} delay={i * 0.12} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedExperiences;
