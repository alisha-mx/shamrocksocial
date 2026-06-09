import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import SplitTheGGame from '../components/SplitTheGGame';

const SplitTheGPage = () => (
  <Layout>
    <section className="relative bg-guinnessBlack min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      {/* subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-guinnessBlack to-guinnessBlack" />

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-body text-[10px] font-semibold tracking-[0.4em] uppercase text-brandBrass mb-4"
        >
          The Shamrock Social Arcade
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl font-bold uppercase text-brandCream leading-none tracking-tight text-center"
        >
          Split The <span className="italic font-medium text-brandBrass">G</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-body text-sm text-brandCream/60 mt-5 mb-10 max-w-sm text-center leading-relaxed"
        >
          Press <span className="text-brandCream font-semibold">space</span> to stop the pour when the
          cream splits the G. Dead centre is the perfect split.
        </motion.p>

        {/* Game */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SplitTheGGame />
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default SplitTheGPage;
