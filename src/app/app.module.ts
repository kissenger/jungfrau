import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { MainComponent } from 'src/app/main/main.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { CarouselComponent } from 'src/app/main/00-carousel/carousel.component';
import { AboutUsComponent } from 'src/app/main/20-about/about.component';
import { BookComponent } from 'src/app/main/30-book/book.component';
import { PartnersComponent } from 'src/app/main/50-partners/partners.component';
import { FaqComponent } from 'src/app/main/40-faq/faq.component';
import { NavService } from './shared/services/nav.service';
import { FeedComponent } from 'src/app/main/15-feed/feed.component';
import { HttpService } from './shared/services/http.service';
import { TruncPipe } from './shared/pipes/trunc.pipe';
import { ScreenSizeService } from './shared/services/screen-size.service';
import { DataService } from './shared/services/data.service';
import { PrivacyComponent } from './main/99-privacy-policy/privacy-policy.component';

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
    TruncPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    NavService,
    HttpService,
    TruncPipe,
    ScreenSizeService,
    DataService,
    // provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
