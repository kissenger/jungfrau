import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { ParallaxDirective } from 'src/app/shared/directives/parallax.directive';
import { MainComponent } from 'src/app/main/main.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { CarouselComponent } from 'src/app/main/00-carousel/carousel.component';
import { AboutUsComponent } from 'src/app/main/20-about/about.component';
import { BookComponent } from 'src/app/main/30-book/book.component';
import { PartnersComponent } from 'src/app/main/50-partners/partners.component';
import { FaqComponent } from 'src/app/main/40-faq/faq.component';
import { ArticleComponent } from 'src/app/main/10-news/article/article.component';
import { AuthService } from './shared/services/auth.service';
import { NewsComponent } from 'src/app/main/10-news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxDirective,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    AboutUsComponent,
    BookComponent,
    PartnersComponent,
    FaqComponent,
    ArticleComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
