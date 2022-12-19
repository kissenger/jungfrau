import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { ParallaxDirective } from 'src/app/shared/directives/parallax.directive';
import { NewsListComponent } from 'src/app/news/news-list.component';
import { MainComponent } from 'src/app/main/main.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { CarouselComponent } from 'src/app/main/carousel/carousel.component';
import { FeaturesComponent } from 'src/app/main/features/features.component';
import { PartnersComponent } from 'src/app/main/partners/partners.component';
import { FaqComponent } from 'src/app/main/faq/faq.component';
import { ArticleComponent } from 'src/app/news/article/article.component';
import { AuthService } from './shared/services/auth.service';
import { NewsNewComponent } from './main/news-new/news-new.component';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxDirective,
    NewsListComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    FeaturesComponent,
    PartnersComponent,
    FaqComponent,
    ArticleComponent,
    NewsNewComponent
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
