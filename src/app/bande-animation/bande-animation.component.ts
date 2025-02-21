import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { slideInBands } from '../animation';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-bande-animation',
  standalone: true,
  imports: [NgFor, NgStyle, RouterModule],
  templateUrl: './bande-animation.component.html',
  styleUrls: ['./bande-animation.component.scss'],
  animations: [slideInBands],
})
export class BandeAnimationComponent {
  bands = [
    { name: 'page 5', route: '5' },
    { name: 'page 4', route: '4' },
    { name: 'page 3', route: '3' },
    { name: 'page 2', route: '2' },
    { name: 'page 1', route: '' },
  ];

  hoveredBandIndex: number | null = null;
  activeBandIndex: number | null = null;

  constructor(private router: Router) {}

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
      setTimeout(() => {
        this.router.navigate([this.bands[index].route]).then((success) => {
          this.activeBandIndex = null;
        });
      }, 600);
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
