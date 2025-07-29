import { Component } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  constructor(public translation: TranslationService) {}

  references = [
    {
      name: 'V. Schuster',
      role: 'Team Partner',
      quote: {
        EN: `Pirasanth really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.`,
        DE: `Pirasanth hat unser Team mit seiner Organisation und klaren Kommunikation zusammengehalten. Ohne sein Engagement wären wir nicht so weit gekommen.`
      }
    },
    {
      name: 'E. Eichinger',
      role: 'Team Partner',
      quote: {
        EN: `Pirasanth was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.`,
        DE: `Pirasanth war ein großartiger Teamkollege bei DA. Sein Engagement und seine Bereitschaft, Verantwortung zu übernehmen, haben wesentlich zum Erfolg beigetragen.`
      }
    },
    {
      name: 'I. Nuber',
      role: 'Frontend Engineer',
      quote: {
        EN: `It was a great pleasure to work with Pirasanth. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.`,
        DE: `Die Zusammenarbeit mit Pirasanth war eine große Freude. Er versteht es, Teammitglieder zu motivieren und inspiriert durch kreative Beiträge. Besonders hervorzuheben ist sein Gespür für das Teamwohl – er ist immer präsent, hilfsbereit und hat dabei auch noch Humor.`
      }
    }
  ];
}
