import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/Models/CompanyViewModel';
import { HttpServiceWorker } from 'src/app/Services/HttpServiceWorker';

@Component({
  selector: 'app-listcompany',
  templateUrl: './listcompany.component.html',
  styleUrls: ['./listcompany.component.scss']
})
export class ListcompanyComponent implements OnInit {

  public companyListModel! : Company[];

  constructor(public _httpSW:HttpServiceWorker) { 
    this._httpSW.GetCompanies().then(x => {
      this.companyListModel = x as Company[]
    });
  }

  ngOnInit(): void {

  }

  OnRemoveButtonCompany(id : number) {
    this._httpSW.DeleteCompany(id).then(x=> {
      if(x.status === true)
      {
        let idx = this.companyListModel.findIndex(x=>x.id===id);
        this.companyListModel.splice(idx, 1);
      }
    })
  }

}
