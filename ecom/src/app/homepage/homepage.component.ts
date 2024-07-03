import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  constructor (private Product :ProductserviceService, private userservice:UserserviceService){}
  ngOnInit(): void {
      this.Product.getproduct().subscribe(user=>{this.products=user});
      this.userservice.getuser().subscribe(x=>{this.users=x;

        let myuser = this.users.find(user=> user.id==1);
        this.cart = myuser.cart;

      });


      
  }
  title = 'ecom';

  count:any=0;
  cartitem:any={}
  products:any[]=[]
  cart:any[]=[]
  users:any[]=[]
  counter(id:any){
    let product =this.products.find(p=> p.id == id);
    this.cart.push(product);
    let newcart={'cart':this.cart}

    this.userservice.updateUser(1,newcart).subscribe(x=> {this.ngOnInit();
    alert("product added");
  });
   }

  
  

}
