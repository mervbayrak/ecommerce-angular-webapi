import { Category } from "./Category";
import { ProductImage } from "./ProductImage";

export class Product{
    id:number;
    name:string;
    description:string;
    categoryId:number;
    category:Category;
    productImages:ProductImage[];
}