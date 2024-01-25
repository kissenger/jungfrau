
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



/*
  Watches the intersections of divs with screen in order to enable menu scrollspy, and parallax window image fix
*/

export class ScrollspyService {
  @Output() public anchorChange = new EventEmitter<{id: string, active: boolean}>();
  @Output() public windowChange = new EventEmitter<{id: string, active: boolean}>();

  constructor() {
    window.addEventListener( "load", (event) => {
      let observer = new IntersectionObserver( (io: Array<IntersectionObserverEntry>) => { this.intersectHandler(io) }, { root: null, threshold: [0, 0.2] });
      document.querySelectorAll(".anchor, .parallax-window").forEach( (elem: Element) => { observer.observe(elem); })
    }, false );
  }

  intersectHandler(element: Array<IntersectionObserverEntry>) {
    element.forEach( (elem) => {
      if ( elem.target.className === 'anchor') {
        this.anchorChange.emit({'id': elem.target.id, active: elem.intersectionRatio > 0.2})
      } else if ( elem.target.className === 'parallax-window') {
        this.windowChange.emit({'id': elem.target.id, active: elem.intersectionRatio > 0})
      }
    })
  }
}
