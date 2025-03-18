import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { ShowCategoryComponent } from './admin/show-category/show-category.component';
import { ShowProductComponent } from './admin/show-product/show-product.component';

const routes: Routes = [
  {
    path: "admin", component: DashboardComponent, children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "addproduct", component: AddProductComponent },
      { path: "addcategory", component: AddCategoryComponent },
      { path: "showProduct", component: ShowProductComponent },
      { path: "showCategory", component: ShowCategoryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
