import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import { ImageService } from 'src/app/shared/services/image.service';
import { ScrollspyService } from 'src/app/shared/services/scrollspy.service';
import { UICardDataService } from 'src/app/shared/services/ui-card-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit, OnDestroy {

  @HostListener('window:load', ['$event']) onLoadEvent() { this.onLoad() };
  private scrollspySubs: Subscription | undefined;

  constructor(
    public data: DataService,
    public images: ImageService,
    private scrollSpy: ScrollspyService,
    public uiCard: UICardDataService
  ) {
    this.scrollspySubs = this.scrollSpy.windowChange.subscribe( (changedWindow) => {
      document.getElementById(`${changedWindow.id}Image`)!.style.visibility = changedWindow.active ? "visible" : "hidden";
    })
  }

  ngOnInit() {
  }

  onLoad() {
    this.scrollSpy.observeElements([
      { className: 'anchor'         , intersectRatio: 0.2 },
      { className: 'parallax-window', intersectRatio: 0 }
    ]);
  }

  ngOnDestroy(): void {
    this.scrollspySubs?.unsubscribe();
  }
}

