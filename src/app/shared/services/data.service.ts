
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private _instLoadSuccess = false;

  get instaLoadSuccess() {
    return this._instLoadSuccess;
  }

  set instaLoadSuccess(value: boolean) {
    this._instLoadSuccess = value;
  }



}

