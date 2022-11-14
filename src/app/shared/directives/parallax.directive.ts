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
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'style',
      `transform: translateY(${window.scrollY * this.factor / 10}px)`);
  }
}
