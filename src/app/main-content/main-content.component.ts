import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from './references/references.component';
import { ArrowRightComponent } from './arrow-right/arrow-right.component';
import { ArrowLeftComponent } from './arrow-left/arrow-left.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule,
            LandingpageComponent,
            AboutmeComponent,
            ArrowRightComponent,
            MyskillsComponent,
            ArrowLeftComponent,
            ProjectsComponent,
            ReferencesComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
