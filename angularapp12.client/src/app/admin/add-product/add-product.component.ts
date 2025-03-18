import { Component } from '@angular/core';
import { AdnanService } from '../../service/adnan.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  categories: any[] = [];
  selectedCategoryId: number | undefined;

  constructor(private _ser: AdnanService) { }

  ngOnInit() {
    this.getCategories();

  }

  getCategories() {
    this._ser.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  postData(data: any) {
    this._ser.postNewProduct(data).subscribe(() => {
      alert("New product added");
    },
      error => {
        console.error('Error adding product', error);
      });
  }

}
