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
import { ProjectMembersComponent } from './ProjectMembers/project-members/project-members.component';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { NgxTaskboardModule } from '@disane/ngx-taskboard';
import { MeetingsComponent } from './meetings/meetings.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
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
  {
    path: "project-members",
    component: ProjectMembersComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "taskboard",
    component: TaskboardComponent
  },
  {
    path: "meetings",
    component: MeetingsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartSummaryComponent,
    ProductVatPipe,
    ProductFilterPipe,
    CategoryComponent,
    CartComponent,
    ProjectMembersComponent,
    DashboardComponent,
    TaskboardComponent,
    MeetingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    ChartsModule,
    NgxTaskboardModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
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
