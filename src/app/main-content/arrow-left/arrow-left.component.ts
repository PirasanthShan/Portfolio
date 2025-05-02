import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-arrow-left',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrow-left.component.html',
  styleUrl: './arrow-left.component.scss'
})
export class ArrowLeftComponent {
  isAnimating = false;
  isFinished = false;

  startAnimation() {
    if (this.isFinished) return;
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
      this.isFinished = true;
    }, 100); // Dauer der flyArrow-Animation in ms
  }
}
