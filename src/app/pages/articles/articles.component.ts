import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit  {

  public articleHTML: any;
  private articleName!: string;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {


    this.route.params.subscribe( async (urlParams) => {
      this.articleName = urlParams['id'];
    });

    // injects html from linked source into the page
    // dont forget this folder needs to be listed as an asset in angular.json
    fetch(`assets/content/${this.articleName}.html`)
      .then( res => res.text() )
      .then(data => {
      // https://stackoverflow.com/questions/57796276/angular-7-inject-static-html-file-into-middle-of-component-view
      // https://stackoverflow.com/questions/63998467/angular-multiple-templates-in-one-component-based-on-id-with-template-store
      this.articleHTML = this.sanitizer.bypassSecurityTrustHtml(data);
    })

  }

}
