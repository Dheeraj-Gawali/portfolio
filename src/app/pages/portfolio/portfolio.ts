import { Component } from '@angular/core';
import { Home } from '../../features/home/home';
import { About } from '../../features/about/about';
import { Projects } from '../../features/projects/projects';
import { Contact } from '../../features/contact/contact';
import { Skills } from '../../features/skills/skills';
import { Experience } from '../../features/experience/experience';

@Component({
  selector: 'app-portfolio',
  imports: [Home, About, Skills, Experience, Projects, Contact],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {

}
