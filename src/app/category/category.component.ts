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
  sizeShow: number = 8;
  constructor(
    private route: ActivatedRoute,
    private rssLinkService: RssLinkService,
    private titleService: Title,
    private feedService: FeedService
  ) {}

  async ngOnInit() {
    let id: any;
    this.route.paramMap.subscribe(async (params) => {
      id = params.get('id');
      //   let rssObj: any = this.rssLinkService.LIST_RSS_HOME.find(
      //     (x) => x.id === id
      //   );
      let rssObj: any;
      this.rssLinkService.LIST_RSS_HOME.forEach((element) => {
        if (element.id === id) {
          rssObj = element;
        }
        if (element.child !== undefined) {
          element.child.forEach((child) => {
            if (child.id === id) {
              rssObj = child;
            }
          });
        }
      });
      this.title = rssObj.title;
      if (this.title) {
        this.titleService.setTitle(this.title);
      }
      let dataTemp = await this.feedService.getData(rssObj?.link);
      this.arrItem = dataTemp.rss.channel[0].item;
      //   console.log(this.arrItem);
    });

    // this.route.queryParams.subscribe((params) => {
    //   let pageIndex = params['orderby'];
    // });
  }
  showMore() {
    let newLength = this.sizeShow + 8;
    this.sizeShow =
      newLength <= this.arrItem.length ? newLength : this.arrItem.length;
  }
}
