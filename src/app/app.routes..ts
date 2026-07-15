import { Routes } from '@angular/router';

export const routes: Routes = [
	// {
	// 	path: '',
	// 	loadComponent: () =>
	// 		import('./features/home/home').then(c => c.Home)
	// },
	// {
	// 	path: 'about',
	// 	loadComponent: () => 
	// 		import('./features/about/about').then(c => c.About)		
	// },
	// {
	// 	path: 'projects',
	// 	loadComponent: () =>
	// 		import('./features/projects/projects').then(c => c.Projects)
	// },
	// {
	// 	path: 'contact',
	// 	loadComponent: () =>
	// 		import('./features/contact/contact').then(c => c.Contact)
	// },
	{
    	path: '',
		loadComponent: () =>
		import('./pages/portfolio/portfolio').then(c => c.Portfolio)
	},
	{
		path: '**',
		redirectTo: ''
	}
]
