import { Component, Injector, PLATFORM_ID, ViewChild, ViewContainerRef } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ExtLinkComponent } from './shared/components/ext-link/ext-link.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'Snorkelology';

  // @ViewChild('container', { read: ViewContainerRef, static: true  }) container!: ViewContainerRef;

  constructor(
    private injector: Injector,
  ) {
    if (isPlatformBrowser(PLATFORM_ID)) {
      const el = createCustomElement(ExtLinkComponent, {injector});
      // Register the custom element with the browser.
      customElements.define('ext-link', el);
    }
  }
}

