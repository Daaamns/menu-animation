import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bande-animation',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './bande-animation.component.html',
  styleUrls: ['./bande-animation.component.scss'],
  animations: [
    trigger('slideInBands', [
      transition(':enter', [
        query(
          '.band',
          [
            style({ transform: 'translateX(500%)' }), // Hors de l'écran et invisible
            stagger(150, [
              animate('700ms ease-out', style({ transform: 'translateX(0)' })),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
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

  onHover(index: number) {
    this.hoveredBandIndex = index;
  }

  onLeave() {
    this.hoveredBandIndex = null;
  }

  shouldSlide(index: number): boolean {
    // Toutes les bandes jusqu'à l'index survolé doivent glisser
    return this.hoveredBandIndex !== null && index <= this.hoveredBandIndex;
  }

  getTranslation(index: number): string {
    if (this.hoveredBandIndex === null) {
      return 'translateX(0)'; // Pas de translation si aucune bande n'est survolée
    }

    const diff = index - this.hoveredBandIndex;

    if (diff <= 0) {
      return 'translateX(0px)';
    } else {
      return `translateX(${diff * 15}px)`;
    }
  }
}
