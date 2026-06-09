import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import SectionLabel from './SectionLabel';
import { images } from '../data/images';
import masonry1 from '../assets/masonry1.png';
import masonry2 from '../assets/masonry2.png';
import masonry3 from '../assets/masonry3.png';
import masonry4 from '../assets/masonry4.png';
import drinkImg from '../assets/drink.png';

const GalleryImage = ({ src, alt, className = '' }) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    />
  </div>
);

const GalleryGrid = () => (
  <section className="bg-brandOlive pt-10 md:pt-12 pb-16 md:pb-20 px-6 md:px-16">
    <div className="max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="mb-10 text-center">
        <ScrollReveal>
          <SectionLabel>Gallery</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-brandCream tracking-tight">
            Life At The{' '}
            <span className="italic font-medium">Shamrock</span>
          </h2>
        </ScrollReveal>
      </div>

      {/* Grid */}
      <ScrollReveal delay={0.15}>
        <div className="grid grid-cols-3 gap-2 grid-flow-dense bg-white p-2 [grid-auto-rows:17vw] lg:[grid-auto-rows:15vw]">
          {/* Large feature image fills two rows exactly */}
          <GalleryImage
            src={masonry1}
            alt="The Shamrock Social atmosphere"
            className="col-span-1 row-span-2 h-full"
          />
          <GalleryImage src={images.barExperience} alt="Drinks at The Shamrock Social" className="col-span-1 h-full" />
          <GalleryImage src={masonry3} alt="At The Shamrock Social" className="col-span-1 h-full" />
          <GalleryImage src={images.brunchEvent} alt="Food at The Shamrock Social" className="col-span-1 h-full" />
          {/* Tall food image filling the space where the tap image was */}
          <GalleryImage src={images.diningExperience} alt="Food at The Shamrock Social" className="col-span-1 row-span-2 h-full" />
          <GalleryImage src={drinkImg} alt="Drinks at The Shamrock Social" className="col-span-1 h-full" />
          <GalleryImage src={masonry4} alt="At The Shamrock Social" className="col-span-1 h-full" />
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default GalleryGrid;
