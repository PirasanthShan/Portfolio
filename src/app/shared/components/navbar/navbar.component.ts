import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '../../translate.pipe';
import { Router, RouterModule } from '@angular/router';
import { TranslationService } from '../../../translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslatePipe, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent implements OnInit {
  burgerFrames = [
    './assets/img/BurgerMenu1.webp',
    './assets/img/BurgerMenu2.webp',
    './assets/img/BurgerMenu3.webp',
    './assets/img/BurgerMenu4.webp',
  ];

  startFrame = './assets/img/BurgerMenu.webp';
  currentFrame = this.startFrame;
  intervalId: any = null;

  isOpen = false;
  showBackground = false;
  selectedLang: 'EN' | 'DE' | null = null;
  borderState: 'black' | 'green' | null = null;

  constructor(public translation: TranslationService, private router: Router) {}

  ngOnInit(): void {
  this.translation.language$.subscribe(lang => {
    this.selectedLang = lang;
    this.borderState = 'green';
   });
  }

   goToSection(fragment: string) {
  if (this.router.url !== '/') {
    this.router.navigateByUrl('/').then(() => {
      this.scrollTo(fragment);
    });
   } else {
    this.scrollTo(fragment); // ← Hier fehlt es bei dir
   }

    this.closeMenu(); // Menü immer schließen
  }

 private scrollTo(fragment: string) {
  setTimeout(() => {
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, 50);
 }



  toggleMenuIcon(): void {
    if (this.intervalId) clearInterval(this.intervalId);

    const direction = this.isOpen ? -1 : 1;
    let i = this.isOpen ? this.burgerFrames.length - 1 : 0;

    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      setTimeout(() => this.showBackground = true, 10);
    } else {
      this.showBackground = false;
    }

    this.intervalId = setInterval(() => {
      if (i >= 0 && i < this.burgerFrames.length) {
        this.currentFrame = this.burgerFrames[i];
        i += direction;
      } else {
        clearInterval(this.intervalId);
        this.currentFrame = this.isOpen
          ? this.burgerFrames[this.burgerFrames.length - 1]
          : this.startFrame;
      }
    }, 50);
  }

  setLang(lang: 'EN' | 'DE'): void {
    if (lang !== 'EN' && lang !== 'DE') return;

    this.translation.setLang(lang); // Speichert in localStorage
    this.selectedLang = lang;

    this.borderState = 'black';
    setTimeout(() => this.borderState = 'green', 100);
  }

  closeMenu(): void {
    this.isOpen = false;
    this.currentFrame = this.startFrame;
    this.showBackground = false;

    if (this.intervalId) clearInterval(this.intervalId);
  }
}
