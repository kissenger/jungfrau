import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/shared/services/nav.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  public email: string = '';

  constructor(
    public navigate: NavService
  ) { }

  ngOnInit(): void {
  }


  notValidEmail() {
    return !(this.email === "" || this.email.match(/[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}/));
  }


}
