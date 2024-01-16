import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class NavService {


  constructor(
    private router: Router,
    private location: Location
  ) {}

  /* Navigate to external website if http is included in link, otherwise route internally */
  to(link: string) {
    // this.router.routeReuseStrategy
    if (link.includes('http')) {
      console.log(link)
      window.location.href = link;
    } else {
      this.router.routeReuseStrategy.shouldReuseRoute = function() { return false; };
      this.router.navigate([link]);
    }
  }

  back() {
    this.location.back();
  }

}
