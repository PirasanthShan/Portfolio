import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../interface';



@Component({
  selector: 'app-lieferando',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lieferando.component.html',
  styleUrl: './lieferando.component.scss'
})
export class LieferandoComponent {
  @Input() project!: Project;
}
