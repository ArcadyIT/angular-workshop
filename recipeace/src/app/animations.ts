import {
  trigger, group,
  transition, animate, style, query
} from '@angular/animations';

// Routable animations
export const slideInAnimation =
  trigger('routeAnimation', [
    transition('recipes <=> recipe', [
      query(':enter, :leave', style({ position: 'relative', width: '100%', opacity: 1 })),
        group([
          query(':enter', [
            style({ opacity: 0 }),
            animate('500ms ease-in-out', style({ opacity: 1 }))
          ]),
          query(':leave', [
            style({ opacity: 1 }),
            animate('500ms ease-in-out', style({ opacity: 0 }))
          ]),
        ])
    ])
  ]);
