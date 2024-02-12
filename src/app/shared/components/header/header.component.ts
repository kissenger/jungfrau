import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NavService } from 'src/app/shared/services/nav.service';
import { ScrollspyService } from 'src/app/shared/services/scrollspy.service';
import { ScreenService } from 'src/app/shared/services/screen.service';
import { UICardDataService } from '../../services/ui-card-data.service';
import { Subscription } from 'rxjs';
import { Event, ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnDestroy {
  @HostListener('window:load', ['$event']) onLoadEvent() { this.onLoad() };

  private scrollspySubs: Subscription | undefined;
  private routerSubs: Subscription | undefined;

  public enableMenu: boolean = true;
  public showDropdownMenu: boolean = false;
  public activeAnchor: string = 'home';

  constructor(
    public uiCard: UICardDataService,
    public navigate: NavService,
    public scrollSpy: ScrollspyService,
    private screen: ScreenService,
    private router: Router
  ) {

    this.scrollspySubs = this.scrollSpy.anchorChange.subscribe( (anchorChange) => {
      if (anchorChange.active) {
        this.activeAnchor = anchorChange.id;
      }
    });

    this.routerSubs = this.router.events.subscribe( (event: Event) => {
      if (event instanceof NavigationEnd) {
        this.enableMenu = window.location.pathname === '/';
      }
    });

  }

  onLoad() {
    if (this.screen.widthDescriptor === 'large') {
      this.showDropdownMenu = false;
    }
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

  ngOnDestroy() {
    this.scrollspySubs?.unsubscribe();
    this.routerSubs?.unsubscribe();
  }

}
