import { MainComponent } from 'src/app/pages/main/main.component';
import { PrivacyComponent } from 'src/app/pages/privacy-policy/privacy-policy.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './pages/articles/articles.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'privacy-policy', component: PrivacyComponent },
  { path: 'content/:id', component: ArticlesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
