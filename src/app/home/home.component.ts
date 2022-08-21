import { Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import { Channel } from '../model/Channel';
import {FeedService} from "../share/feed.service";
import {Title} from "@angular/platform-browser";
import { Item } from '../model/Item';

@Component({
  selector: 'app-home',
 templateUrl:'./home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    title:string="Home";
    listItems:Item[]=[];
  constructor(private feedService: FeedService,private titleService:Title) {
  }
    async ngOnInit(): Promise<any>{
        const data = await this.feedService.getDataHome();
        console.log(data.rss.channel[0]);
        const channel = data?.rss?.channel[0];
        this.title=channel?.title;
        if(this.title){
            this.titleService.setTitle(this.title);
        }
        let listTemp: any = Array.isArray(channel.item) ? channel.item : [];

        for (const i of listTemp) {
            this.listItems.push(new Item(i.title[0],i.category[0], i.description[0],i.image[0], i.link[0], i.updated[0]));
        }
        console.log(this.listItems);

  }
}
