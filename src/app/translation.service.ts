import { Injectable } from '@angular/core';

export type TranslationKey =
  | 'landingTitle'
  | 'scrollDown'
  | 'aboutMe'
  | 'aboutText'
  | 'basedIn'
  | 'remote'
  | 'letsTalk'
  | 'sayHi'
  | 'projectQuestion'
  | 'projectInvite'
  | 'yourName'
  | 'nameRequired'
  | 'yourEmail'
  | 'emailRequired'
  | 'yourMessage'
  | 'messageRequired'
  | 'acceptPrivacy'
  | 'privacyRequired'
  | 'sendMessage'
  | 'mySkills'
  | 'contactForMore'
  | 'portfolio'
  | 'portfolioText'
  | 'references'
  | 'referencesText'
  | 'privacyTitle'
  | 'legalTitle'
  | 'legalInfo'
  | 'legalContact'
  | 'legalContentResponsibility'
  | 'legalLiabilityTitle'
  | 'legalLiabilityContent1'
  | 'legalLiabilityContent2'
  | 'legalLinksTitle'
  | 'legalLinksContent1'
  | 'legalLinksContent2'
  | 'legalCopyrightTitle'
  | 'legalCopyrightContent1'
  | 'legalCopyrightContent2'
  | 'legalOnRequest'
  | 'legalGermany'
  // Privacy Policy Keys
  | 'privacyResponsible'
  | 'privacyWebsite'
  | 'privacyGeneralTitle'
  | 'privacyGeneralText'
  | 'privacyCollectionTitle'
  | 'privacyCollectionText'
  | 'privacyUsageTitle'
  | 'privacyUsageText'
  | 'privacyStorageTitle'
  | 'privacyStorageText'
  | 'privacyRightsTitle'
  | 'privacyRights1'
  | 'privacyRights2'
  | 'privacyRights3'
  | 'privacyRights4'
  | 'privacyContactTitle'
  | 'privacyContactText';

