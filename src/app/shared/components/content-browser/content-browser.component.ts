import { Component, OnDestroy, HostListener} from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { NavService } from 'src/app/shared/services/nav.service';
import { ScreenService } from 'src/app/shared/services/screen.service';
import { UIPost } from 'src/app/shared/types';
import { UICardDataService } from 'src/app/shared/services/ui-card-data.service';

@Component({
  selector: 'app-content-browser',
  templateUrl: './content-browser.component.html',
  styleUrls: ['./content-browser.component.css'],
})

export class ContentBrowserComponent implements OnDestroy {

  @HostListener('window:load', ['$event']) onLoadEvent() {
    this.onLoad();
  };

  private httpSubs: Subscription | undefined;
  private screenSubs: Subscription | undefined;
  private navSubs: Subscription;

  public cards: Array<UIPost> = [];
  public instas: Array<UIPost> = [];
  private articles: Array<UIPost> = [];
  private ckbtnInsta: HTMLInputElement | undefined;
  private ckbtnArticle: HTMLInputElement | undefined;
  private limitPosts: boolean = false;

  constructor(
    private http: HttpService,
    public data: DataService,
    public screen: ScreenService,
    public navigate: NavService,
    public uiCard: UICardDataService,
  ) {

    this.articles = this.uiCard.articles;

    this.httpSubs = this.http.getInstaPosts().subscribe({
      next: (result: {data: Array<UIPost>}) => {
        this.instas = result.data
          .filter( (m: UIPost) => m.media_type != "VIDEO")
          .map( (m: UIPost) => { m.category = 'Instagram'; m.header = ''; return m; })
        this.updateFeed();
      },
      error: (error: any) => {
        console.log(`Fetch instagram posts failed`);
        console.log(error);
      }
    });

    this.screenSubs = this.screen.resize.subscribe( () => {
      this.updateFeed();
    });

    this.navSubs = this.navigate.end.subscribe( (url) => {
      this.limitPosts = url === '/';
      this.updateFeed();
    })

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
      this.updateFeed();
    }
  }

  updateFeed() {

    const nPosts = this.limitPosts ? this.screen.numberUIPosts : 99;

    // if there are no instas or theyve been filtered out, the only show articles
    if ( this.instas.length === 0  || this.ckbtnArticle?.checked && !this.ckbtnInsta?.checked) {
      this.cards = [...this.articles];
    }

    // if there are instas and articles are filtered out, only show instas
    else if (this.ckbtnInsta?.checked && !this.ckbtnArticle?.checked) {
      this.cards = [...this.instas];
    }

    // if there are instas and nothing is filtered, combine the two
    else {
      this.cards = [...this.instas];
      let index = 0;
      this.articles.forEach( (article) => {
        this.cards.splice(index,0,article);
        index+=2
      })
    }

    this.cards = this.cards.slice(0, nPosts);
  }

  ngOnDestroy(): void {
    this.httpSubs?.unsubscribe();
    this.screenSubs?.unsubscribe();
    this.navSubs?.unsubscribe();
  }

}



