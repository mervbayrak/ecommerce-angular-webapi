using PurpleShop.Core.DataAccess;
using PurpleShop.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.DataAccess.Abstract
{
    public interface IProductDal : IRepository<Product>
    {
    }
    public interface IProductPhotoDal : IRepository<ProductImage>
    {
    }
}
