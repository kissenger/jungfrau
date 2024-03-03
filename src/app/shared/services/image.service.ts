import { Injectable } from '@angular/core';
import { ScreenService } from './screen.service';
import { DeviceOrientation, ImageCollection, WidthDescriptor, Image } from '../types';
import { imageCollection } from '../db-images';

@Injectable({
  providedIn: 'root'
})

export class ImageService {

  private _images: ImageCollection = imageCollection;

  constructor(
    private screen: ScreenService
  ) {}

  orientedImage(_shortName: string) {
    let _img: Image = this._images[_shortName];
    let _dor: DeviceOrientation = this.screen.deviceOrientation;
    let _height: number = 0;
    let _width: number = 0;    

    if (_img.orientation) {
      _height = _img.orientation[_dor].height;
      _width = _img.orientation[_dor].width;
    } else {
      console.log('Requested image orientation not found')
    }

    return {
      url: `${_img.url}-${_dor}.${_img.ext}`,
      alt: _img.alt,
      width: _width,
      height: _height
    }

  }

  // return an object containing the properties for the desired image
  sizedImage(_shortName: string, _size: WidthDescriptor) {

    let _img = this._images[_shortName];
    let _height: number = 0;
    let _width: number = 0;

    if (_size) {
      if (_img.size) {
        if ( _size in _img.size ) {
        _height = _img.size[_size]!.height;
        _width = _img.size[_size]!.width;
        }
      } else {
        console.log('Requested image size not found')
      }
    }

    return {
      url: `${_img.url}-${_size}.${_img.ext}`,
      alt: _img.alt,
      href: 'href' in _img ? _img.href : '',
      width: _width,
      height: _height
    }
  }

  // return an object containing the properties for the desired parallax image
  parallaxImage(_shortName: string) {

    let _img = this.orientedImage(_shortName);
    let _ar = this.screen.aspectRatio;
    let factor = _ar > 0.7 && _ar < 1.4 ? 1.4 : 1;
    
    return {
      ..._img,
      scaleFactor: this.screen.width / _img.width * factor
    };

  }
}
