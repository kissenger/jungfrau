import { Component, OnInit } from '@angular/core';
import { SubscribeComponent } from 'src/app/shared/components/subscribe/subscribe.component';
import { ImageService } from 'src/app/shared/services/image.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(
    public images: ImageService,
    public subscribe: SubscribeComponent
  ) { }

  ngOnInit(): void {
  }


}
