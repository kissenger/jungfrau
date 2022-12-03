import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()

export class AuthService {

  private MAX_AGE = 60 * 60 * 24 * 365 * 10;  // 31 days
  private COOKIE_LAST_VISIT = '__snork-new';

  constructor(
  ) {}



  public get isNewContent() {
    console.log(<string>this.lastVisitTime)
    const lastContentUpate = Date.parse(environment.lastContentUpdate);
    const lastVisit = Date.parse(<string>this.lastVisitTime);
    if (this.lastVisitTime) {
      return lastContentUpate > lastVisit;
    } else {
      return true;
    }

  }

  public setVisitTime() {
    document.cookie = `${this.COOKIE_LAST_VISIT}=${new Date()}; path=/`;
  }

  private get lastVisitTime() {
    try {
      return this.fetchCookie(this.COOKIE_LAST_VISIT);
    } catch {
      return null;
    }
  }

  private fetchCookie(cookieName: string) {
    // console.log(document.cookie?.split('; ').find(row => row.startsWith(cookieName))?.split('=')[1]);
    return <string> document.cookie?.split('; ').find(row => row.startsWith(cookieName))?.split('=')[1];
  }

  private deleteCookie(cookieName: string) {
    document.cookie = `${cookieName}=; path=/`;
  }

}
