import { Component } from '@angular/core';
import { AdnanService } from '../../service/adnan.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {

  productContainer: any;
  ngOnInit() {
    this.productId = this._active.snapshot.paramMap.get("id");
    this._url.getProductByPriductId(this.productId).subscribe((data) => {
      this.productContainer = data;
    })

  }

  constructor(private _url: AdnanService, private _active: ActivatedRoute) {

  }

  productId: any;

  updateCategory(data: any) {
    this.productId = this._active.snapshot.paramMap.get("id");

    this._url.updateProduct(this.productId, data).subscribe(() => {
      alert("update successfully")
    })
  }

}
