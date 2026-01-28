import { Component } from '@angular/core';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	imports: [Header, Footer, RouterOutlet],
	templateUrl: './app.html',
	styleUrl: './app.scss'
})
export class App {
	protected name = 'Dheeraj Gawali';
	constructor() { }
}
