import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../translation.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {
  constructor(public translation: TranslationService) {}
    ngOnInit(): void {
    window.scrollTo({ top: 0 });
  }
}
