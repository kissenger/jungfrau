import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()

export class AuthService {

  private MAX_AGE = 60 * 60 * 24 * 365 * 10;  // 10 years
  private COOKIE_LAST_VISIT = '__snork-new';
  private COOKIE_BETA = '__snork-beta';
  private _lastInstaPost: number | undefined = undefined;

  constructor(
  ) {}


  set lastInstaPost(value: string) {
    this._lastInstaPost = Date.parse(value);
  }

  // New content cookie to detect if tehre is new content

  public get isNewContent() {
    // no last insta date so return false, as there is no new content
    if (!this._lastInstaPost) {
      return false;
    }
    // console.log(this._lastInstaPost)

    // no last visit time so assume this is first visit, so providing there is an instapost, its new content
    if (!this.lastVisitTime) {
      return true;
    }

    return this._lastInstaPost > this.lastVisitTime;

  }

  public setVisitTime() {
    document.cookie = `${this.COOKIE_LAST_VISIT}=${new Date()}; max-age=${this.MAX_AGE}; path=/`;
  }

  private get lastVisitTime() {
    try {
      return Date.parse(<string>this.fetchCookie(this.COOKIE_LAST_VISIT));
    } catch {
      return null;
    }
  }


  // Beta session cookie to allow popup to appear only once per session

  public get isBetaSessionSet() {
    return !!this.fetchCookie(this.COOKIE_BETA);
  }

  public setBetaSession() {
    document.cookie = `${this.COOKIE_BETA}=true; path=/`;
  }


  private fetchCookie(cookieName: string) {
    return <string> document.cookie?.split('; ').find(row => row.startsWith(cookieName))?.split('=')[1];
  }

  // private deleteCookie(cookieName: string) {
  //   document.cookie = `${cookieName}=; path=/`;
  // }

}
