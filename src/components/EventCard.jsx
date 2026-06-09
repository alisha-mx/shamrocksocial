import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const EventCard = ({ frequency, heading, body, image, alt, link, delay = 0 }) => (
  <ScrollReveal delay={delay} y={32}>
    <Link to={link} className="group block">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] mb-5">
        <motion.img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-guinnessBlack/30 to-transparent" />
      </div>

      {/* Content */}
      <p className="font-body text-[9px] font-semibold tracking-[0.3em] uppercase text-brandBrass mb-2">
        {frequency}
      </p>
      <h3 className="font-display text-xl md:text-2xl font-medium italic text-brandOlive mb-2 group-hover:text-brandBrass transition-colors duration-300">
        {heading}
      </h3>
      <p className="font-body text-sm text-textMuted leading-relaxed">
        {body}
      </p>
      <div className="mt-4 flex items-center gap-2">
        <span className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-textMuted group-hover:text-brandBrass transition-colors duration-300">
          Find Out More
        </span>
        <motion.span
          className="text-brandBrass"
          animate={{ x: 0 }}
          whileHover={{ x: 4 }}
        >
          →
        </motion.span>
      </div>
    </Link>
  </ScrollReveal>
);

export default EventCard;
