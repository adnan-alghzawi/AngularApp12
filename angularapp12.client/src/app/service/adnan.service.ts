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


  updateCategory(id: any, data: any): Observable<any> {//edit
    return this._url.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`, data)
  }
  getCategoryByCategoryId(id: any): Observable<any> {
    return this._url.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`);
  }



  updateProduct(id: any, data: any): Observable<any> {//edit
    return this._url.put(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`, data);
  }

  getProductByPriductId(id: any): Observable<any> {
    return this._url.get(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`);
  }
}