type TranslationMap = Record<TranslationKey, string>;

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang: 'EN' | 'DE' = 'EN';

  private translations: Record<'EN' | 'DE', TranslationMap> = {
    EN: {
      landingTitle: 'Frontend Developer',
      scrollDown: 'Scroll Down',
      aboutMe: 'About Me',
      aboutText: `I've been hooked on computers and technology since I was a kid — always curious about what's really going on behind the screen. These days, I work a lot with PCs in my office job, but honestly, that's not enough for me: I want to dive deeper, learn coding, build stuff, and stay on top of new technologies. I don't see problems as stress; I treat them like game levels: analyze, break them down, and tackle them step by step. When things get tricky, I stick with it. Creativity, persistence, and teamwork are just part of how I roll — sure, solo wins are nice, but team wins are better. Fun fact: I'm also a passionate gamer. Some people call it "wasting time," I call it "brain training with bonus entertainment."`,
      basedIn: 'Based in Münster',
      remote: 'Open to work Remote',
      letsTalk: "Let's talk",
      sayHi: 'Say Hi!',
      projectQuestion: 'Want to discuss a new project?',
      projectInvite: "Say hello! Let's discuss your ideas and make it happen",
      yourName: 'Your name',
      nameRequired: 'Your name is required',
      yourEmail: 'Your email',
      emailRequired: 'Your email is required',
      yourMessage: 'Your message',
      messageRequired: 'Your message is empty',
      acceptPrivacy: 'I\'ve read the privacy policy and agree to the processing of my data as outlined.',
      privacyRequired: 'Please accept the privacy policy',
      sendMessage: 'Send message',
      mySkills: 'My Skills',
      contactForMore: "Don't see the skill you need? Contact me — I'm always ready to learn!",
      portfolio: 'Portfolio',
      portfolioText: 'Explore a selection of my work here - Interact with projects to see my skills in action.',
      references: 'References',
      referencesText: 'I thrive both independently and as part of a team. Here\'s what my colleagues have to say about working with me.',
      privacyTitle: 'Privacy Policy',
      legalTitle: 'Legal Notice',
      legalInfo: 'Information according to § 5 TMG',
      legalContact: 'Contact',
      legalContentResponsibility: 'Responsible for content according to § 55 para. 2 RStV',
      legalLiabilityTitle: 'Liability for Contents',
      legalLiabilityContent1: `As a service provider, I am responsible for my own content on these pages according to § 7 para. 1 of the German Telemedia Act (TMG). According to §§ 8 to 10 TMG, however, I am not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.`,
      legalLiabilityContent2: `Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a concrete infringement. Upon notification of such violations, I will remove the content immediately.`,
      legalLinksTitle: 'Liability for Links',
      legalLinksContent1: `My offer may contain links to external websites of third parties over whose content I have no influence. Therefore, I cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking.`,
      legalLinksContent2: `However, permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of a violation of the law. Upon notification of violations, I will remove such links immediately.`,
      legalCopyrightTitle: 'Copyright',
      legalCopyrightContent1: `The contents and works created by the site operator on these pages are subject to German copyright law. The duplication, processing, distribution and any kind of utilization outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.`,
      legalCopyrightContent2: `Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform me accordingly. Upon notification of violations, I will remove such content immediately.`,
      legalOnRequest: 'available on request',
      legalGermany: 'Germany',
      // Privacy Policy Translations
      privacyResponsible: 'Responsible for this website:',
      privacyWebsite: 'Website:',
      privacyGeneralTitle: 'General Information',
      privacyGeneralText: 'The protection of your personal data is important to us. Your data will be treated confidentially and in accordance with the legal data protection regulations and this privacy policy.',
      privacyCollectionTitle: 'Collection and Processing of Personal Data',
      privacyCollectionText: 'When visiting this website, no personal data is automatically stored. Personal data such as name or email address is only collected if you voluntarily provide it through the contact form.',
      privacyUsageTitle: 'Use of Your Data',
      privacyUsageText: 'The data you provide (e.g. via the contact form) will be used exclusively to respond to your inquiry. There is no disclosure to third parties.',
      privacyStorageTitle: 'Storage Duration',
      privacyStorageText: 'Your data will only be stored for as long as necessary to process your request. Afterwards, they will be deleted unless there are legal retention obligations.',
      privacyRightsTitle: 'Your Rights',
      privacyRights1: 'Information about your stored data',
      privacyRights2: 'Correction of incorrect data',
      privacyRights3: 'Deletion of your data, unless there is a legal retention obligation',
      privacyRights4: 'Revocation of consent to processing',
      privacyContactTitle: 'Contact',
      privacyContactText: 'If you have questions about data protection, please contact us at the above address or by email.'
    },
    DE: {
      landingTitle: 'Frontend Entwickler',
      scrollDown: 'Runter scrollen',
      aboutMe: 'Über mich',
      aboutText: 'Seit meiner Kindheit bin ich von Computern und Technik fasziniert – ich wollte schon immer wissen, was hinter dem Bildschirm passiert. Heute arbeite ich viel mit PCs in meinem Bürojob, aber das reicht mir nicht: Ich will tiefer eintauchen, programmieren lernen, Dinge bauen und mit neuen Technologien Schritt halten. Probleme sehe ich nicht als Stress, sondern als Spiellevel: analysieren, aufteilen und Schritt für Schritt lösen. Wenn es knifflig wird, bleibe ich dran. Kreativität, Durchhaltevermögen und Teamarbeit gehören für mich dazu – klar sind Solo-Erfolge schön, aber Team-Erfolge sind besser. Fun Fact: Ich bin leidenschaftlicher Gamer. Manche nennen es „Zeitverschwendung", ich nenne es „Gehirntraining mit Unterhaltungsbonus".',
      basedIn: 'Ansässig in Münster',
      remote: 'Bereit für Remote-Arbeit',
      letsTalk: 'Lass uns reden',
      sayHi: 'Sag Hi!',
      projectQuestion: 'Willst du ein neues Projekt besprechen?',
      projectInvite: 'Sag einfach Hallo! Lass uns deine Ideen besprechen und sie umsetzen',
      yourName: 'Dein Name',
      nameRequired: 'Dein Name ist erforderlich',
      yourEmail: 'Deine E-Mail',
      emailRequired: 'Deine E-Mail ist erforderlich',
      yourMessage: 'Deine Nachricht',
      messageRequired: 'Deine Nachricht ist leer',
      acceptPrivacy: 'Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu.',
      privacyRequired: 'Bitte stimme der Datenschutzerklärung zu',
      sendMessage: 'Nachricht senden',
      mySkills: 'Fähigkeit',
      contactForMore: 'Nicht die passende Fähigkeit dabei? Schreib mir – ich lerne gerne dazu!',
      portfolio: 'Portfolio',
      portfolioText: 'Hier findest du eine Auswahl meiner Arbeiten – interagiere mit den Projekten, um meine Fähigkeiten zu erleben.',
      references: 'Referenzen',
      referencesText: 'Ich arbeite sowohl eigenständig als auch im Team gerne. Das sagen Kolleginnen und Kollegen über die Zusammenarbeit mit mir.',
      privacyTitle: 'Datenschutzerklärung',
      legalTitle: 'Impressum',
      legalInfo: 'Angaben gemäß § 5 TMG',
      legalContact: 'Kontakt',
      legalContentResponsibility: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
      legalLiabilityTitle: 'Haftung für Inhalte',
      legalLiabilityContent1: 'Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
      legalLiabilityContent2: 'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.',
      legalLinksTitle: 'Haftung für Links',
      legalLinksContent1: 'Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.',
      legalLinksContent2: 'Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.',
      legalCopyrightTitle: 'Urheberrecht',
      legalCopyrightContent1: 'Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.',
      legalCopyrightContent2: 'Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
      legalOnRequest: 'wird auf Anfrage bereitgestellt',
      legalGermany: 'Deutschland',
      // Datenschutzerklärung Übersetzungen
      privacyResponsible: 'Verantwortlich für diese Website:',
      privacyWebsite: 'Website:',
      privacyGeneralTitle: 'Allgemeine Hinweise',
      privacyGeneralText: 'Der Schutz Ihrer persönlichen Daten ist uns wichtig. Ihre Daten werden vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung behandelt.',
      privacyCollectionTitle: 'Erhebung und Verarbeitung personenbezogener Daten',
      privacyCollectionText: 'Beim Besuch dieser Website werden keine personenbezogenen Daten automatisch gespeichert. Personenbezogene Daten wie Name oder E-Mail-Adresse werden nur dann erfasst, wenn Sie diese freiwillig über das Kontaktformular übermitteln.',
      privacyUsageTitle: 'Verwendung Ihrer Daten',
      privacyUsageText: 'Die von Ihnen bereitgestellten Daten (z. B. durch das Kontaktformular) werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet. Es erfolgt keine Weitergabe an Dritte.',
      privacyStorageTitle: 'Speicherdauer',
      privacyStorageText: 'Ihre Daten werden nur so lange gespeichert, wie es zur Bearbeitung Ihrer Anfrage notwendig ist. Anschließend werden sie gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.',
      privacyRightsTitle: 'Ihre Rechte',
      privacyRights1: 'Auskunft über Ihre gespeicherten Daten',
      privacyRights2: 'Berichtigung unrichtiger Daten',
      privacyRights3: 'Löschung Ihrer Daten, sofern keine gesetzliche Aufbewahrungspflicht besteht',
      privacyRights4: 'Widerruf der Einwilligung zur Verarbeitung',
      privacyContactTitle: 'Kontakt',
      privacyContactText: 'Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte unter der oben genannten Adresse oder per E-Mail.'
    }
  };

  setLang(lang: 'EN' | 'DE') {
    this.currentLang = lang;
  }

  getTranslation(key: TranslationKey): string {
    return this.translations[this.currentLang][key];
  }

  get currentLanguage(): 'EN' | 'DE' {
    return this.currentLang;
  }
}