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


    window.onbeforeunload = () => {
      // this.auth.setVisitTime();
    }
  }

  ngAfterViewInit() {
    if ( environment.showBetaPopup ) {
      this.betaPopupBtn.nativeElement.click();
    }
  }

}
