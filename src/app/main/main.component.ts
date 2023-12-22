import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/services/auth.service';
import { DataService } from '../shared/services/data.service';

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

  }


  ngAfterViewInit() {
    if ( !this.auth.isBetaSessionSet && environment.showBetaPopup ) {
      this.auth.setBetaSession();
      this.betaPopupBtn.nativeElement.click();
    }


  }

}
