import { trigger, transition, style, query, animateChild, animate, group } from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* => *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        style({ opacity: 1 }),
        animate('75ms ease', style({ opacity: 0 }))
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0 }),
        animate('75ms 76ms ease', style({ opacity: 1 }))
      ], { optional: true })
    ]),
    query(':enter', animateChild(), { optional: true }),
  ])

]);
