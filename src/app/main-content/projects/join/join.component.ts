import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../interface';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {
  @Input() project!: Project;
}
