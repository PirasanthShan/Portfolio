import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
      this.selectedLang = lang;
      this.borderState = 'black';
      this
    
      setTimeout(() => {
        this.borderState = 'green';
      }, 100); 
    }

    
    
}
