import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
 name = 'Dheeraj Gawali';
  title = 'Angular Developer';

  // Split name into letters for animation
  nameLetters = this.name.split('').map(char => (char === ' ' ? '\u00A0' : char));
}
