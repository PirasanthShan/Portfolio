import { Component } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { NavbarComponent } from '../../main-content/landingpage/navbar/navbar.component';


@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  constructor(public translation: TranslationService) {}
 
}
