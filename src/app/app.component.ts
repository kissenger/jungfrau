import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // host: {class: 'parallax-intermediate'}
})

export class AppComponent implements OnInit{
  title = 'Snorkelology';
  private routeSubscription!: Subscription;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log("onInit")
    this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
          console.log("routeChange")
      }
    });
  }

}

