import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trunc'
})

export class TruncPipe implements PipeTransform {


  transform(string: string, nWords: number): string {

    const wordsArr = string.split(" ");
    if ( wordsArr.length > nWords ) {
      return wordsArr.splice(0, nWords).join(" ") + '...'
    }

    return string;
  }

}
