import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  private url="http://localhost:3000/products";

  constructor(private http:HttpClient) { }
  update(id:any,data:any):Observable<any>{
    return this.http.get(this.url+'/'+id,data)
  }

  getproduct():Observable<any>{
    return this.http.get(this.url);
  }
}
