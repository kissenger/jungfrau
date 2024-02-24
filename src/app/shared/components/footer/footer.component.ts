import { ScreenService } from 'src/app/shared/services/screen.service';
import { Component, HostListener } from '@angular/core';
import { ImageService } from 'src/app/shared/services/image.service';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  // when we know the footer height, set the root css variable then make the footer visible
  @HostListener('window:load', ['$event']) onLoadEvent() {
    let h = document.getElementById("footer")!.offsetHeight;
    document.documentElement.style.setProperty('--footer-height', `${h}px`);
    document.getElementById("footer")!.style.opacity = '1';
  };

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
