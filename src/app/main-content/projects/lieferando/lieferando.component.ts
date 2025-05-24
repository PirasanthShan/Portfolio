import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../interface';
import { TranslationService } from '../../../translation.service';


@Component({
  selector: 'app-lieferando',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lieferando.component.html',
  styleUrl: './lieferando.component.scss'
})
export class LieferandoComponent {
  @Input() project!: Project;
  constructor(public translation: TranslationService) {}

}
