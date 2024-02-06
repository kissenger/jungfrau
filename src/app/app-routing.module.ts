import { MainComponent } from 'src/app/pages/main/main.component';
import { PrivacyComponent } from 'src/app/pages/privacy-policy/privacy-policy.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeginnersGuideComponent } from './pages/content/beginners-guide/beginners-guide.component';
import { ContentComponent } from './pages/content/content.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';

const routes: Routes = [
  { path: '', component: MainComponent, data: {enableMenu: 'true'}},
  { path: 'snorkelling-in-britain', component: ContentComponent, data: {enableMenu: 'false'}},
  { path: 'snorkelling-in-britain/beginners-guide', component: BeginnersGuideComponent, data: {enableMenu: 'false'}},
  { path: 'privacy-policy', component: PrivacyComponent, data: {enableMenu: 'true'} },
  { path: 'subscribe', component: SubscribeComponent, data: {enableMenu: 'true'} },
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
