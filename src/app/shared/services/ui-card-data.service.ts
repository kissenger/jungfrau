
import { Injectable } from '@angular/core';
import { UIPost } from '../types';

@Injectable({
  providedIn: 'root'
})

export class UICardDataService {

/* ===================================================
                Instagram posts
 ===================================================*/

  private _instLoadSuccess = true;
  private _instTimestamp: string = '';

  get instaLoadSuccess() {
    return this._instLoadSuccess;
  }

  set instaLoadSuccess(value: boolean) {
    this._instLoadSuccess = value;
  }

  get instaTimestamp() {
    return this._instTimestamp;
  }

  set instaTimestamp(value:string) {
    this._instTimestamp = value;
  }

/* ===================================================
                Articles
 ===================================================*/
  get articles() {
    return this._articles;
  }

  private _articles: Array<UIPost> = [
    {
      header: 'Beginner\'s guide to snorkelling in Britain',
      timestamp: '',
      media_url: '/assets/photos/content/snorkpooling-sq.webp',
      permalink: 'snorkelling-in-britain/beginners-guide',
      category: 'Article',
      caption: "Snorkelling is defined by the oxford english dictionary as /'the sport or activity of swimming underwater with a snorkel/' iro \
            In practice, snorkelling provides an easy first step to safety explore the fascinating marine environment around us with \
      a minimum of basic kit, and in a way that is suitable for all the family. The use of a diving mask and snorkel allows you \
      to see and breathe with your face in the water, opening up a hidden world of sea dwelling critters that are usually the"
    },
    {
      header: 'The Science of Snorkelling - Part 1',
      timestamp: '',
      media_url: '/assets/photos/content/snorkpooling-sq.webp',
      permalink: 'snorkelling-in-britain/the-science-part-1',
      category: 'Article',
      caption: "Snorkelling anywhere in the world is a great way to explore the marine world with minimal kit, \
      but how does it work and what's the science behind it?   In this article we take a closer look at the physics behind some \
      interesting snorkelling phenomena "
    }
  ]
}
