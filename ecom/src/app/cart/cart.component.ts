import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  ngOnInit(): void {
    this.Product.getproduct().subscribe(user=>{this.products=user});
    this.userservice.getuser().subscribe(x=>{this.users=x;

      let myuser = this.users.find(user=> user.id==1);
      this.cart = myuser.cart;

    });
  }

  constructor (private Product :ProductserviceService, private userservice:UserserviceService){}

products:any[] = [];
users:any[] = [];
  cart:any[]=[];
  deleteitem(cartItem:any){
    this.cart = this.cart.filter(x => x!= cartItem);
    this.userservice.updateUser(1,{'cart':this.cart}).subscribe(x=>{this.ngOnInit();
      alert("Item removed from cart");
    });
  }
}
