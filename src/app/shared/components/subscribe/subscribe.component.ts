import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  public email: string = '';

  constructor(
  ) { }

  ngOnInit(): void {
  }

  show() {
    document.getElementById('sn-modal-container')!.style.opacity = "1";
    document.getElementById('sn-modal-container')!.style.visibility = "visible";
    document.getElementById('sn-modal-container')!.style.pointerEvents = "auto";
  }

  hide(event: any) {
    if (event.target.id === 'sn-modal-container' || event.target.id === 'sn-modal-btn') {
      document.getElementById('sn-modal-container')!.style.opacity = "0";
      document.getElementById('sn-modal-container')!.style.visibility = "hidden";
      document.getElementById('sn-modal-container')!.style.pointerEvents = "none";
    }
  }

  notValidEmail() {
    return !(this.email === "" || this.email.match(/[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}/));
  }


}
