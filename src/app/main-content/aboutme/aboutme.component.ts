import { Component, HostBinding } from '@angular/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.scss'
})
export class AboutmeComponent {
 @HostBinding('attr.id') id = 'aboutme';
 constructor(public translation: TranslationService) {}
 
  
}
