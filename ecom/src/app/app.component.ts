import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from './productservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor (private Product :ProductserviceService){}
  ngOnInit(): void {
      this.Product.getproduct().subscribe(user=>{
        this.products=user;

      });
  }
  title = 'ecom';
  count:any=0;
  cartitem:any={}
  products:any[]=[]


  counter(id:any){
   let product =this.products.find(p=> p.id == id);
   alert(product.name)   
  }
  

  }


