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
  private screenSizeSubs: Subscription | undefined;
  public instaFeed: Array<{caption: string, media_url: string, permalink: string, timestamp: string}> = []
  private qty = 5;
  public nLines = 0;
  private dWidth = 0;
  private dHeight = 0;

  constructor(
    private http: HttpService,
    private renderer: Renderer2,
    private screenSize: ScreenSizeService,
    public data: DataService,
    private auth: AuthService,
    private changeDetection: ChangeDetectorRef
    ) {
    this.nLines = this.getCaptionBoxLines();

      this.screenSizeSubs = this.screenSize.resize.subscribe( () => {
        this.getDimensions();
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
      this.setCookie();
    });


    window.addEventListener("scroll", (e) => {
      this.horizontalScroll();
      this.setCookie();
    });
  }

  ngAfterViewChecked() {
    this.nLines = this.getCaptionBoxLines();
    this.changeDetection.detectChanges();
    this.getDimensions();

  }

  getDimensions() {
    // get available space for vertical and horizontal scrolling based on layout
    this.dHeight = this.stickyParent?.nativeElement.offsetHeight - this.stickyChild?.nativeElement.offsetHeight;
    this.dWidth = this.scrollBox?.nativeElement.offsetWidth - this.stickyParent?.nativeElement.offsetWidth ;
  }

  getCaptionBoxLines() {
    // determine number of lines of caption to allow based on screen height
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
    // move the scroll-box left and right according to screen position
    const dScroll = this.stickyParent?.nativeElement.getBoundingClientRect().bottom - this.stickyChild?.nativeElement.getBoundingClientRect().bottom;
    const scrollPosition = this.dWidth * (1 - dScroll / this.dHeight);
    if (scrollPosition){
      this.renderer.setStyle(this.scrollBox?.nativeElement, 'transform', `translate3d(${scrollPosition < 0 ? 0 : -scrollPosition}px, 0, 0)`);
    }
  }

  setCookie() {
    // set visit time if insta posts are in view
    const check = this.stickyParent?.nativeElement.getBoundingClientRect().top - this.stickyChild?.nativeElement.getBoundingClientRect().top;
    if (check !== 0) {
      this.auth.setVisitTime();
    }
  }



  ngOnDestroy(): void {
    this.screenSizeSubs?.unsubscribe();
    this.httpSubs?.unsubscribe();
   }

}


