import { NavService } from 'src/app/shared/services/nav.service';
import { Component } from '@angular/core';
import { ImageService } from 'src/app/shared/services/image.service';
// import { ImageDescriptor } from 'src/app/shared/types';

@Component({
  selector: 'app-science-part-one',
  templateUrl: './science-part-one.component.html',
  styleUrls: ['../content.component.css'],
})

export class SciencePartOneComponent  {

  // public image: ImageDescriptor;

  constructor(
    public navigate: NavService,
    public images: ImageService
  ) {
    // this.image = images.img('the-science-pt-1');
  }
}
