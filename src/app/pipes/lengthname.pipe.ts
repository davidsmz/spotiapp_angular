import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'lengthname' })
export class LengthNamePipe implements PipeTransform {
  transform(value: string): string {
    if (value.length > 30) {
      return value.slice(0, 30) + '...';
    }
    return value;
  }
}
