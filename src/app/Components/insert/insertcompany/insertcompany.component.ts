import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Company } from 'src/app/Models/CompanyViewModel';
import { ResponseModel } from 'src/app/Models/ResponseModel';
import { HttpServiceWorker } from 'src/app/Services/HttpServiceWorker';

@Component({
  selector: 'app-insertcompany',
  templateUrl: './insertcompany.component.html',
  styleUrls: ['./insertcompany.component.scss'],
})
export class InsertcompanyComponent implements OnInit {
  public companyModel: Company;

  submitted: boolean = false;
  //registerForm!: FormGroup;

  form = new FormGroup({
    companyname: new FormControl('', Validators.required),
  });

  responseModel: ResponseModel;

  constructor(public formbuilder: FormBuilder, public _HttpSW: HttpServiceWorker) {
    this.companyModel = new Company();
    this.responseModel = new ResponseModel();
    // this.registerForm = this.formbuilder.group({
    //   companyname: ['', Validators.required]
    // });
  }

  get companyname(): any {
    return this.form.get('companyname');
  }

  ngOnInit(): void {}

  onSubmit() {
    this._HttpSW.InsertCompany(this.companyModel).then(x => {
      this.responseModel = x;

      if (this.responseModel !== null && this.responseModel.status === true)
        this.companyModel = new Company();
    });
  }
}
