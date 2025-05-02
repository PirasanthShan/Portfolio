import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss'
})

export class MyskillsComponent {
  images = [
    { src: './assets/img/Property 1=Angular.webp',        alt: 'Angular',         label: 'Angular' },
    { src: './assets/img/Property 1=Typescript.webp',     alt: 'TypeScript',      label: 'TypeScript' },
    { src: './assets/img/Property 1=JavScript.webp',      alt: 'JavaScript',      label: 'JavaScript' },
    { src: './assets/img/Property 1=html.webp',           alt: 'HTML',            label: 'HTML' },
    { src: './assets/img/Property 1=css.webp',            alt: 'CSS',             label: 'CSS' },
    { src: './assets/img/Property 1=Firebase.webp',       alt: 'Firebase',        label: 'Firebase' },
    { src: './assets/img/Property 1=Git.webp',            alt: 'Git',             label: 'Git' },
    { src: './assets/img/Property 1=Scrum.webp',          alt: 'Scrum',           label: 'Scrum' },
    { src: './assets/img/Property 1=Api.webp',            alt: 'REST API',        label: 'REST API' },
    { src: './assets/img/Property 1=Test Automation.webp',alt: 'Material Design', label: 'Material Design' },
  ];

}
