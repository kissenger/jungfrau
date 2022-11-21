import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('factor') set parallaxFactor(val: number) {
    this.factor = val ? val : 1;
  }

  private factor: number = 0;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('window:scroll')
  onWindowScroll() {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const offset = rect.top + window.scrollY < innerHeight ? scrollY : window.innerHeight - rect.top
    if (rect.top <= window.innerHeight) {
      this.renderer.setProperty(
        this.elementRef.nativeElement,
        'style',
        // `transform: translateY(${(window.innerHeight - rect.top) * this.factor / 10}px)`);
        `transform: translateY(${offset * this.factor / 10}px)`);
    }
  }

}



