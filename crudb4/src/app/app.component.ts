import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'crudb4';
  user:any = {};
  users:any[] =[];

  ngOnInit(): void {
      this.data.get().subscribe(u=> this.users=u);
  }

  constructor(private data:DatabaseService){}

  add(){
    this.data.add(this.user).subscribe(u=>{this.ngOnInit()
      this.user={};
    });
    }

    deleteuser(id:any){
      this.data.delete(id).subscribe(u=>{this.ngOnInit() })
      
    }
    
  
}
