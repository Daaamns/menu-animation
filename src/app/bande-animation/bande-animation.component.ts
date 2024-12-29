import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { slideInBands } from '../animation';

@Component({
  selector: 'app-bande-animation',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './bande-animation.component.html',
  styleUrls: ['./bande-animation.component.scss'],
  animations: [slideInBands],
})
export class BandeAnimationComponent {
  bands = [
    { name: 'page 5', color: '#ff0000' },
    { name: 'page 4', color: '#00ff00' },
    { name: 'page 3', color: '#ff0000' },
    { name: 'page 2', color: '#00ff00' },
    { name: 'page 1', color: '#0000ff' },
  ];

  hoveredBandIndex: number | null = null;
  activeBandIndex: number | null = null;

  onHover(index: number) {
    this.hoveredBandIndex = index;
  }

  onLeave() {
    this.hoveredBandIndex = null;
  }

  onClick(index: number) {
    if (this.activeBandIndex === index) {
      this.activeBandIndex = null;
    } else {
      this.activeBandIndex = index;
    }
  }

  shouldSlide(index: number): boolean {
    return this.hoveredBandIndex !== null && index <= this.hoveredBandIndex;
  }

  getTranslation(index: number): string {
    // Si aucune bande n'est active
    if (this.activeBandIndex === null) {
      if (this.hoveredBandIndex === null) {
        return 'translateX(0)';
      }

      const diff = index - this.hoveredBandIndex;

      if (diff <= 0) {
        return 'translateX(0px)';
      } else {
        return `translateX(${diff * 15}px)`;
      }
    }

    // Si une bande est active
    if (this.activeBandIndex !== null) {
      const distance = index * 70;

      return `translateX(${distance}px)`;
    }

    return 'translateX(0)';
  }

  getZIndex(index: number): number {
    if (this.activeBandIndex === index) {
      return 10;
    }
    return 5 - index;
  }
}
