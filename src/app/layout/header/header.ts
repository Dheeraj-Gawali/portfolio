import { AfterViewInit, Component } from '@angular/core';

@Component({
	selector: 'app-header',
	imports: [],
	templateUrl: './header.html',
	styleUrl: './header.scss'
})
export class Header implements AfterViewInit {

	activeSection = 'home';

	scrollToSection(sectionId: string) {

		this.activeSection = sectionId;

		this.closeMenu();

		document.getElementById(sectionId)?.scrollIntoView({
			behavior: 'smooth'
		});

	}
	ngAfterViewInit() {

		const sections = document.querySelectorAll('section[id]');

		const observer = new IntersectionObserver(

			(entries) => {

				entries.forEach(entry => {

					if (entry.isIntersecting) {

						this.activeSection = entry.target.id;

					}

				});

			},

			{
				threshold: 0.4
			}

		);

		sections.forEach(section => observer.observe(section));

	}

	closeMenu() {

		const navbar =
			document.getElementById('navbarNav');


		if (navbar?.classList.contains('show')) {

			navbar.classList.remove('show');

		}

	}
}
