import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { LegalNoticeComponent } from './imprint/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './imprint/privacy-policy/privacy-policy.component';


export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'imprint', component: LegalNoticeComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
