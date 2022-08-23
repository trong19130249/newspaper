import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedService } from '../share/feed.service';
import { RssLinkService } from '../share/rss-link.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  arrItem: any;
  title: string | undefined;
  constructor(
    private route: ActivatedRoute,
    private rssLinkService: RssLinkService,
    private titleService: Title,
    private feedService: FeedService
  ) {}

  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.route.queryParams.subscribe((params) => {
      let pageIndex = params['orderby'];
      console.log(pageIndex);
    });
    let rssObj: any = this.rssLinkService.LIST_RSS_HOME.find(
      (x) => x.id === id
    );
    this.title = rssObj.title;
    if (this.title) {
      this.titleService.setTitle(this.title);
    }
    let dataTemp = await this.feedService.getData(rssObj?.link);
    this.arrItem = dataTemp.rss.channel[0].item;
    console.log(this.arrItem);
  }
}
