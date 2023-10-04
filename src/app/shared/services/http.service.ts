
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from '../types';

@Injectable()

export class HttpService {

  // private backendURL = `${environment.PROTOCOL}://${environment.BACKEND_URL}`;

  constructor(
    private http: HttpClient
    ) {
  }


  getInstaPosts() {
    return this.http
      .get<any>(`https://graph.instagram.com/v18.0/me/media?fields=media_url,caption,timestamp,permalink&access_token=${environment.INSTA_TESTER_TOKEN}`)
  }


}
