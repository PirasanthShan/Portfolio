import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss'
})

export class MyskillsComponent {
  constructor(public translation: TranslationService) {}
   
  @HostBinding('attr.id') id = 'myskills'; 
  images = [
  { src: './assets/img/Property 1=Angular.webp',        alt: 'Angular',         label: { EN: 'Angular', DE: 'Angular' } },
  { src: './assets/img/Property 1=Typescript.webp',     alt: 'TypeScript',      label: { EN: 'TypeScript', DE: 'TypeScript' } },
  { src: './assets/img/Property 1=JavScript.webp',      alt: 'JavaScript',      label: { EN: 'JavaScript', DE: 'JavaScript' } },
  { src: './assets/img/Property 1=html.webp',           alt: 'HTML',            label: { EN: 'HTML', DE: 'HTML' } },
  { src: './assets/img/Property 1=css.webp',            alt: 'CSS',             label: { EN: 'CSS', DE: 'CSS' } },
  { src: './assets/img/Property 1=Firebase.webp',       alt: 'Firebase',        label: { EN: 'Firebase', DE: 'Firebase' } },
  { src: './assets/img/Property 1=Git.webp',            alt: 'Git',             label: { EN: 'Git', DE: 'Git' } },
  { src: './assets/img/Property 1=Scrum.webp',          alt: 'Scrum',           label: { EN: 'Scrum', DE: 'Scrum' } },
  { src: './assets/img/Property 1=Api.webp',            alt: 'REST API',        label: { EN: 'REST API', DE: 'REST API' } },
  { src: './assets/img/Property 1=Test Automation.webp',alt: 'Material Design', label: { EN: 'Material Design', DE: 'Material Design' } },
];


  
}

