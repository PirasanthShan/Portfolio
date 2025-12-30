import { CommonModule } from '@angular/common';
import { Component,HostBinding} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { JoinComponent } from './join/join.component';
import { WastelandEcheosComponent } from './wasteland-echeos/wasteland-echeos.component';
import { LieferandoComponent } from './lieferando/lieferando.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { Project } from './interface';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
@HostBinding('attr.id') id = 'portfolio'; 
  
constructor(public translation: TranslationService) {}
projects: Project[] = [
  {
    id: '01/04',
    component: JoinComponent,
    title: 'Join',
    technologies: 'Angular | TypeScript | HTML | CSS | Firebase',
    description: {
      EN: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      DE: 'Taskmanager inspiriert vom Kanban-System. Aufgaben erstellen, organisieren, per Drag-and-Drop verschieben und Nutzern zuweisen.'
    },
    imgSrc: './assets/img/join-700.webp',
    githubUrl: '#',
    liveTestUrl: '#'
  },
  {
    id: '02/04',
    component: WastelandEcheosComponent,
    title: 'Wasteland Echoes',
    technologies: 'JavaScript | HTML | CSS',
    description: {
      EN: 'Wasteland Echoes is a self-developed 2D jump’n’run game set in a post-apocalyptic world. The player collects crystals, defuses bombs, fights zombies, and ultimately reaches a spaceship to escape the devastated world.',
      DE: 'Wasteland Echoes ist ein selbst entwickeltes 2D-Jump’n’Run-Spiel, das in einer postapokalyptischen Welt spielt. Der Spieler sammelt Kristalle, entschärft Bomben, bekämpft Zombies und erreicht schließlich ein Raumschiff, um der zerstörten Welt zu entkommen.'
    },
    imgSrc: './assets/img/wastelandecheos-700.webp',
    githubUrl: '#',
    liveTestUrl: '#'
  },
  {
    id: '03/04',
    component: LieferandoComponent,
    title: 'Lieferando Clon',
    technologies: 'JavaScript | HTML | CSS',
    description: {
      EN: 'A simple food delivery app inspired by Lieferando. Users can browse restaurants, add items to a cart, and place orders.',
      DE: 'Eine einfache Food-Delivery-App, inspiriert von Lieferando. Nutzer können Restaurants durchsuchen, Gerichte in den Warenkorb legen und Bestellungen aufgeben.'
    },
    imgSrc: './assets/img/lieferando-700.webp',
    githubUrl: '#',
    liveTestUrl: '#'
  },
  {
    id: '04/04',
    component: PokedexComponent,
    title: 'Pokédex',
    technologies: 'JavaScript | HTML | CSS | API',
    description: {
      EN: 'Based on the PokéAPI, a simple library that provides and catalogues Pokémon information.',
      DE: 'Basierend auf der PokéAPI – ein einfaches Tool zur Anzeige und Katalogisierung von Pokémon-Informationen.'
    },
    imgSrc: './assets/img/pokedex-700.webp',
    githubUrl: '#',
    liveTestUrl: '#'
  }
];

}
