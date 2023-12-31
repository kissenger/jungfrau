import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(
    public data: DataService,
    public auth: AuthService
  ) {}

  ngOnInit() {
  }


  onMenuClick() {
    // close menu
    document.getElementById("snNavbar")?.classList.remove("show");
  }
}
