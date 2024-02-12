import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';
import { NavService } from 'src/app/shared/services/nav.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  public email: string = '';
  private httpSubs: Subscription | undefined;

  constructor(
    public navigate: NavService,
    private http: HttpService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    document.body.style.cursor = "wait";
    let data = {email: this.email};
    this.httpSubs = this.http.storeEmail(data).subscribe( {
      next: (result) => {
        window.alert("Success! Your email address was saved ... We'll be in touch.");
        document.body.style.cursor = "default";
        this.email = "";
        console.log(result);
      },
      error: (error) => {
        window.alert("Oops, something didn't work out.  Please try again.");
        document.body.style.cursor = "default";
        console.log(error);
      }
    });

  }

  ngOnDestroy() {
    this.httpSubs?.unsubscribe();
  }


}
