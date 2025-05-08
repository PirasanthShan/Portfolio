import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { JoinComponent } from './join/join.component';
import { WastelandEcheosComponent } from './wasteland-echeos/wasteland-echeos.component';
import { LieferandoComponent } from './lieferando/lieferando.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { Project } from './interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    JoinComponent,
    WastelandEcheosComponent,
    LieferandoComponent,
    PokedexComponent
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: '01/04',
      component: JoinComponent,
      title: 'Join',
      technologies: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      imgSrc: './assets/img/join.webp',
      githubUrl: '#',
      liveTestUrl: '#'
    },
    {
      id: '02/04',
      component: WastelandEcheosComponent,
      title: 'Wasteland Echoes',
      technologies: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      imgSrc: './assets/img/wastelandecheos.webp',
      githubUrl: '#',
      liveTestUrl: '#'
    },
    {
      id: '03/04',
      component: LieferandoComponent,
      title: 'Lieferando',
      technologies: 'JavaScript | HTML | CSS',
      description: 'A simple food delivery app inspired by Lieferando. Users can browse restaurants, add items to a cart, and place orders. Built with a clean UI and basic authentication to simulate a real-world delivery service.',
      imgSrc: './assets/img/lieferando.webp',
      githubUrl: '#',
      liveTestUrl: '#'
    },
    {
      id: '04/04',
      component: PokedexComponent,
      title: 'Pokédex',
      technologies: 'JavaScript | HTML | CSS | API',
      description: 'Based on the PokéAPI, a simple library that provides and catalogues Pokémon information.',
      imgSrc: './assets/img/pokedex.webp',
      githubUrl: '#',
      liveTestUrl: '#'
    }
  ];
}
