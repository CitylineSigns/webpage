import { Product, Terpene } from '../models/inventory.interface';

export const TERPENES: Terpene[] = [
  {
    name: 'Myrcene',
    description: 'The most common terpene in cannabis, known for its sedative and relaxing effects',
    effects: ['Relaxing', 'Sedative', 'Anti-inflammatory'],
    flavors: ['Earthy', 'Musky', 'Herbal'],
    color: '#8B4513'
  },
  {
    name: 'Limonene',
    description: 'A citrus-scented terpene that promotes mood elevation and stress relief',
    effects: ['Uplifting', 'Anti-anxiety', 'Antidepressant'],
    flavors: ['Citrus', 'Lemon', 'Orange'],
    color: '#FFD700'
  },
  {
    name: 'Pinene',
    description: 'A pine-scented terpene that enhances focus and memory',
    effects: ['Focus', 'Memory', 'Anti-inflammatory'],
    flavors: ['Pine', 'Rosemary', 'Sage'],
    color: '#228B22'
  },
  {
    name: 'Linalool',
    description: 'A floral terpene with calming and anti-anxiety properties',
    effects: ['Calming', 'Anti-anxiety', 'Sedative'],
    flavors: ['Lavender', 'Floral', 'Spicy'],
    color: '#DDA0DD'
  },
  {
    name: 'Caryophyllene',
    description: 'A spicy terpene that acts as both a terpene and cannabinoid',
    effects: ['Anti-inflammatory', 'Pain relief', 'Anti-anxiety'],
    flavors: ['Pepper', 'Spicy', 'Woody'],
    color: '#8B0000'
  },
  {
    name: 'Humulene',
    description: 'A hoppy terpene with appetite-suppressing properties',
    effects: ['Appetite suppressant', 'Anti-inflammatory', 'Antibacterial'],
    flavors: ['Hops', 'Earthy', 'Woody'],
    color: '#654321'
  },
  {
    name: 'Ocimene',
    description: 'A sweet terpene with antiviral and anti-inflammatory properties',
    effects: ['Antiviral', 'Anti-inflammatory', 'Decongestant'],
    flavors: ['Sweet', 'Herbal', 'Citrus'],
    color: '#90EE90'
  },
  {
    name: 'Terpinolene',
    description: 'A complex terpene with sedative and antioxidant properties',
    effects: ['Sedative', 'Antioxidant', 'Antibacterial'],
    flavors: ['Pine', 'Floral', 'Citrus'],
    color: '#98FB98'
  },
  {
    name: 'Geraniol',
    description: 'A rose-scented terpene with anti-inflammatory properties',
    effects: ['Anti-inflammatory', 'Antioxidant', 'Antibacterial'],
    flavors: ['Rose', 'Geranium', 'Citrus'],
    color: '#FF69B4'
  },
  {
    name: 'Borneol',
    description: 'A camphor-like terpene with analgesic properties',
    effects: ['Analgesic', 'Anti-inflammatory', 'Sedative'],
    flavors: ['Camphor', 'Mint', 'Woody'],
    color: '#F0F8FF'
  },
  {
    name: 'Camphene',
    description: 'A pungent terpene with cardiovascular benefits',
    effects: ['Cardiovascular support', 'Antioxidant', 'Anti-inflammatory'],
    flavors: ['Camphor', 'Pine', 'Mint'],
    color: '#E6E6FA'
  },
  {
    name: 'Sabinene',
    description: 'A spicy terpene with anti-inflammatory properties',
    effects: ['Anti-inflammatory', 'Antioxidant', 'Antibacterial'],
    flavors: ['Spicy', 'Citrus', 'Woody'],
    color: '#FFA500'
  },
  {
    name: 'Phellandrene',
    description: 'A minty terpene with antidepressant properties',
    effects: ['Antidepressant', 'Analgesic', 'Anti-inflammatory'],
    flavors: ['Mint', 'Citrus', 'Pepper'],
    color: '#00CED1'
  },
  {
    name: 'Delta-3-Carene',
    description: 'A pine-scented terpene with bone-strengthening properties',
    effects: ['Bone health', 'Anti-inflammatory', 'Memory'],
    flavors: ['Pine', 'Cedar', 'Lemon'],
    color: '#2F4F4F'
  },
  {
    name: 'Valencene',
    description: 'A citrus terpene with anti-inflammatory properties',
    effects: ['Anti-inflammatory', 'Antioxidant', 'Mood enhancement'],
    flavors: ['Orange', 'Grapefruit', 'Sweet'],
    color: '#FF8C00'
  },
  {
    name: 'Farnesene',
    description: 'A floral terpene with sedative properties',
    effects: ['Sedative', 'Anti-inflammatory', 'Antioxidant'],
    flavors: ['Apple', 'Green', 'Floral'],
    color: '#32CD32'
  }
];

