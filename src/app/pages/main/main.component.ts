import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/shared/services/data.service';
import { ScreenService } from 'src/app/shared/services/screen.service';
import { ImageService } from 'src/app/shared/services/image.service';
import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
// import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  // EXAMPLE image loader, needs some refinement to work for this project
  // providers: [{
  //   provide: IMAGE_LOADER,
  //     useValue: (config: ImageLoaderConfig) => {
  //       console.log(config);
  //       return `${config.src}-${config.width}.webp`;
  //     }
  // }]
})

export class MainComponent implements OnInit, AfterViewInit {

  @ViewChild('betaPopupBtn') betaPopupBtn!: ElementRef;

  public widthDescriptor? = '';
  public deviceOrientation? = '';


  constructor(
    public data: DataService,
    public screen: ScreenService,
    public images: ImageService
  ) {

  }


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
    })
  }

  ngAfterViewInit() {
    this.deviceOrientation = this.screen.deviceOrientation;
    window.addEventListener('resize', () => {
      this.deviceOrientation = this.screen.deviceOrientation;
    })
  }


}

