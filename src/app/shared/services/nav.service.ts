import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()

export class NavService {

  constructor(
    private router: Router,
    private location: Location
  ) {}

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
