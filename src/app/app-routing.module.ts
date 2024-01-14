import { MainComponent } from 'src/app/pages/main/main.component';
import { PrivacyComponent } from 'src/app/pages/privacy-policy/privacy-policy.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanYouSnorkelInBritainComponent } from './pages/content/can-you-snorkel-in-britain/can-you-snorkel-in-britain.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'privacy-policy', component: PrivacyComponent },
  { path: 'snorkelling', redirectTo: 'snorkelling/can-you-snorkel-in-britain', pathMatch: 'full'},
  { path: 'snorkelling/can-you-snorkel-in-britain', component: CanYouSnorkelInBritainComponent},
  // { path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      useHash: false,
      // enableTracing: true,
      onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
