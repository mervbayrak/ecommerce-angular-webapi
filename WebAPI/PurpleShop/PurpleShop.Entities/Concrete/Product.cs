using PurpleShop.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.Entities.Concrete
{
    public class Product : IEntity
    {
        public Product()
        {
            ProducImages = new List<ProductImage>();
        }
        public int Id { get; set; }
        public int SubCategoryId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public SubCategory SubCategory { get; set; }
        public List<ProductImage> ProducImages { get; set; }
    }
}
