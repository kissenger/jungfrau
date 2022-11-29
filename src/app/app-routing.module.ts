import { MainComponent } from './main/main.component';
import { NewsListComponent } from 'src/app/news/news-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from 'src/app/news/article/article.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'news', component: NewsListComponent},
  { path: 'news/:id', component: ArticleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
