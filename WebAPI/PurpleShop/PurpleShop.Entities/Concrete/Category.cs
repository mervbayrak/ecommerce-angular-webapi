using PurpleShop.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.Entities.Concrete
{
    public class Category : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsMain { get; set; }
        public int UpperCategoryId { get; set; }
        public string Image { get; set; }
        public virtual Category UpperCategory { get; set; }
        public List<Category> UpperCategories { get; set; }
    }
    //public class SubCategory : IEntity
    //{
    //    public int Id { get; set; }
    //    public string Name { get; set; }
    //    public int CategoryId { get; set; }
    //    public virtual Category Category { get; set; }
    //}
}
