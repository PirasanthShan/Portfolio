import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { Router } from '@angular/router'; 

bootstrapApplication(AppComponent, appConfig).then(appRef => {
  const injector = appRef.injector;
  const router = injector.get(Router); 

  router.events.subscribe((event: any) => {
    if (event.constructor.name === 'NavigationEnd') {
      const url = event.urlAfterRedirects || event.url;
      const hasFragment = url.includes('#');

      if (!hasFragment) {
        window.scrollTo({ top: 0 });
      }
    }
  });
});
