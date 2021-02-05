using PurpleShop.Entities.Concrete;
using PurpleShop.Entities.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace PurpleShop.Business.Abstract
{
    public interface ProductService
    {
        Product Get(int id);
        List<DtoProduct> GetList();
    }
}
