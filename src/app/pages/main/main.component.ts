// import { Element } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ImageService } from 'src/app/shared/services/image.service';
import { ScreenService } from 'src/app/shared/services/screen.service';
import { ScrollspyService } from 'src/app/shared/services/scrollspy.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements AfterViewInit {

  @ViewChildren('window') windows!: QueryList<ElementRef>;
  @ViewChildren('anchor') anchors!: QueryList<ElementRef>;

  private plxImgs: {[id: string]: string} = {
    'windowOne'  : 'scorpionfish',
    'windowTwo'  : 'cuddlingcrabs',
    'windowThree': 'sittingchild',
    'windowFour' : 'anemone',
  }

  constructor(
    private _images: ImageService,
    private _scrollSpy: ScrollspyService,
    private _screen: ScreenService
  ) {}
  
  ngAfterViewInit() {
    this._scrollSpy.observeChildren(this.anchors);   // subscribed to in header component
    this.loadBackgroundImages();
    this._screen.resize.subscribe( (hasOrientationChanged) => {
      if (hasOrientationChanged) {
        this.loadBackgroundImages();
      }
    })
  }

  loadBackgroundImages() {
    this.windows.forEach( (w) => {
      let url = this._images.orientedImage(this.plxImgs[w.nativeElement.id]).url;
      w.nativeElement.style.backgroundImage = `url('${url}')`;
      w.nativeElement.style.backgroundAttachment = 'fixed';
      w.nativeElement.style.backgroundSize = 'cover';
      w.nativeElement.style.backgroundPosition = 'center';
    })
  }

}

