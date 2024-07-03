import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
     private url="http://localhost:3000/user"

  constructor(private http:HttpClient) { }

  adduser(user:any):Observable<any>{
    return this.http.post(this.url,user);
  }
  getuser():Observable<any>{
    return this.http.get(this.url);
  }
  
  delete(id:any):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }
}
