import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { DataService } from '../shared/services/data.service';
import { ScreenSizeService } from '../shared/services/screen-size.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  @ViewChild('betaPopupBtn') betaPopupBtn!: ElementRef;

  public isLandscape: boolean = false;

  constructor(
    public data: DataService,
    public screenSize: ScreenSizeService
  ) {

  }

  ngOnInit(): void {

  }


  ngAfterViewInit() {



  }

}
