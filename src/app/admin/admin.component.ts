import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public formPoster = '';
  public formOverrideTime = ''
  public formOverrideDate = '';
  public formTitle = '';
  public formInstalink = '';
  public formContent = '';
  public formUserList = ['Gordon', 'Emma'];
  public titleWordCount = 0;
  public contentWordCount = 0;
  public MAX_TITLE_WORDS = 10;
  public MAX_CONTENT_WORDS = 60;

  constructor(
    public http: HttpService,
    public router: Router,
  ) { }

  ngOnInit(): void {

  }

  countTitleWords() {
    this.titleWordCount = this.formTitle.split(' ').length;
  }

  countContentWords() {
    this.contentWordCount = this.formContent.split(' ').length;
  }

  invalidContent() {
    return this.contentWordCount > this.MAX_CONTENT_WORDS || this.formContent.length === 0;
  }

  invalidPoster() {
    return this.formPoster.length === 0;;
  }

  invalidTitle() {
    return this.titleWordCount > this.MAX_TITLE_WORDS || this.formTitle.length === 0;;
  }

  onSave() {
    console.log('click')
    document.body.style.cursor = 'wait';
    this.http.savePost({
      postDate: this.formOverrideDate ? this.getDateString() : undefined,
      postedBy: this.formPoster,
      postContent: this.formContent,
      postTitle: this.formTitle,
      instaLink: this.formInstalink
    }).subscribe( (result) => {
      document.body.style.cursor = 'default';
      if (result.status === 200) {
        this.router.navigate(['/']);
      } else {
        console.log('Error backend');
        alert('Error from backend');
      }
    });
  }

  onCancel() {
    this.router.navigate(['/']);
  }

  onRadio() {
    const btnElement = <HTMLInputElement>document.querySelector('input[name = btnradio]:checked');
    const instaElement = <HTMLInputElement>document.getElementById("instaLink");
    const contentElement = <HTMLInputElement>document.getElementById("postContent");


    if (btnElement.value === 'insta') {
      instaElement.disabled = false;
      contentElement.disabled = true;
    } else {
      instaElement.disabled = true;
      contentElement.disabled = false;
    }


  }

    // horrible date conversion
  getDateString(): Date {
    let dateArray = this.formOverrideDate.split('-').map(n => parseInt(n));
    let timeArray = this.formOverrideTime.split(':').map(n => parseInt(n));
    return new Date(dateArray[0], dateArray[1], dateArray[2], timeArray[0], timeArray[1]);
  }

}
