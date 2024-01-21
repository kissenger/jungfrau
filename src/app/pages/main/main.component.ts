import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { ImageService } from 'src/app/shared/services/image.service';
import { ScrollspyService } from 'src/app/shared/services/scrollspy.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  constructor(
    public data: DataService,
    public images: ImageService,
    private scrollSpy: ScrollspyService
  ) {
    this.scrollSpy.pWindowChange.subscribe( (activeWindow) => {
      document.querySelectorAll('.parallax-window').forEach( (window) => {
        document.getElementById(`${window.id}Image`)!.style.visibility = window.id === activeWindow ? "visible" : "hidden";
      })
    })
  }

  ngOnInit() { }

}

