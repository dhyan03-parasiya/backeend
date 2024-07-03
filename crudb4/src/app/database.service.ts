import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private url= "http://localhost:3000/name"

  constructor(private http:HttpClient) { }

  add(user:any):Observable <any>{
   return this.http.post(this.url,user);
  }
  

  get():Observable<any>{
    return this.http.get(this.url);
  }
  delete(id:any):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }
}
