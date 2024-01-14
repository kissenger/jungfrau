import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { ScrollService } from 'src/app/shared/services/scroll.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public showMenu: boolean = false;

  constructor(
    public data: DataService,
    public auth: AuthService,
    private router: Router,
    public scroll: ScrollService
  ) {
    router.events.subscribe( e => {
      if (e instanceof NavigationEnd) {
        this.showMenu = !this.router.url.includes('privacy-policy');
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
