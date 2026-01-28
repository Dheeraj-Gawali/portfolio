import { Component } from '@angular/core';
// import { trigger, query, style, transition, animate, stagger } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-animations',
  imports: [],
  templateUrl: './animations.html',
  styleUrl: './animations.scss'
})
export class Animations {

}
// import { trigger, transition, style, animate } from '@angular/animations';

// export const fadeIn = trigger('fadeIn', [
//   transition(':enter', [
//     style({ opacity: 0, transform: 'translateY(20px)' }),
//     animate('600ms ease-out',
//       style({ opacity: 1, transform: 'translateY(0)' }))
//   ])
// ]);

// export const fadeSlideStagger = trigger('fadeSlideStagger', [
//   transition(':enter', [
//     query('li', [
//       style({ opacity: 0, transform: 'translateY(20px)' }),
//       stagger(100, [
//         animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
//       ])
//     ])
//   ])
// ]);
