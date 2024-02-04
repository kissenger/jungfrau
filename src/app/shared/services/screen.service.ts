import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { DeviceOrientation, WidthDescriptor } from '../types';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ScreenService implements OnDestroy{

  private _screenWidth: number = 0;
  private _screenHeight: number = 0;
  private _widthThreshold = 768;
  private _deviceOrientation: DeviceOrientation = 'portrait';
  private _widthDescriptor: WidthDescriptor = 'large';
  private _aspectRatio = 0;
  private viewportChangeSubs: Subscription | undefined;

  constructor(
    private viewportRuler: ViewportRuler,
    private ngZone: NgZone
  ) {
    this.onResize();
    this.viewportChangeSubs = this.viewportRuler.change(200).subscribe(() => {
      this.ngZone.run(() => this.onResize())
    });
  }

  onResize() {
    const {width, height} = this.viewportRuler.getViewportSize();
    this._screenWidth = width;
    this._screenHeight = height;
    this._deviceOrientation = (height / width) > 1.4 ? 'portrait' : 'landscape';
    this._widthDescriptor = (width < this._widthThreshold) ? 'small' : 'large';
    this._aspectRatio = height / width;
  }

  get deviceOrientation(): DeviceOrientation {
    return this._deviceOrientation;
  }

  get widthDescriptor() {
    return this._widthDescriptor;
  }

  get width() {
    return this._screenWidth;
  }

  get height() {
    return this._screenHeight;
  }

  get aspectRatio() {
    return this._aspectRatio;
  }

  ngOnDestroy(): void {
    this.viewportChangeSubs?.unsubscribe();
  }

}



