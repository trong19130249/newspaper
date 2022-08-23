import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RssLinkService {
  // xa hoi ,kinh te, phap luat, the gioi, suc khoe, giai tri,the thao
  LIST_RSS_HOME = [
    {id: 'xa-hoi', title: 'Xã hội', link: 'rss/xa-hoi-2.rss'},
    {id: 'kinh-te', title: 'Kinh tế', link: 'rss/kinh-te-3.rss'},
    {id: 'phap-luat', title: 'Pháp luật', link: 'rss/phap-luat-12.rss'},
    {id: 'the-gioi', title: 'Thế giới', link: 'rss/the-gioi-5.rss'},
    {id: 'suc-khoe', title: 'Sức khỏe', link: 'rss/suc-khoe-210.rss'},
    {
      id: 'giai-tri', title: 'Giải trí', link: 'rss/giai-tri-36.rss', child: [
         {id: 'sao', title: 'Sao', link: 'sao-35.rss'}
        , {id: 'hau-truong-sao', title: 'Hậu trường sao', link: 'rss/xa-hoi-2.rss'}]
    },
    {id: 'the-thao', title: 'Thể thao', link: 'rss/the-thao-11.rss'},
    {
      id: 'gioi-tre', title: 'Giới trẻ', link: 'rss/gioi-tre-4.rss'
      , child: [
        {id: 'cong-dong-mang', title: 'Cộng đồng mạng', link: 'rss/tai-nang-tre-295.rss'}
        , {id: 'tai-nang-tre', title: 'Tài năng trẻ', link: 'sao-35.rss'}]
    },
    {id: 'video', title: 'Video', link: 'rss/xa-hoi-2.rss'},
    {id: 'dep', title: 'Đẹp', link: 'rss/xa-hoi-2.rss'},
  ];

  constructor() {
  }
}
