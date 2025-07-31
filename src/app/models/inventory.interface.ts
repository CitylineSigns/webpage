export interface Terpene {
  name: string;
  description: string;
  effects: string[];
  flavors: string[];
  color: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'flower' | 'pre-rolls' | 'vaporizers' | 'concentrates' | 'edibles' | 'tinctures' | 'topicals' | 'accessories';
  thcContent: number;
  cbdContent: number;
  terpenes: Terpene[];
  dominantTerpenes: string[];
  effects: string[];
  flavors: string[];
  price: number;
  inStock: boolean;
  imageUrl: string;
  description: string;
  strainType: 'sativa' | 'indica' | 'hybrid';
  potency: 'low' | 'medium' | 'high';
}

export interface FilterOptions {
  categories: string[];
  terpenes: string[];
  effects: string[];
  strainTypes: string[];
  potencyLevels: string[];
  priceRange: [number, number];
} 