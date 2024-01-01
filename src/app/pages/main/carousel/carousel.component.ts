import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shared/services/image.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(
    public images: ImageService
  ) { }

  ngOnInit(): void {
  }

}
