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
    summary: `Highly skilled Angular Developer with 6+ years of experience building scalable and responsive web applications.
Expert in Angular (v6–v20), RxJS, REST APIs, and reusable component architecture.
Proven Agile/Scrum contributor and mentor with strong problem-solving skills and focus on performance optimization.`,
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

  // Experience summary
  experiences = [
    {
      role: 'Angular Developer',
      company: 'Aplite Info Solution Pvt Ltd, Indore, MP',
      duration: 'April 2019 – May 2025',
      projects: [
        {
          name: 'Freight Linc',
          description: 'Converted wireframes into fully responsive Angular applications using HTML, CSS, Bootstrap and Angular CLI, improving UI delivery by ~100%.'
        },
        {
          name: 'Ucodia',
          description: 'Resolved performance and UI bugs mid-development, reducing client bug tickets by 40%.'
        },
        {
          name: 'EyeOnTask',
          description: 'Enhanced company product since 2019, built 20+ dynamic and reusable Angular components, optimized frontend API integration, and mentored junior developers.'
        }
      ]
    }
  ];
}
