import { Type } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  technologies: string;
  description: {
    EN: string;
    DE: string;
  };
  imgSrc: string;
  githubUrl: string;
  liveTestUrl: string;
  component: Type<any>;
}
