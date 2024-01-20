import { Component, OnInit } from '@angular/core';
import { SubscribeComponent } from 'src/app/shared/components/subscribe/subscribe.component';
import { ImageService } from 'src/app/shared/services/image.service';
import { NavService } from 'src/app/shared/services/nav.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['../main.component.css']
})
export class BookComponent implements OnInit {

  constructor(
    public images: ImageService,
    public subscribe: SubscribeComponent,
    public navigate: NavService
  ) { }

  ngOnInit(): void {
  }


}
