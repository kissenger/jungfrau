import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NavService } from 'src/app/shared/services/nav.service';
import { ScrollspyService } from 'src/app/shared/services/scrollspy.service';
import { ScreenService } from 'src/app/shared/services/screen.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnDestroy {
  @HostListener('window:load', ['$event']) onLoadEvent() { this.onLoad() };

  private _ssSubs: Subscription;
  private _nvSubs: Subscription;

  public menuItems: Array<{text: string, link: string}> | undefined;
  public showDropdownMenu: boolean = false;
  public activeAnchor: string = 'home';

  constructor(
    private _navigate: NavService,
    private _scrollSpy: ScrollspyService,
    private _screen: ScreenService,
  ) {

    this._ssSubs = this._scrollSpy.anchorChange.subscribe( (a) => {
      if (a.active) {
        this.activeAnchor = a.id;
      }
    });

    // update menu items on route change
    this._nvSubs = this._navigate.end.subscribe( (url) => {
      let urlSplit = url.split('/');

      if ( urlSplit[1] === '' ) {   // main page
        this.menuItems = [
          {text: 'About',    link: 'about'},
          {text: 'Explore',  link: 'explore'},
          {text: 'Book',     link: 'book'},
          {text: 'FAQs',     link: 'faqs'},
          {text: 'Friends',  link: 'friends'},
          {text: 'Articles', link: 'snorkelling-in-britain'}
        ]
      } 
      else if ( urlSplit[1] === 'subscribe' ) {
        this.menuItems = [
          {text: 'Home',    link: '/'},
        ]
      }
      else if ( urlSplit[1] === 'privacy-policy' ) {
        this.menuItems = [
          {text: 'Home',    link: '/'},
        ]
      }
      else if ( urlSplit[1] === 'snorkelling-in-britain' ) {
        if ( urlSplit.length === 2 ) {
          this.menuItems = [
            {text: 'Home',    link: '/'},
          ]
        }
        else {
          this.menuItems = [
            {text: 'Home',     link: '/'},
            {text: 'Articles', link: 'snorkelling-in-britain'}
          ]
        }
      }

    })

  }

  onLoad() {
    if (this._screen.widthDescriptor === 'large') {
      this.showDropdownMenu = false;
    }
  }

  onHamburgerClick() {
    this.showDropdownMenu = !this.showDropdownMenu;
    this.animateHamburger();
  }

  onMenuItemClick(elemName: string) {
    this._navigate.to(elemName);
    if (this.showDropdownMenu) {
      this.showDropdownMenu = false;
      this.animateHamburger();
    }
  }

  animateHamburger() {
    document.querySelectorAll("animate").forEach( anim => {
      anim.beginElement();
    });
    this.toggleAnimationDirection();
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
    this._ssSubs?.unsubscribe();
    this._nvSubs?.unsubscribe();
  }

}
