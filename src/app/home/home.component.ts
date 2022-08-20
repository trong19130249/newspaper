import { Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import {FeedService} from "../share/feed.service";
@Component({
  selector: 'app-home',
 templateUrl:'./home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private feedService: FeedService) {
    this.feedService.loadXML();
  }

  ngOnInit(): void {
  }


}
