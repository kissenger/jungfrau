import { Injectable } from '@angular/core';
import { ScreenService } from './screen.service';
import { DeviceOrientation, ImageCollection, OrientedImage, WidthDescriptor } from '../types';
import { imageCollection } from '../db-images';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  private _images: ImageCollection = imageCollection;

  constructor(
    private screen: ScreenService
  ) {}

  get collection() {
    return this._images;
  }


  // return an object containing the properties for the desired image
  image(shortName: string, size?: string) {

    let img = this._images[shortName];
    let _height: number = 0;
    let _width: number = 0;

    if (size) {
      if ('landscape' in img) {
        _height = img[<DeviceOrientation>size].height;
        _width = img[<DeviceOrientation>size].width;
      } else
      if ('sizes' in img) {
        _height = img.sizes[<WidthDescriptor>size].height;
        _width = img.sizes[<WidthDescriptor>size].width;
      }
    } else {
      if ('height' in img) {
        _height = img.height;
        _width = img.width;
      }
    }

    return {
      url: size ? `${img.url}-${size}.${img.ext}` : `${img.url}.${img.ext}`,
      alt: img.altText,
      href: 'href' in img ? img.href : '',
      width: _width,
      height: _height
    }
  }

  // auto select image object depending on screen orientation
  orientedImage(shortName: string) {
    let dor: DeviceOrientation = this.screen.deviceOrientation;
    let img = this.image(shortName, dor);
    return {
      ...img,
    }
  }

  // return an object containing the properties for the desired parallax image
  parallaxImage(shortName: string) {
    let dor: DeviceOrientation = this.screen.deviceOrientation;
    let img = this.image(shortName, dor);
    let ar = this.screen.aspectRatio;
    let factor = ar > 0.7 && ar < 1.4 ? 1.4 : 1;
    return {
      ...img,
      scaleFactor: this.screen.width / img.width * factor
    };
  }
}
