import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shared/services/image.service';
import { NavService } from 'src/app/shared/services/nav.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  private delta = 0;
  private slideshowElement?: HTMLElement;
  private overlayElement?: HTMLElement;
  private mouseOver: boolean = false;

  constructor(
    public images: ImageService,
    public navigate: NavService
  ) { }

  ngOnInit(): void {
    window.addEventListener( "load", (event) => {
      this.slideshowElement = document.getElementById('slideshow')!;
      this.overlayElement = document.getElementById('overlay')!;
      this.overlayElement!.addEventListener('mouseover', (e) => {
        this.mouseOver = true;
        console.log(this.mouseOver)

      });
      this.overlayElement!.addEventListener('mouseout', (e) => {

        this.mouseOver = false;
        console.log(this.mouseOver)

      })
    }, false );

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
