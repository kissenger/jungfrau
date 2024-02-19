import { Component, HostListener, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from 'src/app/shared/services/image.service';
import { NavService } from 'src/app/shared/services/nav.service';
import { ScrollspyService } from 'src/app/shared/services/scrollspy.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnDestroy {

  @HostListener('window:load', ['$event']) onLoadEvent() { this.onLoad() };

  private scrollspySubs: Subscription;
  private navSubs: Subscription;

  constructor(
    public images: ImageService,
    private scrollSpy: ScrollspyService,
    private navigate: NavService
  ) {

    this.scrollspySubs = this.scrollSpy.windowChange.subscribe( (changedWindow) => {
      try {
        document.getElementById(`${changedWindow.id}Image`)!.style.visibility = changedWindow.active ? "visible" : "hidden";
      } catch {}
    })

    this.navSubs = this.navigate.end.subscribe( () => {
      try {
        document.getElementById('windowOneImage')!.style.visibility = "hidden";
        document.getElementById(`windowTwoImage`)!.style.visibility = "hidden";
        document.getElementById(`windowThreeImage`)!.style.visibility = "hidden";
        document.getElementById(`windowFourImage`)!.style.visibility = "hidden";
      } catch {}
    })

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

