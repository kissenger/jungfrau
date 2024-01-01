import { Injectable } from '@angular/core';
import { ScreenService } from './screen.service';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})

export class ImageService {

  constructor(
    private screen: ScreenService,
    private data: DataService
  ) {
  }

// sn = img shortname
// return info required for given image
  img(sn: string) {
    let img = this.data.staticImages[sn];
    let dor: 'portrait' | 'landscape' = this.screen.deviceOrientation;
    return {
      path: img[dor] ? `${img.basePath}${img.fname}-${dor}.${img.extension}` : `${img.basePath}${img.fname}.${img.extension}`,
      altText: img.altText,
      width: img[dor] ? img[dor]!.width : img.width,
      height: img[dor] ? img[dor]!.height : img.height,
      href: img.href ? img.href : '',
    }
  }

  imgScaleRatio(sn: string) {
    let img = this.data.staticImages[sn];
    let dor: 'portrait' | 'landscape' = this.screen.deviceOrientation;
    return window.innerWidth / img[dor]!.width;
  }




}

