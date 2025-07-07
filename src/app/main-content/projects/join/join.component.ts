import { CommonModule } from '@angular/common';
import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  HostListener,
  AfterViewInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Project } from '../interface';
import { TranslationService } from '../../../translation.service';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent implements AfterViewInit {
  @Input() project!: Project;
  @ViewChild('textCtn') textCtnRef!: ElementRef;
  @ViewChild('imgWrapper') imgWrapperRef!: ElementRef;

  private textShownOnce = false;
  private isBrowser: boolean;
  isMobile = false;


  constructor(
    public translation: TranslationService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
  if (this.isBrowser) {
    this.isMobile = window.innerWidth <= 430;

    if (window.innerWidth <= 1265) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.textShownOnce) {
            this.textCtnRef.nativeElement.classList.add('force-show');
            this.imgWrapperRef.nativeElement.classList.add('force-color');
            this.textShownOnce = true;
            observer.disconnect();
          }
        });
      }, {
        threshold: 0.9,
      });

      observer.observe(this.textCtnRef.nativeElement);
    }
  }
}

@HostListener('window:resize')
  onResize() {
  if (this.isBrowser) {
    this.isMobile = window.innerWidth <= 430;
    this.updateForceShow();
   }
 }


  private updateForceShow() {
    if (this.isBrowser && window.innerWidth > 1265) {
      this.textCtnRef.nativeElement.classList.remove('force-show');
      this.imgWrapperRef.nativeElement.classList.remove('force-color');
      this.textShownOnce = false;
    }
  }
}
