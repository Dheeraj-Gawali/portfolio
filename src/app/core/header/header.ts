import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-header',
	imports: [RouterLink, RouterLinkActive],
	templateUrl: './header.html',
	styleUrl: './header.scss'
})
export class Header {

	downloadResume(event: Event) {
		const fileUrl = 'assets/Dheeraj_Gawali_Resume.pdf';
		const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		if (isMobile) {
			// iOS fallback
			window.open(fileUrl, '_blank');
		} else {
			const link = document.createElement('a');
			link.href = fileUrl;
			link.download = 'Dheeraj_Gawali_Resume.pdf';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	}
}
