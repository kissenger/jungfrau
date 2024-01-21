
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ScrollspyService {
  @Output() public anchorChange = new EventEmitter<string>();

  constructor() {

    window.addEventListener( "load", (event) => {
      let observer = new IntersectionObserver( (io: Array<IntersectionObserverEntry>) => { this.anchorHandler(io) }, {root: null, threshold: 0.2});
      document.querySelectorAll(".anchor").forEach( (anchor: Element) => {
        observer.observe(anchor);
      })
    },
      false,
    );
  }

  anchorHandler(anchor: Array<IntersectionObserverEntry>) {
    anchor.filter( (a: IntersectionObserverEntry) => a.isIntersecting).forEach( (i: IntersectionObserverEntry) => {
      this.anchorChange.emit(i.target.id);
    })
  }

}
