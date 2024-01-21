
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/*
  Watches the intersections of divs with screen in order to enable menu scrollspy, and parallax window image fix
*/

export class ScrollspyService {
  @Output() public anchorChange = new EventEmitter<string>();
  @Output() public pWindowChange = new EventEmitter<string>();

  constructor() {
    window.addEventListener( "load", (event) => {
      let observer = new IntersectionObserver( (io: Array<IntersectionObserverEntry>) => { this.intersectHandler(io) }, { root: null, threshold: [0, 0.2] });
      document.querySelectorAll(".anchor, .parallax-window").forEach( (elem: Element) => { observer.observe(elem); })
    }, false );
  }

  intersectHandler(element: Array<IntersectionObserverEntry>) {
    element
      .filter( (a: IntersectionObserverEntry) => a.isIntersecting)
      .forEach( (i: IntersectionObserverEntry) => {
        if (i.target.className === 'anchor' && i.intersectionRatio > 0.2) {
          this.anchorChange.emit(i.target.id);
        } else if (i.target.className === 'parallax-window') {
          this.pWindowChange.emit(i.target.id);
        }
    })
  }

}
