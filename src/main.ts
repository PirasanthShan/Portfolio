import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

bootstrapApplication(AppComponent, appConfig).then(appRef => {
  const router = appRef.injector.get(Router);

  router.events
    .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
    .subscribe(event => {
      const url = event.urlAfterRedirects || event.url;
      const hasFragment = url.includes('#');

      if (!hasFragment) {
        window.scrollTo(0, 0);
      }
    });
});