
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ScrollspyService {
  @Output() public anchorChange = new EventEmitter<string>();

  constructor() {

    window.addEventListener( "load", (event) => {
      let observer = new IntersectionObserver( (io) => { this.anchorHandler(io); }, {root: null, threshold: 0.2});
      document.querySelectorAll(".anchor").forEach ( anchor => {
        observer.observe(anchor);
      })
    },
      false,
    );

  }

  anchorHandler(anchor: any) {
    anchor.forEach( (i:any) => {
      if (i.isIntersecting === true) {
        this.anchorChange.emit(i.target.id);
      }
    })
  }


}
