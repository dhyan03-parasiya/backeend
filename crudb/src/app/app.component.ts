import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  title = 'crudb';
  student:any={};
  students:any[]=[];
  ngOnInit(): void {
      this.db.getStudent().subscribe(s=> this.student)
  }
 
constructor(private db:DbService) {
  
}
add(){
  this.db.addStudent(this.student).subscribe(s=>{this.ngOnInit();
    this.student={}
    alert('Student added');
  })
}


}
