import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/ProductViewModel';
import { ResponseModel } from 'src/app/Models/ResponseModel';
import { HttpServiceWorker } from 'src/app/Services/HttpServiceWorker';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.scss']
})
export class ListproductComponent implements OnInit {

  public productListModel! : Product[];
  public responseModel : ResponseModel;

  constructor(public _httpSW:HttpServiceWorker) { 
    this.responseModel = new ResponseModel;

    this._httpSW.GetProducts(true).then(x => {
      this.productListModel = x as Product[]
    });
  }

  ngOnInit(): void {
  }

  OnRemoveButton(id: number) {
    
    // alert(id);
    this._httpSW.DeleteProduct(id).then(x=> {
      // this.responseModel = x;
      if(x.status === true)
      {
        let idx = this.productListModel.findIndex(x=>x.id===id);
        this.productListModel.splice(idx, 1);
      }
    })

  }

}
