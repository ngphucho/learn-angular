import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortCut',
})
export class ShortCutPipe implements PipeTransform {
  transform(value: string, limt: number): string {
    if (value.length > limt) {
      return value.substr(0, limt) + '...';
    }
    return value;
  }
}
