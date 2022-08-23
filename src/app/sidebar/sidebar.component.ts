import { Component, OnInit } from '@angular/core';
import { SocialWidgetService } from '../share/social-widget.service';
import {RssLinkService} from "../share/rss-link.service";
import {FeedService} from "../share/feed.service";
import {Item} from "../model/Item";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  navItems:any;
  dataSocial: any;
  listItems: Item[] = [];
  constructor(private socialService: SocialWidgetService,  private rssLinkService: RssLinkService, private feedService: FeedService) {
    this.dataSocial = this.socialService.SOCIAL_DATA;

  }

  async ngOnInit(): Promise<any> {
    this.navItems =this.rssLinkService.LIST_RSS_HOME;
    const data = await this.feedService.getDataHome();
    const channel = data?.rss?.channel[0];
    this.listItems = channel.item;
  }
}
