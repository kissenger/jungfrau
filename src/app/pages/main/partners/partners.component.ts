import { Component } from '@angular/core';
import { NavService } from 'src/app/shared/services/nav.service';
import { imageCollection } from 'src/app/shared/db-images';
import { Image, ImageCollection } from 'src/app/shared/types';
import { ImageService } from 'src/app/shared/services/image.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {

  private _imgs: ImageCollection = imageCollection;
  private _partners: any[] = [];
  public partnerImages;

  constructor(
    public navigate: NavService,
    private images: ImageService
  ) {

    for (let key in this._imgs) {
      if (this._imgs[key].type === 'partner') {
        this._partners.push(images.sizedImage(key, 'small'));
      }
    }

    this.partnerImages = this._partners
      .map( value => ( { value, sort: Math.random() } ))
      .sort( (a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  }

}