export const INVENTORY_DATA: Product[] = [
  // Flower Products
  {
    id: '1',
    name: 'Blue Dream',
    brand: 'Nuna Harvest',
    category: 'flower',
    thcContent: 18.5,
    cbdContent: 0.2,
    terpenes: [TERPENES[0], TERPENES[1], TERPENES[2]], // Myrcene, Limonene, Pinene
    dominantTerpenes: ['Myrcene', 'Limonene'],
    effects: ['Euphoric', 'Creative', 'Relaxed'],
    flavors: ['Berry', 'Vanilla', 'Sweet'],
    price: 45.00,
    inStock: true,
    imageUrl: 'assets/images/blue-dream.jpg',
    description: 'A balanced hybrid that delivers full-body relaxation with a gentle cerebral stimulation.',
    strainType: 'hybrid',
    potency: 'medium'
  },
  {
    id: '2',
    name: 'OG Kush',
    brand: 'Nuna Harvest',
    category: 'flower',
    thcContent: 22.3,
    cbdContent: 0.1,
    terpenes: [TERPENES[0], TERPENES[4], TERPENES[5]], // Myrcene, Caryophyllene, Humulene
    dominantTerpenes: ['Myrcene', 'Caryophyllene'],
    effects: ['Happy', 'Relaxed', 'Euphoric'],
    flavors: ['Earthy', 'Pine', 'Woody'],
    price: 52.00,
    inStock: true,
    imageUrl: 'assets/images/og-kush.jpg',
    description: 'A legendary strain known for its potent effects and distinctive aroma.',
    strainType: 'hybrid',
    potency: 'high'
  },
  {
    id: '3',
    name: 'Sour Diesel',
    brand: 'Nuna Harvest',
    category: 'flower',
    thcContent: 20.1,
    cbdContent: 0.3,
    terpenes: [TERPENES[1], TERPENES[2], TERPENES[6]], // Limonene, Pinene, Ocimene
    dominantTerpenes: ['Limonene', 'Pinene'],
    effects: ['Energetic', 'Creative', 'Uplifted'],
    flavors: ['Diesel', 'Citrus', 'Pungent'],
    price: 48.00,
    inStock: true,
    imageUrl: 'assets/images/sour-diesel.jpg',
    description: 'A fast-acting strain that delivers energizing effects with a distinctive diesel aroma.',
    strainType: 'sativa',
    potency: 'high'
  },
  {
    id: '4',
    name: 'Granddaddy Purple',
    brand: 'Nuna Harvest',
    category: 'flower',
    thcContent: 17.8,
    cbdContent: 0.4,
    terpenes: [TERPENES[0], TERPENES[3], TERPENES[4]], // Myrcene, Linalool, Caryophyllene
    dominantTerpenes: ['Myrcene', 'Linalool'],
    effects: ['Sleepy', 'Relaxed', 'Happy'],
    flavors: ['Grape', 'Berry', 'Sweet'],
    price: 50.00,
    inStock: true,
    imageUrl: 'assets/images/granddaddy-purple.jpg',
    description: 'A classic indica known for its deep purple color and sedative effects.',
    strainType: 'indica',
    potency: 'medium'
  },
  {
    id: '5',
    name: 'Jack Herer',
    brand: 'Nuna Harvest',
    category: 'flower',
    thcContent: 19.2,
    cbdContent: 0.2,
    terpenes: [TERPENES[1], TERPENES[2], TERPENES[7]], // Limonene, Pinene, Terpinolene
    dominantTerpenes: ['Limonene', 'Pinene'],
    effects: ['Creative', 'Energetic', 'Focused'],
    flavors: ['Pine', 'Citrus', 'Spicy'],
    price: 46.00,
    inStock: true,
    imageUrl: 'assets/images/jack-herer.jpg',
    description: 'A clear-headed, creative sativa that honors the cannabis activist Jack Herer.',
    strainType: 'sativa',
    potency: 'medium'
  },
  // Pre-Rolls
  {
    id: '6',
    name: 'Wedding Cake Pre-Roll',
    brand: 'Nuna Harvest',
    category: 'pre-rolls',
    thcContent: 21.5,
    cbdContent: 0.1,
    terpenes: [TERPENES[4], TERPENES[8], TERPENES[9]], // Caryophyllene, Geraniol, Borneol
    dominantTerpenes: ['Caryophyllene', 'Geraniol'],
    effects: ['Happy', 'Relaxed', 'Euphoric'],
    flavors: ['Sweet', 'Vanilla', 'Creamy'],
    price: 12.00,
    inStock: true,
    imageUrl: 'assets/images/wedding-cake-preroll.jpg',
    description: 'A premium pre-roll featuring the popular Wedding Cake strain.',
    strainType: 'hybrid',
    potency: 'high'
  },
  {
    id: '7',
    name: 'Gelato Pre-Roll',
    brand: 'Nuna Harvest',
    category: 'pre-rolls',
    thcContent: 20.8,
    cbdContent: 0.2,
    terpenes: [TERPENES[1], TERPENES[4], TERPENES[10]], // Limonene, Caryophyllene, Camphene
    dominantTerpenes: ['Limonene', 'Caryophyllene'],
    effects: ['Euphoric', 'Creative', 'Relaxed'],
    flavors: ['Sweet', 'Citrus', 'Creamy'],
    price: 11.00,
    inStock: true,
    imageUrl: 'assets/images/gelato-preroll.jpg',
    description: 'A dessert-inspired pre-roll with balanced effects and sweet flavors.',
    strainType: 'hybrid',
    potency: 'high'
  },
  // Vaporizers
  {
    id: '8',
    name: 'Stiiizy Purple Haze Disposable',
    brand: 'Stiiizy',
    category: 'vaporizers',
    thcContent: 85.2,
    cbdContent: 0.1,
    terpenes: [TERPENES[1], TERPENES[2], TERPENES[11]], // Limonene, Pinene, Sabinene
    dominantTerpenes: ['Limonene', 'Pinene'],
    effects: ['Energetic', 'Creative', 'Uplifted'],
    flavors: ['Berry', 'Citrus', 'Sweet'],
    price: 35.00,
    inStock: true,
    imageUrl: 'assets/images/stiiizy-purple-haze.jpg',
    description: 'A classic sativa vape cartridge with energizing effects.',
    strainType: 'sativa',
    potency: 'high'
  },
  {
    id: '9',
    name: 'Rove Skywalker Disposable',
    brand: 'Rove',
    category: 'vaporizers',
    thcContent: 82.1,
    cbdContent: 0.2,
    terpenes: [TERPENES[0], TERPENES[3], TERPENES[12]], // Myrcene, Linalool, Phellandrene
    dominantTerpenes: ['Myrcene', 'Linalool'],
    effects: ['Relaxed', 'Sleepy', 'Happy'],
    flavors: ['Earthy', 'Mint', 'Sweet'],
    price: 38.00,
    inStock: true,
    imageUrl: 'assets/images/rove-skywalker.jpg',
    description: 'A potent indica vape perfect for evening relaxation.',
    strainType: 'indica',
    potency: 'high'
  },
  // Concentrates
  {
    id: '10',
    name: 'Live Resin Diamonds',
    brand: 'Nuna Harvest',
    category: 'concentrates',
    thcContent: 92.5,
    cbdContent: 0.1,
    terpenes: [TERPENES[1], TERPENES[4], TERPENES[13]], // Limonene, Caryophyllene, Delta-3-Carene
    dominantTerpenes: ['Limonene', 'Caryophyllene'],
    effects: ['Euphoric', 'Creative', 'Energetic'],
    flavors: ['Citrus', 'Spicy', 'Pine'],
    price: 65.00,
    inStock: true,
    imageUrl: 'assets/images/live-resin-diamonds.jpg',
    description: 'Premium live resin diamonds with exceptional terpene preservation.',
    strainType: 'hybrid',
    potency: 'high'
  },
  // Edibles
  {
    id: '11',
    name: 'Wyld Peach Gummies',
    brand: 'Wyld',
    category: 'edibles',
    thcContent: 10.0,
    cbdContent: 0.0,
    terpenes: [TERPENES[1], TERPENES[14], TERPENES[15]], // Limonene, Valencene, Farnesene
    dominantTerpenes: ['Limonene', 'Valencene'],
    effects: ['Happy', 'Relaxed', 'Euphoric'],
    flavors: ['Peach', 'Sweet', 'Fruity'],
    price: 25.00,
    inStock: true,
    imageUrl: 'assets/images/wyld-peach-gummies.jpg',
    description: 'Delicious peach gummies made with real fruit and balanced hybrid effects.',
    strainType: 'hybrid',
    potency: 'medium'
  },
  {
    id: '12',
    name: 'Kiva Dark Chocolate Bar',
    brand: 'Kiva',
    category: 'edibles',
    thcContent: 20.0,
    cbdContent: 0.0,
    terpenes: [TERPENES[0], TERPENES[4], TERPENES[8]], // Myrcene, Caryophyllene, Geraniol
    dominantTerpenes: ['Myrcene', 'Caryophyllene'],
    effects: ['Relaxed', 'Happy', 'Sleepy'],
    flavors: ['Dark Chocolate', 'Rich', 'Bitter'],
    price: 28.00,
    inStock: true,
    imageUrl: 'assets/images/kiva-chocolate-bar.jpg',
    description: 'Premium dark chocolate infused with cannabis for a sophisticated experience.',
    strainType: 'hybrid',
    potency: 'medium'
  },
  // Tinctures
  {
    id: '13',
    name: 'CBD Relief Tincture',
    brand: 'Nuna Harvest',
    category: 'tinctures',
    thcContent: 0.3,
    cbdContent: 50.0,
    terpenes: [TERPENES[3], TERPENES[4], TERPENES[9]], // Linalool, Caryophyllene, Borneol
    dominantTerpenes: ['Linalool', 'Caryophyllene'],
    effects: ['Calm', 'Relaxed', 'Pain Relief'],
    flavors: ['Mint', 'Herbal', 'Natural'],
    price: 45.00,
    inStock: true,
    imageUrl: 'assets/images/cbd-tincture.jpg',
    description: 'High-CBD tincture for daily wellness and relief.',
    strainType: 'hybrid',
    potency: 'low'
  },
  // Topicals
  {
    id: '14',
    name: 'Lavender Relief Balm',
    brand: 'Nuna Harvest',
    category: 'topicals',
    thcContent: 0.0,
    cbdContent: 100.0,
    terpenes: [TERPENES[3], TERPENES[8], TERPENES[9]], // Linalool, Geraniol, Borneol
    dominantTerpenes: ['Linalool', 'Geraniol'],
    effects: ['Pain Relief', 'Anti-inflammatory', 'Calming'],
    flavors: ['Lavender', 'Floral', 'Herbal'],
    price: 35.00,
    inStock: true,
    imageUrl: 'assets/images/lavender-balm.jpg',
    description: 'Soothing topical balm with lavender and CBD for targeted relief.',
    strainType: 'hybrid',
    potency: 'low'
  },
  // Accessories
  {
    id: '15',
    name: 'Premium Grinder',
    brand: 'Nuna Harvest',
    category: 'accessories',
    thcContent: 0.0,
    cbdContent: 0.0,
    terpenes: [],
    dominantTerpenes: [],
    effects: [],
    flavors: [],
    price: 25.00,
    inStock: true,
    imageUrl: 'assets/images/premium-grinder.jpg',
    description: 'High-quality 4-piece grinder for optimal cannabis preparation.',
    strainType: 'hybrid',
    potency: 'low'
  },
  // Additional Flower Products
  {
    id: '16',
    name: 'Girl Scout Cookies',
    brand: 'Nuna Harvest',
    category: 'flower',
    thcContent: 19.8,
    cbdContent: 0.2,
    terpenes: [TERPENES[1], TERPENES[4], TERPENES[8]], // Limonene, Caryophyllene, Geraniol
    dominantTerpenes: ['Limonene', 'Caryophyllene'],
    effects: ['Euphoric', 'Creative', 'Relaxed'],
    flavors: ['Sweet', 'Earthy', 'Mint'],
    price: 54.00,
    inStock: true,
    imageUrl: 'assets/images/girl-scout-cookies.jpg',
    description: 'A legendary hybrid with balanced effects and sweet flavors.',
    strainType: 'hybrid',
    potency: 'high'
  },
  {
    id: '17',
    name: 'Northern Lights',
    brand: 'Nuna Harvest',
    category: 'flower',
    thcContent: 18.2,
    cbdContent: 0.3,
    terpenes: [TERPENES[0], TERPENES[3], TERPENES[5]], // Myrcene, Linalool, Humulene
    dominantTerpenes: ['Myrcene', 'Linalool'],
    effects: ['Sleepy', 'Relaxed', 'Happy'],
    flavors: ['Sweet', 'Spicy', 'Pine'],
    price: 48.00,
    inStock: true,
    imageUrl: 'assets/images/northern-lights.jpg',
    description: 'A classic indica known for its powerful sedative effects.',
    strainType: 'indica',
    potency: 'medium'
  },
  {
    id: '18',
    name: 'Durban Poison',
    brand: 'Nuna Harvest',
    category: 'flower',
    thcContent: 20.5,
    cbdContent: 0.1,
    terpenes: [TERPENES[1], TERPENES[2], TERPENES[11]], // Limonene, Pinene, Sabinene
    dominantTerpenes: ['Limonene', 'Pinene'],
    effects: ['Energetic', 'Creative', 'Focused'],
    flavors: ['Sweet', 'Anise', 'Spicy'],
    price: 46.00,
    inStock: true,
    imageUrl: 'assets/images/durban-poison.jpg',
    description: 'A pure sativa from South Africa with energizing effects.',
    strainType: 'sativa',
    potency: 'high'
  },
  {
    id: '19',
    name: 'Purple Punch',
    brand: 'Nuna Harvest',
    category: 'flower',
    thcContent: 17.9,
    cbdContent: 0.2,
    terpenes: [TERPENES[0], TERPENES[3], TERPENES[8]], // Myrcene, Linalool, Geraniol
    dominantTerpenes: ['Myrcene', 'Linalool'],
    effects: ['Sleepy', 'Happy', 'Relaxed'],
    flavors: ['Grape', 'Berry', 'Sweet'],
    price: 50.00,
    inStock: true,
    imageUrl: 'assets/images/purple-punch.jpg',
    description: 'A dessert strain with sedative effects and sweet flavors.',
    strainType: 'indica',
    potency: 'medium'
  },
  {
    id: '20',
    name: 'White Widow',
    brand: 'Nuna Harvest',
    category: 'flower',
    thcContent: 19.3,
    cbdContent: 0.2,
    terpenes: [TERPENES[1], TERPENES[2], TERPENES[4]], // Limonene, Pinene, Caryophyllene
    dominantTerpenes: ['Limonene', 'Pinene'],
    effects: ['Creative', 'Energetic', 'Focused'],
    flavors: ['Earthy', 'Pine', 'Spicy'],
    price: 47.00,
    inStock: true,
    imageUrl: 'assets/images/white-widow.jpg',
    description: 'A balanced hybrid with creative and energizing effects.',
    strainType: 'hybrid',
    potency: 'medium'
  },
  // Additional Pre-Rolls
  {
    id: '21',
    name: 'Gorilla Glue Pre-Roll',
    brand: 'Nuna Harvest',
    category: 'pre-rolls',
    thcContent: 23.1,
    cbdContent: 0.1,
    terpenes: [TERPENES[0], TERPENES[4], TERPENES[5]], // Myrcene, Caryophyllene, Humulene
    dominantTerpenes: ['Myrcene', 'Caryophyllene'],
    effects: ['Happy', 'Relaxed', 'Euphoric'],
    flavors: ['Earthy', 'Pine', 'Sour'],
    price: 13.00,
    inStock: true,
    imageUrl: 'assets/images/gorilla-glue-preroll.jpg',
    description: 'A potent pre-roll with sticky resin and powerful effects.',
    strainType: 'hybrid',
    potency: 'high'
  },
  {
    id: '22',
    name: 'Pineapple Express Pre-Roll',
    brand: 'Nuna Harvest',
    category: 'pre-rolls',
    thcContent: 18.7,
    cbdContent: 0.2,
    terpenes: [TERPENES[1], TERPENES[2], TERPENES[6]], // Limonene, Pinene, Ocimene
    dominantTerpenes: ['Limonene', 'Pinene'],
    effects: ['Energetic', 'Creative', 'Uplifted'],
    flavors: ['Pineapple', 'Citrus', 'Sweet'],
    price: 11.00,
    inStock: true,
    imageUrl: 'assets/images/pineapple-express-preroll.jpg',
    description: 'A tropical pre-roll with energizing effects and sweet flavors.',
    strainType: 'sativa',
    potency: 'medium'
  },
  // Additional Vaporizers
  {
    id: '23',
    name: 'Select Elite Live Resin',
    brand: 'Select',
    category: 'vaporizers',
    thcContent: 87.3,
    cbdContent: 0.1,
    terpenes: [TERPENES[1], TERPENES[4], TERPENES[14]], // Limonene, Caryophyllene, Valencene
    dominantTerpenes: ['Limonene', 'Caryophyllene'],
    effects: ['Euphoric', 'Creative', 'Relaxed'],
    flavors: ['Citrus', 'Spicy', 'Sweet'],
    price: 42.00,
    inStock: true,
    imageUrl: 'assets/images/select-elite.jpg',
    description: 'Premium live resin cartridge with authentic strain profiles.',
    strainType: 'hybrid',
    potency: 'high'
  },
  {
    id: '24',
    name: 'Raw Garden Live Resin',
    brand: 'Raw Garden',
    category: 'vaporizers',
    thcContent: 84.1,
    cbdContent: 0.2,
    terpenes: [TERPENES[0], TERPENES[1], TERPENES[4]], // Myrcene, Limonene, Caryophyllene
    dominantTerpenes: ['Myrcene', 'Limonene'],
    effects: ['Happy', 'Relaxed', 'Euphoric'],
    flavors: ['Fruity', 'Citrus', 'Sweet'],
    price: 45.00,
    inStock: true,
    imageUrl: 'assets/images/raw-garden.jpg',
    description: 'Single-source live resin with exceptional terpene profiles.',
    strainType: 'hybrid',
    potency: 'high'
  },
  // Additional Concentrates
  {
    id: '25',
    name: 'Shatter',
    brand: 'Nuna Harvest',
    category: 'concentrates',
    thcContent: 89.7,
    cbdContent: 0.1,
    terpenes: [TERPENES[1], TERPENES[4], TERPENES[7]], // Limonene, Caryophyllene, Terpinolene
    dominantTerpenes: ['Limonene', 'Caryophyllene'],
    effects: ['Euphoric', 'Creative', 'Energetic'],
    flavors: ['Citrus', 'Spicy', 'Pine'],
    price: 55.00,
    inStock: true,
    imageUrl: 'assets/images/shatter.jpg',
    description: 'Glass-like concentrate with high potency and clean effects.',
    strainType: 'hybrid',
    potency: 'high'
  },
  {
    id: '26',
    name: 'Wax',
    brand: 'Nuna Harvest',
    category: 'concentrates',
    thcContent: 86.2,
    cbdContent: 0.2,
    terpenes: [TERPENES[0], TERPENES[3], TERPENES[4]], // Myrcene, Linalool, Caryophyllene
    dominantTerpenes: ['Myrcene', 'Linalool'],
    effects: ['Relaxed', 'Happy', 'Sleepy'],
    flavors: ['Earthy', 'Floral', 'Sweet'],
    price: 50.00,
    inStock: true,
    imageUrl: 'assets/images/wax.jpg',
    description: 'Smooth wax concentrate with balanced effects.',
    strainType: 'indica',
    potency: 'high'
  },
  // Additional Edibles
  {
    id: '27',
    name: 'Kiva Camino Gummies',
    brand: 'Kiva',
    category: 'edibles',
    thcContent: 5.0,
    cbdContent: 0.0,
    terpenes: [TERPENES[1], TERPENES[14], TERPENES[15]], // Limonene, Valencene, Farnesene
    dominantTerpenes: ['Limonene', 'Valencene'],
    effects: ['Happy', 'Relaxed', 'Creative'],
    flavors: ['Mixed Berry', 'Sweet', 'Fruity'],
    price: 22.00,
    inStock: true,
    imageUrl: 'assets/images/kiva-camino.jpg',
    description: 'Low-dose gummies perfect for micro-dosing and social situations.',
    strainType: 'hybrid',
    potency: 'low'
  },
  {
    id: '28',
    name: 'Bhang Chocolate Bar',
    brand: 'Bhang',
    category: 'edibles',
    thcContent: 15.0,
    cbdContent: 0.0,
    terpenes: [TERPENES[0], TERPENES[4], TERPENES[8]], // Myrcene, Caryophyllene, Geraniol
    dominantTerpenes: ['Myrcene', 'Caryophyllene'],
    effects: ['Relaxed', 'Happy', 'Euphoric'],
    flavors: ['Dark Chocolate', 'Rich', 'Smooth'],
    price: 30.00,
    inStock: true,
    imageUrl: 'assets/images/bhang-chocolate.jpg',
    description: 'Premium chocolate bar with balanced effects and rich flavor.',
    strainType: 'hybrid',
    potency: 'medium'
  },
  // Additional Tinctures
  {
    id: '29',
    name: 'THC Relief Tincture',
    brand: 'Nuna Harvest',
    category: 'tinctures',
    thcContent: 25.0,
    cbdContent: 5.0,
    terpenes: [TERPENES[3], TERPENES[4], TERPENES[9]], // Linalool, Caryophyllene, Borneol
    dominantTerpenes: ['Linalool', 'Caryophyllene'],
    effects: ['Pain Relief', 'Relaxed', 'Happy'],
    flavors: ['Mint', 'Herbal', 'Natural'],
    price: 55.00,
    inStock: true,
    imageUrl: 'assets/images/thc-tincture.jpg',
    description: 'Balanced THC/CBD tincture for comprehensive relief.',
    strainType: 'hybrid',
    potency: 'medium'
  },
  {
    id: '30',
    name: 'Sleep Tincture',
    brand: 'Nuna Harvest',
    category: 'tinctures',
    thcContent: 10.0,
    cbdContent: 20.0,
    terpenes: [TERPENES[0], TERPENES[3], TERPENES[9]], // Myrcene, Linalool, Borneol
    dominantTerpenes: ['Myrcene', 'Linalool'],
    effects: ['Sleepy', 'Calm', 'Relaxed'],
    flavors: ['Lavender', 'Chamomile', 'Herbal'],
    price: 48.00,
    inStock: true,
    imageUrl: 'assets/images/sleep-tincture.jpg',
    description: 'Specially formulated tincture for better sleep and relaxation.',
    strainType: 'indica',
    potency: 'medium'
  },
  // Additional Topicals
  {
    id: '31',
    name: 'Pain Relief Cream',
    brand: 'Nuna Harvest',
    category: 'topicals',
    thcContent: 0.0,
    cbdContent: 200.0,
    terpenes: [TERPENES[4], TERPENES[9], TERPENES[10]], // Caryophyllene, Borneol, Camphene
    dominantTerpenes: ['Caryophyllene', 'Borneol'],
    effects: ['Pain Relief', 'Anti-inflammatory', 'Analgesic'],
    flavors: ['Menthol', 'Cooling', 'Fresh'],
    price: 40.00,
    inStock: true,
    imageUrl: 'assets/images/pain-relief-cream.jpg',
    description: 'High-potency CBD cream for targeted pain relief.',
    strainType: 'hybrid',
    potency: 'low'
  },
  {
    id: '32',
    name: 'Arthritis Relief Gel',
    brand: 'Nuna Harvest',
    category: 'topicals',
    thcContent: 0.0,
    cbdContent: 150.0,
    terpenes: [TERPENES[4], TERPENES[9], TERPENES[13]], // Caryophyllene, Borneol, Delta-3-Carene
    dominantTerpenes: ['Caryophyllene', 'Borneol'],
    effects: ['Anti-inflammatory', 'Pain Relief', 'Joint Support'],
    flavors: ['Eucalyptus', 'Mint', 'Cooling'],
    price: 38.00,
    inStock: true,
    imageUrl: 'assets/images/arthritis-gel.jpg',
    description: 'Specialized gel for arthritis and joint pain relief.',
    strainType: 'hybrid',
    potency: 'low'
  },
  // Additional Accessories
  {
    id: '33',
    name: 'Glass Pipe',
    brand: 'Nuna Harvest',
    category: 'accessories',
    thcContent: 0.0,
    cbdContent: 0.0,
    terpenes: [],
    dominantTerpenes: [],
    effects: [],
    flavors: [],
    price: 20.00,
    inStock: true,
    imageUrl: 'assets/images/glass-pipe.jpg',
    description: 'Handcrafted glass pipe for smooth smoking experience.',
    strainType: 'hybrid',
    potency: 'low'
  },
  {
    id: '34',
    name: 'Rolling Papers',
    brand: 'Nuna Harvest',
    category: 'accessories',
    thcContent: 0.0,
    cbdContent: 0.0,
    terpenes: [],
    dominantTerpenes: [],
    effects: [],
    flavors: [],
    price: 5.00,
    inStock: true,
    imageUrl: 'assets/images/rolling-papers.jpg',
    description: 'Premium hemp rolling papers for clean smoking.',
    strainType: 'hybrid',
    potency: 'low'
  },
  // More Flower Products
  {
    id: '35',
    name: 'AK-47',
    brand: 'Nuna Harvest',
    category: 'flower',
    thcContent: 20.3,
    cbdContent: 0.2,
    terpenes: [TERPENES[1], TERPENES[2], TERPENES[4]], // Limonene, Pinene, Caryophyllene
    dominantTerpenes: ['Limonene', 'Pinene'],
    effects: ['Creative', 'Energetic', 'Happy'],
    flavors: ['Earthy', 'Pine', 'Spicy'],
    price: 45.00,
    inStock: true,
    imageUrl: 'assets/images/ak47.jpg',
    description: 'A legendary strain with powerful effects and distinctive aroma.',
    strainType: 'hybrid',
    potency: 'high'
  },
  {
    id: '36',
    name: 'Bubba Kush',
    brand: 'Nuna Harvest',
    category: 'flower',
    thcContent: 18.7,
    cbdContent: 0.3,
    terpenes: [TERPENES[0], TERPENES[3], TERPENES[5]], // Myrcene, Linalool, Humulene
    dominantTerpenes: ['Myrcene', 'Linalool'],
    effects: ['Sleepy', 'Relaxed', 'Happy'],
    flavors: ['Coffee', 'Chocolate', 'Earthy'],
    price: 49.00,
    inStock: true,
    imageUrl: 'assets/images/bubba-kush.jpg',
    description: 'A potent indica with sedative effects and rich flavors.',
    strainType: 'indica',
    potency: 'medium'
  },
  {
    id: '37',
    name: 'Super Lemon Haze',
    brand: 'Nuna Harvest',
    category: 'flower',
    thcContent: 21.1,
    cbdContent: 0.1,
    terpenes: [TERPENES[1], TERPENES[2], TERPENES[6]], // Limonene, Pinene, Ocimene
    dominantTerpenes: ['Limonene', 'Pinene'],
    effects: ['Energetic', 'Creative', 'Uplifted'],
    flavors: ['Lemon', 'Citrus', 'Sweet'],
    price: 51.00,
    inStock: true,
    imageUrl: 'assets/images/super-lemon-haze.jpg',
    description: 'A citrus-forward sativa with energizing effects.',
    strainType: 'sativa',
    potency: 'high'
  },
  {
    id: '38',
    name: 'Critical Mass',
    brand: 'Nuna Harvest',
    category: 'flower',
    thcContent: 16.8,
    cbdContent: 0.4,
    terpenes: [TERPENES[0], TERPENES[4], TERPENES[8]], // Myrcene, Caryophyllene, Geraniol
    dominantTerpenes: ['Myrcene', 'Caryophyllene'],
    effects: ['Relaxed', 'Happy', 'Euphoric'],
    flavors: ['Sweet', 'Earthy', 'Spicy'],
    price: 43.00,
    inStock: true,
    imageUrl: 'assets/images/critical-mass.jpg',
    description: 'A balanced hybrid with relaxing effects and sweet flavors.',
    strainType: 'hybrid',
    potency: 'medium'
  },
  {
    id: '39',
    name: 'Amnesia Haze',
    brand: 'Nuna Harvest',
    category: 'flower',
    thcContent: 22.5,
    cbdContent: 0.1,
    terpenes: [TERPENES[1], TERPENES[2], TERPENES[7]], // Limonene, Pinene, Terpinolene
    dominantTerpenes: ['Limonene', 'Pinene'],
    effects: ['Creative', 'Energetic', 'Focused'],
    flavors: ['Citrus', 'Pine', 'Spicy'],
    price: 53.00,
    inStock: true,
    imageUrl: 'assets/images/amnesia-haze.jpg',
    description: 'A potent sativa with creative and energizing effects.',
    strainType: 'sativa',
    potency: 'high'
  },
  {
    id: '40',
    name: 'Master Kush',
    brand: 'Nuna Harvest',
    category: 'flower',
    thcContent: 19.4,
    cbdContent: 0.2,
    terpenes: [TERPENES[0], TERPENES[3], TERPENES[5]], // Myrcene, Linalool, Humulene
    dominantTerpenes: ['Myrcene', 'Linalool'],
    effects: ['Sleepy', 'Relaxed', 'Happy'],
    flavors: ['Earthy', 'Sweet', 'Spicy'],
    price: 47.00,
    inStock: true,
    imageUrl: 'assets/images/master-kush.jpg',
    description: 'A classic indica with powerful sedative effects.',
    strainType: 'indica',
    potency: 'medium'
  },
  // More Pre-Rolls
  {
    id: '41',
    name: 'Sour Diesel Pre-Roll',
    brand: 'Nuna Harvest',
    category: 'pre-rolls',
    thcContent: 20.1,
    cbdContent: 0.3,
    terpenes: [TERPENES[1], TERPENES[2], TERPENES[6]], // Limonene, Pinene, Ocimene
    dominantTerpenes: ['Limonene', 'Pinene'],
    effects: ['Energetic', 'Creative', 'Uplifted'],
    flavors: ['Diesel', 'Citrus', 'Pungent'],
    price: 12.00,
    inStock: true,
    imageUrl: 'assets/images/sour-diesel-preroll.jpg',
    description: 'A fast-acting pre-roll with energizing effects.',
    strainType: 'sativa',
    potency: 'high'
  },
  {
    id: '42',
    name: 'Blue Dream Pre-Roll',
    brand: 'Nuna Harvest',
    category: 'pre-rolls',
    thcContent: 18.5,
    cbdContent: 0.2,
    terpenes: [TERPENES[0], TERPENES[1], TERPENES[2]], // Myrcene, Limonene, Pinene
    dominantTerpenes: ['Myrcene', 'Limonene'],
    effects: ['Euphoric', 'Creative', 'Relaxed'],
    flavors: ['Berry', 'Vanilla', 'Sweet'],
    price: 10.00,
    inStock: true,
    imageUrl: 'assets/images/blue-dream-preroll.jpg',
    description: 'A balanced pre-roll with full-body relaxation.',
    strainType: 'hybrid',
    potency: 'medium'
  },
  // More Vaporizers
  {
    id: '43',
    name: 'Pax Era Pod',
    brand: 'Pax',
    category: 'vaporizers',
    thcContent: 83.2,
    cbdContent: 0.1,
    terpenes: [TERPENES[1], TERPENES[4], TERPENES[14]], // Limonene, Caryophyllene, Valencene
    dominantTerpenes: ['Limonene', 'Caryophyllene'],
    effects: ['Euphoric', 'Creative', 'Relaxed'],
    flavors: ['Citrus', 'Spicy', 'Sweet'],
    price: 40.00,
    inStock: true,
    imageUrl: 'assets/images/pax-era.jpg',
    description: 'Premium pod for Pax Era device with authentic strain profiles.',
    strainType: 'hybrid',
    potency: 'high'
  },
  {
    id: '44',
    name: 'Jetty Extracts Cartridge',
    brand: 'Jetty',
    category: 'vaporizers',
    thcContent: 85.7,
    cbdContent: 0.2,
    terpenes: [TERPENES[0], TERPENES[1], TERPENES[4]], // Myrcene, Limonene, Caryophyllene
    dominantTerpenes: ['Myrcene', 'Limonene'],
    effects: ['Happy', 'Relaxed', 'Euphoric'],
    flavors: ['Fruity', 'Citrus', 'Sweet'],
    price: 38.00,
    inStock: true,
    imageUrl: 'assets/images/jetty-cartridge.jpg',
    description: 'Live resin cartridge with exceptional flavor and effects.',
    strainType: 'hybrid',
    potency: 'high'
  },
  {
    id: '45',
    name: 'Lighter',
    brand: 'Nuna Harvest',
    category: 'accessories',
    thcContent: 0.0,
    cbdContent: 0.0,
    terpenes: [],
    dominantTerpenes: [],
    effects: [],
    flavors: [],
    price: 3.00,
    inStock: true,
    imageUrl: 'assets/images/lighter.jpg',
    description: 'Reliable lighter for all your smoking needs.',
    strainType: 'hybrid',
    potency: 'low'
  }
]; 