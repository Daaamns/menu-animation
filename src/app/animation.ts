import {
  animate,
  group,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideInBands = trigger('slideInBands', [
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
]);

export const closeBands = trigger('closeBands', [
  transition('* => *', [
    query(
      '.band',
      [
        stagger(-150, [
          group([
            animate('500ms ease-in', style({ transform: 'translateX(500%)' })),
            style({ zIndex: '{{zIndex}}' }),
          ]),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);
