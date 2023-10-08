import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DataService } from 'src/app/shared/services/data.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { ScreenSizeService } from 'src/app/shared/services/screen-size.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnDestroy, AfterViewChecked{

  @ViewChild('scrollBox') scrollBox: ElementRef | undefined;
  @ViewChild('stickyParent') stickyParent: ElementRef | undefined;
  @ViewChild('stickyChild') stickyChild: ElementRef | undefined;
  @ViewChild('captionBox') captionBox: ElementRef | undefined;

  private httpSubs: Subscription | undefined;
  public instaFeed: Array<{caption: string, media_url: string, permalink: string, timestamp: string}> = []
  private qty = 5;
  public nLines = 0;

  constructor(
    private http: HttpService,
    private renderer: Renderer2,
    private screenSize: ScreenSizeService,
    public data: DataService,
    private auth: AuthService,
    private changeDetection: ChangeDetectorRef
    ) {
    this.nLines = this.getCaptionBoxLines();

      this.screenSize.resize.subscribe( () => {
      });
      this.httpSubs = this.http.getInstaPosts().subscribe({
        next: (result: any) => {
          this.instaFeed = result.data.map( (m: any) => m).slice(0, this.qty);
          this.data.instaLoadSuccess = true;
          this.auth.lastInstaPost = this.instaFeed[0].timestamp;
        },
        error: (error: any) => {
          console.log(`Fetch instagram posts failed with code ${error.status} and error: '${error.error}'`)
        }});
      ;
     }

  ngOnInit(): void {

    window.addEventListener("touchmove", (e) => {
      this.horizontalScroll();

    });


    window.addEventListener("scroll", (e) => {
      this.horizontalScroll();
    });
  }

  ngAfterViewChecked() {
    this.nLines = this.getCaptionBoxLines();
    this.changeDetection.detectChanges();
  }

  ngOnDestroy(): void {
   if (this.httpSubs) { this.httpSubs.unsubscribe(); }
  }

  getCaptionBoxLines() {
    if (this.captionBox && this.stickyChild) {
      const cssLineHeight = getComputedStyle(<HTMLElement>this.captionBox.nativeElement).getPropertyValue("line-height");
      const lineHight = parseFloat(cssLineHeight.substring(0, cssLineHeight.length-2));
      const boxHeight = window.innerHeight - (this.captionBox.nativeElement.getBoundingClientRect().top - this.stickyChild.nativeElement.getBoundingClientRect().top) -75 - 100;
      return Math.floor(boxHeight/lineHight);
    } else {
      return 0;
    }
  }

  horizontalScroll() {
    // set visit time if insta posts are in view
    const check = this.stickyParent?.nativeElement.getBoundingClientRect().top - this.stickyChild?.nativeElement.getBoundingClientRect().top;
    if (check !== 0) {
      this.auth.setVisitTime();
    }

    // set up horizontal scroll section
    if (this.scrollBox && this.stickyParent && this.stickyChild && this.captionBox) {
      const dHeight = this.stickyParent.nativeElement.offsetHeight - this.stickyChild.nativeElement.offsetHeight;
      const dScroll = this.stickyParent.nativeElement.getBoundingClientRect().bottom - this.stickyChild.nativeElement.getBoundingClientRect().bottom;
      const scrollWidth = this.scrollBox.nativeElement.getBoundingClientRect().width - this.stickyParent.nativeElement.offsetWidth ;
      const scrollPosition = scrollWidth * (1 - dScroll/dHeight);
      this.renderer.setStyle(this.scrollBox.nativeElement, 'transform', `translate3d(${scrollPosition < 0 ? 0 : -scrollPosition}px, 0, 0)`);
      console.log(dScroll,scrollWidth,scrollPosition)
    }
  }


}


