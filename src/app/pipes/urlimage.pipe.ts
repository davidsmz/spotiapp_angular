import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'urlimage' })
export class UrlImagePipe implements PipeTransform {
  transform(images: any[]): string {
    if (images.length > 0) {
      return images[0].url;
    } else {
      return 'assets/img/no_image.png';
    }
  }
}
