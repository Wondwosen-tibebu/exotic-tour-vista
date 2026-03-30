export const IMAGES = {
  home_hero: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1ce3e641-d4cf-4514-ae07-3d9bb78341b1/home-hero-2de75440-1774853727872.webp',
  about_hero: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1ce3e641-d4cf-4514-ae07-3d9bb78341b1/about-hero-2cec1f08-1774853721373.webp',
  destinations_hero: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1ce3e641-d4cf-4514-ae07-3d9bb78341b1/destinations-hero-38f9c47f-1774853722508.webp',
  tours_hero: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1ce3e641-d4cf-4514-ae07-3d9bb78341b1/tours-hero-7ef57949-1774853722502.webp',
  contact_hero: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1ce3e641-d4cf-4514-ae07-3d9bb78341b1/contact-hero-0f0f3396-1774853722217.webp',
  gallery_1: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1ce3e641-d4cf-4514-ae07-3d9bb78341b1/gallery-1-37dc32cb-1774853727163.webp',
  gallery_2: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1ce3e641-d4cf-4514-ae07-3d9bb78341b1/gallery-2-aacc898d-1774853721913.webp',
  gallery_3: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/1ce3e641-d4cf-4514-ae07-3d9bb78341b1/gallery-3-91d4b786-1774853726898.webp',
  logo: 'https://raw.githubusercontent.com/lucide-react/lucide/main/icons/compass.svg'
};

export const TOURS = [
  {
    id: 1,
    name: 'Swiss Alps Expedition',
    price: '$1,299',
    duration: '7 Days',
    image: IMAGES.tours_hero,
    description: 'Explore the majestic Swiss Alps with professional guides. High-altitude trekking and luxury mountain huts.',
    location: 'Switzerland'
  },
  {
    id: 2,
    name: 'Mediterranean Shores',
    price: '$899',
    duration: '5 Days',
    image: IMAGES.about_hero,
    description: 'A journey through ancient coastal towns and crystal clear waters of the Mediterranean.',
    location: 'Italy & Greece'
  },
  {
    id: 3,
    name: 'Safari Adventure',
    price: '$2,499',
    duration: '10 Days',
    image: IMAGES.gallery_3,
    description: 'Experience the wild in luxury glamping tents and witness the Big Five in their natural habitat.',
    location: 'Tanzania'
  }
];

export const DESTINATIONS = [
  {
    id: 1,
    name: 'Santorini, Greece',
    image: IMAGES.destinations_hero,
    count: '15+ Tours'
  },
  {
    id: 2,
    name: 'St. Moritz, Switzerland',
    image: IMAGES.home_hero,
    count: '8 Tours'
  },
  {
    id: 3,
    name: 'Lapland, Finland',
    image: IMAGES.gallery_2,
    count: '12 Tours'
  }
];