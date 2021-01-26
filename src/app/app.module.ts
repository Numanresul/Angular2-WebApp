import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';  
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CartService } from "./cart/service/cart.service";
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { ProductVatPipe } from './product/pipe/product-vat.pipe';
import { ProductFilterPipe } from './product/pipe/product-filter.pipe';
import { FormsModule } from "@angular/forms";
import { CategoryComponent } from './category/category.component';
import {Routes, RouterModule} from '@angular/router'
import { CartComponent } from './cart/cart.component';
const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "products",
    pathMatch: "full"
  },
  {
    path: "products",
    component: ProductComponent
  },
  {
    path: "products/:seoUrl",
    component: ProductComponent
  },
  {
    path: "my-cart",
    component: CartComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartSummaryComponent,
    ProductVatPipe,
    ProductFilterPipe,
    CategoryComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  providers: [
    {
      provide: 'apiUrl',
      useValue: "https://gorest.co.in/public-api"
    },CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
