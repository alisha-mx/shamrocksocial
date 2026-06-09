import ScrollReveal from './ScrollReveal';
import SectionLabel from './SectionLabel';

const LocationSection = () => (
  <section className="bg-brandCream py-12 md:py-16 px-6 md:px-16 border-t border-brandOlive/10">
    <div className="max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: info */}
        <div>
          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-textMain leading-tight tracking-tight mb-8">
              Find <span className="italic font-medium">Us</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="space-y-7">
              <div className="border-l-2 border-brandBrass/40 pl-5">
                <p className="font-body text-[9px] font-semibold tracking-[0.3em] uppercase text-brandBrass mb-2">Address</p>
                <address className="not-italic font-display text-xl font-medium text-textMain leading-snug">
                  6-10 Carrington Street<br />
                  Nottingham, NG1 7FF
                </address>
                <p className="font-body text-sm text-textMuted mt-1">A short walk from Nottingham Station</p>
              </div>

              <div className="border-l-2 border-brandBrass/40 pl-5">
                <p className="font-body text-[9px] font-semibold tracking-[0.3em] uppercase text-brandBrass mb-2">Opening Hours</p>
                <div className="font-body text-sm text-textMain space-y-1">
                  <div className="grid grid-cols-2 max-w-xs">
                    <span className="text-textMuted">Sun – Fri</span>
                    <span>11:00 – 23:00</span>
                    <span className="text-textMuted">Saturday</span>
                    <span>11:00 – 00:00</span>
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-brandBrass/40 pl-5">
                <p className="font-body text-[9px] font-semibold tracking-[0.3em] uppercase text-brandBrass mb-2">Enquiries</p>
                <a
                  href="mailto:info@theshamrocksocial.co.uk"
                  className="font-body text-sm text-textMain hover:text-brandBrass transition-colors duration-200"
                >
                  info@theshamrocksocial.co.uk
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: map */}
        <ScrollReveal delay={0.2}>
          <div className="overflow-hidden aspect-[3/2] lg:aspect-auto lg:h-[340px] border border-brandOlive/15">
            <iframe
              title="The Shamrock Social location map"
              src="https://www.google.com/maps?q=6-10+Carrington+Street,+Nottingham,+NG1+7FF&output=embed"
              className="w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default LocationSection;
