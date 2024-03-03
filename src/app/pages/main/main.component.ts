// import { Element } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { ImageService } from 'src/app/shared/services/image.service';
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
    public images: ImageService,
    private scrollSpy: ScrollspyService
  ) {}
  
  ngAfterViewInit() {

    this.scrollSpy.observeChildren(this.anchors);   // subscribed to in header component

    // Only once DOM is loaded allow background images to load (lazy loading)
    this.windows.forEach( (w) => {
      let url = this.images.parallaxImage(this.plxImgs[w.nativeElement.id]).url;
      w.nativeElement.style.backgroundImage = `url('${url}')`;
      w.nativeElement.style.backgroundAttachment = 'fixed';
      w.nativeElement.style.backgroundSize = 'cover';
      w.nativeElement.style.backgroundPosition = 'center';
    })
  }

}

