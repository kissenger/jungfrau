import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { NavService } from 'src/app/shared/services/nav.service';
import { PartnerCards } from 'src/app/shared/types';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  public partnerCards: PartnerCards | undefined = undefined;

  constructor(
    public nav: NavService,
    public data: DataService
  ) { }

  ngOnInit(): void {
    this.partnerCards = this.data.partnerCardsRandomised;
    console.log(this.partnerCards);
  }

}
