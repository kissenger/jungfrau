import { MainComponent } from 'src/app/pages/main/main.component';
import { PrivacyComponent } from 'src/app/pages/privacy-policy/privacy-policy.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeginnersGuideComponent } from './pages/content/beginners-guide/beginners-guide.component';
import { ContentComponent } from './pages/content/content.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { SciencePartOneComponent } from './pages/content/science-part-one/science-part-one.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'snorkelling-in-britain', component: ContentComponent},
  { path: 'snorkelling-in-britain/beginners-guide', component: BeginnersGuideComponent},
  { path: 'snorkelling-in-britain/the-science-of-snorkelling-part-1', component: SciencePartOneComponent},
  { path: 'privacy-policy', component: PrivacyComponent},
  { path: 'subscribe', component: SubscribeComponent},
  // { path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      // onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
