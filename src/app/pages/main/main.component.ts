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

  ngOnInit(): void {}

  // ngOnInit(): void {

  //   // listens for intersection of feed container with the scren, and sets cookie
  //   window.addEventListener( "load", (event) => {
  //     let feedElement = document.querySelector("#feedContainer");
  //     let observer = new IntersectionObserver( (io) => { this.intersectHandler(io); }, {root: null, threshold: 0.9});
  //     if (feedElement) {
  //       observer.observe(feedElement);
  //     }
  //   },
  //     false,
  //   );
  // }

  // intersectHandler(intersect: Array<IntersectionObserverEntry>) {
  //   if (!this.isCookieSet && intersect[0].isIntersecting === true) {
  //     // console.log(this.auth)
  //     this.auth.setVisitTime();
  //     this.isCookieSet = true;
  //   }
  // }

  ngAfterViewInit() {
    this.deviceOrientation = this.screen.deviceOrientation;
    window.addEventListener('resize', () => {
      this.deviceOrientation = this.screen.deviceOrientation;
    })
  }


}

