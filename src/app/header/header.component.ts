import { Component, ElementRef, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DataService } from '../shared/services/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // private dataSubs = new Subscription;
  public isNewsPage = false;

  constructor(
    private router: Router,
    public data: DataService,

  ) {
    router.events.subscribe( e => {
      if (e instanceof NavigationEnd) {
        this.isNewsPage = this.router.url.includes('news/');
      }
    })
  }

  ngOnInit() {
  }


  onMenuClick() {
    // close menu
    document.getElementById("snNavbar")?.classList.remove("show");
  }
}
