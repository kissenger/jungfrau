import { NavService } from 'src/app/shared/services/nav.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-beginners-guide',
  templateUrl: './beginners-guide.component.html',
  styleUrls: ['../content.component.css'],
})

export class BeginnersGuideComponent  {
  constructor(
    public navigate: NavService
  ) { }
}
