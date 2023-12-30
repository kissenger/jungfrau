import { MainComponent } from 'src/app/pages/main/main.component';
import { PrivacyComponent } from 'src/app/pages/privacy-policy/privacy-policy.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'privacy-policy', component: PrivacyComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
