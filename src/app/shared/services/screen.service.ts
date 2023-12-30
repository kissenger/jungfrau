import { HostListener, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ScreenService {

  private widthThreshold = 768;

  get deviceOrientation() {
    if (window.innerWidth > window.innerHeight) {
      return 'landscape';
    } else {
      return 'portrait';
    }
  }

  get widthDescriptor() {
    // console.log(window.innerWidth)
    if (window.innerWidth < this.widthThreshold) {
      return 'small';
    } else {
      return 'large';
    }
  }

  get width() {
    return window.innerWidth;
  }

  get height() {
    return window.innerHeight;
  }
}

