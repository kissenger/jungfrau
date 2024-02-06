import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/shared/services/nav.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})

export class PrivacyComponent implements OnInit {


  constructor(
    public navigate: NavService
  ) { }

  ngOnInit(): void {

  }




}
