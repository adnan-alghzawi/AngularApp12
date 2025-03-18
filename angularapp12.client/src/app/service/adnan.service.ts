import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdnanService {

  constructor(private _url: HttpClient) { }


  postNewCategory(data: any): Observable<any> {
    return this._url.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories", data);
  }

  postNewProduct(data: any): Observable<any> {
    return this._url.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/products", data);
  }

  getCategories(): Observable<any[]> {
    return this._url.get<any[]>('https://67cd64b6dd7651e464ee3d63.mockapi.io/categories');
  }
  getProducts(): Observable<any> {
    return this._url.get("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");
  }

}
