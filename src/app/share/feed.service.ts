import { Item } from './../model/Item';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Channel } from '../model/Channel';
import { catchError, throwError } from 'rxjs';
import { homeApi } from '../apiClient';
import { parseString } from 'xml2js';
@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor() {}
  async getDataHome(): Promise<any> {
    const { data } = await homeApi.getDataHome();
    let result1;
    parseString(data, (err, result) => {
      result1 = result;
    });
    return result1;
  }
  parseDescription(descHtml: string) {
    let result1;
    parseString(descHtml, (err, result) => {
      result1 = result;
    });
    return result1;
  }
  async getData(url: string): Promise<any> {
    const { data } = await homeApi.getData(url);
    let result1;
    parseString(data, (err, result) => {
      result1 = result;
    });
    return result1;
  }
}
