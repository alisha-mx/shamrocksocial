import { useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

const POSTS = [
  'https://www.instagram.com/reel/DZQPsmqMxUp/',
  'https://www.instagram.com/p/DZCZahvDKZz/',
  'https://www.instagram.com/p/DY9jOFZDP96/',
];

const InstagramFeed = () => {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="bg-brandCream py-12 md:py-16 px-6 md:px-16 border-t border-brandOlive/10">
      <div className="max-w-[1440px] mx-auto">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="font-body text-[9px] font-semibold tracking-[0.35em] uppercase text-brandBrass mb-1">
                Follow Along
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-textMain tracking-tight">
                @TheShamrockSocial
              </h2>
            </div>
            <a
              href="https://www.instagram.com/theshamrocksocial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View our Instagram profile"
              className="text-brandOlive hover:text-brandBrass transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
            {POSTS.map((url, i) => (
              <div key={i} className="flex justify-center">
                <blockquote
                  className="instagram-media w-full"
                  data-instgrm-captioned
                  data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
                  data-instgrm-version="14"
                  style={{ minWidth: 0, width: '100%', margin: 0 }}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default InstagramFeed;
