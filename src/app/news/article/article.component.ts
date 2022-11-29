import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public articleHTML: any;
  private articleName!: string;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( async (urlParams) => {
      console.log(urlParams);
      this.articleName = urlParams['id'];
    });

    fetch(`./app/news/article/content/${this.articleName}.html`)
      .then( res => res.text() )
      .then(data => {
      // https://stackoverflow.com/questions/57796276/angular-7-inject-static-html-file-into-middle-of-component-view
      // https://stackoverflow.com/questions/63998467/angular-multiple-templates-in-one-component-based-on-id-with-template-store
      this.articleHTML = this.sanitizer.bypassSecurityTrustHtml(data);;
    })

  }

}
