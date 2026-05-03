export interface CoffeeGear {
  name: string;
  category: 'Brewer' | 'Grinder' | 'Kettle' | 'Scale' | 'Cup' | 'Other';
  description: string;
  image?: string;       // local asset path
  imageUrl?: string;    // external URL (preferred)
  link?: string;
}

export const coffeeGear: CoffeeGear[] = [
  {
    name: 'AGARO Elite French Press',
    category: 'Brewer',
    description: 'Borosilicate glass French press, 600ml. Full-bodied immersion brew — simple, no paper filters, no fuss.',
    image: '/assets/img/coffee/agaro-french-press.jpg',
    link: 'https://www.amazon.in/AGARO-Borosilicate-Sleeves-Plastic-Strainer/dp/B0C1GFM99Y/',
  },
  {
    name: 'Clever Coffee Dripper',
    category: 'Brewer',
    description: 'Hybrid between a pour-over and full immersion. Steep like a French press, drain clean like a filter. Forgiving and consistent.',
    image: '/assets/img/coffee/clever-dripper.jpg',
    link: 'https://www.amazon.in/Clever-Coffee-Dripper-Baristas-Choice/dp/B07RV3JJBG/',
  },
  {
    name: 'Timemore Chestnut C5 ESP Pro',
    category: 'Grinder',
    description: '42mm stainless steel conical burrs. Grinds espresso-fine in under a minute by hand — quiet, precise, and miles ahead of blade grinders.',
    image: '/assets/img/coffee/timemore-c5-pro.webp',
    link: 'https://fixcoffee.shop/products/timemore-chestnut-c5-pro-manual-coffee-grinder',
  },
  {
    name: 'HealthSense Coffee Scale',
    category: 'Scale',
    description: '0.1g precision, dual timer, USB rechargeable. Does everything a pour-over or French press needs.',
    imageUrl: 'https://m.media-amazon.com/images/I/51Qgn4iomTL._SL1080_.jpg',
    link: 'https://www.amazon.in/dp/B0F9LB1TTL',
  },
  {
    name: 'Coffee Cup',
    category: 'Cup',
    description: 'The cup.',
    imageUrl: 'https://m.media-amazon.com/images/I/71stZXCFSML._SL1500_.jpg',
    link: 'https://www.amazon.in/dp/B0FMFLJ49H',
  },
];
