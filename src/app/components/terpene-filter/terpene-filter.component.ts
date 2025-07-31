import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Terpene } from '../../models/inventory.interface';

@Component({
  selector: 'app-terpene-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terpene-filter.component.html',
  styleUrls: ['./terpene-filter.component.scss']
})
export class TerpeneFilterComponent {
  @Input() terpenes: Terpene[] = [];
  @Input() selectedTerpenes: string[] = [];
  @Output() terpenesChange = new EventEmitter<string[]>();

  toggleTerpene(terpeneName: string): void {
    const newSelection = this.selectedTerpenes.includes(terpeneName)
      ? this.selectedTerpenes.filter(t => t !== terpeneName)
      : [...this.selectedTerpenes, terpeneName];
    
    this.terpenesChange.emit(newSelection);
  }

  isSelected(terpeneName: string): boolean {
    return this.selectedTerpenes.includes(terpeneName);
  }

  getTerpeneColor(terpeneName: string): string {
    const terpene = this.terpenes.find(t => t.name === terpeneName);
    return terpene?.color || '#6c757d';
  }

  getTerpeneDescription(terpeneName: string): string {
    const terpene = this.terpenes.find(t => t.name === terpeneName);
    return terpene?.description || '';
  }

  getTerpeneEffects(terpeneName: string): string[] {
    const terpene = this.terpenes.find(t => t.name === terpeneName);
    return terpene?.effects || [];
  }

  getTerpeneFlavors(terpeneName: string): string[] {
    const terpene = this.terpenes.find(t => t.name === terpeneName);
    return terpene?.flavors || [];
  }
} 