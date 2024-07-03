import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  private url:any = 'http://localhost:3000/student'
  constructor(private http:HttpClient) { }

  addStudent(student:any):Observable<any>{
return this.http.post(this.url,student);
  }
  getStudent():Observable<any>{
    return this.http.get(this.url)

  }
}
