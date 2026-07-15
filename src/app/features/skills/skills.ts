import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

  skills = [

    {
      icon: '💻',
      title: 'Frontend',
      items: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'SCSS',
        'Bootstrap'
      ]
    },


    {
      icon: '🎨',
      title: 'Angular Ecosystem',
      items: [
        'Bootstrap',
        'Angular Material',
        'RxJS',
        'REST API',
        'Reactive Forms',
        'Lazy Loading',
        'Component Architecture'
      ]
    },


    {
      icon: '🛠',
      title: 'Tools & Workflow',
      items: [
        'Git',
        'Agile',
        'VS Code',
        'Jenkins',
        'Rapid SVN'
      ]
    }

  ];
  
}
