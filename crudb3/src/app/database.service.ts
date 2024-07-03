import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
 private url="http://localhost:3000/student"
  constructor( private http:HttpClient) {
   }

  add(student:any):Observable<any>{
    return this.http.post(this.url,student);
  }
  get(student:any):Observable<any>{
    return this.http.get(this.url);
  }

  update(student:any):Observable<any>{
    return this.http.put(this.url+'/'+id,student);
  }
}
