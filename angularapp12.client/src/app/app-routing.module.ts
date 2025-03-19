import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { ShowCategoryComponent } from './admin/show-category/show-category.component';
import { ShowProductComponent } from './admin/show-product/show-product.component';
import { EditCategoryComponent } from './admin/edit-category/edit-category.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: "admin", component: DashboardComponent, children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "addproduct", component: AddProductComponent },
      { path: "addcategory", component: AddCategoryComponent },
      { path: "showProduct", component: ShowProductComponent },
      { path: "showCategory", component: ShowCategoryComponent },
      { path: "editCategory/:id", component: EditCategoryComponent },
      { path: "editProduct/:id", component: EditProductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
