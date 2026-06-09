import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const ExperienceCard = ({ number, label, heading, body, image, alt, delay = 0, objectPosition = 'center' }) => (
  <ScrollReveal delay={delay} y={40}>
    <div className="group flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4] mb-6">
        <motion.img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ objectPosition }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        />
        {/* Number overlay */}
        <div className="absolute top-4 left-4">
          <span className="font-display text-[80px] font-bold text-white/70 leading-none select-none">
            {number}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="border-t border-brandBrass/25 pt-5">
        <p className="font-body text-[9px] font-semibold tracking-[0.3em] uppercase text-brandBrass mb-2">
          {number} / {label}
        </p>
        <h3 className="font-display text-2xl md:text-3xl font-medium text-brandOlive italic mb-3">
          {heading}
        </h3>
        <p className="font-body text-sm text-textMuted leading-relaxed">
          {body}
        </p>
      </div>
    </div>
  </ScrollReveal>
);

export default ExperienceCard;
