import { Injectable } from '@angular/core';
import { ScreenService } from './screen.service';


@Injectable({
  providedIn: 'root'
})

export class ImageService {

  private imgSizes = {
    small: { width: 400, height: 533 },
    large: { width: 2500, height: 1350 }
  };

  constructor(
    private screen: ScreenService
  ) {
  }

  imgPath(fname: string) {
    return `assets/photos/${fname}-${this.screen.widthDescriptor}.webp`;
  }

  get width() {
    return this.imgSizes[this.screen.widthDescriptor].width;
  }

  get height() {
    return this.imgSizes[this.screen.widthDescriptor].height;
  }

  get imgScaleRatio() {
    return window.innerWidth / this.width;
  }

  // get windowScaleRatio() {
  //   return window.innerWidth * this.height / this.width;
  // }



}

