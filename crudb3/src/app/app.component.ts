import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crudb3';
  student:any= {};
  students:any[]= [];

  add(){
    this.students.push(this.student);
    this.student={};
  }
  update(){

  }
  delete(){

    
  }

  
}
