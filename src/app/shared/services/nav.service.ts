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

  to(destination: string) {

    // If destination is an element on the current page, the scroll to it
    if (document.getElementById(destination)) {
      document.getElementById(destination)?.scrollIntoView({
        behavior: 'smooth'
      });
    }

    // If destination is an external link, navigate to it 
    else if (destination.includes('http')) {
      window.location.href = destination;
    } 

    // Else route internally and scroll to top of screen when complete
    else {
      this.router.navigate([destination]).then( () => {
        document.getElementById('container')?.scrollTo({
          top: 0,
          left: 0,
        });
      })
    }
  
  }

  back() {
    this.location.back();
  }

}
