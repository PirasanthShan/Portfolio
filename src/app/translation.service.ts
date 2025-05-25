import { Injectable } from '@angular/core';

/** Alle erlaubten Übersetzungs-Keys */
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
  | 'legalTitle';

/** Übersetzungsobjekt pro Sprache */
type TranslationMap = Record<TranslationKey, string>;

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang: 'EN' | 'DE' = 'EN';

  /** Alle Übersetzungen */
  private translations: Record<'EN' | 'DE', TranslationMap> = {
    EN: {
      landingTitle: 'Frontend Developer',
      scrollDown: 'Scroll Down',
      aboutMe: 'About Me',
      aboutText: `I've been hooked on computers and technology since I was a kid — always curious about what’s really going on behind the screen. These days, I work a lot with PCs in my office job, but honestly, that’s not enough for me: I want to dive deeper, learn coding, build stuff, and stay on top of new technologies. I don't see problems as stress; I treat them like game levels: analyze, break them down, and tackle them step by step. When things get tricky, I stick with it. Creativity, persistence, and teamwork are just part of how I roll — sure, solo wins are nice, but team wins are better. Fun fact: I’m also a passionate gamer. Some people call it "wasting time," I call it "brain training with bonus entertainment."`,
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
      referencesText: 'I thrive both independently and as part of a team. Here’s what my colleagues have to say about working with me.',
      privacyTitle: 'Privacy Policy',
      legalTitle: 'Legal Notice'
    },
    DE: {
      landingTitle: 'Frontend Entwickler',
      scrollDown: 'Runter scrollen',
      aboutMe: 'Über mich',
      aboutText: `Seit meiner Kindheit bin ich von Computern und Technik fasziniert – ich wollte schon immer wissen, was hinter dem Bildschirm passiert. Heute arbeite ich viel mit PCs in meinem Bürojob, aber das reicht mir nicht: Ich will tiefer eintauchen, programmieren lernen, Dinge bauen und mit neuen Technologien Schritt halten. Probleme sehe ich nicht als Stress, sondern als Spiellevel: analysieren, aufteilen und Schritt für Schritt lösen. Wenn es knifflig wird, bleibe ich dran. Kreativität, Durchhaltevermögen und Teamarbeit gehören für mich dazu – klar sind Solo-Erfolge schön, aber Team-Erfolge sind besser. Fun Fact: Ich bin leidenschaftlicher Gamer. Manche nennen es „Zeitverschwendung“, ich nenne es „Gehirntraining mit Unterhaltungsbonus“.`,
      basedIn: 'Ansässig in Münster',
      remote: 'Bereit für Remote-Arbeit',
      letsTalk: 'Lass uns reden',
      sayHi: 'Sag Hallo!',
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
      legalTitle: 'Impressum'
    }
  };

  /** Setzt die Sprache */
  setLang(lang: 'EN' | 'DE') {
    this.currentLang = lang;
  }

  /** Gibt den übersetzten Text zurück */
  getTranslation(key: TranslationKey): string {
    return this.translations[this.currentLang][key];
  }

  /** Gibt aktuelle Sprache zurück */
  get currentLanguage(): 'EN' | 'DE' {
    return this.currentLang;
  }
}
