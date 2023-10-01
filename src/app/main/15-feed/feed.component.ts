import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnDestroy{

  @ViewChild('scrollBox') scrollBox: ElementRef | undefined;
  @ViewChild('stickyParent') stickyParent: ElementRef | undefined;
  @ViewChild('stickyChild') stickyChild: ElementRef | undefined;

  private httpSubs: Subscription | undefined;
  public instaFeed: Array<{caption: string, media_url: string, permalink: string}> = []
  private qty = 5;

  constructor(
    public http: HttpService,
    private renderer: Renderer2

  ) { }

  ngOnInit(): void {

    this.httpSubs = this.http.getInstaPosts(this.qty).subscribe( (result: any) => {
      this.instaFeed = result.list;
      // console.log(this.instaFeed);
    });

    window.addEventListener("scroll", (e) => {
      if (this.scrollBox && this.stickyParent && this.stickyChild) {

        const dHeight = this.stickyParent.nativeElement.offsetHeight - this.stickyChild.nativeElement.offsetHeight;
        const dScroll = this.stickyParent.nativeElement.getBoundingClientRect().bottom - this.stickyChild.nativeElement.getBoundingClientRect().bottom;
        const scrollWidth = this.scrollBox.nativeElement.getBoundingClientRect().width - this.stickyParent.nativeElement.offsetWidth ;
        const scrollPosition = scrollWidth * (1 - dScroll/dHeight);
        // console.log(dHeight, dScroll, scrollWidth, window.innerWidth, scrollPosition)

        this.renderer.setStyle(this.scrollBox.nativeElement, 'transform', `translate3d(${scrollPosition < 0 ? 0 : -scrollPosition}px, 0, 0)`);

      }
    });
  }

  ngOnDestroy(): void {
   if (this.httpSubs) { this.httpSubs.unsubscribe(); }
  }

}


