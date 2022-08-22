import { Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import { Channel } from '../model/Channel';
import {FeedService} from "../share/feed.service";
import {Title} from "@angular/platform-browser";
import { Item } from '../model/Item';
import {LIST_RSS_HOME} from'../constants';
@Component({
  selector: 'app-home',
 templateUrl:'./home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    title:string="Home";
    listItems:Item[]=[];
    arrData:any[] = [];
    sizeRss =LIST_RSS_HOME.length;
  constructor(private feedService: FeedService,private titleService:Title) {
  }
    async ngOnInit(): Promise<any>{
        const data = await this.feedService.getDataHome();
        const channel = data?.rss?.channel[0];
        this.title=channel?.title;
        if(this.title){
            this.titleService.setTitle(this.title);
        }
        let listTemp: any = Array.isArray(channel.item) ? channel.item : [];

        for (const i of listTemp) {
         //  console.log(descTemp)
            const descTemp:any= await this.feedService.parseDescription("<div>"+i.description+"</div>");
          this.listItems.push(new Item(i.title[0],i.category[0], descTemp?.div._,i.image[0], i.link[0], i.updated[0]));
        }
        console.log(LIST_RSS_HOME);
        for (let index = 0; index < LIST_RSS_HOME.length; index++) {
            const element = LIST_RSS_HOME[index];
            let dataArr = await this.feedService.getData(element.link);
            this.arrData.push({heading:element.title,data:dataArr?.rss?.channel[0]?.item});
        }
        console.log(this.arrData);


    //   console.log(this.listItems);

  }
}
