import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../interface';



@Component({
  selector: 'app-wasteland-echeos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wasteland-echeos.component.html',
  styleUrl: './wasteland-echeos.component.scss'
})
export class WastelandEcheosComponent {
  @Input() project!: Project;
}
