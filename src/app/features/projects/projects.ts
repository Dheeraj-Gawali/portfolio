import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-projects',
	imports: [CommonModule],
	templateUrl: './projects.html',
	styleUrl: './projects.scss'
})
export class Projects {

	projects = [

		{
			featured: true,

			name: 'Document Workflow Management',

			type: 'Personal Project',

			image: 'projects/document-workflow.png',

			description: 'Designed and developed a complete document workflow management system using Angular 20 to streamline document organization, approvals, and status tracking.',

			technologies: [
				'Angular 20',
				'TypeScript',
				'RxJS',
				'Bootstrap',
				'SCSS',
				'Reactive Forms',
				'Standalone Components'
			],

			url: 'https://dheeraj-gawali.github.io/document-workflow-management/documents',

			github: 'https://github.com/Dheeraj-Gawali/document-workflow-management',

			points: [
				'Document creation and editing',
				'Workflow status tracking',
				'Approval matrix',
				'Dynamic form rendering',
				'File upload with progress',
				'Lazy loading',
				'Route Guards',
				'Custom Directives',
				'Responsive Design'
			]
		},


		{


			name: 'EyeOnTask',

			type: 'Company Product',

			featured: false,

			image: 'projects/eyeontask.png',


			description:
				'Enterprise product enhancement project where I developed scalable Angular modules, reusable components and performance improvements.',


			technologies: [

				'Angular',
				'TypeScript',
				'RxJS',
				'REST API',
				'Bootstrap'

			],


			url: 'https://www.eyeontask.com/',


			points: [

				'Developed 20+ reusable Angular components',

				'Enhanced product modules since 2019',

				'Implemented dynamic templates and RxJS solutions',

				'Optimized REST API integration',

				'Mentored junior developers'

			]


		},


		{


			name: 'Ucodia',

			type: 'Client Project',

			featured: false,


			description:
				'Client support and performance optimization project focused on resolving UI issues and improving application stability.',


			technologies: [

				'Angular',
				'HTML',
				'CSS',
				'Bootstrap'

			],


			points: [

				'Resolved production UI issues',

				'Improved application stability',

				'Reduced client bug tickets',

				'Delivered enhancements under deadlines'

			]


		},


		{


			name: 'Freight Linc',

			type: 'Client Project',

			featured: false,


			description:
				'Converted client wireframes into a fully responsive Angular web application.',


			technologies: [

				'Angular',
				'Bootstrap',
				'SCSS',
				'HTML'

			],


			points: [

				'Converted wireframes into responsive screens',

				'Implemented reusable UI components',

				'Improved UI delivery speed',

				'Ensured cross-browser compatibility'

			]


		}


	];

}
