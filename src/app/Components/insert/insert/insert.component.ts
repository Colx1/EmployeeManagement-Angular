import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  public isInsertCompany!: boolean;
  public isInsertBrand!: boolean;
  public isInsertProduct!: boolean;
  constructor() {
  }

  ToggleShowComponent(component: string) {
    
    
    switch(component)
    {
      case "Company":
        this.isInsertBrand = false;
        this.isInsertProduct = false;
        this.isInsertCompany = !this.isInsertCompany;
        break;

        case "Brand":
        this.isInsertCompany = false;
        this.isInsertProduct = false;
        this.isInsertBrand = !this.isInsertBrand;
        break;

        case "Product":
        this.isInsertCompany = false;
        this.isInsertBrand = false;
        this.isInsertProduct = !this.isInsertProduct;
        break;
    }
    
  }

  ngOnInit(): void {
  }

}
