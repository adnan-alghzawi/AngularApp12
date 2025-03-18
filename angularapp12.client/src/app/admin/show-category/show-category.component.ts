import { Component } from '@angular/core';
import { AdnanService } from '../../service/adnan.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrl: './show-category.component.css'
})
export class ShowCategoryComponent {
  category: any=[];

  constructor(private _myser: AdnanService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._myser.getProducts().subscribe((data) => {
      this.category = data;
    });
  }

}
