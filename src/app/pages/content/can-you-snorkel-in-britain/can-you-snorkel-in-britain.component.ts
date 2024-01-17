import { NavService } from 'src/app/shared/services/nav.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './can-you-snorkel-in-britain.component.html',
  styleUrls: ['../content.component.css'],
})

export class CanYouSnorkelInBritainComponent  {
  constructor(
    public navigate: NavService
  ) { }
}
