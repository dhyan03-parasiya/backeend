import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
 private url="http://localhost:3000/user"
  constructor( private http:HttpClient) { }


  updateUser(id:any,data:any):Observable<any>{
    return this.http.put(this.url+'/'+id,data)
  }

  getuser():Observable<any>{
    return this.http.get(this.url);
  }
}
