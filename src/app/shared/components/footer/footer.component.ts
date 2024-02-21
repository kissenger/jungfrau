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
export class FooterComponent {

  public fullYear?: number;
  public logos;
  private _logoNames = ['youtube', 'instagram', 'email'];

  constructor(
    public images: ImageService,
    public navigate: NavService,
    public screen: ScreenService
  ) { 
    this.fullYear = new Date().getFullYear();
    this.logos = this._logoNames.map( (ln: string) => {
      return this.images.sizedImage(ln, 'small')
    })
  }

}
