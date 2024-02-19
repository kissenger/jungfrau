import { Component } from '@angular/core';
import { NavService } from 'src/app/shared/services/nav.service';
import { partners } from 'src/app/shared/db-images';
import { Image } from 'src/app/shared/types';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {

  public partnerImages: Array<Image>
  constructor(
    public navigate: NavService
  ) {

    this.partnerImages = partners
      .map( value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  }

}
