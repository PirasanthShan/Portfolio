import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../interface';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {
  @Input() project!: Project;
}
