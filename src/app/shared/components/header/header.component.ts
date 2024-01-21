import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NavigationEnd, Router } from '@angular/router';
import { NavService } from 'src/app/shared/services/nav.service';
import { ScrollspyService } from 'src/app/shared/services/scrollspy.service';
import { ScreenService } from 'src/app/shared/services/screen.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public enableMenu: boolean = false;
  public showDropdownMenu: boolean = false;
  public activeAnchor: string = 'home';

  constructor(
    public data: DataService,
    public auth: AuthService,
    private router: Router,
    public navigate: NavService,
    public scrollSpy: ScrollspyService,
    private screen: ScreenService
  ) {
    router.events.subscribe( e => {
      if (e instanceof NavigationEnd) {
        this.enableMenu = !this.router.url.includes('privacy-policy');
      }
    })
    this.scrollSpy.anchorChange.subscribe( (activeAnchor) => {
      this.activeAnchor = activeAnchor;
    });
    window.addEventListener('resize', (event) => {
      if (this.screen.widthDescriptor === 'large') {
        this.showDropdownMenu = false;
      }
    });

  }

  ngOnInit() {
  }

  onHamburgerClick() {
    this.showDropdownMenu = !this.showDropdownMenu;
    document.querySelectorAll("animate").forEach( anim => {
      anim.beginElement();
    });
    this.toggleAnimationDirection();
  }

  onMenuItemClick(elemName: string) {
    this.navigate.scrollTo(elemName);
    this.onHamburgerClick();
  }

  // Reverse svg animation using js - makes svg definition more simple
  toggleAnimationDirection() {
    document.querySelectorAll("animate").forEach(anim => {
      let from = anim.getAttribute("from");
      let to   = anim.getAttribute("to");
      anim.setAttribute('from', to!);
      anim.setAttribute('to', from!);
    });
  }

}
