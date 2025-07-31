import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss']
})
export class FilterPanelComponent {
  @Input() availableCategories: string[] = [];
  @Input() availableEffects: string[] = [];
  @Input() availableStrainTypes: string[] = [];
  @Input() availablePotencyLevels: string[] = [];
  @Input() availablePriceRange: [number, number] = [0, 100];
  
  @Input() selectedCategories: string[] = [];
  @Input() selectedEffects: string[] = [];
  @Input() selectedStrainTypes: string[] = [];
  @Input() selectedPotencyLevels: string[] = [];
  @Input() priceRange: [number, number] = [0, 100];
  
  @Output() categoriesChange = new EventEmitter<string[]>();
  @Output() effectsChange = new EventEmitter<string[]>();
  @Output() strainTypesChange = new EventEmitter<string[]>();
  @Output() potencyLevelsChange = new EventEmitter<string[]>();
  @Output() priceRangeChange = new EventEmitter<[number, number]>();

  // Category methods
  toggleCategory(category: string): void {
    const newSelection = this.selectedCategories.includes(category)
      ? this.selectedCategories.filter(c => c !== category)
      : [...this.selectedCategories, category];
    
    this.categoriesChange.emit(newSelection);
  }

  isCategorySelected(category: string): boolean {
    return this.selectedCategories.includes(category);
  }

  // Effect methods
  toggleEffect(effect: string): void {
    const newSelection = this.selectedEffects.includes(effect)
      ? this.selectedEffects.filter(e => e !== effect)
      : [...this.selectedEffects, effect];
    
    this.effectsChange.emit(newSelection);
  }

  isEffectSelected(effect: string): boolean {
    return this.selectedEffects.includes(effect);
  }

  // Strain type methods
  toggleStrainType(strainType: string): void {
    const newSelection = this.selectedStrainTypes.includes(strainType)
      ? this.selectedStrainTypes.filter(s => s !== strainType)
      : [...this.selectedStrainTypes, strainType];
    
    this.strainTypesChange.emit(newSelection);
  }

  isStrainTypeSelected(strainType: string): boolean {
    return this.selectedStrainTypes.includes(strainType);
  }

  // Potency methods
  togglePotencyLevel(potency: string): void {
    const newSelection = this.selectedPotencyLevels.includes(potency)
      ? this.selectedPotencyLevels.filter(p => p !== potency)
      : [...this.selectedPotencyLevels, potency];
    
    this.potencyLevelsChange.emit(newSelection);
  }

  isPotencyLevelSelected(potency: string): boolean {
    return this.selectedPotencyLevels.includes(potency);
  }

  // Price range methods
  onMinPriceChange(event: Event): void {
    const minPrice = parseFloat((event.target as HTMLInputElement).value);
    const newRange: [number, number] = [minPrice, this.priceRange[1]];
    this.priceRangeChange.emit(newRange);
  }

  onMaxPriceChange(event: Event): void {
    const maxPrice = parseFloat((event.target as HTMLInputElement).value);
    const newRange: [number, number] = [this.priceRange[0], maxPrice];
    this.priceRangeChange.emit(newRange);
  }

  // Utility methods
  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }

  getCategoryDisplayName(category: string): string {
    const displayNames: { [key: string]: string } = {
      'flower': 'Flower',
      'pre-rolls': 'Pre-Rolls',
      'vaporizers': 'Vaporizers',
      'concentrates': 'Concentrates',
      'edibles': 'Edibles',
      'tinctures': 'Tinctures',
      'topicals': 'Topicals',
      'accessories': 'Accessories'
    };
    return displayNames[category] || category;
  }

  getStrainTypeDisplayName(strainType: string): string {
    const displayNames: { [key: string]: string } = {
      'sativa': 'Sativa',
      'indica': 'Indica',
      'hybrid': 'Hybrid'
    };
    return displayNames[strainType] || strainType;
  }

  getPotencyDisplayName(potency: string): string {
    const displayNames: { [key: string]: string } = {
      'low': 'Low',
      'medium': 'Medium',
      'high': 'High'
    };
    return displayNames[potency] || potency;
  }

  getActiveFilterCount(): number {
    return this.selectedCategories.length + 
           this.selectedEffects.length + 
           this.selectedStrainTypes.length + 
           this.selectedPotencyLevels.length;
  }
} 