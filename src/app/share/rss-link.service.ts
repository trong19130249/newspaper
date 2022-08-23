import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RssLinkService {
  LIST_RSS_HOME = [
    { id: 'xa-hoi', title: 'Xã hội', link: 'xa-hoi-2.rss' },
    { id: 'kinh-te', title: 'Kinh tế', link: 'kinh-te-3.rss' },
    { id: 'phap-luat', title: 'Pháp luật', link: 'phap-luat-12.rss' },
    { id: 'the-gioi', title: 'Thế giới', link: 'the-gioi-5.rss' },
    { id: 'suc-khoe', title: 'Sức khỏe', link: 'suc-khoe-210.rss' },
    { id: 'giai-tri', title: 'Giải trí', link: 'giai-tri-36.rss' },
    { id: 'the-thao', title: 'Thể thao', link: 'the-thao-11.rss' },
    { id: 'tai-nang-tre', title: 'Tài năng trẻ', link: 'tai-nang-tre-295.rss' },
    { id: 'gioi-tre', title: 'Giới trẻ', link: 'gioi-tre-4.rss' },
    { id: 'phong-su', title: 'Phong sự', link: 'xa-hoi-phong-su-13.rss' },
    { id: 'sao', title: 'Sao', link: 'sao-35.rss' },
    { id: 'hau-truong-sao', title: 'Hậu trường sao', link: 'xa-hoi-2.rss' },
    { id: 'video', title: 'Video', link: 'xa-hoi-2.rss' },
    { id: 'dep', title: 'Đẹp', link: 'xa-hoi-2.rss' },
  ];
  constructor() {}
}
