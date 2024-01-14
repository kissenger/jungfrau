import { Component } from '@angular/core';
import { ScrollService } from 'src/app/shared/services/scroll.service';

@Component({
  selector: 'app-article',
  templateUrl: './can-you-snorkel-in-britain.component.html',
  styleUrls: ['../content.component.css'],
})

export class CanYouSnorkelInBritainComponent  {
  constructor(
    public scroll: ScrollService
  ) { }
}
