import { Component,  OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { DataService } from 'src/app/shared/services/data.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { InstaFeed } from 'src/app/shared/types';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnDestroy {

  private httpSubs: Subscription | undefined;
  public instaFeed: InstaFeed = []
  private maxInstaPosts: number = 7;

  constructor(
    private http: HttpService,
    public data: DataService,
    private auth: AuthService,
  ) {

  this.httpSubs = this.http.getInstaPosts().subscribe({
    next: (result: any) => {
      this.instaFeed = result.data.map( (m: any) => m).filter( (m: any) => m.media_type != "VIDEO").slice(0, this.maxInstaPosts);
      // console.log(this.instaFeed);
      this.data.instaLoadSuccess = true;
      this.auth.lastInstaPost = this.instaFeed[0].timestamp;
    },
    error: (error: any) => {
      console.log(`Fetch instagram posts failed with code ${error.status} and error: '${error.error.error}'`);
      console.log(error);
    }});

  }

  ngOnInit(): void {
  }

   ngOnDestroy(): void {
    this.httpSubs?.unsubscribe();
   }

}


