import { Location } from '@angular/common';
import { EventEmitter, Injectable } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { Subscribable, Subscription } from 'rxjs';


@Injectable()

export class NavService {

  public end = new EventEmitter<string>();

  constructor(
    private router: Router,
    private location: Location
  ) {
    this.router.events.subscribe( (event: Event) => {
      if (event instanceof NavigationEnd) {
        this.end.emit(window.location.pathname);
      }
    });
  }

  scrollTo(element: string) {
    document.getElementById(element)!.scrollIntoView({
      behavior: 'smooth'
    });

  }

  /* Navigate to external website if http is included in link, otherwise route internally */
  to(link: string) {

    if (link.includes('http')) {
      // console.log(window)
      window.location.href = link;

    } else {

      // if routing internally, wait for nav to complete and then scroll to top of screen
      this.router.navigate([link]).then( () => {
        // console.log(this.router.lastSuccessfulNavigation);
        document.getElementById('container')?.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      })
    }
  }

  back() {
    this.location.back();
  }

}
