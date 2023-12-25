import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(
    public data: DataService,
  ) {}

  ngOnInit() {
  }


  onMenuClick() {
    // close menu
    document.getElementById("snNavbar")?.classList.remove("show");
  }
}
