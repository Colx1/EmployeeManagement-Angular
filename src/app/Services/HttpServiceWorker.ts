import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Brand } from "../Models/BrandViewModel";
import { Company } from "../Models/CompanyViewModel";
import { Product } from "../Models/ProductViewModel";
import { ResponseModel } from "../Models/ResponseModel";

@Injectable({providedIn: 'root'})

export class HttpServiceWorker {
    public UrlBaseTemp : string

    constructor(public http:HttpClient)
    {
        this.UrlBaseTemp = 'https://localhost:5001/';
    }

    public async GetCompanies(id?:number)
    {
        if(id !== undefined)
        {
            let result = await this.http.get<Company>(this.UrlBaseTemp + `api/product/GetCompanies/${id}`).toPromise();
            return result;
        }
        else
        {
            let result = await this.http.get<Company[]>(this.UrlBaseTemp + 'api/product/GetCompanies').toPromise();
            return result;
        }
        
    }

    public async GetBrandsByCompanyId(companyId: number) {
        let result = await this.http.get<Brand[]>(this.UrlBaseTemp + `api/product/GetBrandsByCompanyId/${companyId}` ).toPromise();
        return result;
    }

    public async GetBrands(loadfulldata:boolean = false, id?:number) {
        var urlTempData = this.UrlBaseTemp + 'api/product/GetBrands';
        if(loadfulldata)
            urlTempData += '/true';
        else
            urlTempData += '/false';

        if(id !== undefined)
        {
            urlTempData += `/${id}`;
            let result = await this.http.get<Brand>(urlTempData).toPromise();
            return result;
        }
        else
        {
            let result = await this.http.get<Brand[]>(urlTempData).toPromise();
            return result;
        }
    }

    public async UpdateBrand(id: number, brandModel: Brand) {
        let result = await this.http.put<ResponseModel>(this.UrlBaseTemp + `api/product/UpdateBrand/${id}`, brandModel).toPromise();
        return result;
    }

    public async GetProducts(loadfulldata:boolean = false, id?:number)
    {
        var urlTempData = this.UrlBaseTemp + 'api/product/GetProducts';
        if(loadfulldata)
            urlTempData += '/true';
        else
            urlTempData += '/false';

        if(id !== undefined)
        {
            urlTempData += `/${id}`;
            let result = await this.http.get<Product>(urlTempData).toPromise();
            return result;
        }
        
        else
        {
            let result = await this.http.get<Product[]>(urlTempData).toPromise();
            return result;
        }
    }

    public async InsertCompany(companyModel: Company) {
        let result = await this.http.post<ResponseModel>(this.UrlBaseTemp + 'api/product/InsertCompany', companyModel).toPromise();
        return result;
    }

    public async UpdateCompany(id:number, companyModel: Company) {
        let result = await this.http.put<ResponseModel>(this.UrlBaseTemp + `api/product/UpdateCompany/${id}`, companyModel).toPromise();
        return result;
    }

    public async InsertBrand(brandModel: Brand) {
        let result = await this.http.post<ResponseModel>(this.UrlBaseTemp + 'api/product/InsertBrand', brandModel).toPromise();
        return result;
    }

    public async InsertProduct(productModel: Product) {
        let result = await this.http.post<ResponseModel>(this.UrlBaseTemp + 'api/product/InsertProduct', productModel).toPromise();
        return result;
    }

    public async UpdateProduct(id:number, productModel: Product) {
        let result = await this.http.put<ResponseModel>(this.UrlBaseTemp + `api/product/UpdateProduct/${id}`, productModel).toPromise();
        return result;
    }

    public async DeleteProduct(id: number) {
        let result = await this.http.delete<ResponseModel>(this.UrlBaseTemp + `api/product/DeleteProduct/${id}`).toPromise();
        return result;
    }

    public async DeleteBrand(id : number) {
        let result = await this.http.delete<ResponseModel>(this.UrlBaseTemp + `api/product/DeleteBrand/${id}`).toPromise();
        return result;
    }

    public async DeleteCompany(id : number) {
        let result = await this.http.delete<ResponseModel>(this.UrlBaseTemp + `api/product/DeleteCompany/${id}`).toPromise();
        return result;
    }
}