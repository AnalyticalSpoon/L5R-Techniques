import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeFont',
})
export class ChangeFontPipe implements PipeTransform {
  transform(value: string): string {
    const re = /Ã+|Ć+|Ŕ+/g;

    let finalString = value.replace(re, (match) => {
      return `<span class="l5r-font">${match}</span>`;
    });

    return finalString;
  }
}
