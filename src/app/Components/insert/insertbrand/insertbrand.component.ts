import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Brand } from 'src/app/Models/BrandViewModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from 'src/app/Models/CompanyViewModel';
import { HttpServiceWorker } from 'src/app/Services/HttpServiceWorker';
import { ResponseModel } from 'src/app/Models/ResponseModel';

@Component({
  selector: 'app-insertbrand',
  templateUrl: './insertbrand.component.html',
  styleUrls: ['./insertbrand.component.scss']
})
export class InsertbrandComponent implements OnInit {
  public brandModel: Brand;
  public companyList!: Company[];

  public responseModel : ResponseModel;

  form = new FormGroup({
    companyid: new FormControl('', Validators.min(1)),
    brandname: new FormControl('', Validators.required)
    });
  
  constructor(public formbuilder: FormBuilder, http:HttpClient, public _httpSW:HttpServiceWorker) {
    this.brandModel = new Brand;
    this.responseModel = new ResponseModel;

    _httpSW.GetCompanies().then(x => this.companyList = x as Company[]);

  }
  
  get brandname(): any {
    return this.form.get('brandname');
  }

  get companyid(): any {
    return this.form.get('companyid');
  }

  ngOnInit(): void {
    this.brandModel.companyId = 0;
  }
  
  onSubmit(){
    this._httpSW.InsertBrand(this.brandModel).then(x => {
      this.responseModel = x;

      if(this.responseModel !== null && this.responseModel.status === true)
        this.brandModel = new Brand;
        
    })
  }

}
