import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyComponent } from './main/99-privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'privacy-policy', component: PrivacyComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
