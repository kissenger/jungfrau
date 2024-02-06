import { Component} from '@angular/core';
import { NavService } from 'src/app/shared/services/nav.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['../main.component.css'],
})

export class ExploreComponent {

  constructor(
    public navigate: NavService
  ) {}

}
