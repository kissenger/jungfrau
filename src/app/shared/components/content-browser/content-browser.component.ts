import { Component, OnDestroy, HostListener} from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { NavService } from 'src/app/shared/services/nav.service';
import { ImageService } from '../../services/image.service';
import { ScreenService } from 'src/app/shared/services/screen.service';
import { Article, ArticlePreview, InstaPost } from '../../types';
import { _articles } from '../../db-articles';

@Component({
  selector: 'app-content-browser',
  templateUrl: './content-browser.component.html',
  styleUrls: ['./content-browser.component.css'],
})

export class ContentBrowserComponent implements OnDestroy {

  @HostListener('window:load', ['$event']) onLoadEvent() {
    this.onLoad();
  };

  private _httpSubs: Subscription | undefined;
  private _screenSubs: Subscription | undefined;
  private _navSubs: Subscription;
  private _limitPosts: boolean = false;
  private _previews: Array<ArticlePreview> = [];

  public cards: Array<InstaPost | ArticlePreview> = [];
  public instas: Array<InstaPost> = [];
  public ckbtns: { [name: string]: { clicked: boolean, handle: HTMLElement | undefined } } = {
    article: { clicked: true, handle: undefined },
    insta:   { clicked: true, handle: undefined }
  } 

  constructor(
    private _screen: ScreenService,
    private _http: HttpService,
    private _navigate: NavService,
    private _images: ImageService
    
  ) {

    // get instgram posts
    this._httpSubs = this._http.getInstaPosts()
      .subscribe({
        next: (result: {data: Array<InstaPost>}) => {
          this.instas = result.data
            .filter( (m: InstaPost) => m.media_type != "VIDEO")
            .map( (m: InstaPost) => { m.category = 'Instagram'; return m; })
          this.updateFeed();
        },
        error: (error) => {
          console.log(error);
        }
      })  
  

    // construct article previews
    this._previews = _articles.map( (article: Article) => {
      return {
        caption: article.caption,
        header: article.header,
        category: 'Article',
        media_url: this._images.sizedImage(article.imageShortName, 'small').url,
        permalink: article.href,
        timestamp: '',
        media_type: ''
      }
    })

    this._screenSubs = this._screen.resize.subscribe( () => {
      this.updateFeed();
    });

    this._navSubs = this._navigate.end.subscribe( (url) => {
      this._limitPosts = url === '/';
      this.updateFeed();
    })

  }

  onLoad() {
    this.ckbtns['article'].handle = <HTMLInputElement>document.querySelector('input#ckbtnArticle');
    this.ckbtns['insta'].handle = <HTMLInputElement>document.querySelector('input#ckbtnInsta');
  }

  onFilterClick(type: string) {

    // reverse click on relevent btn
    this.ckbtns[type].clicked = !this.ckbtns[type].clicked;

    // if both btns are now unclicked, reclick what we just unclicked, otherwise update
    if ( !this.ckbtns['insta'].clicked && !this.ckbtns['article'].clicked ) {
      this.ckbtns[type].clicked = !this.ckbtns[type].clicked;
    } else {
      this.updateFeed();
    }
  }

  updateFeed() {
    
    const nPosts = this._limitPosts ? this._screen.numberUIPosts : 99;

    // if there are no instas or theyve been filtered out, the only show articles
    if ( this.instas.length === 0  || this.ckbtns['article'].clicked && !this.ckbtns['insta'].clicked) {
      this.cards = [...this._previews];
    }

    // if there are instas and articles are filtered out, only show instas
    else if (this.ckbtns['insta'].clicked && !this.ckbtns['article'].clicked) {
      this.cards = [...this.instas];
    }

    // if there are instas and nothing is filtered, combine the two
    else {
      this.cards = [...this.instas];
      let index = 0;
      this._previews.forEach( (article) => {
        this.cards.splice(index,0,article);
        index+=2
      })
    }

    this.cards = this.cards.slice(0, nPosts);

  }

  ngOnDestroy(): void {
    this._httpSubs?.unsubscribe();
    this._screenSubs?.unsubscribe();
    this._navSubs?.unsubscribe();
  }

}



