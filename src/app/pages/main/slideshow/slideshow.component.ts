import { Component, Inject, HostListener } from '@angular/core';
import { ImageService } from 'src/app/shared/services/image.service';
import { NavService } from 'src/app/shared/services/nav.service';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent {

  @HostListener('window:load', ['$event']) onLoadEvent() { this.onLoad() };

  private delta = 0;
  private slideshowElement?: HTMLElement;
  private mouseOver: boolean = false;

  constructor(
    public images: ImageService,
    public navigate: NavService
  ) {}

  onLoad() {

    this.slideshowElement = document.getElementById('slideshow')!;

    // duplicate slide 1 and add as a child of slideshow
    let slide1 = document.getElementById("slide1")!.cloneNode(true);
    this.slideshowElement.appendChild(slide1);

    // inhibit autoscrill if mouse is over the slideshow (or arrow) element(s)
    Array.from(document.getElementsByClassName('overlay')).forEach( (elem) => {
      elem.addEventListener('mousemove', (e) => { this.mouseOver = true;  });
      elem.addEventListener('mouseout', (e) =>  { this.mouseOver = false; });
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
    this.slideshowElement!.style.transitionProperty = `none`;
    this.slideshowElement!.style.transform = `translateX(-${this.delta}%)`;
  }

  slideshowNext() {
    this.slideshowElement!.style.transitionProperty = `all`;
    this.slideshowElement!.style.transform = `translateX(-${this.delta}%)`;
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
