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
    let data = {email: this.email};
    console.log(data);
    this.httpSubs = this.http.storeEmail(data).subscribe( (result) => {
      console.log(result)
    });

  }

  ngOnDestroy() {
    this.httpSubs?.unsubscribe();
  }
  // notValidEmail() {
  //   return !(this.email === "" || this.email.match(/[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}/));
  // }


}
