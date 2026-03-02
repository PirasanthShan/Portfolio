import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { TranslationService } from './translation.service';

export function initLang(translation: TranslationService) {
  return () => translation.init();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    //provideClientHydration(),
    {
      provide: APP_INITIALIZER,
      useFactory: initLang,
      deps: [TranslationService],
      multi: true
    }
  ]
};
