import { Component, ElementRef, Renderer2, AfterViewInit, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-arrow-left',
  standalone: true,
  templateUrl: './arrow-left.component.html',
  styleUrl: './arrow-left.component.scss'
})
export class ArrowLeftComponent implements AfterViewInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const container = this.el.nativeElement.querySelector('.arrow-container');
    if (!container) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.animateArrow(container);
        observer.disconnect();
      }
    }, { threshold: 1 });
    observer.observe(container);
  }

  private animateArrow(container: HTMLElement): void {
    this.renderer.addClass(container, 'animating');
    setTimeout(() => {
      this.renderer.removeClass(container, 'animating');
      this.renderer.addClass(container, 'finished');
    }, 300);
  }
}
