
import { EventEmitter, Inject, Injectable, Output, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

/*
  Watches the intersections of divs with screen in order to enable menu scrollspy, and parallax window image fix
*/

export class ScrollspyService {

  public anchorChange = new EventEmitter<{id: string, active: boolean}>();
  public windowChange = new EventEmitter<{id: string, active: boolean}>();
  private observer: any;


  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    if(isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver( (io: Array<IntersectionObserverEntry>) => {
        this.intersectHandler(io)
      }, {
        root: null, threshold: [0, 0.2]
      });
    }
  }

  observeElements(obsElems: Array<{className: string, intersectRatio: number}>) {
    obsElems.forEach( (elem: {className: string, intersectRatio: number}) => {
      document.querySelectorAll(`.${elem.className}`).forEach( (elem: Element) => {
        this.observer?.observe(elem);
      })
    });
  }

  // TODO: this should be defined using the data provided in obsElem, all ths info is available
  intersectHandler(element: Array<IntersectionObserverEntry>) {
    element.forEach( (elem) => {
      if ( elem.target.className === 'anchor') {
        this.anchorChange.emit({'id': elem.target.id, active: elem.intersectionRatio > 0.2});
      } else if ( elem.target.className === 'parallax-window') {
        this.windowChange.emit({'id': elem.target.id, active: elem.intersectionRatio > 0});
      }
    })
  }

}
