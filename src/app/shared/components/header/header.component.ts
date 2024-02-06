import { Component, HostListener } from '@angular/core';
import { NavService } from 'src/app/shared/services/nav.service';
import { ScrollspyService } from 'src/app/shared/services/scrollspy.service';
import { ScreenService } from 'src/app/shared/services/screen.service';
import { UICardDataService } from '../../services/ui-card-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @HostListener('window:load', ['$event']) onLoadEvent() { this.onLoad() };

  public enableMenu: boolean = true;
  public showDropdownMenu: boolean = false;
  public activeAnchor: string = 'home';

  constructor(
    public uiCard: UICardDataService,
    public navigate: NavService,
    public scrollSpy: ScrollspyService,
    private screen: ScreenService
  ) {
    this.scrollSpy.anchorChange.subscribe( (anchorChange) => {
      if (anchorChange.active) {
        this.activeAnchor = anchorChange.id;
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

}
