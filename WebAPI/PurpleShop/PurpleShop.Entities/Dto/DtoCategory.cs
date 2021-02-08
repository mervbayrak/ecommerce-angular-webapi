using PurpleShop.Core.Entities;
using PurpleShop.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.Entities.Dto
{
    public class DtoCategory : IDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Photo { get; set; }
        public bool IsMain { get; set; }
        public int UpperCategoryId { get; set; }
        public List<DtoSubCategory> SubCategories { get; set; }
    }
    public class DtoSubCategory : IDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
