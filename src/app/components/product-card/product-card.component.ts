import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, Terpene } from '../../models/inventory.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() terpenes: Terpene[] = [];

  getTerpeneColor(terpeneName: string): string {
    const terpene = this.terpenes.find(t => t.name === terpeneName);
    return terpene?.color || '#6c757d';
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

  formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }

  getPotencyColor(potency: string): string {
    const colors: { [key: string]: string } = {
      'low': '#28a745',
      'medium': '#ffc107',
      'high': '#dc3545'
    };
    return colors[potency] || '#6c757d';
  }

  getStrainTypeColor(strainType: string): string {
    const colors: { [key: string]: string } = {
      'sativa': '#17a2b8',
      'indica': '#6f42c1',
      'hybrid': '#fd7e14'
    };
    return colors[strainType] || '#6c757d';
  }
} 