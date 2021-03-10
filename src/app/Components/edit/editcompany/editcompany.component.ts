import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/Models/CompanyViewModel';
import { ResponseModel } from 'src/app/Models/ResponseModel';
import { HttpServiceWorker } from 'src/app/Services/HttpServiceWorker';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.scss']
})
export class EditcompanyComponent implements OnInit {
  public companyModel: Company;
  
  submitted : boolean = false;
  
  form = new FormGroup({
    companyname: new FormControl('', Validators.required)
    });

    responseModel: ResponseModel;

  constructor(public router: Router , route: ActivatedRoute, public formbuilder: FormBuilder, public _HttpSW: HttpServiceWorker) {
    this.companyModel = new Company;
    this.responseModel = new ResponseModel();

    route.params.subscribe(x=> {
      _HttpSW.GetCompanies(x.id).then(z=>this.companyModel = z as Company)

    })

   }

   get companyname(): any {
    return this.form.get('companyname');
  }

  ngOnInit(): void {

  }

  onSubmit() { 
    this._HttpSW.UpdateCompany(this.companyModel.id, this.companyModel).then(x=>{
      this.responseModel = x;

      if(this.responseModel !== null && this.responseModel.status === true)
        this.router.navigate(['/list']);
    })
  }
}
