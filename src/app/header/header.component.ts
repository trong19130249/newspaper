import { Component, OnInit } from '@angular/core';
import { FeedService } from '../share/feed.service';
import { RssLinkService } from '../share/rss-link.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navItems:any;
  constructor(
    private feedService: FeedService,
    private rssLinkService: RssLinkService
  ) {}

  ngOnInit(): void {
    this.navItems =this.rssLinkService.LIST_RSS_HOME;

  }
  getRss(id:string){
    return this.rssLinkService.LIST_RSS_HOME.find(
      (x) => x.id === id
    );
  }
}
