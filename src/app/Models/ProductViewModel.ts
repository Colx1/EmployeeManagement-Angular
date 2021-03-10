import { Brand } from "./BrandViewModel";

export class Product {
    id! : number;
    companyId! : number;
    brandId! : number;
    
    name!: string;
    price! : number;
    amount!: number;

    brand! : Brand;
}