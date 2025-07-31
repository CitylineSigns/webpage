import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Product, Terpene } from '../../models/inventory.interface';
import { InventoryService } from '../../services/inventory.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { TerpeneFilterComponent } from '../terpene-filter/terpene-filter.component';
import { FilterPanelComponent } from '../filter-panel/filter-panel.component';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProductCardComponent,
    TerpeneFilterComponent,
    FilterPanelComponent
  ],
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  allTerpenes: Terpene[] = [];
  searchTerm: string = '';
  selectedTerpenes: string[] = [];
  selectedCategories: string[] = [];
  selectedEffects: string[] = [];
  selectedStrainTypes: string[] = [];
  selectedPotencyLevels: string[] = [];
  priceRange: [number, number] = [0, 100];
  
  availableCategories: string[] = [];
  availableEffects: string[] = [];
  availableStrainTypes: string[] = [];
  availablePotencyLevels: string[] = [];
  availablePriceRange: [number, number] = [0, 100];
  
  isLoading = true;
  showFilters = false;
  
  private subscriptions: Subscription[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.loadData();
    this.setupSubscriptions();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private loadData(): void {
    this.allTerpenes = this.inventoryService.getAllTerpenes();
    this.isLoading = false;
  }

  private setupSubscriptions(): void {
    // Subscribe to filtered products
    this.subscriptions.push(
      this.inventoryService.filteredProducts$.subscribe(products => {
        this.filteredProducts = products;
      })
    );

    // Subscribe to available filter options
    this.subscriptions.push(
      this.inventoryService.availableCategories$.subscribe(categories => {
        this.availableCategories = categories;
      })
    );

    this.subscriptions.push(
      this.inventoryService.availableEffects$.subscribe(effects => {
        this.availableEffects = effects;
      })
    );

    this.subscriptions.push(
      this.inventoryService.availableStrainTypes$.subscribe(strainTypes => {
        this.availableStrainTypes = strainTypes;
      })
    );

    this.subscriptions.push(
      this.inventoryService.availablePotencyLevels$.subscribe(potencyLevels => {
        this.availablePotencyLevels = potencyLevels;
      })
    );

    this.subscriptions.push(
      this.inventoryService.priceRange$.subscribe(range => {
        this.availablePriceRange = range;
        this.priceRange = range;
      })
    );

    // Subscribe to current filter states
    this.subscriptions.push(
      this.inventoryService.searchTerm$.subscribe(term => {
        this.searchTerm = term;
      })
    );

    this.subscriptions.push(
      this.inventoryService.selectedTerpenes$.subscribe(terpenes => {
        this.selectedTerpenes = terpenes;
      })
    );

    this.subscriptions.push(
      this.inventoryService.selectedCategories$.subscribe(categories => {
        this.selectedCategories = categories;
      })
    );

    this.subscriptions.push(
      this.inventoryService.selectedEffects$.subscribe(effects => {
        this.selectedEffects = effects;
      })
    );

    this.subscriptions.push(
      this.inventoryService.selectedStrainTypes$.subscribe(strainTypes => {
        this.selectedStrainTypes = strainTypes;
      })
    );

    this.subscriptions.push(
      this.inventoryService.selectedPotencyLevels$.subscribe(potencyLevels => {
        this.selectedPotencyLevels = potencyLevels;
      })
    );

    this.subscriptions.push(
      this.inventoryService.priceRange$.subscribe(range => {
        this.priceRange = range;
      })
    );
  }

  // Filter update methods
  onSearchTermChange(term: string): void {
    this.inventoryService.updateSearchTerm(term);
  }

  onTerpenesChange(terpenes: string[]): void {
    this.inventoryService.updateSelectedTerpenes(terpenes);
  }

  onCategoriesChange(categories: string[]): void {
    this.inventoryService.updateSelectedCategories(categories);
  }

  onEffectsChange(effects: string[]): void {
    this.inventoryService.updateSelectedEffects(effects);
  }

  onStrainTypesChange(strainTypes: string[]): void {
    this.inventoryService.updateSelectedStrainTypes(strainTypes);
  }

  onPotencyLevelsChange(potencyLevels: string[]): void {
    this.inventoryService.updateSelectedPotencyLevels(potencyLevels);
  }

  onPriceRangeChange(range: [number, number]): void {
    this.inventoryService.updatePriceRange(range);
  }

  // Clear all filters
  clearAllFilters(): void {
    this.inventoryService.clearAllFilters();
  }

  // Toggle filter panel
  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  // Get active filter count
  getActiveFilterCount(): number {
    let count = 0;
    if (this.searchTerm) count++;
    if (this.selectedTerpenes.length > 0) count++;
    if (this.selectedCategories.length > 0) count++;
    if (this.selectedEffects.length > 0) count++;
    if (this.selectedStrainTypes.length > 0) count++;
    if (this.selectedPotencyLevels.length > 0) count++;
    if (this.priceRange[0] !== this.availablePriceRange[0] || 
        this.priceRange[1] !== this.availablePriceRange[1]) count++;
    return count;
  }

  // Get products by terpene for quick filtering
  getProductsByTerpene(terpeneName: string): Product[] {
    return this.inventoryService.getProductsByTerpene(terpeneName);
  }

  // Get terpene info
  getTerpeneInfo(terpeneName: string): Terpene | undefined {
    return this.inventoryService.getTerpeneByName(terpeneName);
  }

  // Track by function for ngFor
  trackByProductId(index: number, product: Product): string {
    return product.id;
  }
} 