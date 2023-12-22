
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private _instLoadSuccess = false;
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

  get partnerCardsRandomised() {
    return this._partnerCards
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  }

  private _partnerCards =[{
    link: 'https://www.christaylorphoto.co.uk',
    logo: 'christaylorphoto',
    alt: 'Chris Taylor Photo Logo',
    caption: 'Chris has been wildly supportive of our project since we got in touch, and is doing great work promoting marine conservation in Norfolk.'
  },
  {
    link: 'https://www.alphamarinephoto.com',
    logo: 'alphamarine',
    alt: 'Alphamarine Logo',
    caption: 'Alphamarine supplied our u/w camera housing, and supported our developing underwater skills with guidance and advice.'
  },
  {
    link: 'https://www.wildlifetrusts.org',
    logo: 'wildlifetrusts',
    alt: 'Wildlife Trusts Logo',
    caption: 'The Wildlife Trusts are a federation of 46 regional charities doing super work promoting the prection of our wild spaces.'
  },
  // {
  //   link: 'https://scottishwildlifetrust.org.uk/',
  //   logo: 'swt',
  //   alt: 'Scottoch Wildlife Trust Logo',
  //   caption: 'The Scottish Wildlife Trust are also great believers in snorkelling as a fantasic way to explore our coastal waters.'
  // },
  {
    link: 'https://www.sealalliance.org',
    logo: 'seal-alliance',
    alt: 'Seal Alliance Logo',
    caption: 'The Seal Alliance are dedicated to protecting seals and their habitats - we are working together to promote responsible snorkelling.'
  },
  {
    link: 'https://jenandsimbenson.co.uk/',
    logo: 'wild-running-jacket-cover',
    alt: 'Wild Running by Sim and Jen Benson',
    caption: 'Jen and Sim write award-winning guide-books complimented with beautiful photography, and are super lovely people to boot!'
  },
  {
    link: 'https://wildthingspublishing.com',
    logo: 'wild-things-publishing',
    alt: 'Wild Things Publishing Logo',
    caption: 'Wild Things Publishing publish inspiring and beautiful guide books for explorers of all kinds.'
  }]


}

