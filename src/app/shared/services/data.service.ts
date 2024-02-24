
import { EventEmitter, Injectable } from '@angular/core';


@Injectable()

export class DataService {

  public footerHeight = new EventEmitter<any>();

  constructor(
    ) {
  }

  footer(h: number) {
    this.footerHeight.emit(h);
  }

}
