import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParallaxDirective } from './shared/directives/parallax.directive';
import { BlogComponent } from './blog/blog.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './main/carousel/carousel.component';
import { FeaturesComponent } from './main/features/features.component';
import { PartnersComponent } from './main/partners/partners.component';
import { FaqComponent } from './main/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxDirective,
    BlogComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    FeaturesComponent,
    PartnersComponent,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
