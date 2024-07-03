import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: '',component:HomepageComponent},
  {path:'cart',component:CartComponent},
  {path:'navbar',component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
