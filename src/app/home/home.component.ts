import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Channel } from '../model/Channel';
import { FeedService } from '../share/feed.service';
import { Title } from '@angular/platform-browser';
import { Item } from '../model/Item';
import { RssLinkService } from '../share/rss-link.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string = 'Home';
  listItems: Item[] = [];
  arrData: any[] = [];
  sizeRss = this.rssLinkService.LIST_RSS_HOME.length;
  showLoad = true;
  merged: any = [];
  sizeShow: number = 8;

  constructor(
    private feedService: FeedService,
    private titleService: Title,
    private rssLinkService: RssLinkService
  ) {}
  async ngOnInit(): Promise<any> {
    const data = await this.feedService.getDataHome();
    const channel = data?.rss?.channel[0];
    this.title = channel?.title;
    if (this.title) {
      this.titleService.setTitle(this.title);
    }
    let listTemp: any = Array.isArray(channel.item) ? channel.item : [];
    // console.log(listTemp)
    for (const i of listTemp) {
      const descTemp: any = await this.feedService.parseDescription(
        '<div>' + i.description + '</div>'
      );
      // console.log(descTemp)
      // console.log(i.title[0]+i.category[0]+i.image[0]+i.link[0]+i.updated[0]);
      this.listItems.push(
        new Item(
          i.title[0],
          i.category[0],
          descTemp,
          i.image[0],
          i.link[0],
          i.updated[0]
        )
      );
    }
    let listRss = this.rssLinkService.LIST_RSS_HOME;
    for (let index = 0; index < listRss.length; index++) {
      const element = listRss[index];
      let dataArr = await this.feedService.getData(element.link);
      this.arrData.push({
        heading: element.title,
        id: element.id,
        data: dataArr?.rss?.channel[0]?.item,
      });
      this.merged = [
        ...this.merged,
        ...dataArr?.rss?.channel[0]?.item.slice(0, 4),
      ];
    }
    // console.log(this.merged);
    // console.log(this.arrData);
    this.showLoad = false;
  }
  showMore() {
    let newLength = this.sizeShow + 8;
    this.sizeShow =
      newLength <= this.merged.length ? newLength : this.merged.length;
  }
}
