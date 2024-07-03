import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'crudb7';
  user:any ={};
  users:any[]=[];

  ngOnInit():void {
      this.data.getuser().subscribe(u=>this.users = u );
  }


  constructor(private data:DatabaseService) {}

  add(){
    this.data.adduser(this.user).subscribe(u=>{ this.ngOnInit()
      this.user={};
  
    });
  }
  deleteuser(id:any){
    this.data.delete(id).subscribe(u=>{this.ngOnInit()})
  }
}
