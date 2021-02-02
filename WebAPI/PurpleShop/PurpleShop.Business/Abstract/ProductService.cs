using PurpleShop.Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.Business.Abstract
{
    public interface ProductService
    {
        Product Get(int id);
        List<Product> GetList();
    }
}
