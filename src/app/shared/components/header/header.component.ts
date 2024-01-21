import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { NavService } from 'src/app/shared/services/nav.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public enableMenu: boolean = false;
  public showDropdownMenu: boolean = false;

  constructor(
    public data: DataService,
    public auth: AuthService,
    private router: Router,
    public navigate: NavService
  ) {
    router.events.subscribe( e => {
      if (e instanceof NavigationEnd) {
        this.enableMenu = !this.router.url.includes('privacy-policy');
      }
    })
  }

  ngOnInit() {
  }

  onMenuClick() {
    this.showDropdownMenu = !this.showDropdownMenu;
    this.toggleAnimationDirection();
  }

  toggleAnimationDirection() {
    document.querySelectorAll("animate").forEach(anim => {
      let from = anim.getAttribute("from");
      let to   = anim.getAttribute("to");
      anim.setAttribute('from', to!);
      anim.setAttribute('to', from!);
    });
  }

}
