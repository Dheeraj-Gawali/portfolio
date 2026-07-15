import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  

  contact = {
    email: 'dheerajgawali98@gmail.com',
    phone: '+91 8269911050',
    location: 'Indore, Madhya Pradesh, India',

    linkedin: 'https://linkedin.com/in/dheeraj-gawali-46272017a',

    github: 'https://github.com/Dheeraj-Gawali'
  };


  downloadResume(event: Event) {

    const fileUrl = 'assets/Dheeraj_Resume_Angular.pdf';

    const link = document.createElement('a');

    link.href = fileUrl;

    link.download = 'Dheeraj_Resume_Angular.pdf';

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

  }
}
