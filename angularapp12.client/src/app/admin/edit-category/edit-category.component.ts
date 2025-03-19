import { Component } from '@angular/core';
import { AdnanService } from '../../service/adnan.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent {

  categoryContainer: any;
  ngOnInit() {
    this.categoryId = this._active.snapshot.paramMap.get("id");
    this._url.getCategoryByCategoryId(this.categoryId).subscribe((data) => {
      this.categoryContainer = data;
    })

  }

  constructor(private _url: AdnanService, private _active: ActivatedRoute) {

  }

  categoryId: any;

  updateCategory(data: any) {
    this.categoryId = this._active.snapshot.paramMap.get("id");

    this._url.updateCategory(this.categoryId,data).subscribe(() => {
      alert("update successfully")
    })
  }

}
