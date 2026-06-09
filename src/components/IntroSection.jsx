import ScrollReveal from './ScrollReveal';
import SectionLabel from './SectionLabel';

const IntroSection = () => (
  <section className="bg-brandCream py-12 md:py-16 px-6 md:px-16">
    <div className="max-w-[1440px] mx-auto">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <SectionLabel>Fáilte go Nottingham</SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-textMain leading-[1.05] tracking-tight mb-6">
            A Modern Take on the{' '}
            <span className="italic font-medium">Irish Pub.</span>
          </h2>
        </ScrollReveal>

        {/* Brass divider */}
        <ScrollReveal delay={0.2}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-brandBrass" />
            <div className="w-1.5 h-1.5 rounded-full bg-brandBrass" />
            <div className="w-12 h-px bg-brandBrass" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="font-body text-base md:text-lg text-textMuted leading-relaxed space-y-5">
            <p>
              In the heart of Nottingham, moments from the station, our multi-floor Irish bar is built for brilliant days and nights out.
            </p>
            <p>
              On the ground floor you'll find a bustling atmosphere, live music and a bar stocked with Irish spirits, from ones you know and love, to some you'll love to try. If draught is more your thing, we have 42 taps including Guinness and even Murphy's.
            </p>
            <p>
              Downstairs, you'll find the Clover Club: a beautifully decorated, whimsical space hosting our Bottomless Brunches and the city's most exclusive private events.
            </p>
            <p className="font-display italic text-brandOlive text-xl md:text-2xl">
              Come for one. Stay for the craic.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default IntroSection;
