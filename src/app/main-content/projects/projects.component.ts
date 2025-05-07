import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { JoinComponent } from './join/join.component';
import { WastelandEcheosComponent } from './wasteland-echeos/wasteland-echeos.component';
import { LieferandoComponent } from './lieferando/lieferando.component';
import { PokedexComponent } from './pokedex/pokedex.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, 
           HeaderComponent, 
           JoinComponent, 
           WastelandEcheosComponent, 
           LieferandoComponent,
           PokedexComponent],
  template:`
  <div class="projectMainCtn">
    <app-header></app-header>
    <app-join></app-join>
    <app-wasteland-echeos></app-wasteland-echeos>
    <app-lieferando></app-lieferando>
    <app-pokedex></app-pokedex>
  
  
  </div>`,
  styleUrls:['./projects.component.scss']
})
export class ProjectsComponent {

}
