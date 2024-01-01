import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/shared/services/data.service';
import { ScreenService } from 'src/app/shared/services/screen.service';
import { ImageService } from 'src/app/shared/services/image.service';
// import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
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
    // document.documentElement.style.setProperty('--scaleRatioImg', `${this.screenSize.width/2500}`);
    // document.documentElement.style.setProperty('--scaleRatioWindow', `${this.screenSize.width/1.85}`);

    // window.addEventListener('resize', () => {
    //   // console.log(this.screenSize.width)
    //   document.documentElement.style.setProperty('--scaleRatioImg', `${this.screenSize.width/2500}`);
    //   document.documentElement.style.setProperty('--scaleRatioWindow', `${this.screenSize.width/1.85}`);
    // })
  }


  ngAfterViewInit() {
    console.log(this.images.imgScaleRatio('scorpionfish'));
    // this.widthDescriptor = this.screen.widthDescriptor;
    this.deviceOrientation = this.screen.deviceOrientation;
    window.addEventListener('resize', () => {
      // this.widthDescriptor = this.screen.widthDescriptor;
      this.deviceOrientation = this.screen.deviceOrientation;
      console.log(this.deviceOrientation);
    })
  }

  setProperties() {

    // sets the ratio by which to resize image from its native width to fit the screen width
    // document.documentElement.style.setProperty('--scaleRatioImg', `${this.image.imgScaleRatio}`);

    // sets the ratio by which to resize image from its native width to fit the screen width
    // document.documentElement.style.setProperty('--scaleRatioWindow', `${this.image.windowScaleRatio}`);
    // const styleElem = document.createElement('style');

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
    // styleElem.style = `--scaleRatioWindow: ${this.image.windowScaleRatio}; --scaleRatioImg: ${this.image.imgScaleRatio}`;
    // document.body.appendChild(styleElem);

    // console.log(document);
  }

}

