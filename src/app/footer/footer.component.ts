import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shared/services/image.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public fullYear?: number;

  constructor(
    public images: ImageService
  ) { }

  ngOnInit(): void {
    this.fullYear = new Date().getFullYear();
  }

}
