import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { ShowProductComponent } from './admin/show-product/show-product.component';
import { ShowCategoryComponent } from './admin/show-category/show-category.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddProductComponent,
    AddCategoryComponent,
    ShowProductComponent,
    ShowCategoryComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, FormsModule, RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
