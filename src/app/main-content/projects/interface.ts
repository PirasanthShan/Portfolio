import { Type } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  technologies: string;
  description: string;
  imgSrc: string;
  githubUrl: string;
  liveTestUrl: string;
  component: Type<any>;
}
