import { NavService } from 'src/app/shared/services/nav.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})

export class ContentComponent  {
  constructor(
    public navigate: NavService
  ) { }
}
