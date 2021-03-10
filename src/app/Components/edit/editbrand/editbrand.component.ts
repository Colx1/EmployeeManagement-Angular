import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/Models/BrandViewModel';
import { Company } from 'src/app/Models/CompanyViewModel';
import { ResponseModel } from 'src/app/Models/ResponseModel';
import { HttpServiceWorker } from 'src/app/Services/HttpServiceWorker';

@Component({
  selector: 'app-editbrand',
  templateUrl: './editbrand.component.html',
  styleUrls: ['./editbrand.component.scss']
})
export class EditbrandComponent implements OnInit {

  public brandModel: Brand;
  public companyList!: Company[];

  public responseModel : ResponseModel;

  form = new FormGroup({
    companyid: new FormControl('', Validators.min(1)),
    brandname: new FormControl('', Validators.required)
    });
  

  constructor(public router: Router , route: ActivatedRoute, public formbuilder: FormBuilder, http:HttpClient, public _httpSW:HttpServiceWorker) {
    this.brandModel = new Brand;
    this.responseModel = new ResponseModel;
    route.params.subscribe(x => {
      _httpSW.GetBrands(true, x.id).then(x=> this.brandModel = x as Brand)
      //console.log(this.brandModel)

      _httpSW.GetCompanies().then(x => this.companyList = x as Company[]);

    })
   }

   get brandname(): any {
    return this.form.get('brandname');
  }

  get companyid(): any {
    return this.form.get('companyid');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this._httpSW.UpdateBrand(this.brandModel.id, this.brandModel).then(x=> {
      this.responseModel = x;

      if(this.responseModel !== null && this.responseModel.status === true)
        this.router.navigate(['/list']);

    })
    
  }

}
