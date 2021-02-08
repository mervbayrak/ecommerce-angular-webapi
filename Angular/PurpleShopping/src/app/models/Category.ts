export class Category {
  id: number;
  name: string;
  isMain: boolean;
  photo: string;
  upperCategoryId: number;
  upperCategories: DtoCategory[];
  className: string;
}

export class DtoCategory {
  id: number;
  name: string;
}
