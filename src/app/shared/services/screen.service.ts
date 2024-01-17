import { Injectable } from '@angular/core';
import { DeviceOrientation } from '../types';


@Injectable({
  providedIn: 'root'
})

export class ScreenService {

  private _screenWidth: number | undefined;
  private _screenHeight: number | undefined;
  private _widthThreshold = 768;
  private _deviceOrientation: DeviceOrientation = 'portrait';
  private _widthDescriptor = 'large';
  private _aspectRatio = 0;

  constructor() {
    this.update();
    window.addEventListener('resize', (event) => { this.update()});
  }

  update() {
    this._screenWidth = window.innerWidth;
    this._screenHeight = window.innerHeight;
    this._deviceOrientation = (window.innerHeight / window.innerWidth) > 1.4 ? 'portrait' : 'landscape';
    this._widthDescriptor = (window.innerWidth < this._widthThreshold) ? 'small' : 'large';
    this._aspectRatio = window.innerHeight / window.innerWidth;
  }

  get deviceOrientation(): DeviceOrientation {
    return this._deviceOrientation;
  }

  get widthDescriptor() {
    return this._widthDescriptor;
  }

  get width() {
    console.log(window.innerWidth);
    return this._screenWidth;
  }

  get height() {
    return this._screenHeight;
  }

  get aspectRatio() {
    return this._aspectRatio;
  }
}

