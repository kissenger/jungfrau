import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from 'src/app/shared/services/image.service';
import { ScrollspyService } from 'src/app/shared/services/scrollspy.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnDestroy, AfterViewInit {

  @ViewChildren('plxWindow') plxImages!: QueryList<ElementRef>;
  @ViewChildren('anchor') anchors!: QueryList<ElementRef>;

  public showPlxImages: {[id: string]: boolean} = {};
  private scrollspySubs: Subscription;

  constructor(
    public images: ImageService,
    private scrollSpy: ScrollspyService
  ) {
    this.scrollspySubs = this.scrollSpy.intersectionEmitter.subscribe( (isect) => {
      this.showPlxImages[isect.id] = isect.ratio > 0.2
    })
  }

  ngAfterViewInit() {
    this.scrollSpy.observeChildren(this.plxImages); // subscribed to in this component
    this.scrollSpy.observeChildren(this.anchors);   // subscribed to in header component
  }

  ngOnDestroy(): void {
    this.scrollspySubs?.unsubscribe();
  }
}

