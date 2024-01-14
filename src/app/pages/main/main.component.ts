import { Component, OnInit, AfterViewInit} from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { ScreenService } from 'src/app/shared/services/screen.service';
import { ImageService } from 'src/app/shared/services/image.service';
import { environment } from 'src/environments/environment';
import { SubscribeComponent } from 'src/app/shared/components/subscribe/subscribe.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit, AfterViewInit {

  public widthDescriptor? = '';
  public deviceOrientation? = '';

  constructor(
    public data: DataService,
    public screen: ScreenService,
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

  ngAfterViewInit() {
    this.deviceOrientation = this.screen.deviceOrientation;
    window.addEventListener('resize', () => {
      this.deviceOrientation = this.screen.deviceOrientation;
    });


  }

}

