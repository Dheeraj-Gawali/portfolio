import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { MatNavList } from '@angular/material/list';

@Component({
	selector: 'app-projects',
	imports: [CommonModule],
	templateUrl: './projects.html',
	styleUrl: './projects.scss'
})
export class Projects {
	projects = [
		{
			name: 'EyeOnTask',
			description: 'Company Product Enhancements',
			points: [
				'Continuously enhanced core product since 2019, building modular features, improving performance, and maintaining code architecture across Angular versions.',
				'Designed and implemented over 20 dynamic and reusable Angular components, modules and services for the company’s flagship product using Angular v6→v18.',
				'Built dynamic templates and leveraged RxJS for state management, increasing application responsiveness and maintainability.',
				'Integrated frontend with RESTful APIs, boosting API interaction efficiency and reducing latency using optimized HTTP services.',
				'Collaborated within an Agile/Scrum team, participating in sprint planning, standups, code reviews, and retrospectives to deliver projects on time.',
				'Mentored junior developers on Angular best practices and components architecture, elevating team skill level and code quality.'
			]
		},
		{
			name: 'Ucodia',
			description: 'Client Support & Performance Optimization',
			points: [
				'Joined the project during mid-production phase to resolve critical UI and performance issues',
				'Troubleshot and fixed production bugs in existing Angular codebase',
				'Delivered fixes within tight deadlines, reducing bug tickets by 40%',
				'Enhanced overall application stability and improved client satisfaction'
			]
		},
		{
			name: 'Freight Linc',
			description: 'Wireframe-to-Website Angular Application',
			points: [
				'Converted client-provided wireframes into a fully responsive Angular web application',
				'Implemented UI using Angular, HTML, CSS, Bootstrap, and Angular CLI',
				'Ensured pixel-perfect design implementation and cross-browser compatibility',
				'Improved UI delivery speed and accuracy by ~100%'
			]
		}
	];

}
