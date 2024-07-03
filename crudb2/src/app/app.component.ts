import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'crudb2';
student:any={}
students:any[]=[] 



  ngOnInit(): void {
    this.db2.getStudent().subscribe(s=>this.student)
      
  }

  constructor(private db: DbService){
  }

  add(){
    this.db2.addStudent(this.student).subscribe(s=> {this.ngOnInit();
      this.student={};
      alert("Student added";)
    })
  }
}
