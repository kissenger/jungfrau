
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from '../types';

@Injectable()

export class HttpService {

  private backendURL = `${environment.PROTOCOL}://${environment.BACKEND_URL}`;

  constructor(
    private http: HttpClient
    ) {
  }

  savePost(post: Post) {
    return this.http.post<any>(`${this.backendURL}/save-post/`, post);
  }


  getInstaPosts(qty: number) {
    return this.http.get<any>(`${this.backendURL}/get-insta-posts/${qty}`);
  }


}
