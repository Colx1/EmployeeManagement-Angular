import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Brand } from 'src/app/Models/BrandViewModel';
import { Company } from 'src/app/Models/CompanyViewModel';
import { Product } from 'src/app/Models/ProductViewModel';
import { ResponseModel } from 'src/app/Models/ResponseModel';
import { HttpServiceWorker } from 'src/app/Services/HttpServiceWorker';

@Component({
  selector: 'app-insertproduct',
  templateUrl: './insertproduct.component.html',
  styleUrls: ['./insertproduct.component.scss']
})
export class InsertproductComponent implements OnInit {
  public productModel: Product;
  public companyList!: Company[];

  public brandList! : Brand[];

  public responseModel : ResponseModel;

  form = new FormGroup({
    brandid: new FormControl('', Validators.min(1)),
    productname: new FormControl('', Validators.required),
    productamount: new FormControl('', Validators.required),
    productprice: new FormControl('', Validators.required)
    });

  constructor(public formbuilder: FormBuilder, public _httpSW:HttpServiceWorker) { 
    this.productModel = new Product;
    this.responseModel = new ResponseModel;

    _httpSW.GetCompanies().then(x => this.companyList = x as Company[]);
  }

  get brandid(): any {
    return this.form.get('brandid');
  }

  get productname(): any {
    return this.form.get('productname');
  }
  get productamount(): any {
    return this.form.get('productamount');
  }
  get productprice(): any {
    return this.form.get('productprice');
  }

  OnCompanySelect(event: any) {
    var id = parseInt(event.target.value);
    this._httpSW.GetBrandsByCompanyId(id).then(x=> this.brandList = x)
  }

  ngOnInit(): void {
    this.productModel.companyId = 0;
    this.productModel.brandId = 0;
  }

  onSubmit() {
    this._httpSW.InsertProduct(this.productModel).then(x => {
      this.responseModel = x;

      if(this.responseModel !== null && this.responseModel.status === true)
        this.productModel = new Product;

    });
  }

}
