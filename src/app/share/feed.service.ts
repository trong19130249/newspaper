import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as converter from 'xml-js';
import {Channel} from "../model/Channel";

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  list: any = [];
  chanel: Channel | undefined;
  constructor(private http:HttpClient) {
  }
  //getting data function
  loadXML()
  {
    /*Read Data*/
    this.http.get('https://tienphong.vn/rss/home.rss',
      { responseType: 'text' })
      .subscribe((data) => {
        let result1 = converter.xml2json(data, { compact: true, spaces: 2 });
        console.log(result1);

        let JSONData:any = JSON.parse(result1);
        console.log(JSONData);
        this.list = [];
        // if(Array.isArray(JSONData.students.student))
        // {
        //   for(let i of JSONData.students.student)
        //   {
        //     console.log(i);
        //     let tempData:any={
        //       email:i.email._text,
        //       mobile:i.mobile._text,
        //       name:i.name._text,
        //     }
        //     this.list.push(tempData);
        //   }
        // }
        let jsonChanel = JSONData.rss.channel;
        this.chanel = new Channel(jsonChanel.copyright,jsonChanel.description,jsonChanel.image.url,jsonChanel.link);
        console.log(this.chanel)
        return this.chanel;
      });
    /*Read Data*/
  }}
