import { Component } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { NavbarComponent } from '../../main-content/landingpage/navbar/navbar.component';


@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
   constructor(public translation: TranslationService) {}
 
}
