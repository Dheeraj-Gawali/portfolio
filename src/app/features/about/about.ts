import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  // Your professional details
  profile = {
    name: 'Dheeraj Gawali',
    title: 'Senior Angular Developer',
    summary: `I'm Dheeraj Gawali, a Senior Angular Developer with 6+ years of experience building enterprise web applications using Angular, TypeScript, RxJS, and modern frontend technologies.

I specialize in creating scalable architectures, reusable components, responsive interfaces, REST API integration, and performance-focused solutions.

I have worked on product-based and client projects, delivering maintainable applications while collaborating with teams using Agile practices.
`,
  };

  // Skills
  skills = [
    'Angular (v6–v20)',
    'TypeScript, JavaScript, HTML, CSS, SCSS',
    'Bootstrap & Responsive Design',
    'RxJS & State Management',
    'REST API Integration',
    'Component Architecture & Reusability',
    'Agile/Scrum Practices',
    'Performance Optimization'
  ];

}
