import { Pipe, PipeTransform } from '@angular/core';
import { FeedService } from './feed.service';

@Pipe({ name: 'parseHtml' })
export class ExponentialStrengthPipe implements PipeTransform {
  constructor(private feedService: FeedService) {}

  async transform(input: any) {
    const descTemp: any = await this.feedService.parseDescription(
      '<div>' + input[0] + '</div>'
    );
    return descTemp?.div._;
  }
}
