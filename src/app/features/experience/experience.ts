import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {

  experience = {
    role: 'Senior Angular Developer',
    company: 'Aplite Info Solution Pvt Ltd',
    duration: 'April 2019 – May 2025',

    achievements: [

      {
        icon: '💼',
        title: '6+ Years Experience',
        description: 'Developed scalable enterprise web applications using Angular.'
      },

      {
        icon: '🏢',
        title: 'Enterprise & Client Projects',
        description: 'Worked on both product-based and client-focused applications.'
      },

      {
        icon: '🧩',
        title: '20+ Reusable Components',
        description: 'Built reusable Angular components, services and shared modules.'
      },

      {
        icon: '🚀',
        title: 'Angular v6 → v20',
        description: 'Maintained, enhanced and upgraded Angular applications.'
      },

      {
        icon: '🔗',
        title: 'REST API Integration',
        description: 'Integrated RESTful APIs and optimized frontend performance.'
      },

      {
        icon: '📱',
        title: 'Responsive UI',
        description: 'Converted Figma and wireframes into responsive applications.'
      },

      {
        icon: '👥',
        title: 'Agile Development',
        description: 'Worked with designers, backend developers and QA teams.'
      },

      {
        icon: '👨‍🏫',
        title: 'Mentoring',
        description: 'Conducted code reviews and mentored junior Angular developers.'
      }

    ]
  };

}
