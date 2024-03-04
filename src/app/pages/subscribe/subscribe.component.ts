import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { NavService } from 'src/app/shared/services/nav.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnDestroy {

  public email: string = '';
  public footerHeight: number | undefined;
  private _httpSubs: Subscription | undefined;

  constructor(
    public navigate: NavService,
    private _http: HttpService,
  ) { }

  onSubmit() {
    // document.body.style.cursor = "wait";
    let data = {email: this.email};
    this._httpSubs = this._http.storeEmail(data).subscribe( {
      next: (result) => {
        // window.alert("Success! Your email address was saved ... We'll be in touch.");
        // document.body.style.cursor = "default";
        this.email = "";
      },
      error: (error) => {
        // window.alert("Oops, something didn't work out.  Please try again.");
        // document.body.style.cursor = "default";
        console.log(error);
      }
    });

  }

  ngOnDestroy() {
    this._httpSubs?.unsubscribe();
    // this._dataSubs?.unsubscribe();
  }


}
