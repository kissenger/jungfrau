import { Component, OnDestroy, HostListener} from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { NavService } from 'src/app/shared/services/nav.service';
import { ScreenService } from 'src/app/shared/services/screen.service';
import { UIPost } from 'src/app/shared/types';
import { UICardDataService } from 'src/app/shared/services/ui-card-data.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})

export class FeedComponent implements OnDestroy {
  @HostListener('window:load', ['$event']) onLoadEvent() { this.onLoad() };

  private httpSubs: Subscription | undefined;
  private maxPosts: number = 12;
  public cards: Array<UIPost> = [];
  private instaFeed: Array<UIPost> = [];
  private articles: Array<UIPost> = [];
  private ckbtnInsta: HTMLInputElement | undefined;
  private ckbtnArticle: HTMLInputElement | undefined;

  constructor(
    private http: HttpService,
    public data: DataService,
    public screen: ScreenService,
    public navigate: NavService,
    public uiCard: UICardDataService
  ) {
    this.articles = this.uiCard.articles;

    this.httpSubs = this.http.getInstaPosts().subscribe({
      next: (result: {data: Array<UIPost>}) => {
        this.instaFeed = result.data
          .filter( (m: UIPost) => m.media_type != "VIDEO")
          .map( (m: UIPost) => { m.category = 'Instagram'; m.header = ''; return m; })
        this.updateFeed();
        this.uiCard.instaLoadSuccess = true;
      },
      error: (error: any) => {
        this.uiCard.instaLoadSuccess = false;
        console.log(`Fetch instagram posts failed with code ${error.status} and error: '${error.error.error}'`);
        console.log(error);
      }});
  }

  onLoad() {
    this.ckbtnInsta = <HTMLInputElement>document.querySelector('input#ckbtn-insta');
    this.ckbtnArticle = <HTMLInputElement>document.querySelector('input#ckbtn-article');
}

  onFilterClick(type: string) {
    if (!this.ckbtnInsta?.checked && !this.ckbtnArticle?.checked) {
      if (type === 'insta') {
        this.ckbtnInsta!.checked = true;
      } else {
        this.ckbtnArticle!.checked = true;
      }
    } else {
      console.log('hello');
      this.updateFeed();
    }
  }

  // TODO: this woul dbe better managed using 'hidden' CSS to simply hide the elemts we dont want to show,
  // instead of recalculating the array each time
  updateFeed() {
    if (this.ckbtnInsta?.checked && !this.ckbtnArticle?.checked) {
      this.cards = [...this.instaFeed].slice(0, this.maxPosts);
    } else if (this.ckbtnArticle?.checked && !this.ckbtnInsta?.checked) {
      this.cards = [...this.articles].slice(0, this.maxPosts);
    } else {
      this.cards = [...this.instaFeed];
      let index = 0;
      this.articles.forEach( (article) => {
        this.cards.splice(index,0,article);
        index+=3
      })
      this.cards = this.cards.slice(0, this.maxPosts);
    }
  }

  ngOnDestroy(): void {
    this.httpSubs?.unsubscribe();
  }

}



