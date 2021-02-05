using PurpleShop.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.Entities.Dto
{
    public class DtoCategory
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public bool IsMain { get; set; }
        public int UpperCategoryId { get; set; }
        public List<DtoSubCategory> SubCategories { get; set; }
    }
    public class DtoSubCategory
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
