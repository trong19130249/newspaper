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
   today = new Date();
   date = this.today.getDate()+'-'+(this.today.getMonth()+1)+'-'+this.today.getFullYear();
   time = this.today.getHours() + ":" + this.today.getMinutes() + ":" + this.today.getSeconds();
   dateTime = this.date+' '+this.time;
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
