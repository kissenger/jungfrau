import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // public isNewContent = this.auth.isNewContent;
  constructor(
    public auth: AuthService) { }

  ngOnInit(): void {
    console.log(this.auth.isNewContent)
  }

}
