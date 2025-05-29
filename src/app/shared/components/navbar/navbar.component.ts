import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../../translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  burgerFrames = [
    './assets/img/BurgerMenu1.webp',
    './assets/img/BurgerMenu2.webp',
    './assets/img/BurgerMenu3.webp',
    './assets/img/BurgerMenu4.webp',
  ];

  startFrame = './assets/img/BurgerMenu.webp';
  currentFrame = this.startFrame;
  public intervalId: any;
  isOpen = false;
  selectedLang: string | null = null;
  borderState: 'black' | 'green' | null = null;
  showBackground = false;

  constructor(public translation: TranslationService) {}

  toggleMenuIcon() {
    if (this.intervalId) clearInterval(this.intervalId);

    const frames = this.burgerFrames;
    const direction = this.isOpen ? -1 : 1;
    let i = this.isOpen ? frames.length - 1 : 0;

    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      setTimeout(() => {
        this.showBackground = true;
      }, 10);
    } else {
      this.showBackground = false;
    }

    this.intervalId = setInterval(() => {
      if (i >= 0 && i < frames.length) {
        this.currentFrame = frames[i];
        i += direction;
      } else {
        clearInterval(this.intervalId);
        this.currentFrame = this.isOpen ? frames[frames.length - 1] : this.startFrame;
      }
    }, 50);
  }

  setLang(lang: string): void {
  if (lang !== 'EN' && lang !== 'DE') return;

  this.translation.setLang(lang); // ✅ wird jetzt nur bei erlaubtem Wert aufgerufen
  this.selectedLang = lang;
  this.borderState = 'black';

  setTimeout(() => {
    this.borderState = 'green';
  }, 100);
}

ngOnInit(): void {
    this.selectedLang = this.translation.currentLanguage;
    this.borderState = 'green'; // Optional, um gleich den grünen Rahmen zu setzen
  }

}
