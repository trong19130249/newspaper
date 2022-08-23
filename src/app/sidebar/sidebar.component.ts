import { Component, OnInit } from '@angular/core';
import { SocialWidgetService } from '../share/social-widget.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  dataSocial: any;
  constructor(private socialService: SocialWidgetService) {
    this.dataSocial = this.socialService.SOCIAL_DATA;
  }

  ngOnInit(): void {}
}
