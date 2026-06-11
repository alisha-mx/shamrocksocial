import Layout from '../components/Layout';
import ScrollReveal from '../components/ScrollReveal';

const PlaceholderPage = ({ title }) => (
  <Layout>
    <div className="min-h-screen flex items-center justify-center bg-brandCream pt-20">
      <div className="text-center px-6">
        <ScrollReveal>
          <p className="font-body text-[10px] font-semibold tracking-[0.35em] uppercase text-brandBrass mb-4">
            {title}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-medium italic text-textMain leading-tight tracking-tight mb-6">
            Something is crafting here
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="w-10 h-px bg-brandBrass" />
            <div className="w-1.5 h-1.5 rounded-full bg-brandBrass" />
            <div className="w-10 h-px bg-brandBrass" />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </Layout>
);

export default PlaceholderPage;
