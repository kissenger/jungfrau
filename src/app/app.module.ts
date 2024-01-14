import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

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
import { FeedComponent } from 'src/app/pages/main/feed/feed.component';
import { PrivacyComponent } from 'src/app/pages/privacy-policy/privacy-policy.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SubscribeComponent } from 'src/app/shared/components/subscribe/subscribe.component';
import { ExternalLinkComponent } from 'src/app/shared/components/external-link/external-link.component';
import { CanYouSnorkelInBritainComponent } from 'src/app/pages/content/can-you-snorkel-in-britain/can-you-snorkel-in-britain.component';

import { HttpService } from 'src/app/shared/services/http.service';
import { ScreenService } from 'src/app/shared/services/screen.service';
import { ImageService } from 'src/app/shared/services/image.service';
import { DataService } from 'src/app/shared/services/data.service';
import { ScrollService } from './shared/services/scroll.service';
import { NavService } from './shared/services/nav.service';

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
    SubscribeComponent,
    ExternalLinkComponent,
    CanYouSnorkelInBritainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    HttpService,
    provideHttpClient(withFetch()),
    ScreenService,
    NavService,
    ImageService,
    DataService,
    AuthService,
    ScrollService,
    SubscribeComponent,
    provideClientHydration(
      withHttpTransferCacheOptions({
        includePostRequests: true,
      }),
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
//   constructor(
//     private injector: Injector
//     ) {}
//   ngDoBootstrap() {
//     const el = createCustomElement(ExternalLinkComponent, {injector: this.injector});
//     customElements.define('external-link', el);
//   }
// }
