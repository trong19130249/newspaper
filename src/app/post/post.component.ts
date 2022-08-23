import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FeedService } from '../share/feed.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  url: string =
    'https://tienphong.vn/khoi-to-17-doi-tuong-trong-vu-hon-chien-chong-tra-khi-bi-canh-sat-chan-bat-o-hai-phong-post1463872.tpo';
  urlSafe: any;

  constructor(public sanitizer: DomSanitizer, private route: ActivatedRoute) {}

  ngOnInit() {
    let paramUrl = this.route.snapshot.paramMap.get('id');
    // console.log(paramUrl);
    if (paramUrl) {
      this.url = 'https://tienphong.vn/' + paramUrl;
    }
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
