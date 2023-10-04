import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/services/auth.service';import { DataService } from '../shared/services/data.service';
;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  @ViewChild('betaPopupBtn') betaPopupBtn!: ElementRef;

  constructor(
    private auth: AuthService,
    public data: DataService,
  ) { }

  ngOnInit(): void {

    // detect when scrolling past news article so cookie can be set
    // window.addEventListener("scroll", () => {
    //   var elementTarget = <HTMLElement>document.getElementById("main-container");

      // console.log(elementTarget.scrollTop)
      // if ( window.scrollY > 1000 ) {
      //   window.scrollTo(0,1000);

      // } else {
      //   var elementTarget = <HTMLElement>document.getElementById("news");
      //   if (elementTarget) {
      //     if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight - 80)) {
      //       this.auth.setVisitTime();
      //     }
      //   }
      // }

    // });

  //   window.addEventListener("scroll", (e) => {
  //     console.log(window.scrollY)
  //       if ( window.scrollY > 1000 ) {

  //         window.scrollTo(0,1000)

  //         console.log(document.body.scrollTop);
  //         return false;
  //       }
  //       return true

  //   },{ passive: false })
  }




  ngAfterViewInit() {
    if ( !this.auth.isBetaSessionSet && environment.showBetaPopup ) {
      this.auth.setBetaSession();
      this.betaPopupBtn.nativeElement.click();
    }


  }

}
