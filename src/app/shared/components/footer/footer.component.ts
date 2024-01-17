import { ScreenService } from 'src/app/shared/services/screen.service';
import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shared/services/image.service';
import { NavService } from '../../services/nav.service';
// import { MailingListComponent } from '../shared/components/mailing-list.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public fullYear?: number;

  constructor(
    public images: ImageService,
    public navigate: NavService,
    public screen: ScreenService
  ) { }

  ngOnInit(): void {
    this.fullYear = new Date().getFullYear();
  }

}
