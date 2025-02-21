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
        style({ transform: 'translateX(500%)' }),
        stagger(150, [
          animate('800ms ease-out', style({ transform: 'translateX(0)' })),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);
