import { Component } from '@angular/core';
import { TranslationService } from './../translation.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  constructor(public translation: TranslationService) {}



}
