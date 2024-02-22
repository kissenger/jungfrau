import { Component } from '@angular/core';
import { NavService } from 'src/app/shared/services/nav.service';
import { ImageService } from 'src/app/shared/services/image.service';

@Component({
  selector: 'app-beginners-guide',
  templateUrl: './beginners-guide.component.html',
  styleUrls: ['../content.component.css'],
})

export class BeginnersGuideComponent  {

  constructor(
    public navigate: NavService,
    public images: ImageService
  ) { }
  
}
