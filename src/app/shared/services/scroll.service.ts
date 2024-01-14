
import { Injectable } from '@angular/core';


@Injectable()

export class ScrollService {

  constructor() {}

  to(element: string) {
    document.getElementById(element)!.scrollIntoView({
      behavior: 'smooth'
    });

  }

}
