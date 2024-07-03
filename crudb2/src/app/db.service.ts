import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private url:any =''

  constructor(private http:HttpClient) { }

  addStudent(Student:any):Observable<any>{
    return this.http.post(this.url,Student);
  }

  getStudent(): Observable <any>{
  return this.http.get(this.url);
  }
  
}
