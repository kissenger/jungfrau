import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()

export class AuthService {

  private MAX_AGE = 60 * 60 * 24 * 365 * 10;  // 10 years
  private COOKIE_LAST_VISIT = '__snork-new';

  constructor(
  ) {}



  public get isNewContent() {
    const lastContentUpate = Date.parse(environment.lastContentUpdate);
    const lastVisit = Date.parse(<string>this.lastVisitTime);
    if (lastVisit) {
      return lastContentUpate > lastVisit;
    } else {
      return true;
    }

  }

  public setVisitTime() {
    document.cookie = `${this.COOKIE_LAST_VISIT}=${new Date()}; max-age=${this.MAX_AGE}; path=/`;
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
