import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/Models/BrandViewModel';
import { HttpServiceWorker } from 'src/app/Services/HttpServiceWorker';

@Component({
  selector: 'app-listbrand',
  templateUrl: './listbrand.component.html',
  styleUrls: ['./listbrand.component.scss']
})
export class ListbrandComponent implements OnInit {

  public brandListModel ! : Brand[];

  constructor(public _httpSW:HttpServiceWorker) {
    this._httpSW.GetBrands(true).then(x => this.brandListModel = x as Brand[])
   }

  ngOnInit(): void {
    
  }

  OnRemoveButtonBrand(id : number) {
    this._httpSW.DeleteBrand(id).then(x=> {
      // this.responseModel = x;
      if(x.status === true)
      {
        let idx = this.brandListModel.findIndex(x=>x.id===id);
        this.brandListModel.splice(idx, 1);
      }
    })
  }

}
