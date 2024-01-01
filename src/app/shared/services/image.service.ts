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
    // sets the scale ratio of the image to fit the screen with zero transforZ applied
    // outside the threshold range, this is just ratio of window width to image width
    // inside threshold range, and additional factor is applied to oversize image
    // this mitigates blanks spaces and overlaps for middling aspect ratios
    let img = this.data.staticImages[sn];
    let ar = this.screen.aspectRatio;
    let factor = 1;

    //IMPORTANT - upper threshold should portrait/landscape threshold in screen.service.ts
    if (ar > 0.7 && ar < 1.4) { factor = 1.4 };
    let dor: 'portrait' | 'landscape' = this.screen.deviceOrientation;
    return window.innerWidth / img[dor]!.width * factor ;
  }




}

