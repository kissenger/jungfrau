import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shared/services/image.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(
    public images: ImageService
  ) { }

  ngOnInit(): void {
  }

}
