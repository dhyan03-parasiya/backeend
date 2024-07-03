import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
      this.data.get().subscribe(u=>this.users =u)
  }
  title = 'crudb8';
  user:any={};
  users:any[]=[];

  constructor(private data:DbService){}
  add(){
    this.data.add(this.user).subscribe(u=>{this.ngOnInit()
      this.user={}
    })
  }
  deleteuser(id:any){
    this.data.delete(id).subscribe(u=>{this.ngOnInit()})

  }
}
