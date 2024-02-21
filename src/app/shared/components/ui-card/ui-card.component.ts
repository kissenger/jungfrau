import { NavService } from 'src/app/shared/services/nav.service';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-ui-card',
  template: `
    <div class="ui-card" (click)="navigate.to(link)">
      <div class="ui-card-photo">
        <img
          ngSrc="{{imageURL}}"
          alt="{{text}}"
          height="300"
          width="300"
        />
        <div class="ui-card-category-overlay" [ngClass]="{'instagram': category=='Instagram', 'article': category=='Article'}">{{category}}</div>
        <div class="ui-card-header-overlay">{{header}}</div>
      </div>

      <div class="ui-card-bottom">
        <span *ngIf="timestamp!=''" class="ui-card-date">{{timestamp | date: "dd MMMM YYYY"}}</span>
        <span *ngIf="timestamp===''" class="ui-card-date">Snorkelology</span>
        <div class="ui-card-text">{{text}}</div>
        <div class="ui-card-footer">
          <a *ngIf="category!='Instagram'" class="ext-link html-link" (click)="navigate.to(link)" role="link">Read more...</a>
          <app-ext-link *ngIf="category==='Instagram'" link="{{link}}" text="Read more on Instagram"></app-ext-link>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./ui-card.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class UICardComponent {
  @Input() public link = '';
  @Input() public imageURL = '';
  @Input() public text = '';
  @Input() public category = '';
  @Input() public timestamp = '';
  @Input() public header = '';

  constructor(
    public navigate: NavService,
    public images: ImageService
  ) {}
}
