import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

    // detect when scrolling past news article so cookie can be set
    window.addEventListener("scroll", () => {
      var elementTarget = <HTMLElement>document.getElementById("news");
      if (elementTarget) {
        if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight - 80)) {
          this.auth.setVisitTime();
        }
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
