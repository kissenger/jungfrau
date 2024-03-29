import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class NavService {


  constructor(
    private router: Router
  ) {}

  /* Navigate to external website if http is included in link, otherwise route internally */
  navigateTo(link: string) {
    if (link.includes('http')) {
      window.location.href = link;
    } else {
      this.router.navigate([link]);
    }
  }

}
