import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Product, Terpene, FilterOptions } from '../models/inventory.interface';
import { INVENTORY_DATA, TERPENES } from '../data/inventory.data';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private productsSubject = new BehaviorSubject<Product[]>(INVENTORY_DATA);
  private searchTermSubject = new BehaviorSubject<string>('');
  private selectedTerpenesSubject = new BehaviorSubject<string[]>([]);
  private selectedCategoriesSubject = new BehaviorSubject<string[]>([]);
  private selectedEffectsSubject = new BehaviorSubject<string[]>([]);
  private selectedStrainTypesSubject = new BehaviorSubject<string[]>([]);
  private selectedPotencyLevelsSubject = new BehaviorSubject<string[]>([]);
  private priceRangeSubject = new BehaviorSubject<[number, number]>([0, 100]);

  public products$ = this.productsSubject.asObservable();
  public searchTerm$ = this.searchTermSubject.asObservable();
  public selectedTerpenes$ = this.selectedTerpenesSubject.asObservable();
  public selectedCategories$ = this.selectedCategoriesSubject.asObservable();
  public selectedEffects$ = this.selectedEffectsSubject.asObservable();
  public selectedStrainTypes$ = this.selectedStrainTypesSubject.asObservable();
  public selectedPotencyLevels$ = this.selectedPotencyLevelsSubject.asObservable();
  public priceRange$ = this.priceRangeSubject.asObservable();

  public filteredProducts$ = combineLatest([
    this.products$,
    this.searchTerm$.pipe(debounceTime(300), distinctUntilChanged()),
    this.selectedTerpenes$,
    this.selectedCategories$,
    this.selectedEffects$,
    this.selectedStrainTypes$,
    this.selectedPotencyLevels$,
    this.priceRange$
  ]).pipe(
    map(([products, searchTerm, terpenes, categories, effects, strainTypes, potencyLevels, priceRange]) => {
      return this.filterProducts(products, searchTerm, terpenes, categories, effects, strainTypes, potencyLevels, priceRange);
    })
  );

  public availableTerpenes$ = this.products$.pipe(
    map(products => {
      const allTerpenes = new Set<string>();
      products.forEach(product => {
        product.dominantTerpenes.forEach(terpene => allTerpenes.add(terpene));
      });
      return Array.from(allTerpenes).sort();
    })
  );

  public availableCategories$ = this.products$.pipe(
    map(products => {
      const categories = new Set(products.map(p => p.category));
      return Array.from(categories).sort();
    })
  );

  public availableEffects$ = this.products$.pipe(
    map(products => {
      const effects = new Set<string>();
      products.forEach(product => {
        product.effects.forEach(effect => effects.add(effect));
      });
      return Array.from(effects).sort();
    })
  );

  public availableStrainTypes$ = this.products$.pipe(
    map(products => {
      const strainTypes = new Set(products.map(p => p.strainType));
      return Array.from(strainTypes).sort();
    })
  );

  public availablePotencyLevels$ = this.products$.pipe(
    map(products => {
      const potencyLevels = new Set(products.map(p => p.potency));
      return Array.from(potencyLevels).sort();
    })
  );

  public priceRange$ = this.products$.pipe(
    map(products => {
      const prices = products.map(p => p.price);
      return [Math.min(...prices), Math.max(...prices)] as [number, number];
    })
  );

  constructor() {}

  // Update filters
  updateSearchTerm(term: string): void {
    this.searchTermSubject.next(term);
  }

  updateSelectedTerpenes(terpenes: string[]): void {
    this.selectedTerpenesSubject.next(terpenes);
  }

  updateSelectedCategories(categories: string[]): void {
    this.selectedCategoriesSubject.next(categories);
  }

  updateSelectedEffects(effects: string[]): void {
    this.selectedEffectsSubject.next(effects);
  }

  updateSelectedStrainTypes(strainTypes: string[]): void {
    this.selectedStrainTypesSubject.next(strainTypes);
  }

  updateSelectedPotencyLevels(potencyLevels: string[]): void {
    this.selectedPotencyLevelsSubject.next(potencyLevels);
  }

  updatePriceRange(range: [number, number]): void {
    this.priceRangeSubject.next(range);
  }

  // Clear all filters
  clearAllFilters(): void {
    this.searchTermSubject.next('');
    this.selectedTerpenesSubject.next([]);
    this.selectedCategoriesSubject.next([]);
    this.selectedEffectsSubject.next([]);
    this.selectedStrainTypesSubject.next([]);
    this.selectedPotencyLevelsSubject.next([]);
    this.priceRangeSubject.next([0, 100]);
  }

  // Get product by ID
  getProductById(id: string): Product | undefined {
    return INVENTORY_DATA.find(product => product.id === id);
  }

  // Get all terpenes
  getAllTerpenes(): Terpene[] {
    return TERPENES;
  }

  // Get terpene by name
  getTerpeneByName(name: string): Terpene | undefined {
    return TERPENES.find(terpene => terpene.name === name);
  }

  // Get products by terpene
  getProductsByTerpene(terpeneName: string): Product[] {
    return INVENTORY_DATA.filter(product => 
      product.dominantTerpenes.includes(terpeneName)
    );
  }

  // Get products by category
  getProductsByCategory(category: string): Product[] {
    return INVENTORY_DATA.filter(product => product.category === category);
  }

  // Get products by effect
  getProductsByEffect(effect: string): Product[] {
    return INVENTORY_DATA.filter(product => 
      product.effects.includes(effect)
    );
  }

  // Get products by strain type
  getProductsByStrainType(strainType: string): Product[] {
    return INVENTORY_DATA.filter(product => product.strainType === strainType);
  }

  // Get products by potency
  getProductsByPotency(potency: string): Product[] {
    return INVENTORY_DATA.filter(product => product.potency === potency);
  }

  // Get products in price range
  getProductsInPriceRange(min: number, max: number): Product[] {
    return INVENTORY_DATA.filter(product => 
      product.price >= min && product.price <= max
    );
  }

  // Search products
  searchProducts(term: string): Product[] {
    if (!term.trim()) return INVENTORY_DATA;
    
    const searchTerm = term.toLowerCase();
    return INVENTORY_DATA.filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.brand.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.dominantTerpenes.some(terpene => 
        terpene.toLowerCase().includes(searchTerm)
      ) ||
      product.effects.some(effect => 
        effect.toLowerCase().includes(searchTerm)
      ) ||
      product.flavors.some(flavor => 
        flavor.toLowerCase().includes(searchTerm)
      )
    );
  }

  // Private filter method
  private filterProducts(
    products: Product[],
    searchTerm: string,
    terpenes: string[],
    categories: string[],
    effects: string[],
    strainTypes: string[],
    potencyLevels: string[],
    priceRange: [number, number]
  ): Product[] {
    return products.filter(product => {
      // Search term filter
      if (searchTerm && !this.matchesSearchTerm(product, searchTerm)) {
        return false;
      }

      // Terpenes filter
      if (terpenes.length > 0 && !terpenes.some(terpene => 
        product.dominantTerpenes.includes(terpene)
      )) {
        return false;
      }

      // Categories filter
      if (categories.length > 0 && !categories.includes(product.category)) {
        return false;
      }

      // Effects filter
      if (effects.length > 0 && !effects.some(effect => 
        product.effects.includes(effect)
      )) {
        return false;
      }

      // Strain types filter
      if (strainTypes.length > 0 && !strainTypes.includes(product.strainType)) {
        return false;
      }

      // Potency levels filter
      if (potencyLevels.length > 0 && !potencyLevels.includes(product.potency)) {
        return false;
      }

      // Price range filter
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      return true;
    });
  }

  private matchesSearchTerm(product: Product, searchTerm: string): boolean {
    const term = searchTerm.toLowerCase();
    return (
      product.name.toLowerCase().includes(term) ||
      product.brand.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term) ||
      product.dominantTerpenes.some(terpene => 
        terpene.toLowerCase().includes(term)
      ) ||
      product.effects.some(effect => 
        effect.toLowerCase().includes(term)
      ) ||
      product.flavors.some(flavor => 
        flavor.toLowerCase().includes(term)
      )
    );
  }
} 