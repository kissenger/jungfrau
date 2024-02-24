import { ScreenService } from 'src/app/shared/services/screen.service';
import { Component, EventEmitter, HostListener, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shared/services/image.service';
import { NavService } from '../../services/nav.service';
import { DataService } from '../../services/data.service';
// import { MailingListComponent } from '../shared/components/mailing-list.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  // when we know the footer height, send it to service 
  // used for components that are smaller than screen hgight, to push footer to bottom, eg subscription
  @HostListener('window:load', ['$event']) onLoadEvent() {
    this._data.footer(document.getElementById("footer")!.offsetHeight);
  };

  public fullYear?: number;
  public logos;
  private _logoNames = ['youtube', 'instagram', 'email'];

  constructor(
    public images: ImageService,
    public navigate: NavService,
    public screen: ScreenService,
    private _data: DataService
  ) { 
    this.fullYear = new Date().getFullYear();
    this.logos = this._logoNames.map( (ln: string) => {
      return this.images.sizedImage(ln, 'small')
    })
  }

}
