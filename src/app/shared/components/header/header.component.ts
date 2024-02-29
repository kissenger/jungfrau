import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NavService } from 'src/app/shared/services/nav.service';
import { ScrollspyService } from 'src/app/shared/services/scrollspy.service';
import { ScreenService } from 'src/app/shared/services/screen.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements AfterViewInit, OnDestroy {

  @ViewChildren('menuItem') menuElements!: QueryList<ElementRef>; 
  // @ViewChild('menu') menu!: ElementRef;

  private _scrSubs: Subscription;
  private _navSubs: Subscription;

  public menuItems = [
    {text: 'Home',     link: '/',        show: false},
    {text: 'About',    link: 'about',    show: false},
    {text: 'Explore',  link: 'explore',  show: false},
    {text: 'Book',     link: 'book',     show: false},
    {text: 'FAQs',     link: 'faqs',     show: false},
    {text: 'Friends',  link: 'friends',  show: false},
    {text: 'Articles', link: 'snorkelling-in-britain', show: false}
  ];
  public menuItemsFiltered: Array<{text: string, link: string, show: boolean}> | undefined;
  public showDropdownMenu: boolean = false;
  public activeAnchor: string = 'about';

  constructor(
    private _navigate: NavService,
    private _scrollSpy: ScrollspyService,
    private _screen: ScreenService,
  ) {      
    
    // observed elements are set in main component and tracked in scrollspy
    this._scrSubs = this._scrollSpy.intersectionEmitter.subscribe( (isect) => {
      if (isect.class==="anchor" && isect.ratio > 0.2) {
        this.activeAnchor = isect.id;
      }
    })

    // update menu items on route change
    this._navSubs = this._navigate.end.subscribe( (url) => {
      let urlSplit = url.split('/');

      if ( urlSplit[1] === '' ) { this.menuItemsFiltered = this.filterMenu(['About', 'Explore', 'Book', 'FAQs', 'Friends', 'Articles']) }
      else if ( urlSplit[1] === 'subscribe' ) { this.menuItemsFiltered = this.filterMenu(['Home']); }
      else if ( urlSplit[1] === 'privacy-policy' ) { this.menuItemsFiltered = this.filterMenu(['Home']); }
      else if ( urlSplit[1] === 'snorkelling-in-britain' ) {
        if ( urlSplit.length === 2 ) { this.menuItemsFiltered = this.filterMenu(['Home']); }
        else  { this.menuItemsFiltered = this.filterMenu(['Home', 'Articles']); }
      }

    })

  }

  filterMenu(items: Array<string>) {
    return this.menuItems.filter( (item) => items.includes(item.text) );
  }

  ngAfterViewInit() {
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
    this._scrSubs?.unsubscribe();
    this._navSubs?.unsubscribe();
  }

}
