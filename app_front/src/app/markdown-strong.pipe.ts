import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'markdownStrong',
})
export class MarkdownStrongPipe implements PipeTransform {
  transform(value: string): string {
    const re = /\*{2}.+?\*{2}/g;

    let finalString = value.replace(re, (match) => {
      return `<strong>${match.slice(2, -2)}</strong>`;
    });

    return finalString;
  }
}
