import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Project } from '../interface';
import { TranslationService } from '../../../translation.service';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent implements AfterViewInit {
  @Input() project!: Project;
  @ViewChild('textCtn') textCtnRef!: ElementRef;

  private textShownOnce = false;
  private isBrowser: boolean;

  constructor(
    public translation: TranslationService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.updateForceShow();
    }
  }

  showTextOnce() {
    if (this.isBrowser && window.innerWidth <= 1265 && !this.textShownOnce) {
      this.textCtnRef.nativeElement.classList.add('force-show');
      this.textShownOnce = true;
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (this.isBrowser) {
      this.updateForceShow();
    }
  }

  private updateForceShow() {
    if (this.isBrowser && window.innerWidth > 1265) {
      this.textCtnRef.nativeElement.classList.remove('force-show');
      this.textShownOnce = false;
    }
  }
}
