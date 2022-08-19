import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import * as converter from 'xml-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tiền phong'
  list: any = [];
  page:string ="home";
  constructor(private http:HttpClient) {
    this.loadXML();
  }
  //getting data function
  loadXML()
  {
    /*Read Data*/
    this.http.get('https://tienphong.vn/rss/'+this.page+".rss",
      { responseType: 'text' })
      .subscribe((data) => {
        let result1 = converter.xml2json(data, { compact: true, spaces: 2 });
        console.log(result1);

        let JSONData:any = JSON.parse(result1);
        console.log(JSONData);
        this.list = [];

      });
    /*Read Data*/
  }

}
