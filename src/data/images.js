// Image placeholder config — replace src values with real images
export const images = {
  hero: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1800&q=80',
  intro: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&q=80',
  barExperience: new URL('../assets/beer2.jpg', import.meta.url).href,
  entertainmentExperience: new URL('../assets/music2.jpg', import.meta.url).href,
  diningExperience: new URL('../assets/hearty.png', import.meta.url).href,
  cloverClub: new URL('../assets/clover-club.jpg', import.meta.url).href,
  brunchEvent: new URL('../assets/hearty-food.png', import.meta.url).href,
  liveMusic: 'https://images.unsplash.com/photo-1598387993441-a364f854f61e?w=800&q=80',
  sundayRoast: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
  galleryLarge: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=1200&q=80',
  gallerySquare1: 'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?w=600&q=80',
  gallerySquare2: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80',
  location: new URL('../assets/carrington.png', import.meta.url).href,
};

export const experiences = [
  {
    number: '01',
    label: 'The Bar',
    heading: 'Creamy Pours',
    body: '42 taps including the perfect pint of Guinness and Murphy\'s, alongside a curated list of premium Irish spirits.',
    image: images.barExperience,
    alt: 'Bar with Guinness taps',
    objectPosition: '40% 52%',
  },
  {
    number: '02',
    label: 'Entertainment',
    heading: 'The Craic',
    body: 'Celebrating local talent with live music every Thursday, Friday, and Saturday. From traditional sessions to modern acoustic sets.',
    image: images.entertainmentExperience,
    alt: 'Live music performance',
  },
  {
    number: '03',
    label: 'Dining',
    heading: 'Hearty Food',
    body: 'Award-winning Sunday roasts and sharing plates that reinterpret classic Irish comfort food with a modern edge.',
    image: images.diningExperience,
    alt: 'Irish comfort food dining',
  },
];

export const events = [
  {
    frequency: 'Every Saturday',
    heading: 'Bottomless Brunch',
    body: 'Two hours of free-flowing Guinness, Prosecco and cocktails paired with hearty brunch classics. £39.95 pp.',
    image: images.brunchEvent,
    alt: 'Bottomless Brunch',
    link: '/bottomless-brunch',
  },
  {
    frequency: 'Thursday to Saturday',
    heading: 'Live Music Sessions',
    body: 'Showcasing the best local talent from 6:30pm. High-energy sets to keep the craic going until late.',
    image: images.liveMusic,
    alt: 'Live music sessions',
    link: '/whats-on',
  },
  {
    frequency: 'Every Sunday',
    heading: 'The Sunday Roast',
    body: 'Roasted meats, crispy potatoes and homemade gravy in our lively Irish-inspired setting. A weekend tradition.',
    image: images.sundayRoast,
    alt: 'Sunday Roast',
    link: '/menu',
  },
];
