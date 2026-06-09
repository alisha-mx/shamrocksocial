import Layout from '../components/Layout';
import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import FeaturedExperiences from '../components/FeaturedExperiences';
import CloverClubSection from '../components/CloverClubSection';
import HomeEvents from '../components/HomeEvents';
import GalleryGrid from '../components/GalleryGrid';
import LocationSection from '../components/LocationSection';
import InstagramFeed from '../components/InstagramFeed';
import NewsletterSection from '../components/NewsletterSection';

const HomePage = () => (
  <Layout>
    <Hero />
    <IntroSection />
    <FeaturedExperiences />
    <CloverClubSection />
    <HomeEvents />
    <GalleryGrid />
    <InstagramFeed />
    <LocationSection />
    <NewsletterSection />
  </Layout>
);

export default HomePage;
