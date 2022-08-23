import { Component, OnInit } from '@angular/core';
import {FeedService} from "../share/feed.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  coppyRight :any;
  arrData: any[] = [];
  constructor(private feedService : FeedService) { }

   async  ngOnInit(): Promise<any> {
     const data = await this.feedService.getDataHome();

     const channel = data?.rss?.channel[0];
     this.arrData = channel.item;
     this.coppyRight = channel.copyright[0];
    console.log(this.arrData)
  }

}
