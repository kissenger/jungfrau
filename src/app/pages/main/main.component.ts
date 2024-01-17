import { Component, OnInit, AfterViewInit} from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { ImageService } from 'src/app/shared/services/image.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  constructor(
    public data: DataService,
    public images: ImageService
  ) {}


  ngOnInit(): void {

    // listens for intersection of parallax-window with screen and shows/hides parallax images accordingly
    // this is the only way to fix the overlapping background images in all circumstances that i can think of...
    window.addEventListener( "load", (event) => {
      let observer = new IntersectionObserver( (io) => { this.intersectHandler(io); }, {root: null, threshold: 0});
      observer.observe(document.querySelector("#windowOne")!);
      observer.observe(document.querySelector("#windowTwo")!);
      observer.observe(document.querySelector("#windowThree")!);
      observer.observe(document.querySelector("#windowFour")!);
    },
      false,
    );
  }

  intersectHandler(intersect: Array<IntersectionObserverEntry>) {
    intersect.forEach( (i) => {
      if (i.isIntersecting === true) {
        document.getElementById(`${i.target.id}Image`)!.style.visibility = "visible";
      } else {
        document.getElementById(`${i.target.id}Image`)!.style.visibility = "hidden";
      }
    });
  }

}

