import { MainComponent } from 'src/app/pages/main/main.component';
import { PrivacyComponent } from 'src/app/pages/privacy-policy/privacy-policy.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeginnersGuideComponent } from './pages/content/beginners-guide/beginners-guide.component';

const routes: Routes = [
  { path: '', component: MainComponent, data: {enableMenu: 'true'}},
  { path: 'privacy-policy', component: PrivacyComponent, data: {enableMenu: 'true'} },
  // { path: 'snorkelling', redirectTo: 'snorkelling/can-you-snorkel-in-britain', pathMatch: 'full', data: {shouldReuse: false}},
  { path: 'snorkelling-in-britain/beginners-guide', component: BeginnersGuideComponent, data: {enableMenu: 'false'}},
  // { path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      // anchorScrolling: 'enabled',
      // useHash: false,
      // enableTracing: true,
      onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
