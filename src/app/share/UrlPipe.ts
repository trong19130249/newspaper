import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'getLastUrl' })
export class UrlPipe implements PipeTransform {
  constructor() {}

  transform(url: string) {
    return url.split('/').pop();
  }
}
