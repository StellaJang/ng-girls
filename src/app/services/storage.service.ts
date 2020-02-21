import { Injectable } from '@angular/core';
import { setClassMetadata } from '@angular/core/src/r3_symbols';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));

  }

  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  constructor() { }
}
