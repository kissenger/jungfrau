import { ScreenService } from 'src/app/shared/services/screen.service';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { ImageService } from 'src/app/shared/services/image.service';
import { NavService } from '../../services/nav.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements AfterViewInit{

  @ViewChild('footer') footerElem!: ElementRef;

  public fullYear?: number;
  public logos;
  private _logoNames = ['youtube', 'instagram', 'email'];

  constructor(
    public navigate: NavService,
    public screen: ScreenService,
    private _images: ImageService
  ) { 

    this.fullYear = new Date().getFullYear();
    this.logos = this._logoNames.map( (ln: string) => {
      return this._images.sizedImage(ln, 'small')
    })
  }

  ngAfterViewInit() {
    let h = this.footerElem.nativeElement.offsetHeight;
    document.documentElement.style.setProperty('--footer-height', `${h}px`);
    document.getElementById("footer")!.style.opacity = '1';
  }
}
