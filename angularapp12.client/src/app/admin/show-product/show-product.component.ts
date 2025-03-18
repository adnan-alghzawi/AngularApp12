import { Component } from '@angular/core';
import { AdnanService } from '../../service/adnan.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrl: './show-product.component.css'
})
export class ShowProductComponent {

  products: any=[];

  constructor(private _myser: AdnanService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._myser.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
