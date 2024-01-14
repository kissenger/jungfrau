import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ImageService } from 'src/app/shared/services/image.service';
import { NavService } from '../../services/nav.service';
// import { MailingListComponent } from '../shared/components/mailing-list.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public fullYear?: number;


  // @ViewChild('bottoms') bottoms!: ElementRef;



  constructor(
    public images: ImageService,
    public navigate: NavService
  ) { }

  ngOnInit(): void {
    this.fullYear = new Date().getFullYear();
  }



}
