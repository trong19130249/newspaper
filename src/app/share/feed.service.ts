import { Item } from './../model/Item';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Channel} from "../model/Channel";
import { catchError, throwError } from 'rxjs';
import {homeApi} from '../apiClient';
import {parseString} from 'xml2js';
@Injectable({
  providedIn: 'root'
})
export class FeedService {
  constructor(private http:HttpClient) {
  }
  async getDataHome(): Promise<any> {
    const {data} = await homeApi.getDataHome();
    let result1;
    parseString(data, (err, result) => {
        result1 = result;
    });
    return result1;
  }
}
