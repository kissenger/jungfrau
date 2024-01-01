
import { EventEmitter, Injectable } from '@angular/core';
import { ImageDB, ImageDescriptor } from '../types';

@Injectable({
  providedIn: 'root'
})

export class DataService {

/* ===================================================
                Instagram
 Should this be in a separate service?
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
                  Partner Cards
 ===================================================*/

  get partnerCardsRandomised() {
    return this._partnerCards
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  }

  private _partnerCards: Array<ImageDescriptor> =[{
    href: 'https://www.christaylorphoto.co.uk',
    fname: 'assets/logos/christaylorphoto.webp',
    height: 100,
    width: 100,
    altText: 'Chris Taylor Photo Logo',
    caption: 'Chris has been wildly supportive of our project since we got in touch, and is doing great work promoting marine conservation in Norfolk.'
  },
  {
    href: 'https://www.alphamarinephoto.com',
    fname: 'assets/logos/alphamarine.webp',
    height: 100,
    width: 133,
    altText: 'Alphamarine Logo',
    caption: 'Alphamarine supplied our u/w camera housing, and supported our developing underwater skills with guidance and advice.'
  },
  {
    href: 'https://www.wildlifetrusts.org',
    fname: 'assets/logos/wildlifetrusts.webp',
    height: 101,
    width: 250,
    altText: 'Wildlife Trusts Logo',
    caption: 'The Wildlife Trusts are a federation of 46 regional charities doing super work promoting the prection of our wild spaces.'
  },
  {
    href: 'https://jenandsimbenson.co.uk/',
    fname: 'assets/logos/wild-running-jacket-cover.webp',
    height: 100,
    width: 82,
    altText: 'Wild Running by Sim and Jen Benson',
    caption: 'Jen and Sim write award-winning guide-books complimented with beautiful photography, and are super lovely people to boot!'
  },
  {
    href: 'https://wildthingspublishing.com',
    fname: 'assets/logos/wild-things-publishing.webp',
    height: 104,
    width: 100,
    altText: 'Wild Things Publishing Logo',
    caption: 'Wild Things Publishing publish inspiring and beautiful guide books for explorers of all kinds.'
  }
]

/* ===================================================
                  Static Images
 ===================================================*/

  get staticImages() {
    return this._staticImages;
  }

  private _staticImages: ImageDB = {
    "scorpionfish": {
      basePath: "assets/photos/static/",
      fname: "scorpionfish-photographed-while-snorkelling-in-cornwall",
      extension: "webp",
      altText: "blah blah",
      portrait: {height: 533, width: 400 },
      landscape: {height: 1350, width: 2500}
    },
    "cuddlingcrabs": {
      basePath: "assets/photos/static/",
      fname: "cuddling-crabs-snorkelling-scotland-britain",
      extension: "webp",
      altText: "Photo of two crabs having a cuddle underwater, taken in Scotland",
      portrait: {height: 533, width: 400 },
      landscape: {height: 1350, width: 2500}
    },
    "sittingchild": {
      basePath: "assets/photos/static/",
      fname: "child-in-snorkelling-gear-scotland",
      extension: "webp",
      altText: "Photo of child sitting on a rock in snorkelling gear, looking out to sea",
      portrait: {height: 533, width: 400 },
      landscape: {height: 1350, width: 2500}
    },
    "anemone": {
      basePath: "assets/photos/static/",
      fname: "snakelocks-anenome-in-photographed-in-scotland",
      extension: "webp",
      altText: "Photo of a Snakelocks Anemone taken while snorkelling in Britain",
      portrait: {height: 533, width: 400 },
      landscape: {height: 1350, width: 2500}
    },
    "youtube": {
      href: "https://www.youtube.com/channel/UCahtVWtV4eBCqFPVSfgdpbg",
      basePath: "assets/logos/",
      fname: "youtube",
      extension: "webp",
      altText: "Click to see our YouTube channel",
      height: 40,
      width: 40
    },
    "instagram": {
      href: "https://www.instagram.com/snorkelology/",
      basePath: "assets/logos/",
      fname: "instagram",
      extension: "webp",
      altText: "Click to see our instagram feed",
      height: 40,
      width: 40
    },
    "email": {
      href: "mailto:snorkelology@gmail.com",
      basePath: "assets/logos/",
      fname: "email",
      extension: "webp",
      altText: "Click to send us an email",
      height: 40,
      width: 40
    }
  }


}

