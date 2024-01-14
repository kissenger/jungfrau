import { SubscribeComponent } from 'src/app/shared/components/subscribe/subscribe.component';
import { Component, Injector, OnInit, PLATFORM_ID, ViewChild, ViewContainerRef } from '@angular/core';
import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ExternalLinkComponent } from './shared/components/external-link/external-link.component';
import { isPlatformBrowser } from '@angular/common';



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
    private injector: Injector
  ) {
    if (isPlatformBrowser(PLATFORM_ID)) {
      const el = createCustomElement(ExternalLinkComponent, {injector});
      // Register the custom element with the browser.
      customElements.define('external-link', el);
    }
  }

  ngOnInit(): void {
    this.container.createComponent(SubscribeComponent);
    // this.subscribe.show();
  }
}

