import { Component } from '@angular/core';
import { AdnanService } from '../../service/adnan.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  constructor(private _ser: AdnanService) { }

  ngOnInit() {

  }

  postData(data: any) {
    this._ser.postNewCategory(data).subscribe(() => {
      alert("add new Category");
    });
  }

}
