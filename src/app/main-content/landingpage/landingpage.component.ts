import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
 @HostBinding('attr.id') id = 'landingpage';
  
 constructor(public translation: TranslationService) {}

 }
