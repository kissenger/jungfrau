import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from 'src/app/main/10-news/article/article.component';

const routes: Routes = [
  { path: '', component: MainComponent, data: {callingPage: 'main'}},
  { path: 'news/:id', component: ArticleComponent, data: {callingPage: 'news'}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
