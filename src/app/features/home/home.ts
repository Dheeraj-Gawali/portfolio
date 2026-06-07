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
	
	downloadResume(event: Event) {
		const fileUrl = 'assets/Dheeraj_Resume_Angular.pdf';
		const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		if (isMobile) {
			// iOS fallback
			window.open(fileUrl, '_blank');
		} else {
			const link = document.createElement('a');
			link.href = fileUrl;
			link.download = 'Dheeraj_Resume_Angular.pdf';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	}
}
