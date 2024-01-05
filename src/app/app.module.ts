import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { MainComponent } from 'src/app/pages/main/main.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { CarouselComponent } from 'src/app/pages/main/carousel/carousel.component';
import { AboutUsComponent } from 'src/app/pages/main/about/about.component';
import { BookComponent } from 'src/app/pages/main/book/book.component';
import { PartnersComponent } from 'src/app/pages/main/partners/partners.component';
import { FaqComponent } from 'src/app/pages/main/faq/faq.component';
import { NavService } from 'src/app/shared/services/nav.service';
import { FeedComponent } from 'src/app/pages/main/feed/feed.component';
import { HttpService } from 'src/app/shared/services/http.service';
import { ScreenService } from 'src/app/shared/services/screen.service';
import { ImageService } from 'src/app/shared/services/image.service';
import { DataService } from 'src/app/shared/services/data.service';
import { PrivacyComponent } from 'src/app/pages/privacy-policy/privacy-policy.component';
import { NgOptimizedImage } from '@angular/common';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ArticlesComponent } from 'src/app/pages/articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    AboutUsComponent,
    BookComponent,
    PartnersComponent,
    FaqComponent,
    FeedComponent,
    PrivacyComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [
    NavService,
    HttpService,
    provideHttpClient(withFetch()),
    ScreenService,
    ImageService,
    DataService,
    AuthService,
    provideClientHydration(
      withHttpTransferCacheOptions({
        includePostRequests: true,
      }),
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
