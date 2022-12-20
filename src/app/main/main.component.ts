import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/services/auth.service';;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  @ViewChild('betaPopupBtn') betaPopupBtn!: ElementRef;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {

    // detect when scrolling past news article
    window.addEventListener("scroll", () => {
      var elementTarget = <HTMLElement>document.getElementById("news");
      if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
        this.auth.setVisitTime();
      }
    });

  }

  ngAfterViewInit() {
    if ( !this.auth.isBetaSessionSet && environment.showBetaPopup ) {
      this.auth.setBetaSession();
      this.betaPopupBtn.nativeElement.click();
    }


  }

}
