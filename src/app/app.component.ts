import { SubscribeComponent } from 'src/app/shared/components/subscribe/subscribe.component';
import { Component, Injector, OnInit, PLATFORM_ID, ViewChild, ViewContainerRef } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ExtLinkComponent } from './shared/components/ext-link/ext-link.component';
import { isPlatformBrowser } from '@angular/common';
// import { ScrollspyService } from './shared/services/scrollspy.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  title = 'Snorkelology';

  @ViewChild('container', { read: ViewContainerRef, static: true  }) container!: ViewContainerRef;

  constructor(
    public subscribe: SubscribeComponent,
    private injector: Injector,
    private route: ActivatedRoute
    // private scrollSpy: ScrollspyService
  ) {
    if (isPlatformBrowser(PLATFORM_ID)) {
      const el = createCustomElement(ExtLinkComponent, {injector});
      // Register the custom element with the browser.
      customElements.define('ext-link', el);
    }
  }

  ngOnInit(): void {

    this.container.createComponent(SubscribeComponent);
    // this.subscribe.show();
  }
}

