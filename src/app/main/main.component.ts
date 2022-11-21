import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { environment } from 'src/environments/environment';
// import {bootstrap } from '../../../node_modules/';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  @ViewChild('betaPopupBtn') betaPopupBtn!: ElementRef;

  public showBetaPopup = environment.showBetaPopup;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    if ( this.showBetaPopup ) {
      console.log('fire');
      this.betaPopupBtn.nativeElement.click();
    }
  }

}
