import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-brandOlive py-12 md:py-16 px-6 md:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-body text-[10px] font-semibold tracking-[0.35em] uppercase text-brandBrass mb-4">
              Stay Connected
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-brandCream leading-tight tracking-tight mb-4">
              Stay In The{' '}
              <span className="italic font-medium">Social Loop</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="font-body text-brandCream/70 text-sm md:text-base leading-relaxed mb-10">
              Subscribe for exclusive updates on live music, brunch bookings and club events.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            {submitted ? (
              <p className="font-body text-brandCream/80 text-sm tracking-wide">
                ✓ You're on the list. Sláinte!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 max-w-sm mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="
                    w-full bg-transparent border-b border-brandCream/40
                    text-brandCream placeholder-brandCream/40
                    font-body text-sm py-3 text-center
                    focus:outline-none focus:border-brandCream
                    transition-colors duration-200
                  "
                />
                <button
                  type="submit"
                  className="
                    font-body text-[11px] font-semibold tracking-[0.25em] uppercase
                    px-10 py-3.5 border border-brandCream text-brandCream
                    hover:bg-brandCream hover:text-brandOlive
                    transition-all duration-300
                  "
                >
                  Subscribe Now
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
