import { Component,  AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ImageService } from 'src/app/shared/services/image.service';
import { NavService } from 'src/app/shared/services/nav.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements AfterViewInit{

  @ViewChild('slideshow') slideshowElement!: ElementRef; 
  @ViewChild('firstSlide') firstSlide!: ElementRef; 
  @ViewChildren('overlay') overlayElements!: QueryList<ElementRef>;
  
  private delta = 0;
  // private slideshowElement?: HTMLElement;
  private mouseOver: boolean = false;

  constructor(
    public images: ImageService,
    public navigate: NavService
  ) {}

  ngAfterViewInit() {
    
    // console.log(this.overlay)
    console.log(this.firstSlide)

    // duplicate slide 1 and add as a child of slideshow
      this.slideshowElement.nativeElement.appendChild(
        this.firstSlide.nativeElement.cloneNode(true)
      );

    // inhibit autoscroll if mouse is over the slideshow (or arrow) element(s)
    this.overlayElements.toArray().forEach( (elem) => {
      elem.nativeElement.addEventListener('mousemove', () => { this.mouseOver = true;  });
      elem.nativeElement.addEventListener('mouseout', () =>  { this.mouseOver = false; });
    })

    setInterval( () => {
      if (!this.mouseOver) {
        this.slideshowManager(true);
      }
      }, 8000)
  }


  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  slideshowReset() {
    this.slideshowElement.nativeElement.style.transitionProperty = `none`;
    this.slideshowElement.nativeElement.style.transform = `translateX(-${this.delta}%)`;
  }

  slideshowNext() {
    this.slideshowElement.nativeElement.style.transitionProperty = `all`;
    this.slideshowElement.nativeElement.style.transform = `translateX(-${this.delta}%)`;
  }

  onClick(advance: boolean) {
    this.slideshowManager(advance);
  }

  async slideshowManager(advance: boolean) {
    this.delta = advance ? this.delta + 25 : this.delta - 25;
    if (this.delta > 75) {
      this.delta = 0;
      this.slideshowReset();
      this.delta = advance ? this.delta + 25 : this.delta - 25;
    } else if (this.delta < 0) {
      this.delta = 75;
      this.slideshowReset();
      this.delta = advance ? this.delta + 25 : this.delta - 25;
    }
    await this.sleep(10);
    this.slideshowNext();
  }
}
