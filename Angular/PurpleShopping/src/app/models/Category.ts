export class Category{
    id:number;
    name:string;
    isMain:boolean;
    Image:string;
    upperCategoryId:number;
    upperCategories:DtoCategory[];
}

export class DtoCategory{
    id:number;
    name:string;
}
