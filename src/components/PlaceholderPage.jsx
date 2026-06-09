import Layout from '../components/Layout';
import ScrollReveal from '../components/ScrollReveal';

const PlaceholderPage = ({ title }) => (
  <Layout>
    <div className="min-h-screen flex items-center justify-center bg-brandCream pt-20">
      <div className="text-center px-6">
        <ScrollReveal>
          <p className="font-body text-[10px] font-semibold tracking-[0.35em] uppercase text-brandBrass mb-4">
            Coming Soon
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold uppercase text-textMain leading-tight tracking-tight mb-6">
            {title}
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-10 h-px bg-brandBrass" />
            <div className="w-1.5 h-1.5 rounded-full bg-brandBrass" />
            <div className="w-10 h-px bg-brandBrass" />
          </div>
          <p className="font-body text-textMuted text-sm">
            This page is being crafted. Check back soon.
          </p>
        </ScrollReveal>
      </div>
    </div>
  </Layout>
);

export default PlaceholderPage;
