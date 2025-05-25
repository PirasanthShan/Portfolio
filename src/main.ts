import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { Router } from '@angular/router'; // ✅ WICHTIGER IMPORT

bootstrapApplication(AppComponent, appConfig).then(appRef => {
  const injector = appRef.injector;
  const router = injector.get(Router); // der Router-Instanz

  // Scrollt bei jedem Routingwechsel nach oben
  router.events.subscribe((event: any) => {
    if (event.constructor.name === 'NavigationEnd') {
      window.scrollTo({ top: 0 });
    }
  });
});
